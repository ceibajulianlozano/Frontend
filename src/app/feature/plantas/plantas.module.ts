import { NgModule } from '@angular/core';

import { PlantasRoutingModule } from './plantas-routing.module';
import { PlantaComponent } from './components/planta/planta.component';

@NgModule({
  declarations: [
    PlantaComponent
  ],
  imports: [
    PlantasRoutingModule
  ]
})
export class PlantasModule { }
