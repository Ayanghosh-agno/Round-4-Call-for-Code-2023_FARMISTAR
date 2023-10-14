public class IBMIdentityAuth2 {

    // Replace these with your actual IBM Cloud API key and IAM URL
    private static final String IBM_API_KEY = '--:Write you IBM API KEY HERE:--';
    private static final String IAM_URL = 'https://iam.cloud.ibm.com/identity/token';

    // Method to get the IAM authentication token
    public static String getAuthToken() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(IAM_URL);
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        // Construct the request body
        String requestBody = 'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=' + IBM_API_KEY;
        req.setBody(requestBody);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if (res.getStatusCode() == 200) {
            Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            return (String) responseMap.get('access_token');
        } else {
            // Handle error response
            return null;
        }
    }
}