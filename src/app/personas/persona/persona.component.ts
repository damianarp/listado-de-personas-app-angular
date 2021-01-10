import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){                                        // Creamos el método para emitir el saludo
    this.personasService.saludar.emit(this.indice);
  }

}
