import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionDetailsComponent } from './components/action-details/action-details.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { AddActionComponent } from './components/add-action/add-action.component';

const routes: Routes = [
  { path: '', redirectTo: 'actions', pathMatch: 'full' },
  { path: 'actions', component: ActionListComponent },
  { path: 'action/:id', component: ActionDetailsComponent },
  { path: 'action/add', component: AddActionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
