import { LightningElement,track } from 'lwc';
import getlanguage from '@salesforce/apex/Farmister_Operation_Ctrl.getlanguage';
import translateText from '@salesforce/apex/IBMTranslator.translateText';
export default class Commu_AboutUs_ourmission extends LightningElement {
@track title='Our Mission'
@track title1='Why Choose Farmistar?'
@track title2='Our Commitment'
@track dev='Created & Developed by Ayan Ghosh'
@track body='Our mission at Farmistar is to revolutionize the farming industry by leveraging technology and data-driven insights. We aim to empower farmers with knowledge, resources, and market access to improve their livelihoods.'
@track body1='Farmistar stands out as a comprehensive farming platform that offers a wide range of services. From cropsales to weather forecasts, soil analysis, and AI-driven recommendations, we provide farmers with the tools they need to succeed.'
@track body2='We are committed to the well-being of farmers and the future of agriculture. Our platform strives to simplify farming practices, promote sustainability, and ensure that farmers receive fair prices for their crops.'


connectedCallback() {
    getlanguage().then((res) => {

    if (res.toUpperCase() != 'EN') {
        translateText({sourceText:this.title, sourceLanguage:'En', targetLanguage:res}).then((result) => {
            this.title=result;
        })
        translateText({sourceText:this.title1, sourceLanguage:'En', targetLanguage:res}).then((result1) => {
            this.title1=result1;
        })
        translateText({sourceText:this.title2, sourceLanguage:'En', targetLanguage:res}).then((result2) => {
            this.title2=result2;
        })
        translateText({sourceText:this.dev, sourceLanguage:'En', targetLanguage:res}).then((result3) => {
            this.dev=result3;
        })
        translateText({sourceText:this.body, sourceLanguage:'En', targetLanguage:res}).then((result4) => {
            this.body=result4;
        })
        translateText({sourceText:this.body1, sourceLanguage:'En', targetLanguage:res}).then((result5) => {
            this.body1=result5;
        })
        translateText({sourceText:this.body2, sourceLanguage:'En', targetLanguage:res}).then((result6) => {
            this.body2=result6;
        })



        }



    }).catch((err) => {
        console.log(err)
    });
}

}