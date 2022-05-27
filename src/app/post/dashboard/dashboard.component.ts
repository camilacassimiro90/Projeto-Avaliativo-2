import { Component, OnInit } from '@angular/core';
import { PostDashboardService } from '../post-dashboard.service';
import { PostDashboard } from '../post-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listDashboard: PostDashboard[] = [];

  unidadeAtivo?: number;

  constructor(public PostDashboardService: PostDashboardService) { }

  ngOnInit(): void {
    this.PostDashboardService.listDashboard().subscribe((data: PostDashboard[]) => {
      this.listDashboard = data;
    })
  }
  // getAtivos(){
  //   this.unidadeAtivo?for (let i = 0; i < this.unidadeAtivo.length; i++) {
  //     const element = this.unidadeAtivo[i];
      
  //   }
  // }

}
