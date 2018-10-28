import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  title = 'Do-Do Task Manager';
  logoUrl="assets/images/logo.png";
  constructor() { }

  ngOnInit() {
  }

}
