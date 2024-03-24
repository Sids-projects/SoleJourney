import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any = [];
  filteredShoes: any = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.products = this.sharedService.products;
  }

  filterShoes(param: string) {
    this.filteredShoes = this.products.filter((product: any) => {
      return this.filteredShoes ? product.filter === param : this.products;
    });
  }
}
