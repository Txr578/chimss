import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {
  vehiculos = [
    { tipo: 'Ambulancia', modelo: 'Ford Transit 2022', numeroEconomico: 'A-001', actualKilometraje:"20000", proximoServicio:"350000", totalKilometraje:"27780" },
    { tipo: 'Camión', modelo: 'Mercedes 2021', numeroEconomico: 'C-005', actualKilometraje:"20000", proximoServicio:"350000", totalKilometraje:"27780" },
    { tipo: 'Automóvil', modelo: 'Chevrolet Aveo 2020', numeroEconomico: 'V-012',  actualKilometraje:"20000", proximoServicio:"350000", totalKilometraje:"27780" }
  ];
}


