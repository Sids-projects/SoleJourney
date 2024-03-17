import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
})
export class NavigationsComponent implements OnInit {
  navTitles: any = [
    { title: 'Home', path: 'home-route', navActive: false },
    { title: 'Shop', path: 'shop-route', navActive: false },
    { title: 'Blog', path: 'blog-route', navActive: false },
    { title: 'AboutUs', path: 'aboutUs-route', navActive: false },
  ];

  navLeftContent: any = [
    {
      title: "Men's Shoes",
      list: [
        { title: 'Casual Shoes', icon: 'casual-shoe.svg' },
        { title: 'Formal Shoes', icon: 'casual-shoe.svg' },
        { title: 'Sports Shoes', icon: 'casual-shoe.svg' },
        { title: 'Boots', icon: 'casual-shoe.svg' },
        { title: 'Sandals & Flip Flops', icon: 'casual-shoe.svg' },
      ],
    },
    {
      title: "Women's Shoes",
      list: [
        { title: 'Flats & Ballerinas', icon: 'casual-shoe.svg' },
        { title: 'Heels', icon: 'casual-shoe.svg' },
        { title: 'Sports Shoes', icon: 'casual-shoe.svg' },
        { title: 'Boots', icon: 'casual-shoe.svg' },
        { title: 'Sandals & Flip Flops', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: "Kids' Shoes",
      list: [
        { title: 'Boys', icon: 'casual-shoe.svg' },
        { title: 'Girls', icon: 'casual-shoe.svg' },
        { title: 'Toddlers', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: 'Specialty Shoes',
      list: [
        { title: 'Eco-Friendly', icon: 'casual-shoe.svg' },
        { title: 'Vegan', icon: 'casual-shoe.svg' },
        { title: 'Orthopedic', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: 'Accessories',
      list: [
        { title: 'Socks', icon: 'casual-shoe.svg' },
        { title: 'Shoe Care', icon: 'casual-shoe.svg' },
        { title: 'Insoles', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
  ];

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
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
