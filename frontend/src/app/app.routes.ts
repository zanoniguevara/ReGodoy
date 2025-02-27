import { Routes } from '@angular/router';
import { FabricaComponent } from './components/fabrica/fabrica.component';
import { FabricaFormComponent } from './components/fabrica/fabrica-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fabrica', component: FabricaComponent },
  { path: 'fabrica/nueva', component: FabricaFormComponent },
  { path: 'fabrica/editar/:id', component: FabricaFormComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];