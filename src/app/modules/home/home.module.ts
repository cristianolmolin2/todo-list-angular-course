import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemComponent } from './components/todo-input-add-item/todo-input-add-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//PAGES
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoInputAddItemComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
