import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './screens/shop/shop.component';
import { BlogComponent } from './screens/blog/blog.component';
import { AboutusComponent } from './screens/aboutus/aboutus.component';
import { ProfileComponent } from './screens/profile/profile.component';

const routes: Routes = [
  { path: 'shop-route', component: ShopComponent },
  { path: 'blog-route', component: BlogComponent },
  { path: 'aboutUs-route', component: AboutusComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
