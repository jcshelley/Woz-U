import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { SkillsDetailComponent} from './../modules/components/skills-detail/skills-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MessagesComponent, SkillsDetailComponent]
})
export class ComponentsModule { }
