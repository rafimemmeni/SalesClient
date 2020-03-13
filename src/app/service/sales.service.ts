import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/Models/Category';
import { Item } from 'src/app/Models/Item';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  ApiUrl : string
  itemList: Array<Item> = []; 
  
  constructor(private http: HttpClient) { 
    this.ApiUrl = 'https://my-json-server.typicode.com/rafimemmeni/SalesData/'
    //this.ApiUrl = 'http://localhost:61012/api/'
  }
  getCategory() { 
    return this.http.get<Category[]>(this.ApiUrl +'Category');
  } 
  getItems(categoryId: number){
    return this.http.get<Item[]>(this.ApiUrl +'Category/' + categoryId);  
  }
}
