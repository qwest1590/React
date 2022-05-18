import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { number, PropTypes } from "prop-types";

export default function Diagramm({ props }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const labels = [];
  const values = [];
  for (let key in props) {
    labels.push(key);
    values.push(props[key]);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["green", "blue", "violet", "red", "orange", "aqua"],
        borderWidth: 1,
        borderColor: "rgba(45, 19, 71, 0.36)",
      },
    ],
  };
  return (
    <div>
      <Pie className="pie" data={data} />;
    </div>
  );
}
Diagramm.propTypes = {
  props: PropTypes.objectOf(number),
};
