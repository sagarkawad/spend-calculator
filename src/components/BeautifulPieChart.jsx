import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function BeautifulPieChart({ resultData }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const values = Object.keys(resultData).map((key) => resultData[key]);
  const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);

  const data = {
    labels: Object.keys(resultData),
    datasets: [
      {
        label: "Rs spent",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
      <h2>Total: {sum} Rs</h2>
    </>
  );
}
