import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
   
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
   
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, SidebarComponent, DashboardComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }