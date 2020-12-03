import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UploadContact } from '../interfaces/upload-contacts.interface';
import { Contact } from '../models/contacts.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contact: Contact;

  selectedContact: Contact = {
    name: '',
    phone: '',
    lastname: '',
    address: ''
  };

  constructor( private http: HttpClient ) { }

  // get _id():string {
  //   return this.contact._id || '';
  // }

  uploadContacts(){
    const url = `${ base_url }/contacts`;
    return this.http.get<UploadContact>( url )
                .pipe(
                  map( resp => {
                    const contact = resp.contact.map( 
                      cnt => new Contact(
                        cnt.name,
                        cnt.phone,
                        cnt.lastname,
                        cnt.address,
                        cnt.img,
                        cnt._id
                      ) 
                    );

                    return {
                      total: resp.total,
                      contact
                    };
                  })
                )
  }


  private transformContacts ( result: any[] ): Contact[] {
    return result.map(
      cnt => new Contact(
        cnt.name,
        cnt.phone,
        cnt.lastname,
        cnt.address,
        cnt.img,
        cnt._id
      )
    );
  }

  search( termino: string) {
    const url = `${ base_url }/search/${ termino }`;
    return this.http.get<any[]>( url )
    .pipe(
      map( ( resp: any ) => this.transformContacts(resp.contact) )
    );
  }

  deleteContact ( _id: string ) {
    console.log(_id)

    const url = `${ base_url }/contacts/${ _id }`;
    return this.http.delete( url );
  }

  updateContact ( contact: Contact ) {
    //http://localhost:3000/api/contacts/5fc6c0f4749cf712682077da
    const url = `${ base_url }/contacts/${contact._id}`;
    return this.http.put( url, contact );
  }
  createContact ( contact: Contact ) {
    //http://localhost:3000/api/contacts
    const url = `${ base_url }/contacts`;
    return this.http.post<any[]>( url, contact );
  }
}