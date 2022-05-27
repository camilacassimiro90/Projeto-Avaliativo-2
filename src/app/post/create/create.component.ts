import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  disabled: boolean = false;

  constructor(public postService: PostService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      apelido: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', [Validators.required]),
      ativo: new FormControl(false)
    });
  }

  get validateFields() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.postService.enviarDados(this.form.value).subscribe((res: any) => {
      console.log('Dados enviado!');
      this.router.navigateByUrl('post/index');
    })
  }

}
