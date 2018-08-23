import { Message } from './../models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model: Message = new Message();

  constructor() { }

  ngOnInit() {
    console.log('Submit Successful: ', this.model);
  }

}
