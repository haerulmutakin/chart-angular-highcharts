import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Chart, MapChart } from 'angular-highcharts';

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
  mapChart: any;

  constructor(
    private appSvc: AppService
  ) {

  }

  ngOnInit() {
    this.doCreateBarChart();
    this.doCreadLineChart();
    this.doCreatePieChart();
    this.doCreateMapChart();
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

  doCreateMapChart() {
    const dataId = [
        {code: 'id-3700', value: 0},
        {code: 'id-ac', value: 2},
        {code: 'id-ki', value: 20},
        {code: 'id-jt', value:  3},
        {code: 'id-be', value:  4},
        {code: 'id-bt', value:  5},
        {code: 'id-kb', value:  6},
        {code: 'id-bb', value:  7},
        {code: 'id-ba', value:  8},
        {code: 'id-ji', value:  9},
        {code: 'id-ks', value:  10},
        {code: 'id-nt', value:  11},
        {code: 'id-se', value:  12},
        {code: 'id-kr', value:  13},
        {code: 'id-ib', value:  14},
        {code: 'id-su', value:  15},
        {code: 'id-ri', value:  16},
        {code: 'id-sw', value:  17},
        {code: 'id-la', value:  18},
        {code: 'id-sb', value:  19},
        {code: 'id-ma', value:  20},
        {code: 'id-nb', value:  21},
        {code: 'id-sg', value:  22},
        {code: 'id-st', value:  23},
        {code: 'id-pa', value:  24},
        {code: 'id-jr', value:  25},
        {code: 'id-1024', value:  26},
        {code: 'id-jk', value:  27},
        {code: 'id-go', value:  28},
        {code: 'id-yo', value:  29},
        {code: 'id-kt', value:  30},
        {code: 'id-sl', value:  31},
        {code: 'id-sr', value:  32},
        {code: 'id-ja', value:  33}
  ];
    this.mapChart = new MapChart({
        title: {text: 'Higmaps example' },
        subtitle: {text: 'Country: Indonesia' },
        colorAxis: {
            min: 0
        },
        legend: {
            enabled: true
        },
        series: [{
            data: this.appSvc.getMapData(),
            mapData: this.appSvc.getMapCollections(),
            joinBy: ['hc-key', 'code'],
            name: 'Pendaftar',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '<strong>{point.value}</strong>'
            }
        }]
        });
  }
}
