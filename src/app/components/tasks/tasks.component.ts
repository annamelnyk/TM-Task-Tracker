import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  isTaskCollectionEmpty(): boolean {
    return Boolean(!this.tasks.length);
  }

  deleteTaskHandler(task: Task) {
    this.taskService.deleteTask(task);
    this.getTasks();
  }

  toggleReminder(task: Task) {
    this.taskService.toggleReminder(task);
    this.getTasks();
  }

  addNewTask(task: Task) {
    console.log('ttt ', task);
    this.taskService.createTask(task);
    this.getTasks();
  }
}
