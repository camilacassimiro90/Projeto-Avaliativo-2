import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Lista } from '../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Lista[] = [];

  unidadeAtivo?: number;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.pegarDados().subscribe((data: Lista[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  // getAtivos(){
  //   this.unidadeAtivo? = for (let i = 0; i < this.unidadeAtivo.length; i++) {
  //     const element = this.unidadeAtivo[i];
      
  //   }
  // }

}
