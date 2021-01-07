export class Persona {
  /*  ------> Se puede crear asi:
  nombre: string;
  apellido: string;

  constructor(nombre:string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  */
 /* -------> o así, con una sintaxis más simplificada: */
  constructor(public nombre:string, public apellido: string){}
}
