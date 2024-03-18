import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { AccordionModule } from './routes/accordion/accordion.module';
import { TablesComponent } from './routes/tables/tables.component';
import { TablesModule } from './routes/tables/tables.module';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [       
    BrowserAnimationsModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    AppRoutingModule,
    AccordionModule,
    TablesModule,
    RouterModule,
    HttpClientModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
