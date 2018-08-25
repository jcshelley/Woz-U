import { ContactsModule } from './modules/contacts/contacts.module';
import { SkillsModule } from './modules/skills/skills.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PhoneBookFormComponent } from './components/phone-book-form/phone-book-form.component';
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { SkillsDetailComponent } from './modules/components/skills-detail/skills-detail.component';

@NgModule({
  declarations: [SkillsDetailComponent, AppComponent, GreetingComponent, ContactFormComponent, PhoneBookFormComponent, ContactsComponentComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule, SkillsModule, ContactsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
