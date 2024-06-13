import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddnewtaskComponent } from './addnewtask/addnewtask.component';
import { RedirectmeComponent } from './redirectme/redirectme.component';
import { EdittaskComponent } from './edittask/edittask.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskModalComponent,
    AddnewtaskComponent,
    RedirectmeComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
