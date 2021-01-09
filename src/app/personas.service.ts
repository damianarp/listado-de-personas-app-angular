import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";

@Injectable() // Se utiliza para inyectar un servicio (LoggingService) dentro de otro (PersonasService)

export class PersonasService {
  personas: Persona[] = [new Persona("Damian", "Arp"),
                         new Persona("Gaston", "Arp")];

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Agregamos persona: " + persona.nombre + " " + persona.apellido);
    this.personas.push(persona);
  }
}
