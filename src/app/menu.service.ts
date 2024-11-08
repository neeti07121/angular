import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Experience', path: '/experience' }
  ];


  getMenuItems() {
    return this.menuItems;
  }



}
