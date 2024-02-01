import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageMessagesComponent } from './affichage-messages/affichage-messages.component';
import { AffichageUsersComponent } from './affichage-users/affichage-users.component';
import { TitreComponent } from './titre/titre.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageMessagesComponent,
    AffichageUsersComponent,
    TitreComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
