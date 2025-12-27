import { Routes } from '@angular/router';
import { About } from './about';
import { AboutOne } from '../about-one/about-one';
import { AboutTwo } from '../about-two/about-two';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'one', component: AboutOne },
  { path: 'two', component: AboutTwo },
];
