import { Component, OnInit } from '@angular/core';

import { Task } from './../models/task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  Task: Task[];

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.TaskService.getTasks().subscribe(Task => this.Task = Task);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.TaskService.addTask({ name } as Task)
      .subscribe(Task => {
        this.Task.push(Task);
      });
  }

  delete(Task: Task): void {
    this.Task = this.Task.filter(h => h !== Task);
    this.TaskService.deleteTask(Task).subscribe();
  }

}
