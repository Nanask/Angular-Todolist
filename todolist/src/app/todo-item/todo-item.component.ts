import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoDTO } from '../layout/layout.page';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from './../service/storage.service';

const todoListStorageKey = 'Todo_List';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  @Input() todo: ITodoDTO;
  @Input() todoList: ITodoDTO[];
  @Input() id: ITodoDTO;

  @Output() todoDelete: EventEmitter<number> = new EventEmitter();

  faPan = faPen;
  isUpdate = false;
  updateTodo: string;
  check = false;

  ngOnInit() {}

  showUpdate(todo: string) {
    this.isUpdate = true;
    this.updateTodo = todo;
  }

  update() {
    this.todo.todo = this.updateTodo;

    this.isUpdate = false;
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  todoCheck() {
    // this.check = true;
    console.log(this.check);
    const id = this.todo.id;
    console.log('id', id);

    if (!this.check) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  deleteHandler(id: number) {
    this.todoDelete.emit(id);
  }
}
