trigger Farmistar_status on Farmistar_status_update__c (after insert) {

    Farmistar_status_update__c fmstat = [Select id,Record_Id__c from Farmistar_status_update__c];
    system.debug(fmstat.Record_Id__c);
    Farmister_Orders__c fmord =[Select id,status__c from Farmister_Orders__c where id =:fmstat.Record_Id__c];
    fmord.status__c='Sold';
    update fmord;
    delete fmstat;
}