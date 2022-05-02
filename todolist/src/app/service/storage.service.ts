import { Injectable } from '@angular/core';
import { ITodoDTO } from './../layout/layout.page';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  todoList: ITodoDTO[];
  todo: ITodoDTO;

  constructor() {}

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any): any {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
