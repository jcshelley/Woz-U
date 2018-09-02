import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from './../task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Task: Task[] = [];

  constructor( private TaskService: TaskService ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    this.TaskService.getTasks().subscribe(Task => this.Task = Task.slice(1, 5));
  }
}
