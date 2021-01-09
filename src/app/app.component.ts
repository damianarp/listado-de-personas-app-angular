import { PersonasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,         //Agregamos los servicios que utilicemos en el constructor
              private personasService: PersonasService) {

  }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}
