import { Component } from '@angular/core';
import { ChartOptions, ChartTypeRegistry,ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-cards',
  templateUrl: './chart-cards.component.html',
  styleUrls: ['./chart-cards.component.css'],
})
export class ChartCardsComponent {

//chart-line 1st card

  barChartType: keyof ChartTypeRegistry = 'line';

  public barChartOptions = {
    title: 'title',
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },

      point: {
        radius: 8,
        borderWidth: 4,
      },
    },

    responsive: true,
  };
  public barChartLabels = [
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
  ];

  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 49], label: 'Series A' },
  ];


//chart-lines 2st card


  barChartType2: keyof ChartTypeRegistry = 'line';

  public barChartOptions2 = {
    title: 'title',
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },

      point: {
        radius: 8,
        borderWidth: 4,
      },
    },

    responsive: true,
   
   

  };
  public barChartLabels2 = [
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
  ];


//chart-line 3st card

  public barChartLegend2 = true;

  public barChartData2 = [
    { data: [65, 59, 80, 81, 56, 55, 49], label: 'Series A' },
    { data: [6, 4, 83, 93, 65, 45, 68], label: 'Series B' },
    { data: [6, 40, 83, 93, 65, 45, 6], label: 'Series C' },
    { data: [6, 4, 83, 29, 10, 45, 68], label: 'Series D' },
  ];

 

  barChartType3: keyof ChartTypeRegistry = 'bar';
  barChartOptions3: ChartOptions = {
    responsive: true,
    scales: {
      x: { 
        beginAtZero: true,
      },
      y: { 
        beginAtZero: true,
      },
    },
  };

  barChartLabels3: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
  barChartLegend3 = true;

  barChartData3: ChartDataset[] = [
    {
      data: [65, 59, 80, 81, 56],
      label: 'Series A',
    },
  ];


//4th barchart




public barChartType4: ChartType = 'doughnut';
public barChartOptions4: ChartOptions = {
  responsive: true,
 // Use cutout to control the size of the central hole (80% in this example)
};

public barChartLabels4: string[] = ['Category 1', 'Category 2'];
public barChartLegend4 = true;

public barChartData4: ChartDataset[] = [
  {
    data: [65, 59, 80, 81, 56],
    label: 'Series A',
  },
];

//value of table 5th card
headings: string[] = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];
values: string[] = ['Value 1', 'Value 2', 'Value 3', 'Value 4'];


//bar 6


public barChartOptions6: ChartOptions = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};
public barChartLabels6: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
public barChartType6: ChartType = 'bar'; 
public barChartLegend6 = true;

public barChartData6: ChartDataset[] = [
  {
    data: [65, 59, 80, 81, 56],
    label: 'Series A',
    backgroundColor: 'blue', 
  },
];

}
