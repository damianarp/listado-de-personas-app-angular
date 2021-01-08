import { Persona } from './../persona.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  // Por medio del decorador @ViewChild accedemos a las referencias locales del formulario.
  @ViewChild('nombreInput') nombreInput: ElementRef;      // al usar @ViewChild tenemos que especificar el tipo de la variable como ElementRef.
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); // Al utilizar un Element Ref debemos acceder al elemento HTML por medio de nativeElement y posteriormente al valor del elemento.
    this.personaCreada.emit(persona1);
  }

}
