import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import "chart.js/auto";

export default function DisplayChart() {
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
  const xValues = Object.keys(animalSeedData[0]);
  console.log(xValues);

  const data = [];
  const yValues = () => {
    for (const item of animalSeedData) {
      data.push(item.genotype);
    }

    console.log(yValues);

    //============ Chart

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["APNKO", "5XFAD", "APN/5XFAD", "tbc"],
        datasets: [
          {
            label: "genotype",
            data: [20, 15, 2, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutoutPercentage: 40,
        responsive: false,
      },
    });

    return (
      <div className="doughnut" id="doughnut">
        {/* <Doughnut /> */}
        {myChart}
      </div>
      // </div>
    );
  };
}
