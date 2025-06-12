import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios = [
    { nombre: 'Juan Pérez', matricula: 'C001', tipo: 'Chofer', curp: 'PEPJ850102HDFRRN09', rfc: 'PEPJ850102', asignacion:"usuario" },
    { nombre: 'Ana López', matricula: 'O002', tipo: 'Operador', curp: 'LOAA920312MDFLNS05', rfc: 'LOAA920312', asignacion:"subadministrador" },
    { nombre: 'Luis Soto', matricula: 'M003', tipo: 'Médico', curp: 'SOLU910524HDFLTR06', rfc: 'SOLU910524' , asignacion:"usuario"}
  ];
}

 

