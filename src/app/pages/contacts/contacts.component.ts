import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';

import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  public totalContacts = 0;
  public contacts: Contact[] = [];
  public contactsTemp: Contact[] = [];
  public loading: boolean = true;

  constructor( public contactService: ContactsService ) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.loading = true;
    this.contactService.uploadContacts()
      .subscribe( ({ total, contact }) => {
        this.totalContacts = total;
        this.contacts = contact;
        this.contactsTemp = contact;
        this.loading = false;
      })
  }

  addContact(form: NgForm){
    if ( form.value._id ) {
      this.contactService.updateContact(form.value)
        .subscribe(
          res => {
            this.loadContacts();
            form.reset();
          },
          err => console.log(err)
        )
    } else {
      this.contactService.createContact(form.value)
      .subscribe(
        res => {
          this.loadContacts();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  search( termino: string ) {

    if ( termino.length === 0 ) {
      return this.contacts = this.contactsTemp;
    }
    this.contactService.search( termino )
    .subscribe( result => {
      this.contacts = result;
    });
  }

  deleteContact (id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.contactService.deleteContact( id )
        .subscribe( resp => {
          this.loadContacts();
          Swal.fire(
            'Contact deleted',
            `Contact was deleted successfully`,
            'success'
          )
        });

      }
    })
  }

  updateContact ( contact: Contact) {
    this.contactService.selectedContact = contact;
    
  }//this.modalService.showModal();
  createContact ( contact: Contact) {
    console.log(contact)
  }

}


