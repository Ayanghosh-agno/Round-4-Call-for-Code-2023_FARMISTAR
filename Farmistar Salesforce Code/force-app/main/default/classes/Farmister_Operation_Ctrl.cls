public with sharing class Farmister_Operation_Ctrl {
	
    @AuraEnabled
    public static String getlanguage() {
        return [Select Name,Selected_Language__c  from Farmistar_Languages__c where name='Lang' Order by CreatedDate DESC limit 1].Selected_Language__c;
    }
    
    @AuraEnabled
    public static void updatelanguage(String lang) {
        Farmistar_Languages__C farmlang= new Farmistar_Languages__C();
        farmlang.name='Lang';
        farmlang.Selected_Language__c=lang;
        insert farmlang;
    }

    @AuraEnabled(cacheable=true)
    public static List<Farmister_Products__c> getProducts() {
        return [SELECT Id, Name, Description__c, Price__c,Category__c,ImageURL__c FROM Farmister_Products__c ORDER BY Category__c ASC];
    }
    

    @AuraEnabled(cacheable=true)
    public static List<Farmister_Orders__c> getQAorder() {
        return [SELECT Id, Description__c,Name__c, Price__c,Quantity__c,Crop_Type__c,Phone_No__c,Email_Id__c,ImageURL__c FROM Farmister_Orders__c WHERE Status__c='Listed in FARMISTAR' ORDER BY Crop_Type__c ASC ];
    }

    @AuraEnabled
    public static void update_status(id recordid) {
        Farmistar_status_update__c fmstat = new Farmistar_status_update__c ();
        fmstat.Record_Id__c=recordid;
        insert fmstat;
    }

    @AuraEnabled(cacheable=true)
    public static List<ordertracking> trackorder(String orderid) {
        List<ordertracking> orders =new List<ordertracking>();
        for(Farmister_Product_Bridge__c tt : [Select Farmister_Order__r.Total_Amount__c,Farmister_Order__r.Name,Farmister_Product__r.name,Farmister_Order__r.createddate,Farmister_Order__r.status__c, Farmister_Order__r.name__c from Farmister_Product_Bridge__c where Farmister_Order__r.Name =: orderid]){
            ordertracking cc =new ordertracking();
            cc.ProductName=tt.Farmister_Product__r.Name;
            cc.OrderId=tt.Farmister_Order__r.Name;
            cc.Orderdate=tt.Farmister_Order__r.createddate;
            cc.Orderstatus=tt.Farmister_Order__r.status__c;
            cc.FarmerName=tt.Farmister_Order__r.name__c;
            cc.TotalAmount=tt.Farmister_Order__r.Total_Amount__c;
            orders.add(cc);
        }
        return orders;
    }


    @AuraEnabled(cacheable=false)
    public static string submit_order(List<ShippingDetails> ship,List<ProductWrapper> cart) {
        system.debug(cart[0].id);
        system.debug(ship[0].Name);
        Farmister_Orders__c order =new Farmister_Orders__c();
        order.City__c=ship[0].City;
        order.Email_Id__c=ship[0].Email;
        order.Pincode__c=ship[0].Pin;
        order.State__c=ship[0].State;
        order.Phone_No__c=ship[0].Phone;
        order.Address__c=ship[0].Address;
        order.Name__c=ship[0].Name;
        order.Total_Amount__c=ship[0].Total_Amount;
        order.Status__c='In Progress';
        insert order;
        System.debug(order);
        return order.id;
    }
    @AuraEnabled
    public static void submit_bridge(String orderid,List<ProductWrapper> cart){
        List<Farmister_Product_Bridge__c> bridge = new List<Farmister_Product_Bridge__c>();
        for(Integer i=0 ;i<cart.size(); i++){
            Farmister_Product_Bridge__c bridge2 = new Farmister_Product_Bridge__c();
            bridge2.Name=cart[i].name;
            bridge2.Farmister_Order__c=orderid;
            bridge2.Farmister_Product__c=cart[i].id;
            bridge2.Quantity__c=cart[i].quantityInCart;
            bridge.add(bridge2);
        }
        System.debug(bridge);
        insert bridge;
    }

     @AuraEnabled(cacheable=false)
    public static string submit_qa(List<QA_Request> qa_request) {

        Farmister_Orders__c order =new Farmister_Orders__c();
        order.Email_Id__c=qa_request[0].email;
        order.Phone_No__c=qa_request[0].phone;
        order.Address__c=qa_request[0].address;
        order.Name__c=qa_request[0].name;
        order.Q_A_order__c=true;
        order.Quantity__c=qa_request[0].quantity;
        order.Crop_Type__c=qa_request[0].crop;
        order.Price__c=qa_request[0].price;
        order.Status__c='In Progress';
        insert order;
        system.debug(order);

        return order.Id;    
    }
    @AuraEnabled
    public static string trackingid(String orderid){
        Farmister_Orders__c farmor =[Select Name,Email_Id__c,Phone_No__c from Farmister_Orders__c where id=:orderid];
        String trackid=farmor.Name;
        Send_sms_mail.sendSMS(farmor.Phone_No__c,trackid);
        Send_sms_mail.send(farmor.Email_Id__c,trackid);
		system.debug(trackid);
        return trackid;
    }
    @AuraEnabled
    public static string create_case(List<Case_request> casedetails){
        Case ca =new Case();
        ca.Subject=casedetails[0].order;
        ca.Description=casedetails[0].message;
        ca.SuppliedName=casedetails[0].name;
        ca.SuppliedEmail=casedetails[0].email;
        ca.Origin='Web';
        insert ca;
        return ca.id;
    }
    @AuraEnabled
    public static string get_case(String caseid){
        String casenum=[Select casenumber from Case where id =:caseid].CaseNumber;
        Send_sms_mail.casemail(casenum);
        return casenum;
    }


    public class ProductWrapper {
        @AuraEnabled
        public String id { get; set; }
        @AuraEnabled
        public String name { get; set; }
        @AuraEnabled
        public String description { get; set; }
        @AuraEnabled
        public Decimal price { get; set; }
        @AuraEnabled
        public Boolean fertilizer { get; set; }
        @AuraEnabled
        public Boolean pesticides { get; set; }
        @AuraEnabled
        public Boolean seeds { get; set; }
        @AuraEnabled
        public Boolean equipments { get; set; }
        @AuraEnabled
        public String imageUrl { get; set; }
        @AuraEnabled
        public Integer quantityInCart { get; set; }

    }


    public class ShippingDetails {
        @AuraEnabled
        public String Name { get; set; }
         @AuraEnabled
        public String Address { get; set; }
         @AuraEnabled
        public String City { get; set; }
         @AuraEnabled
        public String State { get; set; }
         @AuraEnabled
        public String Pin { get; set; }
         @AuraEnabled
        public String Email { get; set; }
         @AuraEnabled
        public String Phone { get; set; }
        @AuraEnabled
        public Decimal Total_Amount { get; set; }
    }

    public class ordertracking {
        @AuraEnabled
        public String OrderId { get; set; }
         @AuraEnabled
        public String ProductName { get; set; }
         @AuraEnabled
        public Datetime Orderdate { get; set; }
         @AuraEnabled
        public String Orderstatus { get; set; }
         @AuraEnabled
        public String FarmerName { get; set; }
         @AuraEnabled
        public Decimal TotalAmount { get; set; }

    }


    public class QA_Request {

        @AuraEnabled
        public String quantity { get; set; }
        @AuraEnabled
        public Decimal price { get; set; }
        @AuraEnabled
        public String phone { get; set; }
        @AuraEnabled
        public String name { get; set; }
        @AuraEnabled
        public String email { get; set; }
        @AuraEnabled
        public String address { get; set; }
        @AuraEnabled
        public String crop { get; set; }

    }

      public class Case_request {

        @AuraEnabled
        public String name { get; set; }
        @AuraEnabled
        public String email { get; set; }
        @AuraEnabled
        public String order { get; set; }
        @AuraEnabled
        public String message { get; set; }

    }



}