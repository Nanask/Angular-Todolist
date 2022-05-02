import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { StorageService } from '../service/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
    FontAwesomeModule,
  ],
  providers: [StorageService],
  declarations: [LayoutPage, TodoCreateComponent, TodoItemComponent],
})
export class LayoutPageModule {}
