import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public teacherList:any;

  constructor(private http:HttpClient) {
    this.loadData();
   }

  loadData(){
    this.http.get("http://localhost:8080/Teacher/all-teacher").subscribe((data)=>{
        console.log(data);
        this.teacherList = data;
        
    })
  }

}
