import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const PieChart = () => {
  useEffect(() => {
    // ApexCharts options and config
    const getChartOptions = () => {
        return {
          series: [35.1, 23.5, 2.4, 5.4],
          colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
          chart: {
            height: 320,
            width: "100%",
            type: "donut",
          },
          stroke: {
            colors: ["transparent"],
            lineCap: "",
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: 20,
                  },
                  total: {
                    showAlways: true,
                    show: true,
                    label: "Unique visitors",
                    fontFamily: "Inter, sans-serif",
                    formatter: function (w) {
                      const sum = w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0)
                      return `${sum}k`
                    },
                  },
                  value: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: -20,
                    formatter: function (value) {
                      return value + "k"
                    },
                  },
                },
                size: "80%",
              },
            },
          },
          grid: {
            padding: {
              top: -2,
            },
          },
          labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return value + "k"
              },
            },
          },
          xaxis: {
            labels: {
              formatter: function (value) {
                return value  + "k"
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        }
      };

    // Check if the chart already exists
    if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
      chart.render();

      // Get all the checkboxes by their class name
    //   const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

      // Function to handle the checkbox change event
    //   function handleCheckboxChange(event, chart) {
    //     const checkbox = event.target;
    //     if (checkbox.checked) {
    //       switch (checkbox.value) {
    //         case 'desktop':
    //           chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
    //           break;
    //         case 'tablet':
    //           chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
    //           break;
    //         case 'mobile':
    //           chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
    //           break;
    //         default:
    //           chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
    //       }
    //     } else {
    //       chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    //     }
    //   }

      // Attach the event listener to each checkbox
    //   checkboxes.forEach((checkbox) => {
    //     checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
    //   });
    }
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (<>
         <div className="text-3xl font-semibold">Weekly Sales Stats</div>
    <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
      {/* ... (rest of your HTML code) ... */}
      <div className="py-6" id="donut-chart"></div>
    </div>
  </>
  );
};

export default PieChart;
