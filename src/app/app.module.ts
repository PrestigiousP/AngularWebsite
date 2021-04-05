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
import {AuthAccessGuard} from './guards/auth-access.guard';
import {FormGridDisplayModule} from './form-grid-display/form-grid-display.module';
import {ListeIndividuComponent} from './liste-individu/liste-individu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './services/RequestInterceptor';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { RapportHeuresHebdoComponent } from './rapport/rapport-heures-hebdo/rapport-heures-hebdo.component';
import { RapportAnnuelComponent } from './rapport/rapport-annuel/rapport-annuel.component';
import { RapportHeuresMensuelComponent } from './rapport/rapport-heures-mensuel/rapport-heures-mensuel.component';
import { RapportNombrePersonnesComponent } from './rapport/rapport-nombre-personnes/rapport-nombre-personnes.component';
import {fakeBackendProvider} from './services/fake-backend-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    ListeIndividuComponent,
    RapportHeuresHebdoComponent,
    RapportAnnuelComponent,
    RapportHeuresMensuelComponent,
    RapportNombrePersonnesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormGridDisplayModule,
    HttpClientModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
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
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
