import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../app/inicio/inicio.component'
import { NosotrosComponent } from '../app/nosotros/nosotros.component'

const appRoutes: Routes = [
	{path:"", component:InicioComponent},
	{path:"nosotros", component:NosotrosComponent}
];

export const appRoutingProvides: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);