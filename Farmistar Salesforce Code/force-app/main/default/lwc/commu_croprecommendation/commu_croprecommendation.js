import { LightningElement, track } from 'lwc';
import WatsonMLPrediction_Crop_Recommendation from '@salesforce/apex/WatsonMLPrediction_Crop_Recommendation.requestPrediction';

export default class Commu_croprecommendation extends LightningElement {

    @track nitrogen = null;
    @track phosphorous = null;
    @track potassium = null;
    @track temperature = null;
    @track humidity = null;
    @track ph = null;
    @track rainfall = null;
    @track recommendedCrop = '';
    @track isSpinner = false;

    handleInputChange(event) {
        const fieldName = event.target.id;
        this[fieldName] = event.target.value;
    }

    recommendCrop() {

        this.isSpinner = true
        var user_input = '{"input_data":[{"fields":["N","P","K","temperature","humidity","ph","rainfall"],"values":[['+this.nitrogen+','+this.phosphorous+','+this.potassium+','+this.temperature+','+this.humidity+','+this.ph+','+this.rainfall+']]}]}'
        WatsonMLPrediction_Crop_Recommendation({ payload: user_input }).then((result) => {
            console.log(JSON.parse(result));
            this.recommendedCrop = JSON.parse(result).predictions[0].values[0][0].toUpperCase();
            this.isSpinner = false
        }).catch((err) => {
            console.log(err)
            this.isSpinner = false
        });

    }


}