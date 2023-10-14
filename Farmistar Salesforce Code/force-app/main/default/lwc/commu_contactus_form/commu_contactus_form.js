import { LightningElement, track } from 'lwc';
import create_case from '@salesforce/apex/Farmister_Operation_Ctrl.create_case';
import get_case from '@salesforce/apex/Farmister_Operation_Ctrl.get_case';
export default class commu_contactus_form extends LightningElement {
    // Define reactive properties to store form input values
    @track name = '';
    @track email = '';
    @track message = '';
    @track orderid = '';
    @track modalClass = false;
    @track casetrackingId = ''
    @track isSpinner=false;
    // Event handler for input changes
    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        // Use object destructuring to update the corresponding field based on input
        this[fieldName] = fieldValue;
    }
    closeCartModal() {
        this.modalClass = false
    }

    // Event handler for form submission
    handlesubmitchng() {
        this.isSpinner=true;
        var casedetails = [{ 'name': this.name, 'email': this.email, 'message': this.message, 'order': this.orderid }]
        create_case({ casedetails: casedetails }).then((result) => {
            get_case({ caseid: result }).then(res => {
                this.isSpinner=false;
                this.modalClass = true;
                this.casetrackingId = res;
                this.template.querySelector('input[name="name"]').value = '';
                this.template.querySelector('input[name="email"]').value = '';
                this.template.querySelector('input[name="orderid"]').value = '';
                this.template.querySelector('textarea[name="message"]').value = '';
            })
        }).catch((err) => {
            this.isSpinner=false;
            console.log(err)
        });

    }

}