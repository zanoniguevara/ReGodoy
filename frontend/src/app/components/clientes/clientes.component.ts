import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <div class="clientes-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Clientes</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Contenido de clientes próximamente</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .clientes-container {
      padding: 1rem;
    }
  `]
})
export class ClientesComponent {}