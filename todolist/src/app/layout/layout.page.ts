import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';

const todoListStorageKey = 'Todo_List';

export interface ITodoDTO {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  constructor(private storageService: StorageService) {}
  todoList: ITodoDTO[] = [];
  index = 0;

  ngOnInit() {}

  delete(ev: any) {
    console.log('ev', ev);
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }
    const _todoList = this.todoList.filter((todo) => {
      return todo.id !== ev;
    });
    this.todoList = _todoList;

    if (this.todoList.length !== 0) {
      this.storageService.setData(todoListStorageKey, this.todoList);
    } else {
      localStorage.clear();
    }
  }
}
