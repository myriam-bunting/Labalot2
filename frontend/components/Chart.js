import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function Chart(props) {
  const animalSeedData = [
    {
      id: 6,
      tag: "652",
      gender: "female",
      age: 3,
      genotype: "APNKO",
      phenotype: "mental degradation",
      experiment_id: "54",
    },
    {
      id: 1,
      tag: "345",
      gender: "female",
      age: 8,
      genotype: "APNKO",
      phenotype: "mental degradation",
      experiment_id: "54",
    },
    {
      id: 2,
      tag: "243",
      gender: "male",
      age: 16,
      genotype: "APNKO",
      phenotype: "mental degradation",
      experiment_id: "24",
    },
    {
      id: 3,
      tag: "348",
      gender: "female",
      age: 8,
      genotype: "APNKO/5XFAD",
      phenotype: "none",
      experiment_id: "54",
    },
    {
      id: 4,
      tag: "352",
      gender: "male",
      age: 12,
      genotype: "APNKO/5XFAD",
      phenotype: "none",
      experiment_id: "NULL",
    },
    {
      id: 5,
      tag: "362",
      gender: "male",
      age: 13,
      genotype: "5XFAD",
      phenotype: "none",
      experiment_id: "NULL",
    },
  ];

  const barColors = [
    "#2a9ed6",
    "#ef3935",
    "#20a67a",
    "#efa92e",
    "purple",
    "#ef3935",
  ];
  // const keys = Object.keys(animalSeedData);

  const xValues = animalSeedData.map((data) => {
    return data.genotype;
  });
  console.log(`THESE ARE MY ${keys}`);
  const counts = {};
  const sampleArray = ["a", "a", "b", "c"];

  const yValues = sampleArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts);

  return (
    <div>
      <Doughnut
        data={{
          labels: [30, 40, 20, 10],
          datasets: [
            {
              label: "Genotype Summary",
              backgroundColor: barColors,
              data: yValues,
              hoverOffset: 4,
            },
          ],
        }}
        options={[{ legend: { display: false } }]}
      />
    </div>
    // </div>
  );
}

export default Chart;
