import { LightningElement, track } from 'lwc';
import WatsonMLPrediction_Fertilizer_Recomm from '@salesforce/apex/WatsonMLPrediction_Fertilizer_Recomm.requestPrediction';

export default class Commu_fertilizerprediction extends LightningElement {
    @track temperature = null;
    @track humidity = null;
    @track moisture = null;
    @track soilType = '';
    @track cropType = '';
    @track nitrogen = null;
    @track potassium = null;
    @track phosphorous = null;
    @track predictionResult = '';
    @track isSpinner = false;

    handleInputChange(event) {
        const fieldName = event.target.value;
        console.log(fieldName)
        this[fieldName.toLowerCase()] = event.target.value;
    }

    predictFertilizer() {
        this.isSpinner = true
        var user_input = '{"input_data":[{"fields":["Temparature","Humidity","Moisture","Soil Type","Crop Type","Nitrogen","Potassium","Phosphorous"],"values":[[' + this.temperature + ',' + this.humidity + ',' + this.moisture + ',"' + this.soilType + '","' + this.cropType + '",' + this.nitrogen + ',' + this.potassium + ',' + this.phosphorous + ']]}]}'
        WatsonMLPrediction_Fertilizer_Recomm({ payload: user_input }).then((result) => {
            this.predictionResult = JSON.parse(result).predictions[0].values[0][0]
            this.isSpinner = false
        }).catch((err) => {
            console.log(err)
            this.isSpinner = false
        });
    }
}