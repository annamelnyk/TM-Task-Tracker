import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Task, TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = TASKS;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t: Task) => t.id !== task.id)
  }

  toggleReminder(task: Task): void {
    this.tasks = this.tasks.map((t: Task) => {
      if (t.id === task.id) {
        t.reminder = !t.reminder;
      }

      return t;
    })
  }
}
