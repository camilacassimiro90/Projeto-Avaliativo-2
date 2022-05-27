import { Component, OnInit } from '@angular/core';
import { ListaService } from '../post.service';
import { Lista } from '../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listas: Lista[] = [];

  unidadeAtivo?: number;

  constructor(public postService: ListaService) { }

  ngOnInit(): void {
    this.postService.pegarDados().subscribe((data: Lista[]) => {
      this.listas = data;
      console.log(this.listas);
    })
  }

  // getAtivos(){
  //   this.unidadeAtivo? = for (let i = 0; i < this.unidadeAtivo.length; i++) {
  //     const element = this.unidadeAtivo[i];
      
  //   }
  // }

}
