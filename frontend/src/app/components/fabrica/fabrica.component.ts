import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmpresaService, Empresa } from '../../services/empresa.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-fabrica',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatTooltipModule
  ],
  template: `
    <div class="fabrica-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Listado de Empresas</mat-card-title>
          <div class="spacer"></div>
          <button mat-raised-button color="primary" (click)="nuevaEmpresa()">
            <mat-icon>add</mat-icon> Nueva Empresa
          </button>
        </mat-card-header>
        <mat-card-content>
          <div class="responsive-grid">
            <mat-card *ngFor="let empresa of empresas" class="empresa-card">
              <mat-card-header>
                <mat-card-title>{{ empresa.Emp_Nombre }}</mat-card-title>
                <mat-card-subtitle>RIF: {{ empresa.Emp_Rif_Ci }}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p><strong>Contacto:</strong> {{ empresa.Emp_Contacto }} {{ empresa.Emp_Apellidos }}</p>
                <p><strong>Teléfono:</strong> {{ empresa.Emp_Telefono1 }}</p>
                <p><strong>Correo:</strong> {{ empresa.Emp_Correo }}</p>
                <mat-divider></mat-divider>
                <p class="descripcion"><strong>Descripción:</strong> {{ empresa.Emp_Descripcion }}</p>
              </mat-card-content>
              <mat-card-actions align="end">
                <button mat-icon-button color="primary" matTooltip="Editar" (click)="editEmpresa(empresa)">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" matTooltip="Eliminar" (click)="deleteEmpresa(empresa.Emp_Codigo)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .fabrica-container {
      padding: 1rem;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .empresa-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .empresa-card mat-card-content {
      flex-grow: 1;
    }
    .descripcion {
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    mat-card-header {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    @media (max-width: 599px) {
      .responsive-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FabricaComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.empresaService.getEmpresas().subscribe(empresas => {
      this.empresas = empresas;
    });
  }

  nuevaEmpresa() {
    this.router.navigate(['/fabrica/nueva']);
  }

  editEmpresa(empresa: Empresa) {
    this.router.navigate(['/fabrica/editar', empresa.Emp_Codigo]);
  }

  deleteEmpresa(id: number) {
    if (confirm('¿Está seguro de que desea eliminar esta empresa?')) {
      this.empresaService.deleteEmpresa(id);
    }
  }
}