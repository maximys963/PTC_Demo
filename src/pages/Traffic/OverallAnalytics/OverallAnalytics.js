import React, { useRef, useEffect } from 'react';
import { Typography } from 'antd';
import Chart from 'chart.js';
import styles from './OverallAnalytics.module.sass';

const { Title } = Typography;

const OverallAnalytics = (props) => {
  const pieChartRef = useRef();
  const barChartRef = useRef();

  useEffect(() => {
    const customPieChartRef = pieChartRef.current.getContext('2d');
    const customBarChartRef = barChartRef.current.getContext('2d');

    new Chart(customPieChartRef, {
      type: 'pie',
      data: {
        labels: [
          'Маршрутні таксі',
          'BlaBlaCar',
          'Таксі',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [60, 10, 30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        }],
      },
    });

    new Chart(customBarChartRef, {
      type: 'bar',
      data: {
        labels: ['Таксі', 'Маршрутне таксі', 'BlaBlaCar', 'Велосипед', 'Електросамокат'],
        datasets: [{
          label: 'Швидкість',
          data: [60, 40, 65, 25, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
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
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Title level={3}>Співвідношення використання транспотру</Title>
      </div>
      <div className={styles.chart_container}>
        <div className={styles.chart_wrapper}>
          <canvas ref={pieChartRef} />
        </div>
      </div>
      <div className={styles.title_container}>
        <Title level={3}>Швидкість пересування</Title>
      </div>
      <div className={styles.chart_container}>
        <div className={styles.chart_wrapper}>
          <canvas ref={barChartRef} />
        </div>
      </div>
    </div>
  );
};

export default OverallAnalytics;
