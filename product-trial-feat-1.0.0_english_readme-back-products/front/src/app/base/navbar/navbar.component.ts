import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() isAuthenticated = false;

  public userName: string;
  public userMenuItems: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-fw pi-cog', routerLink: '/user/profile' },
    { label: 'Messages', icon: 'pi pi-fw pi-envelope', routerLink: '/user/messages' },
    { label: 'Notifications', icon: 'pi pi-fw pi-bell', routerLink: '/user/notifications' },
    { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: null },
  ];

  constructor(

  ) {}


}
