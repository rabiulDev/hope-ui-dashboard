import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';


function FundDetailsChart({ chartID }) {



    const [selection, setSelection] = useState('one_week');

    const chart = {

        series: [{
            name: 'series1',
            data: [
                [new Date('08/01/2021').getTime(), 0],
                [new Date('08/02/2021').getTime(), 40],
                [new Date('08/03/2021').getTime(), 20],
                [new Date('08/04/2021').getTime(), 91],
                [new Date('08/05/2021').getTime(), -20],
                [new Date('08/06/2021').getTime(), 40],
                [new Date('08/07/2021').getTime(), 10],
                [new Date('09/05/2021').getTime(), 60],
                [new Date('09/06/2021').getTime(), 90],
                [new Date('09/07/2021').getTime(), 30],
                [new Date('09/08/2021').getTime(), 40],
                [new Date('10/10/2021').getTime(), 0],
                [new Date('11/11/2021').getTime(), 40],
            ]
        }],
        options: {
            chart: {
                type: 'area',
                id: chartID,
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 1,
                colors: ['#1176BC']
            },
            fill: {
                type: "gradient",
                gradient: {
                    gradientToColors: ['#0C79BC', 'rgba(12, 121, 188, 0)'],
                    opacityFrom: 0.6,
                    opacityTo: 0.1,
                }
            },
            xaxis: {
                // tickAmount: undefined,
                type: 'datetime',
                min: new Date('08/01/2021').getTime(),
                max: new Date('08/07/2021').getTime(),
                tickAmount: 6,
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                range: 1000,
            },
            tooltip: {
                x: {
                    formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                        if (series !== undefined) {
                            return (
                                `<div class='arrow'>
                                <span></span>
                            </div> 
                            <div class="arrow-box">
                                <h6>${series[seriesIndex][dataPointIndex]}%</h6> 
                                <div class='date'>
                                    <h6>
                                        ${new Date(value).toLocaleString('default', { day: 'numeric' })}
                                        ${new Date(value).toLocaleString('default', { month: 'short', year: 'numeric' })}
                                    </h6>
                                </div>
                            </div>`
                            )
                        }
                    },
                },
            },
            grid: {
                show: true,
                borderColor: 'rgba(110, 86, 248, 0.15)',
                strokeDashArray: 10,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
            }
        },

    };



    const updateData = (timeline) => {
        setSelection(timeline)
        switch (timeline) {
            case 'one_week':
                ApexCharts.exec(
                    chartID,
                    'zoomX',
                    new Date('08/01/2021').getTime(),
                    new Date('08/07/2021').getTime()
                )
                break
            case 'one_month':
                ApexCharts.exec(
                    chartID,
                    'zoomX',
                    new Date('08/01/2021').getTime(),
                    new Date('09/01/2021').getTime()
                )
                break
            case 'two_months':
                ApexCharts.exec(
                    chartID,
                    'zoomX',
                    new Date('08/01/2021').getTime(),
                    new Date('10/01/2021').getTime()
                )
                break
            case 'three_months':
                ApexCharts.exec(
                    chartID,
                    'zoomX',
                    new Date('08/01/2021').getTime(),
                    new Date('11/11/2021').getTime()
                )
                break
            default:
        }
    }

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);


        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);


        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="overview-chart-warp mb-20">
            <div className="overview-chart-top">
                <h1>Performance <span><CaretUpOutlined />15%</span></h1>
                <div className="toolbar">
                    <button onClick={() => updateData('one_week')} className={(selection === 'one_week' ? 'active' : '')}>
                        1W
                    </button>
                    <button onClick={() => updateData('one_month')} className={(selection === 'one_month' ? 'active' : '')}>
                        1M
                    </button>
                    <button onClick={() => updateData('two_months')} className={(selection === 'two_months' ? 'active' : '')}>
                        2M
                    </button>
                    <button onClick={() => updateData('three_months')} className={(selection === 'three_months' ? 'active' : '')}>
                        3M
                    </button>
                </div>
            </div>
            {loading ?
                <GraphLoader /> :
                <ReactApexChart
                    options={chart.options}
                    series={chart.series}
                    height="300px"
                    width="100%"
                    type="area"
                />
            }
        </div>
    )
}

export default FundDetailsChart