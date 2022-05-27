import { Component, OnInit } from '@angular/core';
import { ListaService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: number;
  post!: Lista;

  constructor(
    public postService: ListaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.postService.pegarId(this.id).subscribe((data: Lista) => {
      this.post = data;
    });
  }
}

