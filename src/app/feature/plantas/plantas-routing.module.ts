import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlantaComponent } from './components/planta/planta.component';

const routes: Routes = [
  { path: '', component: PlantaComponent },
  // children: [
  //   {
  //     path: 'crear',
  //     component: CrearProductoComponent
  //   },
  //   {
  //     path: 'listar',
  //     component: ListarProductoComponent
  //   },
  //   {
  //     path: 'borrar',
  //     component: BorrarProductoComponent
  //   }
  // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantasRoutingModule {}
