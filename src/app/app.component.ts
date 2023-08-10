import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
          {
            label: 'Revenue',
            type: 'bar',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: '#C0E4F6',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });

    this.donutOne = new Chart('donutOne', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Shahul', 'Shahul', 'Shahul', 'Shahul', 'Shahul', 'Shahul'],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
