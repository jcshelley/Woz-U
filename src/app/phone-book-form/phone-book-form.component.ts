import { PhoneBook } from './../models/phone-book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book-form',
  templateUrl: './phone-book-form.component.html',
  styleUrls: ['./phone-book-form.component.css']
})

export class PhoneBookFormComponent implements OnInit {
  model: PhoneBook = new PhoneBook();

  onSubmit() {
    console.log('Submit Successful: ',  this.model);
}
    
constructor() {
}

ngOnInit() {
}
}