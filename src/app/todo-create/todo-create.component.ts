import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  id;
  date;
  title;
  description;

  constructor(private tododata: TodoDataService) { }

  ngOnInit(): void {
  }
  additem()
  {
    console.log(this.title)
    this.tododata.addtoList(this.id, this.date, this.title, this.description)
    console.log(this.title)
  }

}
