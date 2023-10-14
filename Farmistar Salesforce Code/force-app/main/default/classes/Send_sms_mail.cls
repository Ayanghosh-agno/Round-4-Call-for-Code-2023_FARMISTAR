public class Send_sms_mail{

    public static string sendSMS(String tonumber,String Orderid)
    {	tonumber=tonumber.trim().right(10);
     	tonumber='91'+tonumber;
        String api_key = 'YOU API';  // change with your api key
        String api_secret= 'YOU API'; // change with your api secret
        string fromNumber='FARMISTAR';
        Farmister_Orders__c orderdetails = getorderdetail(Orderid);
        DateTime orderdatetime=orderdetails.CreatedDate;
        Date orderdate = date.newinstance(orderdatetime.year(), orderdatetime.month(), orderdatetime.day());
      	String message='Hello '+orderdetails.Name__c+',\n \n'
            				+'Thank you for your recent order with Farmistar! \n \n'
            				+'Order Details - \n'
            				+'- Order Id: '+orderdetails.Name+'\n'
            				+'- Order Date: '+String.valueof(orderdate)+'\n'
            				+'- Total Amount: Rs. '+orderdetails.Total_Amount__c+'\n \n'
            				+'We appreciate your trust in us. If you have any questions or need assistance, feel free to contact our customer support team. \n \n'
            				+'Thanks for choosing Farmistar! \n \n'
                            +'Best Regards, \n'
                            +'FARMISTAR TEAM \n \n';

        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://rest.nexmo.com/sms/json');
        req.setMethod('POST'); 
        req.setHeader('Content-Type','application/json');
        req.setHeader('Content-Type','application/x-www-form-urlencoded');
        
        if(string.isNotBlank(fromNumber) && string.isNotBlank(toNumber) && string.isNotBlank(message))
        {
            string jsonString='from='+EncodingUtil.urlEncode(fromNumber, 'UTF-8')+'&text='+EncodingUtil.urlEncode(message, 'UTF-8')+
                '&to='+EncodingUtil.urlEncode(toNumber, 'UTF-8')
                +'&api_key='+EncodingUtil.urlEncode(api_key, 'UTF-8')+'&api_secret='+EncodingUtil.urlEncode(api_secret, 'UTF-8')+'';
            req.setBody(jsonString);
            system.debug('jsonString:'+jsonString);
            try{
                Http http = new Http();
                HTTPResponse res = http.send(req);
                
                if(res.getStatusCode()==200)
                {
                    system.debug('SMS Sent to '+toNumber);
                    return 'success';
                }
                else{
                    system.debug('SMS Failed to sent :'+toNumber);
                    return 'Failed';
                }
                
            }
            catch(Exception e){
                System.debug(e.getMessage());
            } 
        }
        else
        {
             System.debug('Invalid parameter entered');
        }
        return null;
    }
    
     public static void send(String toaddress,String Orderid){
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {toaddress};
            Farmister_Orders__c orderdetails = getorderdetail(Orderid);
            mail.setToAddresses(toAddresses);
         	OrgWideEmailAddress[] owea = [select Id from OrgWideEmailAddress where Address ='ayanghosh.ece.20182037@gmail.com'];
			mail.setOrgWideEmailAddressId(owea.get(0).Id);
            //mail.setSenderDisplayName('FARMINGO');
            mail.setSubject('Farmistar Order Confirmation');
            String body=  '<div style=" font-family: Arial, sans-serif;background-color: #f5f5f5;margin: 10px;padding: 10px; " ><div style="max-width: 600px;margin: 0 auto;padding: 20px;background-color: #ffffff;border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" class="container"><h1 style="color: #333;font-size: 24px;margin-bottom: 20px;text-align: center;" >Thank You for Ordering!</h1><img style=" display: block;margin: 0 auto;max-width: 100%" src="https://i.postimg.cc/jdnxx8fZ/Farmister.png" alt="Farmistar Logo"> <p style="color: #3498db;font-weight: bold;" class="thank-you-message">We appreciate your business and trust in Farmistar.</p><p>Your order has been successfully received. Here are the order details:</p><div style="margin-top: 30px;border-top: 1px solid #ddd;padding-top: 20px;" class="order-details"><p style=" margin-bottom: 10px;"><strong>Order Number:</strong> ' +orderdetails.Name+ '</p><p style=" margin-bottom: 10px;"><strong>Name:</strong> ' +orderdetails.Name__c+ '</p> <p style=" margin-bottom: 10px;"><strong>Order Date:</strong> '+orderdetails.Createddate+'</p><p style=" margin-bottom: 10px;"><strong>Total Amount:</strong> Rs. '+orderdetails.Total_Amount__c+'</p><p style=" margin-bottom: 10px;"><strong>Shipping Address:</strong> '+orderdetails.Address__c+'</p><p style=" margin-bottom: 10px;"><strong>Payment Method:</strong> UPI </p></div><p>If you have any questions or need further assistance, please feel free to contact our customer support team.</p><p style="color: #3498db;font-weight: bold;" class="thank-you-message">Thank you for choosing Farmistar!</p><div style="text-align: center;margin-top: 20px;color: #888;" class="footer"><p>This email was sent from Farmistar. Please do not reply to this email.</p></div></div></div>';
			mail.setHtmlBody(body);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });                                         
    }
    
    public static void casemail(String caseid){
        Case ca=[Select SuppliedName,casenumber,SuppliedEmail,Subject,Description from Case Where CaseNumber =:caseid];
		String body='<div style="font-family: Arial, sans-serif;background-color:#f0f0f0;margin: 0;padding: 0;">'
        +'<div style="max-width: 600px;margin: 0 auto;background-color: #ffffff;padding: 20px;border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" class="container">'
        +'<h1 style="  color: #333;font-size: 24px;margin: 0;text-align: center;">Inquiry Received !</h1>'
        +'<p  style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;">Dear '+ca.SuppliedName+',</p>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;">Thank you for reaching out to Farmistar. We have received your inquiry and are eager to assist you.</p>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;">Here are the details of your inquiry:</p>'
        +'<ul style="list-style-type: none;padding: 0;">'
        +'<li style="margin-bottom: 10px;"><strong style="font-weight: bold;">Case Id: </strong>'+ca.casenumber+'</li>'
        +'<li style="margin-bottom: 10px;"><strong style="font-weight: bold;">Name: </strong>'+ca.SuppliedName+'</li>'
        +'<li style="margin-bottom: 10px;"><strong style="font-weight: bold;">Email: </strong>'+ca.SuppliedEmail+'</li>'
		+'<li style="margin-bottom: 10px;"><strong style="font-weight: bold;">Order Id: </strong>'+ca.Subject+'</li>'
        +'<li style="margin-bottom: 10px;"><strong style="font-weight: bold;">Message: </strong>'+ca.Description+'</li>'
        +'</ul>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;" >Our dedicated team is already reviewing your message, and we will respond promptly to provide you with the best support and assistance.</p>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;">In the meantime, feel free to explore Farmistar\'s marketplace for all your farming needs.</p>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;" >Thank you for choosing Farmistar!</p>'
        +'<p style="color: #666;font-size: 16px;line-height: 1.5;text-align: left;">Sincerely,<br>Your Farmistar Team</p>'
        +'</div>';
        List<Messaging.SingleEmailMessage> allMails = new List<Messaging.SingleEmailMessage>();

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {ca.SuppliedEmail};
            mail.setToAddresses(toAddresses);
         	OrgWideEmailAddress[] owea = [select Id from OrgWideEmailAddress where Address ='ayanghosh.ece.20182037@gmail.com'];
			mail.setOrgWideEmailAddressId(owea.get(0).Id);
            mail.setSubject('Ticket received with Case Number - '+ca.CaseNumber);
			mail.setHtmlBody(body);
         	allMails.add(mail);
        Messaging.sendEmail(allMails); 

            //Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
    
    @AuraEnabled
    public static void otpmail(String otp,String toemail){

		String body='<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">'
                    +'<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-collapse: collapse; margin: 20px auto; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">'
                    +'<tr>'
                    +'<td align="center" style="background-color: #4caf50; padding: 20px;">'
                    +'<h1 style="color: #ffffff;">OTP For Crop-Selling Status Change</h1>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td style="padding: 20px;">'
                    +'<p>Dear Farmer,</p>'
                    +'<p>Your One-Time Password (OTP) is:</p>'
                    +'<h2 style="color: #4caf50;">'+otp+'</h2>'
                    +'<p>Please use this OTP to complete your verification process.</p>'
                    +'<p>If you didn\'t request this OTP, please ignore this email.</p>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td align="center" style="background-color: #4caf50; padding: 20px;">'
                    +'<p style="color: #ffffff;">&copy; 2023 FARMISTAR. All rights reserved.</p>'
                    +'</td>'
                    +'</tr>'
                    +'</table>'
                    +'</div>';

        
        List<Messaging.SingleEmailMessage> allMails = new List<Messaging.SingleEmailMessage>();

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {toemail};
            mail.setToAddresses(toAddresses);
         	OrgWideEmailAddress[] owea = [select Id from OrgWideEmailAddress where Address ='ayanghosh.ece.20182037@gmail.com'];
			mail.setOrgWideEmailAddressId(owea.get(0).Id);
            mail.setSubject('FARMISTAR Crop Selling - OTP');
			mail.setHtmlBody(body);
         	allMails.add(mail);
        Messaging.sendEmail(allMails); 

            //Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }




    public static Farmister_Orders__c getorderdetail(String orderid){
       Farmister_Orders__c cc= [Select Id,Name,Name__c,CreatedDate,Total_Amount__c,Address__c from Farmister_Orders__c where Name=:orderid];
 		return cc;   
    }
    
    
}