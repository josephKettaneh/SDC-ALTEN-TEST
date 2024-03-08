import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidenavService } from 'app/base/sidenav/sidenav.service';

const TRANSPARENT_NAV_PAGES = [ 'login' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @HostBinding('class.transparent') transparent = false;

  constructor(
    private readonly router: Router,
    private readonly sidenavService: SidenavService
  ) {
   
  }

  get getExpanded(): boolean {
    return this.sidenavService.getExpanded();
  }
  get getPinned(): boolean {
    return this.sidenavService.getPinned();
  }

  ngOnInit() {
    
  }
}
