import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import {DetailComponent, DetailComponentDialog} from './detail/detail.component';
import {ProfileService} from "./profile.service";
import { ProfileCopmetitionComponent } from './profile-copmetition/profile-copmetition.component';
import {CompetitionService} from "./competition.service";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    DetailComponent,
    ProfileCopmetitionComponent,
    DetailComponentDialog
  ],
  entryComponents: [
    DetailComponentDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [ProfileService, CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
