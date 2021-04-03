import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsComponent} from '../details/details.component';
import {EditorComponent} from '../editor/editor.component';
import {ListeIndividuComponent} from '../liste-individu/liste-individu.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {FormComponent} from '../form/form.component';
import {RapportComponent} from '../rapport/rapport.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    DetailsComponent,
    EditorComponent,
    FormComponent,
    RapportComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class FormGridDisplayModule { }