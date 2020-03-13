import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/emitter.service';
import { Item } from 'src/app/Models/Item';
import { Bill } from 'src/app/Models/Bill';
import { SalesService } from 'src/app/service/sales.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  billList: Array<Bill> = []; 
  items: Array<Item> = []; 

   item : Item
   total: number = 0
   tax: number = 0
   grandTotal: number = 0

  constructor(private emitterService : EmitterService,private salesService : SalesService) {
    this.emitterService.getBillEmitter()
   }
  subscription: any;
  ngOnInit() {
    this.subscription = this.emitterService.getBillEmitter()
    .subscribe(
      item => this.AddToBill(item)
    );
  }
  AddToBill(itemid : number){
    this.items = []
    this.items = this.salesService.itemList.filter(item => item.id == itemid)
    if(this.items){
      let bill = new Bill();
      bill.itemName = this.items[0].itemName
      bill.itemId = this.items[0].id
      bill.id = 100 + this.items[0].id
      bill.quantity = 1
      bill.itemPrice = Number(this.items[0].price)
      //this.total = bill.itemPrice
      if(this.total > 0){
        this.total+= bill.itemPrice
        this.tax  =  this.total * 5/100
      }
        
      else{
        this.total = bill.itemPrice
        //this.tax  =  1
      }
      
      
      this.grandTotal =  this.total + this.tax
      this.billList.push(bill);
      
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
