import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Post } from '../post';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  disabled: boolean = false;
  // ativos: boolean = false;
  ativos: any[] = [];

  constructor(public postService: PostService,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      apelido: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', [Validators.required]),
      ativo: new FormControl(true)
    });
  }

  get validateFields() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res: any) => {
      console.log('Dados enviado!');
      this.router.navigateByUrl('post/index');
      // this.checkBox();
      
    })

    this.ativos = [{
      ativo: true
    }]
  
  }

  get result(){
    return this.ativos.filter(item => item.checked)
  }

  changeCheckbox(event: Event) {
    console.log(event.target)
  }

//    checkBox(form:FormGroup) {
//     this.ativos = [];
//     for (const field in form.controls) {
//       const control = form.controls[field];
//       if(control.value === true) {
//         this.ativos.push(this.ativos);
//       }
//   }
//   console.log(this.ativos);
// }




}
