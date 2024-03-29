import { Component, OnInit } from '@angular/core';
import { ListaService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  post!: Lista;
  form!: FormGroup;
  disabled: boolean = false;

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

    this.form = new FormGroup({
      apelido: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', [Validators.required]),
      ativo: new FormControl(false),
    });
  }

  get validateFields() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.postService.atualizar(this.id, this.form.value).subscribe((res: any) => {
      console.log('Tabela atualizada com sucesso!');
      this.router.navigateByUrl('post/index');
    })
  }

}
