import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components';

const routes : Routes = [
    {path : '', component : HomeComponent },
    {path : 'product', component : ProductDetailComponent }
];

export const routing = RouterModule.forRoot(routes);