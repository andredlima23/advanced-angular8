import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssisterComponent } from './assister/assister.component';
import { HomeComponent } from './home/home.component';
import { ScorerComponent } from './scorer/scorer.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "assister",
  component: AssisterComponent
},
{
  path: "scorer",
  component: ScorerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
