import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tododetails;
  constructor(private datatodo:TodoDataService) { }

  ngOnInit(): void {
    this.tododetails=this.datatodo.listdetails
  }
}
