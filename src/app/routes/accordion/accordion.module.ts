import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionRoutingModule } from './accordion-routing.module';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [    
    CommonModule,
    AccordionRoutingModule,
    PoModule
  ]
})
export class AccordionModule { }
