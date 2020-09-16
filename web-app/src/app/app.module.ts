import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { AbrefechaComponent } from './abrefecha/abrefecha.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    AbrefechaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
