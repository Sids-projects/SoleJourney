import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.products = this.sharedService.products;
  }
}
