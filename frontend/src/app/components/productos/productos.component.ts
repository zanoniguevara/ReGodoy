import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  template: `
    <div class="productos-container">
      <h2>Productos</h2>
      <p>Contenido de productos próximamente</p>
    </div>
  `,
  styles: [`
    .productos-container {
      padding: 2rem;
    }
  `]
})
export class ProductosComponent {}