import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { EmpresaService, Empresa } from '../../services/empresa.service';

@Component({
  selector: 'app-fabrica',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="fabrica-container">
      <div class="header">
        <h2>Listado de Empresas</h2>
        <button (click)="nuevaEmpresa()" class="btn btn-primary">Nueva Empresa</button>
      </div>

      <ul class="empresas-list">
        <li class="empresa-item" *ngFor="let empresa of empresas">
          <div class="empresa-info">
            <div class="empresa-header">
              <span class="empresa-nombre">{{ empresa.Emp_Nombre }}</span>
              <span class="empresa-rif">RIF: {{ empresa.Emp_Rif_Ci }}</span>
            </div>
            <div class="empresa-details">
              <p><strong>Contacto:</strong> {{ empresa.Emp_Contacto }} {{ empresa.Emp_Apellidos }}</p>
              <p><strong>Teléfono:</strong> {{ empresa.Emp_Telefono1 }}</p>
              <p><strong>Correo:</strong> {{ empresa.Emp_Correo }}</p>
              <p><strong>Descripción:</strong> {{ empresa.Emp_Descripcion }}</p>
            </div>
          </div>
          <div class="empresa-actions">
            <button 
              (click)="editEmpresa(empresa)" 
              class="btn btn-edit"
            >
              Editar
            </button>
            <button 
              (click)="deleteEmpresa(empresa.Emp_Codigo)" 
              class="btn btn-delete"
            >
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .fabrica-container {
      padding: 2rem;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-edit {
      background-color: #28a745;
      color: white;
    }
    .btn-delete {
      background-color: #dc3545;
      color: white;
    }
    .empresas-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    .empresa-item {
      display: flex;
      justify-content: space-between;
      padding: 1.5rem;
      background-color: white;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .empresa-info {
      flex: 1;
    }
    .empresa-header {
      margin-bottom: 1rem;
    }
    .empresa-nombre {
      font-size: 1.25rem;
      font-weight: bold;
      color: #2c3e50;
      display: block;
    }
    .empresa-rif {
      color: #666;
      font-size: 0.9rem;
    }
    .empresa-details {
      color: #666;
    }
    .empresa-details p {
      margin: 0.5rem 0;
    }
    .empresa-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
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