import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  template: `
    <div class="clientes-container">
      <h2>Clientes</h2>
      <p>Contenido de clientes próximamente</p>
    </div>
  `,
  styles: [`
    .clientes-container {
      padding: 2rem;
    }
  `]
})
export class ClientesComponent {}