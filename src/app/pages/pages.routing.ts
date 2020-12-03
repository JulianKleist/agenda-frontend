import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    { 
      path: 'dashboard', 
      component: PagesComponent,
      children: [
        { path: '', component: ContactsComponent, data: { titulo: 'View Contacts'} },

        //Contacts
        { path: 'contacts', component: ContactsComponent, data: { titulo: 'View Contacts'} },
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
