import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';
import { RedirectmeComponent } from './redirectme/redirectme.component';
import { EdittaskComponent } from './edittask/edittask.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-task', component: AddnewtaskComponent },
  { path: 'redirectme', component: RedirectmeComponent },
  { path: 'edit-task/:id', component: EdittaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
