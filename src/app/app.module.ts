import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IndividuService} from './individu.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EditorComponent } from './editor/editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditorComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [IndividuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
