import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menu: any[];

  constructor(private menuService: MenuService) {
    this.menu = menuService.getMenuItems();
  }

}
