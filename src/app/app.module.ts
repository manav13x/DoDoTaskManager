import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { AddTaskComponent } from './Component/dashboard/add-task/add-task.component';
import { DeleteTaskComponent } from './Component/dashboard/delete-task/delete-task.component';
import { DashHomeComponent } from './Component/dashboard/dash-home/dash-home.component';
import { TaskListComponent } from './Component/dashboard/task-list/task-list.component';
import { TaskHistoryComponent } from './Component/dashboard/task-history/task-history.component';
const routes : Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path : 'register', component:  RegisterComponent},
  { path : 'dashboard', component: DashboardComponent,
  children:[
    {path:'',component: DashHomeComponent},
    {path:'addtask',component:AddTaskComponent},
    {path:'deletetask',component:DeleteTaskComponent},
    {path:'edittask/:tid',component:AddTaskComponent},
    {path:'listtask',component:TaskListComponent},
    {path:'taskhistory',component:TaskHistoryComponent}
  ]

}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    DashHomeComponent,
    TaskListComponent,
    TaskHistoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpModule,
    FormsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
