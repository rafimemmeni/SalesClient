import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { SalesService } from 'src/app/service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmitterService } from 'src/app/emitter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[]
  constructor( private salesService : SalesService,private router: Router,
    private emitterService : EmitterService) { }
    
  ngOnInit() {
    this.getCategory();
  }
  getCategory(){
    this.salesService.getCategory()
    .subscribe(
        data => {
            this.categoryList = data;
            console.log(this.categoryList);
            
            console.log(data);
        },
        error => {
            
        });
  }
  ClickCategory(itemId : string){
    this.emitterService.CategoryClickEvent(itemId);
    //this.router.navigate(['/Product'], { queryParams: { itemid: itemId }});
  }

}
