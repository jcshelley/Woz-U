import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../models/task';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
@Input() Task: Task;
  
  constructor(
    private route: ActivatedRoute,
    private TaskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.TaskService.getTask(id)
    .subscribe(Task => this.Task = Task);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.TaskService.updateTask(this.Task)
      .subscribe(() => this.goBack());
  }
}
