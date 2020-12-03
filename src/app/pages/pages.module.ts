import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { PagesComponent } from './pages.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    PagesComponent,
    ContactsComponent,
  ],
  exports: [
    PagesComponent,
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
