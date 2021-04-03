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
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavMenuComponent,
    ListeIndividuComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormGridDisplayModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule
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
