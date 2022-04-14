import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ErrorComponent } from './components/error/error.component';
import { ParentComponent } from './components/parent/parent.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path:'', redirectTo:'todoList', pathMatch:'full' },
  {path:'todoList', component:TodoListComponent},
  {path:'parent', component:ParentComponent},
  {path:'parent/:id/:name', component:ParentComponent},
  {path:'child', component:ChildComponent},




  //Error Page WildCard
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
