import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Les services
import {IntervenantService} from './services/intervenant.service';
import {MedecinService} from './services/medecin.service';
import {IndividuService} from './services/individu.service';

// Composants dans notre service
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthAccessGuard} from './login/auth-access.guard';
import {FormGridDisplayModule} from './form-grid-display/form-grid-display.module';
import {ListeIndividuComponent} from './liste-individu/liste-individu.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    ListeIndividuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormGridDisplayModule,
    HttpClientModule
  ],
  providers: [
    IndividuService,
    IntervenantService,
    MedecinService,
    AuthAccessGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
