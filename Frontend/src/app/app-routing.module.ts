import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AuthorsComponent } from './authors/authors.component'
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { NewAuthorComponent } from './newauthor/newauthor.component';
import {SignupComponent} from './signup/signup.component';
import { HomeComponent} from './home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewProductComponent,
},
{
  path:'update',
  component:UpdateProductComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path: '',
  redirectTo: '/authors',
  pathMatch: 'full'
},
{
  path: 'authors',
  component: AuthorsComponent
},
{
  path:'updateauthor',
  component:UpdateAuthorComponent
},
{path:'addauthor', 
   canActivate: [AuthGuard],
  component: NewAuthorComponent,
},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
