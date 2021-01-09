import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Damian", "Arp"), new Persona("Gaston", "Arp")];

  constructor(private loggingService: LoggingService) {

  }

  onPersonaAgregada(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre + " " + persona.apellido);
    this.personas.push(persona);
  }
}
