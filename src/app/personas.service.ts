import { Persona } from "./persona.model";

export class PersonasService {
  personas: Persona[] = [new Persona("Damian", "Arp"),
                         new Persona("Gaston", "Arp")];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }
}
