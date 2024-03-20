import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
})
export class NavigationsComponent implements OnInit {
  navTitles: any = [];
  navLeftContent: any = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.navTitles = this.sharedService.navTitles;
    this.navLeftContent = this.sharedService.navLeftContent;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentPath = this.getActiveRoutePath(this.activeRoute);
        this.navTitles.forEach((title: any) => {
          title.navActive = title.path === currentPath;
        });
      });
  }

  private getActiveRoutePath(route: ActivatedRoute): string | null {
    if (!route.firstChild) {
      return null;
    }
    return route.firstChild.snapshot.routeConfig?.path || null;
  }

  navMethod(path: string) {
    console.log(path);
  }
}
