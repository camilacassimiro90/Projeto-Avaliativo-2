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
  Total?: number
  Inativas?: number;
  Ativas?: number;
  Unidades?: Lista[] = [];


  constructor(public postService: ListaService) { }

  ngOnInit(): void {
    this.postService.pegarDados().subscribe((data: Lista[]) => {
      this.listas = data;
      console.log(this.listas);
      this.showUnits();
    })
  }

  showUnits() {
    this.postService.pegarDados().subscribe(resposta => {
      this.Unidades = resposta;
      this.Ativas = this.Unidades.filter((Unidades: { ativo: boolean }) => Unidades.ativo === true).length;
      this.Inativas = (this.Unidades.length - this.Ativas);
      this.Total = this.Unidades.length;

    });
  }
}
