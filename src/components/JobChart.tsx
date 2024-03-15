import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const JobChart = ({ chartData }) => {
  const [activeIndex, setActiveIndex] = useState(-1); // Track active chart bar

  const data = {
    labels: chartData.map(({ month }) => month),
    datasets: [
      {
        label: 'Total Jobs',
        data: chartData.map(({ totalJobs }) => totalJobs),
        backgroundColor: '#600AFF', // Customize colors
        hoverBackgroundColor: '#2980b9', // Customize hover colors
      },
      {
        label: 'Total Candidates',
        data: chartData.map(({ totalCandidates }) => totalCandidates),
        backgroundColor: '#DACCF4', // Customize colors
        hoverBackgroundColor: '#C9AC55', // Customize hover colors
      },
    ],
  };

  const options = {
    indexAxis: 'x', // Vertical bars
    maintainAspectRatio: false, // Enable responsive resizing
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 50, // Adjust based on expected values
          },
          gridLines: {
            display: false , // Show grid lines
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'right',
        formatter: (value) => `$${value}`, // Display dollar signs
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.formattedValue}`, // Custom tooltip format
        },
      },
      legend: {
        display: false, // Show legend
        position: 'right', // Place legend on the right
      },
    },
  };

  return (
    <div className=' max-w-md flex justify-center m-4  '> 
      <Bar
        data={data}
        options={options}
        onClick={(event) => setActiveIndex(event.native.index)}
        activeIndex={activeIndex === -1 ? null : activeIndex} // Handle null for hover styling
      />
    </div>
  );
};

export default JobChart;
