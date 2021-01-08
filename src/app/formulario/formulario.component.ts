import { Persona } from './../persona.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();

  // Estas variables ya no se utilizan con local references porque ya estan pasadas en el método onAgregarPersona desde formulario.component.html y agregadas en el metodo que está mas abajo.
  //nombreInput: string;
  //apellidoInput: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){ // Se utiliza HTMLInputElement ya que se ha utilizado local references en un elemento html.
    let persona1 = new Persona(nombreInput.value, apellidoInput.value); // Accedemos al valor del elemento de tipo input con la propiedad value.
    this.personaCreada.emit(persona1);
  }

}
