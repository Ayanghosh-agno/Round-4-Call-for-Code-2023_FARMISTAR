public class IBMTranslator {

    // Replace with your IBM Watson API credentials
    private static final String API_KEY = '---: Write your API Key Here :----';
    private static final String API_URL = 'https://api.eu-gb.language-translator.watson.cloud.ibm.com/instances/ba3eaf3d-5420-44f6-9463-56b1947297d4';
	@Auraenabled
    public static String translateText(String sourceText, String sourceLanguage, String targetLanguage) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        HttpResponse response = new HttpResponse();
        
        // Build the URL for the translation API
        String apiUrl = API_URL + '/v3/translate?version=2018-05-01';
        request.setEndpoint(apiUrl);
        request.setMethod('POST');
        request.setBody('{"text": "'+ sourceText+'","source": "'+ sourceLanguage+'","target": "'+targetLanguage+'"}');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Authorization', 'Basic Your_API_Key');
        
        try {
            // Send the HTTP request
            response = http.send(request);
            
            if (response.getStatusCode() == 200) {
                // Parse the JSON response
               // System.debug(response.getBody());
                Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                List<Object> translations = (List<Object>) jsonResponse.get('translations');
                Map<String,Object> neww= (Map<String,Object>) translations[0];
                if (translations.size() > 0) {
                   return String.valueof(neww.get('translation'));
               }
            } else {
                System.debug('HTTP request failed with status code: ' + response.getStatusCode());
            }
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
        }
        
        return null;
    }
}