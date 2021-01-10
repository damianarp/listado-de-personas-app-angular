import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PersonasService } from './personas.service';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggingService, PersonasService], // Se debe agregar el proveedor en el componente padre para poder utilizar el servicio en los componentes hijos sin necesidad de crearlo para cada uno de ellos.
  bootstrap: [AppComponent]
})
export class AppModule { }
