import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.css'
  ]
})
export class CardComponent  {
  @Input() UrlPlanta: string = "#";
  @Input() NombrePlanta: string = "Nombre planta";
  @Input() Direccion: string = "Dirección";
  @Input() Barrio: string = "Barrio";
  @Input() Municipio: string = "Municipio";
}
