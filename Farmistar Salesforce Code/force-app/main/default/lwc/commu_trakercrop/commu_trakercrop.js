import { LightningElement, track } from 'lwc';
import trackorder from '@salesforce/apex/Farmister_Operation_Ctrl.trackorder';

export default class Commu_trakercrop extends LightningElement {
    @track orderNumber = '';
    @track orderStatus = '';
    @track selectedOrder = null;
    get isOrderSelected() {
        return this.selectedOrder != null;
    }
    handleOrderNumberChange(event) {
        this.orderNumber = event.target.value;
    }

    handleTrackOrder() {
        // Call the method to fetch and display order status
        this.fetchOrderStatus();
    }

    // Method to fetch and display order status (you can replace this with your actual data source)
    fetchOrderStatus() {
        var products = []
        console.log(this.orderNumber)
        if (this.orderNumber =='') {
            this.orderStatus = 'Please enter a tracking ID';
        } else {
            trackorder({ orderid: this.orderNumber }).then(res => {
                res.forEach(currentItem => {
                    products.push(currentItem.ProductName)
                });

                var fullDate = new Date(res[0].Orderdate);
                var twoDigitMonth = fullDate.getMonth() + "";
                if (twoDigitMonth.length == 1)
                    twoDigitMonth = "0" + twoDigitMonth;
                var twoDigitDate = fullDate.getDate() + "";
                if (twoDigitDate.length == 1)
                    twoDigitDate = "0" + twoDigitDate;
                var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
                console.log(currentDate)
                var order = {
                    name: res[0].OrderId,
                    orderDate: currentDate,
                    totalAmount: res[0].TotalAmount,
                    farmerName: res[0].FarmerName,
                    status: res[0].Orderstatus,
                    productsOrdered: products,
                }
                this.selectedOrder = order;
                console.log(res)
            }).catch(err => {
                console.log(err)
                this.selectedOrder = null
                this.orderStatus = 'Order Not Found';
            })
        }



    }
}