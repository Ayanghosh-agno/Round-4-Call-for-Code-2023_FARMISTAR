import { LightningElement, track } from 'lwc';
import getlanguage from '@salesforce/apex/Farmister_Operation_Ctrl.getlanguage';
import translateText from '@salesforce/apex/IBMTranslator.translateText';

export default class Commu_AboutUs extends LightningElement {
    @track title = 'About Us';
    @track body = "Farmistar is an all-in-one business and farming solution where farmers can buy essential supplies,including fertilizers, pesticides, and more. We understand the challenges that farmers face, andwe're here to provide comprehensive support.";
    @track body1 = 'Our platform enables farmers to request a Q/A for their crops, helping them find suitable buyers andget the best Maximum Selling Price (MSP) possible. Farmers can also access a range of valuableinformation on our website.'

    connectedCallback() {
        getlanguage().then((res) => {
            console.log(res);
            if (res.toUpperCase() != 'EN') {
                translateText({ sourceText: this.title, sourceLanguage: 'En', targetLanguage: res }).then((result) => {
                    this.title = result;
                })
                translateText({ sourceText: this.body, sourceLanguage: 'En', targetLanguage: res }).then((result1) => {
                    this.body = result1;
                })
                translateText({ sourceText: this.body1, sourceLanguage: 'En', targetLanguage: res }).then((result2) => {
                    this.body1 = result2;
                })
            }
        }).catch((err) => {
            console.log(err)
        });
    }

}