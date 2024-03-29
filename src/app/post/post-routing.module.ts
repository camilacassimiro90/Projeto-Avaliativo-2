import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormMonthComponent } from './form-month/form-month.component';
import { LogonComponent } from './logon/logon.component';


const routes: Routes = [
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: '', component: LogonComponent},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastro-mensal', component: FormMonthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
