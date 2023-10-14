import { LightningElement, track, wire, api } from 'lwc';
import Farmister from '@salesforce/resourceUrl/Farmister';
import getProducts from '@salesforce/apex/Farmister_Operation_Ctrl.getProducts';
export default class Shoping_Cart extends LightningElement {
    @track modalClass = false; // Initialize modal class as hidden
    @track page1 = true;
    @track page2 = false;
    @track page3 = false;

    @track orderTrackingId = '';
    fertiliser_ = Farmister + '/Farmister_Images/fertiliser.jpeg'
    seeds_ = Farmister + '/Farmister_Images/seed.png'
    pestiside_ = Farmister + '/Farmister_Images/pesticide.jpg'
    equipments_ = Farmister + '/Farmister_Images/equipments.png'

    @track products = [];

    @wire(getProducts)
    wiredProducts({ error, data }) {
        if (data) {
            console.log(data)
            this.products = data.map(product => ({
                id: product.Id,
                name: product.Name,
                description: product.Description__c,
                price: product.Price__c,
                fertilizer: product.Category__c == 'Fertiliser' ? true : false,
                seeds: product.Category__c == 'Seed' ? true : false,
                pesticides: product.Category__c == 'Pesticide' ? true : false,
                equipments: product.Category__c == 'Equipment' ? true : false,
                imageUrl: Farmister+String(product.ImageUrl__c),
                quantityInCart: 0
            }));

        } else if (error) {
            console.error('Error loading products:', error);
        }
    }

    get cartitem_s() {
        return this.cartItems.length > 0 ? false : true
    }
    get totalItemsInCart() {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    @track cartItems = [];

    // Preprocess products to include an "inCart" property
    get processedProducts() {
        return this.products.map(product => ({
            ...product,
            inCart: this.isProductInCart(product.id)
        }));
    }
    get totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    isProductInCart(productId) {
        return this.cartItems.some(item => item.product.id === productId);
    }

    handleAddToCart(event) {
        const productId = event.target.dataset.id;
        const existingCartItem = this.cartItems.find(item => item.product.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity += 1;
            // Update the quantity in the product data
            const productToUpdate = this.products.find(p => p.id === productId);
            productToUpdate.quantityInCart += 1;
        } else {
            this.cartItems.push({ product: this.products.find(p => p.id === productId), quantity: 1 });
            // Update the quantity in the product data
            const productToUpdate = this.products.find(p => p.id === productId);
            productToUpdate.quantityInCart = 1;
        }
    }
    openCartModal() {
        console.log(JSON.parse(JSON.stringify(this.cartItems)))
        // Show the modal when the cart button is clicked
        this.modalClass = true;
    }
    checkout() {
        this.page1 = false;
        this.page2 = true;
        this.page3 = false;
    }
    submitDetails() {
        const shippingform = this.template.querySelector('c-commu_shipping_form');
        if (shippingform) {
            shippingform.handleSub();
        }
    }
    closeCartModal() {
        if (this.page3) {
            this.cartItems = []
            this.products.forEach((product) => {
                product.quantityInCart = 0;
            });
            this.modalClass = false;
            this.page1 = true;
            this.page2 = false;
            this.page3 = false;

        } else {
            this.modalClass = false;
            this.page1 = true;
            this.page2 = false;
            this.page3 = false;
        }
        // Hide the modal when the close button is clicked

    }
    success(event) {
        this.page3 = true;
        this.page1 = false;
        this.page2 = false;
        this.orderTrackingId = event.detail[0].orderid

    }
    resetCart() {

    }
    handleRemoveFromCart(event) {
        const productId = event.target.dataset.id;
        const existingCartItem = this.cartItems.find(item => item.product.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity -= 1;
            if (existingCartItem.quantity === 0) {
                this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
            }
            // Update the quantity in the product data
            const productToUpdate = this.products.find(p => p.id === productId);
            productToUpdate.quantityInCart -= 1;
        }
    }
}