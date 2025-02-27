import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <div class="productos-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Productos</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Contenido de productos próximamente</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .productos-container {
      padding: 1rem;
    }
  `]
})
export class ProductosComponent {}