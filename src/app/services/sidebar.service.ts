import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    

    {
      titulo: 'Contacts',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'View Contacts', url: 'contacts' },
      ]
    },
  ];

  constructor() { }
}
