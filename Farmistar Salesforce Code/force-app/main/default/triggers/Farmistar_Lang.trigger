trigger Farmistar_Lang on Farmistar_Languages__c (after insert) {

    List<Farmistar_Languages__c> ff =[Select Name,Selected_Language__c  from Farmistar_Languages__c Order by CreatedDate DESC];
    if(ff.size()>1){
        List<Farmistar_Languages__c> gg= new  List<Farmistar_Languages__c>();
        for(integer i=1;i<ff.size();i++){
            
            gg.add(ff[i]);
        }
        delete gg;
        
    }
}