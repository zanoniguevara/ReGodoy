import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService, Empresa } from '../../services/empresa.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fabrica-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule
  ],
  template: `
    <div class="form-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ isEditing ? 'Editar' : 'Nueva' }} Empresa</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="form-fields">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Nombre de la Empresa</mat-label>
              <input matInput [(ngModel)]="empresa.Emp_Nombre" required>
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Código de Tipo</mat-label>
                <input matInput type="number" [(ngModel)]="empresa.Tip_Codigo">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Código TGN</mat-label>
                <input matInput type="number" [(ngModel)]="empresa.Tgn_Codigo">
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Código de Estado</mat-label>
                <input matInput type="number" [(ngModel)]="empresa.Est_CodigoEmp">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Naturaleza Jurídica</mat-label>
                <mat-select [(ngModel)]="empresa.Emp_NatJur">
                  <mat-option [value]="true">Jurídica</mat-option>
                  <mat-option [value]="false">Natural</mat-option>
                </mat-select>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Código de Nacionalidad</mat-label>
                <input matInput type="number" [(ngModel)]="empresa.Nac_Codigo">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>RIF/CI</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Rif_Ci">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Código de Zona</mat-label>
              <input matInput type="number" [(ngModel)]="empresa.Zon_Codigo">
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Nombre de Contacto</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Contacto">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Apellidos</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Apellidos">
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Teléfono 1</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Telefono1">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Teléfono 2</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Telefono2">
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Fax</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Fax">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Celular</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_Celular">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Correo Electrónico</mat-label>
              <input matInput type="email" [(ngModel)]="empresa.Emp_Correo">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Sitio Web</mat-label>
              <input matInput [(ngModel)]="empresa.Emp_Site">
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>RIF Personal</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_RifPerson">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>RUC</mat-label>
                <input matInput [(ngModel)]="empresa.Emp_RUC">
              </mat-form-field>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Descripción</mat-label>
              <textarea matInput [(ngModel)]="empresa.Emp_Descripcion" rows="3"></textarea>
            </mat-form-field>
          </div>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-button (click)="cancelar()">Cancelar</button>
          <button mat-raised-button color="primary" (click)="guardar()">
            {{ isEditing ? 'Actualizar' : 'Crear' }}
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .form-container {
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .form-fields {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .form-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .form-row mat-form-field {
      flex: 1;
      min-width: 200px;
    }
    .full-width {
      width: 100%;
    }
    @media (max-width: 599px) {
      .form-row {
        flex-direction: column;
        gap: 0;
      }
      .form-row mat-form-field {
        width: 100%;
      }
    }
  `]
})
export class FabricaFormComponent implements OnInit {
  empresa: Omit<Empresa, 'Emp_Codigo'> = {
    Emp_Nombre: '',
    Tip_Codigo: 0,
    Tgn_Codigo: 0,
    Est_CodigoEmp: 0,
    Emp_NatJur: true,
    Nac_Codigo: 0,
    Emp_Rif_Ci: '',
    Zon_Codigo: 0,
    Emp_Contacto: '',
    Emp_Telefono1: '',
    Emp_Telefono2: '',
    Emp_Fax: '',
    Emp_Celular: '',
    Emp_Apellidos: '',
    Emp_Correo: '',
    Emp_Site: '',
    Emp_RifPerson: '',
    Emp_RUC: '',
    Emp_Descripcion: ''
  };
  isEditing = false;
  private empresaId: number | null = null;

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.empresaId = Number(id);
      this.empresaService.getEmpresas().subscribe(empresas => {
        const empresa = empresas.find(e => e.Emp_Codigo === this.empresaId);
        if (empresa) {
          const { Emp_Codigo, ...empresaData } = empresa;
          this.empresa = empresaData;
        }
      });
    }
  }

  guardar() {
    if (this.isEditing && this.empresaId) {
      this.empresaService.updateEmpresa({
        ...this.empresa,
        Emp_Codigo: this.empresaId
      });
    } else {
      this.empresaService.addEmpresa(this.empresa);
    }
    this.router.navigate(['/fabrica']);
  }

  cancelar() {
    this.router.navigate(['/fabrica']);
  }
}