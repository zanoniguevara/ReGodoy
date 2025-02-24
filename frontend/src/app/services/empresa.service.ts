import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Empresa {
  Emp_Codigo: number;
  Emp_Nombre: string;
  Tip_Codigo: number;
  Tgn_Codigo: number;
  Est_CodigoEmp: number;
  Emp_NatJur: boolean;
  Nac_Codigo: number;
  Emp_Rif_Ci: string;
  Zon_Codigo: number;
  Emp_Contacto: string;
  Emp_Telefono1: string;
  Emp_Telefono2: string;
  Emp_Fax: string;
  Emp_Celular: string;
  Emp_Apellidos: string;
  Emp_Correo: string;
  Emp_Site: string;
  Emp_RifPerson: string;
  Emp_RUC: string;
  Emp_Descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private empresas: Empresa[] = [
    {
      Emp_Codigo: 1,
      Emp_Nombre: 'Empresa A',
      Tip_Codigo: 1,
      Tgn_Codigo: 1,
      Est_CodigoEmp: 1,
      Emp_NatJur: true,
      Nac_Codigo: 1,
      Emp_Rif_Ci: 'J-12345678-9',
      Zon_Codigo: 1,
      Emp_Contacto: 'Juan Pérez',
      Emp_Telefono1: '0212-1234567',
      Emp_Telefono2: '0212-7654321',
      Emp_Fax: '0212-1234568',
      Emp_Celular: '0414-1234567',
      Emp_Apellidos: 'Pérez',
      Emp_Correo: 'contacto@empresaa.com',
      Emp_Site: 'www.empresaa.com',
      Emp_RifPerson: 'V-12345678',
      Emp_RUC: 'RUC123456',
      Emp_Descripcion: 'Empresa dedicada a servicios tecnológicos'
    }
  ];
  private empresasSubject = new BehaviorSubject<Empresa[]>(this.empresas);

  getEmpresas(): Observable<Empresa[]> {
    return this.empresasSubject.asObservable();
  }

  addEmpresa(empresa: Omit<Empresa, 'Emp_Codigo'>): void {
    const newId = Math.max(...this.empresas.map(e => e.Emp_Codigo), 0) + 1;
    const newEmpresa = { ...empresa, Emp_Codigo: newId };
    this.empresas = [...this.empresas, newEmpresa];
    this.empresasSubject.next(this.empresas);
  }

  updateEmpresa(empresa: Empresa): void {
    this.empresas = this.empresas.map(e => 
      e.Emp_Codigo === empresa.Emp_Codigo ? empresa : e
    );
    this.empresasSubject.next(this.empresas);
  }

  deleteEmpresa(id: number): void {
    this.empresas = this.empresas.filter(e => e.Emp_Codigo !== id);
    this.empresasSubject.next(this.empresas);
  }
}