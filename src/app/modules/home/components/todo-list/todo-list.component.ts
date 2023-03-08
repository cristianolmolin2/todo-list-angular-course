import { Component, DoCheck } from '@angular/core';

import { TodoItem } from '../../model/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  taskList: Array<TodoItem> = JSON.parse(localStorage.getItem("taskList") || '[]');

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
  }

  private setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    }
  }

  deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente remover todas as atividades?");

    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(taskName: string) {
    this.taskList.push({ task: taskName, checked: false });
  }

  validationInput(taskName: string, index: number) {
    if (!taskName.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

}
