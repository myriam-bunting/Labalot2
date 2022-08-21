import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import styles from "../styles/Home.module.css";

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

  const xValues = animalSeedData.map((data) => {
    return data.genotype;
  });
  //maps data to find only genotypes

  const counts = {};
  const genoCount = xValues.map(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  //counts num of animals with each genotype
  console.log(counts);

  const yValues = Object.values(counts);
  //gets values of genptype count
  const labels = Object.keys(counts);
  //gets the genotypes for labels

  return (
    <div className={styles.chartWrapper}>
      <Doughnut
        data={{
          labels: labels,
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
