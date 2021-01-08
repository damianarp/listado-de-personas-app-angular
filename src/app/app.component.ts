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

  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
