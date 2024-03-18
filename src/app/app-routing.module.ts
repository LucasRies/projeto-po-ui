import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './routes/tables/tables.component';
import { AccordionComponent } from './routes/accordion/accordion.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
