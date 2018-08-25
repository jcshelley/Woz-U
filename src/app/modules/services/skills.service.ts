import { MessagesService } from './messages.service';
import { Skill } from '../../shared/models/skill';
import { Injectable } from '@angular/core';
import { Level } from '../../shared/types/level.enum';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Provison and configure telecommunications Systems.',
      level: Level.Advanced
    }, 
    {
      id: 1,
      name: 'Provide 3rd level technical support to telephony teams.',
      level: Level.Expert
     },
     {
      id: 2, 
      name: 'Leverage technical business knowledge and software development skills to own all aspects of the telephony product lifecycle.',
      level: Level.Intermediate
     }, 
     {
      id: 3, 
      name: 'Indentify, design, test, and implement telecommunication Systems to foster integration and operability.',
      level: Level.Expert
     }, 
     {
      id: 4, 
      name: 'Integrate and support intrastructure with technical applications and related vendor hardware and software.',
      level: Level.Advanced
     }
    ];

    constructor(private MessagesService: MessagesService) { }

    getSkills = (): Observable<Skill[]> => {
      this.MessagesService.add('SkillsService: fetched skills')
      return of(this.skills);
    } 
    
}
