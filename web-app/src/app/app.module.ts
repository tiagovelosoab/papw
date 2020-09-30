import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { AbrefechaComponent } from './abrefecha/abrefecha.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    AbrefechaComponent,
    DiretivasComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
