import React, { useRef, useEffect } from 'react';
import { Typography } from 'antd';
import Chart from 'chart.js';
import styles from './TaxiAnalytics.module.sass';

const { Title } = Typography;

const TaxiAnalytics = (props) => {
  const pieChartRef = useRef();
  const barChartRef = useRef();

  useEffect(() => {
    const customPieChartRef = pieChartRef.current.getContext('2d');
    const customBarChartRef = barChartRef.current.getContext('2d');

    new Chart(customPieChartRef, {
      type: 'line',
      data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Десятка',
            data: [10, 7, 8, 7.5, 6, 8, 9.2],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
          {
            label: 'Євролайн',
            data: [10, 7.8, 6, 5, 6, 7, 6.7],
            fill: false,
            borderColor: '#2ecc71',
            tension: 0.1,
          },
          {
            label: 'Авангард',
            data: [10, 9.8, 9, 9.5, 9.3, 9.5, 9.9],
            fill: false,
            borderColor: '#27ae60',
            tension: 0.1,
          },
          {
            label: 'Ірпінь таксі',
            data: [8, 9.1, 9, 8, 7.5, 8, 9.1],
            fill: false,
            borderColor: '#9b59b6',
            tension: 0.1,
          },
          {
            label: 'Аврора',
            data: [10, 6.5, 5.2, 6.2, 7.4, 5.8, 5.3],
            fill: false,
            borderColor: '#f39c12',
            tension: 0.1,
          },
        ],
      },
    });

    new Chart(customBarChartRef, {
      type: 'bar',
      data: {
        labels: ['Десятка', 'Євролайн', 'Авангард', 'Ірпінь таксі', 'Аврора'],
        datasets: [{
          label: 'Відгуки',
          data: [246, 138, 49, 301, 93],
          backgroundColor: [
            'rgb(75, 192, 192)',
            '#2ecc71',
            '#27ae60',
            '#9b59b6',
            '#f39c12',
          ],
          borderColor: [
            'rgb(75, 192, 192)',
            '#2ecc71',
            '#27ae60',
            '#9b59b6',
            '#f39c12',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });

    // new Chart(customBarChartRef, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Десятка', 'Євролайн', 'Авангард', 'Ірпінь таксі', 'Аврора'],
    //     datasets: [
    //       {
    //         label: ['Десятка'],
    //         data: 246,
    //         backgroundColor: 'rgb(75, 192, 192)',
    //         borderColor: 'rgb(75, 192, 192)',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: 'Євролайн',
    //         data: [138],
    //         backgroundColor: '#2ecc71',
    //         borderColor: '#2ecc71',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: 'Авангард',
    //         data: [49],
    //         backgroundColor: '#27ae60',
    //         borderColor: '#27ae60',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: 'Ірпінь таксі',
    //         data: [301],
    //         backgroundColor: '#9b59b6',
    //         borderColor: '#9b59b6',
    //         borderWidth: 1,
    //       },
    //       {
    //         label: 'Аврора',
    //         data: [93],
    //         backgroundColor: '#f39c12',
    //         borderColor: '#f39c12',
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         display: true,
    //         ticks: {
    //           beginAtZero: true,
    //         },
    //       }],
    //     },
    //   },
    // });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Title level={3}>Порівняльна характеристика лідерів серед таксі</Title>
      </div>
      <div className={styles.chart_container}>
        <div className={styles.chart_wrapper}>
          <canvas ref={pieChartRef} />
        </div>
      </div>
      <div className={styles.title_container}>
        <Title level={3}>Кількість відгуків</Title>
      </div>
      <div className={styles.chart_container}>
        <div className={styles.chart_wrapper}>
          <canvas ref={barChartRef} />
        </div>
      </div>
    </div>
  );
};

export default TaxiAnalytics;
