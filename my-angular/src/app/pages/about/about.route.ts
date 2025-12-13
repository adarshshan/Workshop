import { Routes } from '@angular/router';
import { About } from './about';
import { AboutOne } from '../about-one/about-one';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'one', component: AboutOne },
];
