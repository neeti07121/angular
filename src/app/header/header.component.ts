import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,
    MatToolbarModule,CommonModule,RouterModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menu: any[];

  constructor(private menuService: MenuService) {
    this.menu = menuService.getMenuItems();
  }
}
