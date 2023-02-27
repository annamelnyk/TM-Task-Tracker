import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/mock-tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  @Output() onToggle: EventEmitter<Task> = new EventEmitter();

  faTrashCan = faTrashCan;

  deleteTask(task: Task) {
    this.onDelete.emit(task);
  }

  toggleReminder(task: Task) {
    this.onToggle.emit(task);
  }

}
