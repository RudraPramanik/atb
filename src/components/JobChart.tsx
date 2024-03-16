import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface ChartDataItem {
  month: string;
  totalJobs: number;
  totalCandidates: number;
}

// Added type annotations to the exported interface for clarity
export interface ChartComponentProps {
  chartData: ChartDataItem[];
}

const JobChart: React.FC<ChartComponentProps> = ({ chartData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const data = {
    labels: chartData.map(({ month }) => month),
    datasets: [
      {
        label: 'Total Jobs',
        data: chartData.map(({ totalJobs }) => totalJobs),
        backgroundColor: '#600AFF',
        hoverBackgroundColor: '#2980b9',
      },
      {
        label: 'Total Candidates',
        data: chartData.map(({ totalCandidates }) => totalCandidates),
        backgroundColor: '#DACCF4',
        hoverBackgroundColor: '#C9AC55',
      },
    ],
  };

  const options:any = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 50,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        formatter: (value:number) => `$${value}`,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context:any) => `${context.dataset.label}: $${context.formattedValue}`,
        },
      },
      legend: {
        display: false,
        position: 'right',
      },
    },
  };

  return (
    <div className="max-w-md flex justify-center m-4">
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default JobChart;
