import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="menu">
      <ul>
        <li><a routerLink="/fabrica" routerLinkActive="active">Fabrica</a></li>
        <li><a routerLink="/clientes" routerLinkActive="active">Clientes</a></li>
        <li><a routerLink="/productos" routerLinkActive="active">Productos</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .menu {
      background-color: #333;
      padding: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
    }
    a:hover, a.active {
      background-color: #555;
      border-radius: 4px;
    }
  `]
})
export class MenuComponent {}