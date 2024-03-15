import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { HomeComponent } from './screens/home/home.component';
import { ShopComponent } from './screens/shop/shop.component';
import { BlogComponent } from './screens/blog/blog.component';
import { AboutusComponent } from './screens/aboutus/aboutus.component';

@NgModule({
  declarations: [AppComponent, NavigationsComponent, HomeComponent, ShopComponent, BlogComponent, AboutusComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
