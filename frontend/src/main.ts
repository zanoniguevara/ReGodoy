import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" 
                  [mode]="(isHandset$ | async) ? 'over' : 'side'"
                  [opened]="!(isHandset$ | async)" 
                  [fixedInViewport]="true"
                  [class.collapsed]="sidenavCollapsed">
        <mat-toolbar color="primary">Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link">
            <mat-icon class="menu-icon">dashboard</mat-icon>
            <span *ngIf="!sidenavCollapsed">Dashboard</span>
          </a>
          <a mat-list-item routerLink="/fabrica" routerLinkActive="active-link">
            <mat-icon class="menu-icon">business</mat-icon>
            <span *ngIf="!sidenavCollapsed">Fábricas</span>
          </a>
          <a mat-list-item routerLink="/clientes" routerLinkActive="active-link">
            <mat-icon class="menu-icon">people</mat-icon>
            <span *ngIf="!sidenavCollapsed">Clientes</span>
          </a>
          <a mat-list-item routerLink="/productos" routerLinkActive="active-link">
            <mat-icon class="menu-icon">inventory_2</mat-icon>
            <span *ngIf="!sidenavCollapsed">Productos</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>Sistema de Gestión</span>
          <span class="spacer"></span>
          <button mat-icon-button (click)="toggleSidenavCollapse()">
            <mat-icon>{{ sidenavCollapsed ? 'chevron_right' : 'chevron_left' }}</mat-icon>
          </button>
        </mat-toolbar>
        <div class="content-container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100%;
    }
    .sidenav {
      width: 250px;
      transition: width 0.3s ease-in-out;
    }
    .sidenav.collapsed {
      width: 60px;
    }
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .active-link {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .menu-icon {
      margin-right: 8px;
    }
    .content-container {
      padding: 20px;
    }
  `]
})
export class App implements OnInit {
  isHandset$: Observable<boolean>;
  sidenavCollapsed = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  ngOnInit() {}

  toggleSidenavCollapse() {
    this.sidenavCollapsed = !this.sidenavCollapsed;
    // No necesitamos manipular el DOM directamente, usamos la clase CSS
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});