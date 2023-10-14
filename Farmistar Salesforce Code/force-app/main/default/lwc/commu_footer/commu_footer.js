import { LightningElement } from 'lwc';
import watson from '@salesforce/resourceUrl/watson';
import { loadScript } from 'lightning/platformResourceLoader';
import Farmister from '@salesforce/resourceUrl/Farmister';

export default class Commu_footer extends LightningElement {

        farmisterLogoUrl = Farmister+'/Farmister_Images/Farmister.png'
        facebook    =Farmister+'/Farmister_Images/facebook.png'
        twitter     =Farmister+'/Farmister_Images/twitter.png'
        linkedin    =Farmister+'/Farmister_Images/linkedin.png'

    connectedCallback() {
        loadScript(this, watson).then(() => { });
    }

}