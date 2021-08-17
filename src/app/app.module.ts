import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { FooterComponent } from './footer/footer.component';
import { DeductionComponent } from './deduction/deduction.component';
import { IncomeComponent } from './income/income.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    
    FooterComponent,
         DeductionComponent,
         IncomeComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
