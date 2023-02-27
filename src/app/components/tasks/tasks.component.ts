import { Component, EventEmitter, OnInit, Input } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();  
  }

  isTaskCollectionEmpty():boolean {
    return Boolean(!this.tasks.length);
  }

  deleteTaskHandler(task: Task) {
   this.taskService.deleteTask(task);
   this.tasks = this.taskService.getTasks();
  }

  toggleReminder(task: Task) {
    this.taskService.toggleReminder(task);
    this.tasks = this.taskService.getTasks();
  }
}
