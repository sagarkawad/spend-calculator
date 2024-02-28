import BeautifulPieChart from "./BeautifulPieChart.jsx";

export default function ResultTable({ resultData }) {
  return (
    <section className="result_table">
      <h2>Your Spend</h2>
      <BeautifulPieChart resultData={resultData} />
    </section>
  );
}
