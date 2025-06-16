import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Corrección aquí

import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { UserRole } from '../../core/auth/user.model';
import {
  LucideAngularModule,
  Car, Users, Route as RouteIcon, File, Settings, 
  HelpCircle, LogOut, Search, History, FileSearch, ScrollText,FileText, ChartBar,            // botones al pie
  HospitalIcon, FilePen, FilePenLine, FileMinus,
} from 'lucide-angular';

const iconMap = {
  Car,
  Users,
  Route: RouteIcon,
  File,
  Settings,
  ChartBar,
  HelpCircle,
  LogOut,
  Search,
  History,
  FileSearch,
  ScrollText,
  FileText,
  HospitalIcon,
  FilePen,
  FilePenLine,
  FileMinus
  
};

interface SidebarLink {
  label: string;
  icon: keyof typeof iconMap; // lucide icon name
  route: string;
}

const LINKS: Record<UserRole, SidebarLink[]> = {
  ADMIN: [
    { label: 'Traslados Programados', icon: 'FileText', route: '/traslados' },
    { label: 'Informe Comisión', icon: 'FileSearch', route: '/informecomision' },
    { label: 'Pliego Comisión', icon: 'ScrollText', route: '/pliego-comision' },
    {label: 'Registro de funcionarios', icon: 'FilePenLine', route:'/registro-funcionarios'},
    {label: 'Solicitud de viaticos y pasajes', icon: 'FileMinus', route:'viaticos-pasajes'},
    {label: 'Comprobacion del pliego de comision', icon:'FilePen', route:'comprobacion'},
    { label: 'Usuarios', icon: 'Users', route: '/usuarios' },
    { label: 'Vehículo', icon: 'Car', route: '/vehiculo' },
    { label: 'Viajes', icon: 'Route', route: '/viajes' },
    { label: 'Gráficos', icon: 'ChartBar', route: '/graficos' },
     { label: 'Especialidades', icon: 'HospitalIcon', route: '/especialidades' },
    { label: 'Historial', icon: 'History', route: '/historial' },
    { label: 'Configuración', icon: 'Settings', route: '/configuracion' }
    
  ],
  SUBADMIN: [
    { label: 'Traslados Programados', icon: 'FileText', route: '/traslados' },
    { label: 'Informe Comisión', icon: 'FileSearch', route: '/informecomision' },
    { label: 'Pliego Comisión', icon: 'ScrollText', route: '/pliego-comision' },
    {label: 'Registro de funcionarios', icon: 'FilePenLine', route:'/registro-funcionarios'},
    {label: 'Solicitud de viaticos y pasajes', icon: 'FileMinus', route:'viaticos-pasajes'},
    {label: 'Comprobacion del pliego de comision', icon:'FilePen', route:'comprobacion'},
    { label: 'Viajes', icon: 'Route', route: '/viajes' },
    { label: 'Historial', icon: 'History', route: '/historial' }
  ],
  
  USER: [
    { label: 'Solicitud traslados', icon: 'FileText', route: '/formatos' },
    { label: 'Informe Comisión', icon: 'FileSearch', route: '/informecomision' },
    { label: 'Pliego Comisión', icon: 'ScrollText', route: '/pliego-comision' },
    {label: 'Registro de funcionarios', icon: 'FilePenLine', route:'/registro-funcionarios'},
    {label: 'Solicitud de viaticos y pasajes', icon: 'FileMinus', route:'viaticos-pasajes'},
    {label: 'Comprobacion del pliego de comision', icon:'FilePen', route:'comprobacion'},
    { label: 'Historial', icon: 'History', route: '/historial' }
  ],
  
};
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule
],
  templateUrl: './sidebar.component.html',
  //styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() role: UserRole = 'USER';

  readonly icons = iconMap;

  constructor(private auth: AuthService, private router: Router) {}

  get links(): SidebarLink[] {
    return LINKS[this.role];
  }

  logout() {
    this.auth.logout(); // Llama al servicio de logout
    localStorage.clear(); // Limpiar cualquier información persistida en el almacenamiento local
    sessionStorage.clear(); // Limpiar el almacenamiento de sesión si es necesario
    this.router.navigate(['/login']); // Redirige al login
  }

  user = {
    name: 'John Doe',
    role: 'Product Designer',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
  };
}

