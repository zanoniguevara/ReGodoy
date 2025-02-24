import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService, Empresa } from '../../services/empresa.service';

@Component({
  selector: 'app-fabrica-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-container">
      <h2>{{ isEditing ? 'Editar' : 'Nueva' }} Empresa</h2>
      
      <div class="empresa-form">
        <div class="form-group">
          <label for="Emp_Nombre">Nombre de la Empresa</label>
          <input id="Emp_Nombre" type="text" [(ngModel)]="empresa.Emp_Nombre" class="form-control">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Tip_Codigo">Código de Tipo</label>
            <input id="Tip_Codigo" type="number" [(ngModel)]="empresa.Tip_Codigo" class="form-control">
          </div>
          <div class="form-group">
            <label for="Tgn_Codigo">Código TGN</label>
            <input id="Tgn_Codigo" type="number" [(ngModel)]="empresa.Tgn_Codigo" class="form-control">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Est_CodigoEmp">Código de Estado</label>
            <input id="Est_CodigoEmp" type="number" [(ngModel)]="empresa.Est_CodigoEmp" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_NatJur">Naturaleza Jurídica</label>
            <select id="Emp_NatJur" [(ngModel)]="empresa.Emp_NatJur" class="form-control">
              <option [ngValue]="true">Jurídica</option>
              <option [ngValue]="false">Natural</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Nac_Codigo">Código de Nacionalidad</label>
            <input id="Nac_Codigo" type="number" [(ngModel)]="empresa.Nac_Codigo" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_Rif_Ci">RIF/CI</label>
            <input id="Emp_Rif_Ci" type="text" [(ngModel)]="empresa.Emp_Rif_Ci" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label for="Zon_Codigo">Código de Zona</label>
          <input id="Zon_Codigo" type="number" [(ngModel)]="empresa.Zon_Codigo" class="form-control">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Emp_Contacto">Nombre de Contacto</label>
            <input id="Emp_Contacto" type="text" [(ngModel)]="empresa.Emp_Contacto" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_Apellidos">Apellidos</label>
            <input id="Emp_Apellidos" type="text" [(ngModel)]="empresa.Emp_Apellidos" class="form-control">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Emp_Telefono1">Teléfono 1</label>
            <input id="Emp_Telefono1" type="text" [(ngModel)]="empresa.Emp_Telefono1" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_Telefono2">Teléfono 2</label>
            <input id="Emp_Telefono2" type="text" [(ngModel)]="empresa.Emp_Telefono2" class="form-control">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Emp_Fax">Fax</label>
            <input id="Emp_Fax" type="text" [(ngModel)]="empresa.Emp_Fax" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_Celular">Celular</label>
            <input id="Emp_Celular" type="text" [(ngModel)]="empresa.Emp_Celular" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label for="Emp_Correo">Correo Electrónico</label>
          <input id="Emp_Correo" type="email" [(ngModel)]="empresa.Emp_Correo" class="form-control">
        </div>

        <div class="form-group">
          <label for="Emp_Site">Sitio Web</label>
          <input id="Emp_Site" type="text" [(ngModel)]="empresa.Emp_Site" class="form-control">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="Emp_RifPerson">RIF Personal</label>
            <input id="Emp_RifPerson" type="text" [(ngModel)]="empresa.Emp_RifPerson" class="form-control">
          </div>
          <div class="form-group">
            <label for="Emp_RUC">RUC</label>
            <input id="Emp_RUC" type="text" [(ngModel)]="empresa.Emp_RUC" class="form-control">
          </div>
        </div>

        <div class="form-group">
          <label for="Emp_Descripcion">Descripción</label>
          <textarea id="Emp_Descripcion" [(ngModel)]="empresa.Emp_Descripcion" class="form-control" rows="3"></textarea>
        </div>

        <div class="form-actions">
          <button (click)="guardar()" class="btn btn-primary">
            {{ isEditing ? 'Actualizar' : 'Crear' }}
          </button>
          <button (click)="cancelar()" class="btn btn-secondary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .empresa-form {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1rem;
      flex: 1;
    }
    .form-row {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #444;
      font-weight: 500;
    }
    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    textarea.form-control {
      resize: vertical;
      min-height: 100px;
    }
    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      justify-content: flex-end;
    }
    .btn {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 0.5rem center;
      background-size: 1em;
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