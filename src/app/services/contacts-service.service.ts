import { Injectable } from '@angular/core';
import { Contact } from './../models/contact';

import { Observable, of } from 'rxjs';
import { PhoneBook } from '../models/phone-book';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  Contact: Contact[] =[
    {
      firstName: 'Joe',
      lastName: 'Harding',
      phoneNumber: '563.444.3546',
      email: 'j.harding@rockdrilling.com'
    }, 
    {
	    firstName: 'Julie',
      lastName: 'Pepperdine',
      phoneNumber: '404.876.1455',
      email: 'julie.pepperdine@hotpepper.com'
     },
     {
	    firstName: 'Frank',
      lastName: 'Shuckman',
      phoneNumber: '905.345.6453',
      email: 'fc.shuckman@greatlakes.com'
     }, 
    ];
  getContact = (): Observable<Contact[]> => {
    return of(this.Contact);
  }
  addPhoneBook = (): Observable<PhoneBook[]> => {
    return of(this.Contact);
  }
}
