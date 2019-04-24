import { Component, OnInit } from '@angular/core';

import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
    {
      id: 1,
      title: "take out the trash",
      completed: false
    },
    {
      id: 2,
      title: "study angular",
      completed: false
    },
    {
      id: 3,
      title: "master cobol",
      completed: false
    }
    ]
  }

}
