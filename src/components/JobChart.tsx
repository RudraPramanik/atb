import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const JobChart = ({ chartData }) => {
  const [activeIndex, setActiveIndex] = useState(-1); 

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

  const options = {
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
            display: false , 
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        formatter: (value) => `$${value}`, 
      },
      // Enable tooltips
      tooltip: {
        enabled: true, 
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.formattedValue}`, // Custom tooltip format
        },
      },
      // Show legend
      // Place legend on the right
      legend: {
        display: false, 
        position: 'right', 
      },
    },
  };

  return (
    <div className=' max-w-md flex justify-center m-4  '> 
      <Bar
        data={data}
        options={options}
        onClick={(event) => setActiveIndex(event.native.index)}
        activeIndex={activeIndex === -1 ? null : activeIndex} 
        // Handle null for hover styling
      />
    </div>
  );
};

export default JobChart;
