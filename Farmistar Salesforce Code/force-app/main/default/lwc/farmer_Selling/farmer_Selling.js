import { LightningElement, track } from 'lwc';
import submit_qa from '@salesforce/apex/Farmister_Operation_Ctrl.submit_qa';
import trackingid from '@salesforce/apex/Farmister_Operation_Ctrl.trackingid';


export default class Farmer_Selling extends LightningElement {
    @track orderTrackingId;
    @track modalClass = false;
    @track isSpinner = false;
    async submitCrop(event) {
        event.preventDefault();
        this.isSpinner = true
        const name = this.template.querySelector('input[name="name"]').value;
        const cropType = this.template.querySelector('input[name="cropType"]').value;
        const quantity = this.template.querySelector('input[name="quantity"]').value;
        const price = this.template.querySelector('input[name="price"]').value;
        const contact = this.template.querySelector('textarea[name="contact"]').value;
        const phone = this.template.querySelector('input[name="phone"]').value;
        const email = this.template.querySelector('input[name="email"]').value;
        var qa_data = [{ 'quantity': quantity, 'price': price, 'phone': phone, 'name': name, 'email': email, 'address': contact, 'crop': cropType }]
        await submit_qa({ qa_request: qa_data }).then(async result => {
            await trackingid({ orderid: result }).then(res => {
                this.isSpinner = true
                this.openCartModal();
                this.orderTrackingId = res;
                this.resetForm();
            })

        })

    }
    openCartModal() {
        this.modalClass = true;
    }
    closeCartModal() {
        this.modalClass = false;
    }
    resetForm() {
        // Reset form fields
        this.template.querySelector('input[name="name"]').value = '';
        this.template.querySelector('input[name="cropType"]').value = '';
        this.template.querySelector('input[name="quantity"]').value = '';
        this.template.querySelector('input[name="price"]').value = '';
        this.template.querySelector('input[name="phone"]').value = '';
        this.template.querySelector('input[name="email"]').value = '';
        this.template.querySelector('textarea[name="contact"]').value = '';
    }
}