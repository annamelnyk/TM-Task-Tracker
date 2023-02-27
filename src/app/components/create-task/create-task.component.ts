import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../mock-tasks';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  public text!: string;
  public day!: string;
  public reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    console.log('submit');
    const newTask: Task = {
      id: this.text,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
