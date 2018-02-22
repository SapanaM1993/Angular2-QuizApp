import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FirstComponent } from './first/first.component';
import { QuestionsComponent } from './questions/questions.component';


const appRoutes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'assessment', component: QuestionsComponent},
  {path: '', redirectTo:'/first', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}