public class WatsonMLPrediction_Rain {

    // Replace these with your actual IBM Cloud API key and deployment URL
    private static final String IBM_API_KEY = IBMIdentityAuth2.getAuthToken();
    private static final String DEPLOYMENT_URL = 'Deployment URL here';// Put your deployment URL here

    // Method to request a deployment prediction
    @Auraenabled
    public static String requestPrediction(String payload) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(DEPLOYMENT_URL);
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + IBM_API_KEY);
        
        // Set the request body with the payload data
        req.setBody(payload);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if (res.getStatusCode() == 200) {
            // Successful prediction request
            return res.getBody();
        } else {
            // Handle error response
            return 'Error: ' + res.getStatus() + ' - ' + res.getStatusCode()+ ' - ' + res.getBody();
        }
    }
}