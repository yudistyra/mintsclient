import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  menus = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: [],
    },
    {
      title: 'Profile',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Request',
      icon: 'message-circle',
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
