import { track,api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getQAorder from '@salesforce/apex/Farmister_Operation_Ctrl.getQAorder';
import update_status from '@salesforce/apex/Farmister_Operation_Ctrl.update_status';
import otpmail from '@salesforce/apex/Send_sms_mail.otpmail';

import Farmister from '@salesforce/resourceUrl/Farmister';

export default class Commu_croplistings extends LightningElement {

    seeds_ = Farmister + '/Farmister_Images/seed.png'

    @track produceItems = []
    @track showOTPModal = false;
    @track selectedItemId = '';
    @track otp = '';
    @track createdotp = '';
    @track showToaster = false;
    @track message = 'success';

    @api
    showToast(message) {
        this.message = message;
        this.showToaster = true;

        // Automatically hide the toaster message after a few seconds (e.g., 5 seconds)
        setTimeout(() => {
            this.hideToast();
        }, 5000);
    }

    hideToast() {
        this.showToaster = false;
        this.message = '';
    }
  
    connectedCallback() {
        getQAorder().then(res => {
            this.produceItems = res.map(product => ({
                Id: product.Id,
                Name: product.Crop_Type__c,
                Description: product.Description__c,
                Price: product.Price__c,
                Quantity: product.Quantity__c,
                ContactName: product.Name__c,
                ContactEmail: product.Email_Id__c,
                ContactPhone: product.Phone_No__c,
                imageUrl: Farmister + String(product.ImageUrl__c),
                showContactInfo: false
            }));
        })
    }


    handleDelete(event) {
        // Get the item ID from the data-id attribute of the clicked button
        this.selectedItemId = event.target.dataset.id;
        const itemIndex = this.produceItems.findIndex(item => item.Id === this.selectedItemId);
        this.createdotp = this.generateOTP(6);
        otpmail({otp:String(this.createdotp),toemail:this.produceItems[itemIndex].ContactEmail})
        // Show the OTP verification modal
        this.showOTPModal = true;
    }

    handleOTPChange(event) {
        this.otp = event.target.value;
    }

    confirmDeletion() {
        // Check if the entered OTP matches a predefined value (e.g., '1234' for demonstration purposes)
        if (this.otp === this.createdotp) {


            // Find the index of the selected item in the array
            const itemIndex = this.produceItems.findIndex(item => item.Id === this.selectedItemId);

            // If found, remove the item from the array
            if (itemIndex !== -1) {
                update_status({recordid:this.produceItems[itemIndex].Id})
                this.produceItems.splice(itemIndex, 1);
            }

            // Close the OTP modal
            this.showOTPModal = false;
            this.showToast('Hope you had a great deal selling your crop !')

        } else {
            alert('Entered OTP is wrong ! Please check Email/SMS and try again !')

            // setTimeout(() => {
            //     this.tosthandle();
            // }, 2000);

            // OTP is incorrect, you can handle this case accordingly (show an error message, etc.)
            // For simplicity, we'll clear the OTP field
            this.otp = '';
        }
    }

    generateOTP(length) {

        const characters = '0123456789';
        const OTPArray = [];

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            OTPArray.push(characters[randomIndex]);
        }

        return OTPArray.join('');
    }


    cancelDeletion() {
        // Close the OTP modal without deleting the item
        this.showOTPModal = false;
        this.otp = '';
    }
    handleContact(event) {
        const selectedItemId = event.target.dataset.index;
        const updatedProduceItems = this.produceItems.map(item => {
            if (item.Id === selectedItemId) {
                // Toggle the visibility of contact information
                item.showContactInfo = !item.showContactInfo;
            }
            return item;
        });
        this.produceItems = [...updatedProduceItems];
    }

}