import React from "react";
import { useQuery } from "react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Covid Cases Fluctuations",
    },
  },
};

const getData = (graphData: any) => {
  const labels = Object.keys(graphData?.deaths || {});

  const data = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: Object.values(graphData?.cases || {}).sort(
          (a: any, b: any) => a - b
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235)",
        tension: 0.3,
      },
      {
        label: "Recovered",
        data: Object.values(graphData?.recovered || {}).sort(
          (a: any, b: any) => a - b
        ),
        borderColor: "green",
        backgroundColor: "green",
        tension: 0.3,
      },
      {
        label: "Deaths",
        data: Object.values(graphData?.deaths || {}).sort(
          (a: any, b: any) => a - b
        ),
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.3,
      },
    ],
  };

  return data;
};

const CovidCasesGraph = () => {
  const { isLoading, data, error } = useQuery(
    "graphData",
    async () =>
      await (
        await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        )
      ).json()
  );

  const graph: any = getData(data);

  return (
    <>
      {!error ? (
        isLoading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : (
          <Line options={options} data={graph} />
        )
      ) : (
        <div className="text-center text-red-600">Something went wrong.</div>
      )}
    </>
  );
};

export default CovidCasesGraph;
