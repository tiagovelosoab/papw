import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { AbrefechaComponent } from './abrefecha/abrefecha.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormcontatoComponent } from './formcontato/formcontato.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    AbrefechaComponent,
    DiretivasComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    FormcontatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
