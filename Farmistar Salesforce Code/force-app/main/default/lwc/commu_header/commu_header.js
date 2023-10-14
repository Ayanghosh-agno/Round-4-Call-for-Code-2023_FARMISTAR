import { LightningElement, track,wire } from 'lwc';
import Farmister from '@salesforce/resourceUrl/Farmister';
import updatelanguage from '@salesforce/apex/Farmister_Operation_Ctrl.updatelanguage';
import getlanguage from '@salesforce/apex/Farmister_Operation_Ctrl.getlanguage';
import { CurrentPageReference,NavigationMixin } from 'lightning/navigation';


export default class Commu_header extends NavigationMixin(LightningElement) {

        farmisterLogoUrl = Farmister + '/Farmister_Images/Farmister.png'
        @track page='';
        @track languageOptions = [
                { value: 'en', label: 'English', selected: false },
                { value: 'hi', label: 'Hindi', selected: false }, // Default selected
                { value: 'bn', label: 'Bengali', selected: true },
                { value: 'ta', label: 'Tamil', selected: false },
        ];

        connectedCallback() {
                getlanguage().then((res) => {
                        this.languageOptions = this.languageOptions.map(option => ({
                                ...option,
                                selected: option.value === res,
                        }));
                })
        }
        handleLanguageChange(event) {
                // Get the selected language value from the dropdown
                const selectedValue = event.target.value;

                // Update the selected flag in the languageOptions array
                this.languageOptions = this.languageOptions.map(option => ({
                        ...option,
                        selected: option.value === selectedValue,
                }));

                console.log('Selected Language:', selectedValue);
                console.log(' Language:', JSON.parse(JSON.stringify(this.languageOptions)));
                updatelanguage({ lang: selectedValue }).then(re => {
                        this.redirectTo();
                       // console.log(window.location.href)
                       // var url='https://ayanghosh-dev-ed.my.site.com/'+this.page;
                       // window.open(url, "_self");
                })
        }

        @wire(CurrentPageReference) getStateParameters(currentPageReference) {
                if (currentPageReference) {
                        this.page=currentPageReference.attributes.name
                        console.log(currentPageReference)
                }
        }

        redirectTo(event){
        this[NavigationMixin.GenerateUrl]({
            type: 'comm__namedPage',
            attributes: {
                name: this.page
            }
        }).then(url =>{
                console.log(url)
                window.open(url,"_self");
        });
    }

}