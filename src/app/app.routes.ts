import { Routes } from '@angular/router';
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { ProfileComponent } from "./profile/profile.component";


export const appRoutes: Routes = [
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'list',      component: ListComponent},
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**', component:  ListComponent}
];
