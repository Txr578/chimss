import { RegistroFuncionariosComponent } from './pages/registro-funcionarios/registro-funcionarios.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';


export const routes: Routes = [
    {
      path: 'login',
      loadComponent: () =>
        import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
      path: '',
      loadComponent: () =>
        import('./layout/layout.component').then(m => m.LayoutComponent),
      canActivate: [AuthGuard],
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          loadComponent: () =>
            import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
        },
        // Nuevas rutas
        {
          path: 'vehiculo',
          loadComponent: () =>
            import('./pages/vehiculo/vehiculo.component').then(m => m.VehiculoComponent)
        },
        {
          path: 'usuarios',
          loadComponent: () =>
            import('./pages/usuarios/usuarios.component').then(m => m.UsuariosComponent)
        },
        {
          path: 'viajes',
          loadComponent: () =>
            import('./pages/viajes/viajes.component').then(m=>m.ViajesComponent)
        },
        {
          path: 'traslados',
          loadComponent: () =>
            import('./pages/traslados/traslados.component').then(m => m.TrasladosComponent)
        },
        {
          path: 'configuracion',
          loadComponent: () =>
            import('./pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent)
        },
        {
          path: 'especialidades',
          loadComponent: () =>
            import('./pages/especialidades/especialidades.component').then(m => m.EspecialidadesComponent)
        },
        {
          path: 'informecomision',
          loadComponent: () =>
            import('./pages/informecomision/informecomision.component').then(m => m.InformecomisionComponent)
        },
        {
          path: 'historial',
          loadComponent: () =>
            import('./pages/historial/historial.component').then(m => m.HistorialComponent)
        },
        {
          path: 'pliego-comision',
          loadComponent: () =>
            import('./pages/pliego-comision/pliego-comision.component').then(m => m.PliegoComisionComponent)
        },
        {
          path: 'graficos',
          loadComponent: () =>
            import('./pages/graficos/graficos.component').then(m => m.GraficosComponent)
        },
        {
          path: 'comprobacion',
          loadComponent: () =>
          import ('./pages/comprobacion/comprobacion.component').then(m => m.ComprobacionComponent)
        },
        {
          path: 'registro-funcionarios',
          loadComponent: () =>
          import ('./pages/registro-funcionarios/registro-funcionarios.component').then(m => m.RegistroFuncionariosComponent)
        },
        {
          path:'viaticos-pasajes',
          loadComponent: () =>
          import('./pages/viaticos-pasajes/viaticos-pasajes.component').then(m => m.ViaticosPasajesComponent)
        },
        // Fin nuevas rutas
        {
          path: '403',
          loadComponent: () =>
            import('./pages/forbidden/forbidden.component').then(m => m.ForbiddenComponent)
        }
      ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full'  }
  ];
