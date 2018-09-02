import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Task } from './models/task';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class TaskService {

  private TaskUrl = 'api/TASKS';

  constructor(
    private http: HttpClient,
    private MessageService: MessageService) { }

    
  getTasks(): Observable<Task[]> {
     return this.http.get<Task[]>(this.TaskUrl)
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.TaskUrl}/${id}`;
    return this.http.get<Task>(url)
  }

  addTask (Task: Task): Observable<Task> {
    return this.http.post<Task>(this.TaskUrl, Task, httpOptions)
  }

  deleteTask (Task: Task | number): Observable<Task> {
    const id = typeof Task === 'number' ? Task : Task.id;
    const url = `${this.TaskUrl}/${id}`;
    return this.http.delete<Task>(url, httpOptions)
  }

  updateTask (Task: Task): Observable<any> {
    return this.http.put(this.TaskUrl, Task, httpOptions)
  }
}
