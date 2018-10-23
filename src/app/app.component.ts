import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-highcharts-project';
  barChart: any;
  lineChart: any;
  pieChart: any;

  ngOnInit() {
    this.doCreateBarChart();
    this.doCreadLineChart();
    this.doCreatePieChart();
  }

  doCreateBarChart() {
    this.barChart = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Bar Chart Example'
      },
      subtitle: {
        text: 'This in a simple bar chart example'
      },
      xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018'
      ],
      crosshair: true
      },
      yAxis: {
        title: {
          text: 'Jumlah'
          }
      },
      series: [
        {
          name: 'Facebook',
          data: [499, 715, 1064, 1292, 1440, 1760]
        }, {
          name: 'Twitter',
          data: [836, 788, 985, 934, 1060, 845]

        },
        {
          name: 'Instagram',
          data: [489, 388, 393, 414, 470, 483]
        }
      ]
    });
  }

  doCreadLineChart() {
    this.lineChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Line Chart Example'
      },
      subtitle: {
          text: 'This in a simple line chart example'
      },
      xAxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
      },
      yAxis: {
          title: {
              text: 'Jumlah'
          }
      },
      series: [{
        name: 'Facebook',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }],
    });
  }

  doCreatePieChart() {
    this.pieChart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Pie Chart Example'
      },
      subtitle: {
        text: 'This in a simple pie chart example'
      },
      series: [{
        name: 'Pengguna',
        data: [{
            name: 'Facebook',
            y: 61.41,
        }, {
            name: 'Twitter',
            y: 54.84
        }, {
            name: 'Instagram',
            y: 51.85
        }]
    }]
    });
  }
}
