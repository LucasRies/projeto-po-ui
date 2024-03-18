import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoTableModule } from '@po-ui/ng-components';
import { TablesComponent } from './tables.component';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    PoTableModule
  ],
  exports: [
    TablesComponent,
  ]
})
export class TablesModule { }