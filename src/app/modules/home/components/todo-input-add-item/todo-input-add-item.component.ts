import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-item',
  templateUrl: './todo-input-add-item.component.html',
  styleUrls: ['./todo-input-add-item.component.scss']
})
export class TodoInputAddItemComponent {

  @Output() emitAddItemTaskList = new EventEmitter();

  addItemTaskList: string = "";

  submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitAddItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
