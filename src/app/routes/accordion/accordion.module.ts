import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    AccordionComponent
  ]

})
export class AccordionModule { }
