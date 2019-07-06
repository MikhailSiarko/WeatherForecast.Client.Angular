import {Component, Input, OnInit} from '@angular/core';
import { SidebarItem } from './sidebar-item.model';
import * as M from 'materialize-css';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() items: SidebarItem[] = [];

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }
}
