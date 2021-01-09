import { PersonasService } from './../personas.service';
import { Persona } from './../persona.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from './../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();     // Al usar los servicios ya no es necesario emitir el evento personaCreada ni tampoco crear esta variable.

  // Estas variables ya no se utilizan con local references porque ya estan pasadas en el método onAgregarPersona desde formulario.component.html y agregadas en el metodo que está mas abajo.
  //nombreInput: string;
  //apellidoInput: string;

  // Por medio del decorador @ViewChild accedemos a las referencias locales del formulario.
  @ViewChild('nombreInput') nombreInput: ElementRef;      // al usar @ViewChild tenemos que especificar el tipo de la variable como ElementRef.
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService: LoggingService,              // Inyectamos el servicio a traves del constructor utilizando el concepto de Dependency Injection
              private personasService: PersonasService) {}

  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); // Al utilizar un Element Ref debemos acceder al elemento HTML por medio de nativeElement y posteriormente al valor del elemento.

    // Al utilizar los servicios, ya no es necesario emitir el evento personaCeada.
    //this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personaCreada.emit(persona1);

    // Llamamos al método agregarPersona
    this.personasService.agregarPersona(persona1);
  }

}
