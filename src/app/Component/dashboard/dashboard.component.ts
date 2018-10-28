import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Do-Do Task Manager';
  logoUrl="assets/images/logo.png";
  constructor() { }

  ngOnInit() {
  }

}
