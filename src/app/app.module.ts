import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion/accordion.component';
import { LogoComponent} from './logo/logo.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { AccordionCardComponent } from './accordion-card/accordion-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentBodyComponent } from './student-body/student-body.component';
import { AssessmentDataComponent } from './assessment-data/assessment-data.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthInterceptor } from './auth-interceptor.service';
import { FormInputComponent } from './utilites/form-input/form-input.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { ClassCardsComponent } from './class-cards/class-cards.component';

import { PercentageComponent } from './percentage/percentage.component';
import { SelectEmptyComponent } from './select-empty/select-empty.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'student-data', component: StudentBodyComponent },
    { path: 'assessment-data', component: AssessmentDataComponent },
    { path: 'school-data', component: SchoolInfoComponent },
    { path: 'csv-upload', component: CsvUploadComponent }
  ]},

 
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    AssessmentsComponent,
    FormInputComponent,
    LoginComponent,
    SignUpComponent,
    AccordionComponent,
    LogoComponent,
    CardComponent,
    SearchComponent,
    AccordionCardComponent,
    NavbarComponent,
    StudentBodyComponent,
    AssessmentDataComponent,
    SchoolInfoComponent,
    StudentTableComponent,
    ImageUploadComponent,
    CsvUploadComponent,
    ClassCardsComponent,

    PercentageComponent,
     SelectEmptyComponent,
  
  ],
  imports: [
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{useHash : true })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
