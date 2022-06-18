import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDoubleClickTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log("TaskComponent.onDelete() " + task.id);
    this.onDeleteTask.emit(task);
  }

  onDoubleClick(task: Task) {
    console.log("TaskComponent.onDoubleClick() " + task.id);
    this.onDoubleClickTask.emit(task);
  }
}
