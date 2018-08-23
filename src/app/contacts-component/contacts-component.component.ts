import { ContactsServiceService } from './../services/contacts-service.service';
import { Contact } from './../models/contact';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})

export class ContactsComponentComponent implements OnInit {
  contacts: Contact[];


  constructor(private ContactsServiceService: ContactsServiceService) {
    this.ContactsServiceService = this.ContactsServiceService;
  }

  ngOnInit() {
    this.ContactsServiceService.getContact().subscribe(contacts => this.contacts = contacts);
  }

}