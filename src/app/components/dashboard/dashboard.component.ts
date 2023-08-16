import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'brix-portal';
  public barLineOne: any;
  public donutOne: any;
  testRow = [1, 1, 1, 1, 1];
  constructor() {}
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.barLineOne = new Chart('barLineOne', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Shahul',
          'Shahul',
          'Shahul',
          'Shahul',
          'Shahul',
          'Shahul',
          'Shahul',
          'Shahul',
        ],
        datasets: [
          {
            label: 'Sales',
            data: ['447', '536', '552', '59', '62', '534', '523', '576'],
            backgroundColor: '#FF7354',
            borderColor: '#FF7354',
            borderJoinStyle: 'round',
            tension: 0.4,
          },
          {
            label: 'Revenue',
            type: 'bar',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: '#C0E4F6',
            barThickness: 40,
            borderRadius: {
              topLeft: 5,
              topRight: 5,
            },
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false, // This controls the visibility of grid lines
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                family: 'Nunito , sans-serif',
              },
            },
          },
        },
      },
    });

    this.donutOne = new Chart('donutOne', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Shahul', 'Shahul', 'Shahul', 'Shahul'],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574'],
            backgroundColor: [
              '#94D9FB',
              '#FFC941',
              '#FE9078',
              '#FFC7F2',
              '#BDB1FF',
              '#AFED99',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
