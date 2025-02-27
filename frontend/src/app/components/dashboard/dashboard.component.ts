import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

interface ProductoVendido {
  nombre: string;
  cantidad: number;
  porcentaje: number;
  ingresos: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    NgChartsModule
  ],
  template: `
    <div class="dashboard-container">
      <div class="welcome-section">
        <mat-card>
          <mat-card-content>
            <div class="welcome-content">
              <div class="welcome-text">
                <h1>Bienvenido, Usuario</h1>
                <p>Resumen de actividad del sistema</p>
              </div>
              <div class="date-info">
                <p>{{ today | date:'fullDate' }}</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="dashboard-grid" [class.mobile-layout]="isMobile">
        <!-- Gráfico de Pedidos -->
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Pedidos Recientes</mat-card-title>
            <mat-card-subtitle>Últimos 7 días</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-container">
              <canvas baseChart
                [data]="pedidosChartData"
                [options]="pedidosChartOptions"
                [type]="'line'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Gráfico de Distribución de Ventas -->
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Distribución de Ventas</mat-card-title>
            <mat-card-subtitle>Por categoría</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-container">
              <canvas baseChart
                [data]="ventasChartData"
                [options]="ventasChartOptions"
                [type]="'doughnut'">
              </canvas>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Productos Más Vendidos -->
        <mat-card class="full-width-card">
          <mat-card-header>
            <mat-card-title>Productos Más Vendidos</mat-card-title>
            <mat-card-subtitle>Top 5 productos por volumen de ventas</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="productos-table">
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>% del Total</th>
                    <th>Ingresos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let producto of productosVendidos">
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.cantidad }}</td>
                    <td>
                      <div class="progress-container">
                        <mat-progress-bar mode="determinate" [value]="producto.porcentaje"></mat-progress-bar>
                        <span>{{ producto.porcentaje }}%</span>
                      </div>
                    </td>
                    <td>{{ producto.ingresos | currency }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Resumen de Actividad -->
        <mat-card class="summary-card">
          <mat-card-header>
            <mat-card-title>Resumen de Actividad</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="summary-item">
              <div class="summary-icon" style="background-color: #e3f2fd;">
                <mat-icon>shopping_cart</mat-icon>
              </div>
              <div class="summary-info">
                <h3>42</h3>
                <p>Pedidos Nuevos</p>
              </div>
            </div>
            <mat-divider></mat-divider>
            <div class="summary-item">
              <div class="summary-icon" style="background-color: #e8f5e9;">
                <mat-icon>payments</mat-icon>
              </div>
              <div class="summary-info">
                <h3>$12,500</h3>
                <p>Ingresos</p>
              </div>
            </div>
            <mat-divider></mat-divider>
            <div class="summary-item">
              <div class="summary-icon" style="background-color: #fff8e1;">
                <mat-icon>inventory_2</mat-icon>
              </div>
              <div class="summary-info">
                <h3>18</h3>
                <p>Facturas por Cobrar</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Actividad Reciente -->
        <mat-card class="activity-card">
          <mat-card-header>
            <mat-card-title>Actividad Reciente</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon" style="background-color: #bbdefb;">
                  <mat-icon>shopping_bag</mat-icon>
                </div>
                <div class="activity-details">
                  <p class="activity-title">Nuevo pedido #1234</p>
                  <p class="activity-time">Hace 2 horas</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon" style="background-color: #c8e6c9;">
                  <mat-icon>person_add</mat-icon>
                </div>
                <div class="activity-details">
                  <p class="activity-title">Nuevo cliente registrado</p>
                  <p class="activity-time">Hace 5 horas</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon" style="background-color: #ffecb3;">
                  <mat-icon>inventory</mat-icon>
                </div>
                <div class="activity-details">
                  <p class="activity-title">Actualización de Lista de Precio - Fabrica 1</p>
                  <p class="activity-time">Hace 1 día</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon" style="background-color: #f8bbd0;">
                  <mat-icon>local_shipping</mat-icon>
                </div>
                <div class="activity-details">
                  <p class="activity-title">Pedido #1230 enviado</p>
                  <p class="activity-time">Hace 1 día</p>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 1rem;
    }
    .welcome-section {
      margin-bottom: 1.5rem;
    }
    .welcome-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .welcome-text h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 500;
    }
    .welcome-text p {
      margin: 0.5rem 0 0;
      color: rgba(0, 0, 0, 0.6);
    }
    .date-info {
      color: rgba(0, 0, 0, 0.6);
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .mobile-layout {
      grid-template-columns: 1fr;
    }
    .chart-card {
      grid-column: span 1;
    }
    .full-width-card {
      grid-column: span 3;
    }
    .summary-card, .activity-card {
      grid-column: span 1;
    }
    .chart-container {
      height: 250px;
      position: relative;
    }
    .productos-table {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    th {
      background-color: #f5f5f5;
      font-weight: 500;
    }
    .progress-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .progress-container mat-progress-bar {
      flex-grow: 1;
    }
    .summary-item {
      display: flex;
      align-items: center;
      padding: 16px 0;
    }
    .summary-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 16px;
    }
    .summary-info h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .summary-info p {
      margin: 4px 0 0;
      color: rgba(0, 0, 0, 0.6);
    }
    .activity-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .activity-item {
      display: flex;
      align-items: center;
    }
    .activity-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
    }
    .activity-details {
      flex-grow: 1;
    }
    .activity-title {
      margin: 0;
      font-weight: 500;
    }
    .activity-time {
      margin: 4px 0 0;
      color: rgba(0, 0, 0, 0.6);
      font-size: 0.875rem;
    }
    @media (max-width: 1200px) {
      .dashboard-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .full-width-card {
        grid-column: span 2;
      }
    }
    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
      .chart-card, .full-width-card, .summary-card, .activity-card {
        grid-column: span 1;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  today = new Date();
  isMobile = false;

  // Datos para el gráfico de pedidos
  pedidosChartData: ChartData<'line'> = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [12, 19, 15, 8, 22, 18, 25],
        label: 'Pedidos',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        borderColor: 'rgba(63, 81, 181, 1)',
        pointBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)',
        fill: 'origin',
      }
    ]
  };

  pedidosChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Datos para el gráfico de ventas
  ventasChartData: ChartData<'doughnut'> = {
    labels: ['Automotriz', 'Electrónicos', 'Ferretero', 'Hogar', 'Otros'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(63, 81, 181, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(76, 175, 80, 0.7)',
          'rgba(255, 152, 0, 0.7)'
        ]
      }
    ]
  };

  ventasChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  };

  // Datos para la tabla de productos más vendidos
  productosVendidos: ProductoVendido[] = [
    { nombre: 'Tapa del Compresor', cantidad: 120, porcentaje: 28, ingresos: 36000 },
    { nombre: 'Bobina', cantidad: 85, porcentaje: 20, ingresos: 76500 },
    { nombre: 'Correa en V', cantidad: 75, porcentaje: 18, ingresos: 11250 },
    { nombre: 'Correa de Tiempo ', cantidad: 60, porcentaje: 14, ingresos: 24000 },
    { nombre: 'Kit de filtro', cantidad: 45, porcentaje: 11, ingresos: 9000 }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).pipe(
      map(result => result.matches)
    ).subscribe(matches => {
      this.isMobile = matches;
    });
  }

  ngOnInit() {}
}