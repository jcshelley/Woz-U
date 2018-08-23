import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { GreetingComponent } from './greeting/greeting.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { SkillsService } from './services/skills.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PhoneBookFormComponent } from './phone-book-form/phone-book-form.component';


@NgModule({
  declarations: [AppComponent, SkillsComponent,GreetingComponent, ContactsComponentComponent, ContactFormComponent, PhoneBookFormComponent,],
  imports: [BrowserModule, FormsModule],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
