import { Component, OnInit } from '@angular/core';
import { ListaService } from '../post.service';
import { Lista } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Lista[] = [];

  constructor(public postService: ListaService) { }

  ngOnInit(): void {
    this.postService.pegarDados().subscribe((data: Lista[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  deletePost(id: number) {
    this.postService.excluir(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Excluido com sucesso!');
    })
  }

}
