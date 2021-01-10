import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,         //Agregamos los servicios que utilicemos en el constructor
              private personasService: PersonasService) {

  }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }


}
