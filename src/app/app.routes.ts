import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProductFilterComponent } from './pages/product-filter/product-filter.component';


export const routes: Routes = [
    // Statikus elérési útvonalak
    { path: 'home', component: HomeComponent },
    {path: 'add-product',component:ProductFormComponent,canActivate:[AuthGuard]},
    { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
{path:'product-filter',component:ProductFilterComponent},

    { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
    { path: 'products', component: ProductsComponent },

    // Paraméterezett útvonalak
    // { path: 'task-edit/:id', component: TaskEditComponent },

    // Üres elérési út - alapértelmezett útvonal
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // Wildcard útvonal - ha egyik útvonal sem egyezik
    //{ path: '**', component: HomeComponent }
    { path: '**', component: PageNotFoundComponent },

    // Útvonalak egymásba ágyazása
    /*
    {
        path: 'tasks',
        title: 'Tasks',
        component: TasksComponent,
        children: [
            { path: 'completed', component: CompletedComponent },
        ]
    },
    */
];