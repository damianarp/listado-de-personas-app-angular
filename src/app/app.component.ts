import { PersonasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

}
