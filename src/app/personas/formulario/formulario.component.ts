import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;

  constructor(private loggingService: LoggingService,              // Inyectamos el servicio a traves del constructor utilizando el concepto de Dependency Injection
              private personasService: PersonasService) {
                this.personasService.saludar.subscribe( //Se emite el saludo, nos suscribimos a la emisión del mensaje, recibimos el indice y mandamos un alerta donde indicamos cuál es el indice que se ha seleccionado.
                  (indice: number) => alert("El indice es: " + indice)
                );
              }

  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    // Llamamos al método agregarPersona
    this.personasService.agregarPersona(persona1);
  }

}
