import { SkillsService } from './skills.service';
import { TestBed, inject } from '@angular/core/testing';


describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsService]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
