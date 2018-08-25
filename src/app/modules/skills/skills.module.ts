import { SkillsComponent } from '../components/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})

export class SkillsModule { }
