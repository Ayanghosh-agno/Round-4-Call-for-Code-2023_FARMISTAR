import { LightningElement, track, api } from 'lwc';
import submit_order from '@salesforce/apex/Farmister_Operation_Ctrl.submit_order';
import submit_bridge from '@salesforce/apex/Farmister_Operation_Ctrl.submit_bridge';
import trackingid from '@salesforce/apex/Farmister_Operation_Ctrl.trackingid';

export default class Commu_shipping_form extends LightningElement {
    @api cartDetails = [];
    @track fullName = '';
    @track address = '';
    @track city = '';
    @track state = '';
    @track postalCode = '';
    @track phone = '';
    @track email = '';
    @track isSpinner = false;
    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this[fieldName] = fieldValue;
    }
    @api
    handleSub() {
        this.isSpinner = true
        var total = this.cartDetails.reduce((total, item) => total + item.product.price * item.quantity, 0)
        var shipping_details = [{ 'Name': this.fullName, 'Address': this.address, 'City': this.city, 'State': this.state, 'Pin': this.postalCode, 'Email': this.email, 'Phone': this.phone, 'Total_Amount': total }]
        console.log('Shipping details submitted:');
        console.log(shipping_details);
        console.log(JSON.parse(JSON.stringify(this.cartDetails)))
        var cart = this.cartDetails.map(product => ({
            id: product.product.id,
            name: product.product.name,
            description: product.product.description,
            price: product.product.price,
            fertilizer: product.product.fertilizer,
            seeds: product.product.seeds,
            pesticides: product.product.pesticides,
            equipments: product.product.equipments,
            imageUrl: product.product.imageUrl,
            quantityInCart: product.product.quantityInCart
        }));
        console.log(JSON.parse(JSON.stringify(cart)));

        submit_order({ cart: cart, ship: shipping_details }).then(async res => {
            // var oderId = 'FARMISTER-97680';
            await submit_bridge({ orderid: res, cart: cart }).then(async rs => {
                await trackingid({ orderid: res }).then(track => {
                    var trackid = track;
                    this.isSpinner = false
                    this.dispatchEvent(new CustomEvent('success', {
                        detail: [{ 'orderid': trackid }]
                    }));
                })
            })

        }).catch(err => {
            this.isSpinner = false

            console.log(err)
        })


    }
}