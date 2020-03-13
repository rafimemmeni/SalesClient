import {EventEmitter} from '@angular/core';
export class EmitterService {
  navchange: EventEmitter<any> = new EventEmitter();
  itemAddEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}
  CategoryClickEvent(number) {
    this.navchange.emit(number);
  }
  getItemEmitter() {
    return this.navchange;
  }
  ItemClickEvent(number) {
    this.itemAddEvent.emit(number);
  }
  getBillEmitter() {
    return this.itemAddEvent;
  }
}