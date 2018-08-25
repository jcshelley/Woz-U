import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})

export class SkillsDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  SkillsService: any;
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.SkillsService = +params['id'])
  }

}
