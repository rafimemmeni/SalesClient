import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/Item';
import { SalesService } from 'src/app/service/sales.service';
import { ActivatedRoute } from '@angular/router';
import { EmitterService } from 'src/app/emitter.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  itemList: Item[]
  constructor( private salesService : SalesService,private route: ActivatedRoute,
    private emitterService : EmitterService,private currencyPipe : CurrencyPipe) { 
      this.emitterService.getItemEmitter()
    }
  subscription: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      let categoryId = +params['id']; // (+) converts string 'id' to a number
      if(categoryId){
        this.getItems(categoryId);
      }
      this.subscription = this.emitterService.getItemEmitter()
      .subscribe(
        item => this.getItems(item)
      );
      // In a real app: dispatch action to load the details here.
   });

  }
  getItems(categoryId: number){
    this.itemList = [] ;
    this.salesService.itemList  = [];
    this.salesService.getItems(categoryId)
    .subscribe(
        data => {
            let category : any
            category = data;
            this.itemList = category.Items;
            this.salesService.itemList = this.itemList 
            console.log(this.itemList);
            
            console.log(data);
        },
        error => {
            
        });
  }
  Clickitem(itemId : number){
    this.emitterService.ItemClickEvent(itemId);
  }

}
