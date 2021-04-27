import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelperClassComponent } from './helper-class/helper-class.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"typography",component:TypographyComponent},
  {path:"helperClass",component:HelperClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
