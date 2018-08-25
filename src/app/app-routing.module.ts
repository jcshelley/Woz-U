import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/components/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PhoneBookFormComponent } from './components/phone-book-form/phone-book-form.component';
import { ContactsComponentComponent } from './components/contacts-component/contacts-component.component';
import { SkillsDetailComponent } from './modules/components/skills-detail/skills-detail.component'


const routes: Routes = [
  { path: 'contact', component: ContactFormComponent },
  { path: 'phonebook', component: PhoneBookFormComponent},
  { path: 'skills', component: SkillsComponent},
	{ path: "skills", redirectTo: 'skills-detail', pathMatch: 'full'},
  { path: "skills-detail", component: SkillsDetailComponent},
  { path: 'skills-detail/:id', component: SkillsDetailComponent},
  { path: 'contacts', component: ContactsComponentComponent},
  { path: 'greeting', component: GreetingComponent},
	{ path: '', redirectTo: '/greeting', pathMatch: 'full'}
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

