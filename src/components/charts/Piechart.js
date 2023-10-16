import PropTypes from "prop-types";

import Chart from "./index";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 340;

const LEGEND_HEIGHT = 72;

// ----------------------------------------------------------------------

Piechart.propTypes = {
    chart: PropTypes.array,
    title: PropTypes.string,
    subheader: PropTypes.string,
    footer: PropTypes.node,
};

export default function Piechart({
    title,
    subheader,
    chart,
    footer,
    options,
    ...other
}) {
    const colors = ["#99A3AE", "#63D1F4", "#90EE90", "#26466D"];

    const chartSeries = chart?.map((i) => i.value);

    const chartOptions = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        colors,
        labels: chart?.map((i) => i.label),
        stroke: { colors: ["#ffffff"] },
        legend: { enabled: true, floating: true, horizontalAlign: "center" },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (value) => Number(value),
                title: {
                    formatter: (seriesName) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "95%",
                    legend: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        value: {
                            formatter: (value) => Number(value),
                        },
                        total: {
                            formatter: (w) => {
                                const sum = w.globals.seriesTotals.reduce(
                                    (a, b) => a + b,
                                    0
                                );
                                return fNumber(sum);
                            },
                        },
                    },
                },
            },
        },
        ...options,
    };

    return (
        <div style={{ padding: "10px" }}>
            <h4>{title}</h4>
            <Chart
                type="pie"
                series={chartSeries}
                options={chartOptions}
                height={200}
            />
        </div>
    );
}

