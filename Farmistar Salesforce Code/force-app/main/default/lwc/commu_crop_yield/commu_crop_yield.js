import { LightningElement, track } from 'lwc';
import WatsonMLPrediction_Crop_Yield from '@salesforce/apex/WatsonMLPrediction_Crop_Yield.requestPrediction';

export default class Commu_crop_yield extends LightningElement {
    @track state = '';
    @track district = '';
    @track year = '';
    @track season = '';
    @track crop = '';
    @track area = '';
    @track predictionResult = '';
    @track isSpinner = false;
    handleInputChange(event) {
        // Handle user input changes
        const { name, value } = event.target;
        this[name] = value;
    }

    handleSubmit() {
        this.isSpinner = true
        var user_input = '{"input_data":[{"fields":["State_Name","District_Name","Crop_Year","Season","Crop","Area"],"values":[["' + this.state + '","' + this.city + '","' + this.year + '","' + this.season + '","' + this.crop + '","' + this.area + '"]]}]}';

        WatsonMLPrediction_Crop_Yield({ payload: user_input }).then((result) => {
            console.log(JSON.parse(result).predictions[0].values[0][0].toFixed(2))
            this.predictionResult = JSON.parse(result).predictions[0].values[0]
            this.isSpinner = false
        }).catch((err) => {
            this.isSpinner = false
        });
    }
}