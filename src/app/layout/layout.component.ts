import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './layout.component.html',
 // styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(public auth: AuthService) {}
}
