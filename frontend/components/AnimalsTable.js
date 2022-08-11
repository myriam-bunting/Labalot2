import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "tag", headerName: "Tag", width: 80 },
  { field: "gender", headerName: "Gender", width: 80 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 80,
  },
  { field: "genotype", headerName: "Genotype", width: 100 },
  { field: "phenotype", headerName: "Phenotype", width: 100 },
  { field: "experiment_id", headerName: "experiment_id", width: 80 },
];

const rows = [
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

export default function DataTable({ animalData }) {
  let today = new Date();
  let birth_date = new Date(animalData.birth_date);
  console.log(animalData.birth_date);

  const Age = (startDate, endDate) => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  };
  for (const animal in animalData) {
    Age(animal.birth_date, today);
  }
  console.log(Age);

  const rows = [];

  const animalDataRow = (animals) => {
    for (const animal of animals) {
      rows.push({
        id: animal.id,
        tag: animal.tag,
        gender: animal.gender,
        age: Age,
        genotype: animal.genotype,
        phenotype: animal.phenotype,
        experiment_id: animal.experiment_id,
      });

      //add number of animals
    }
    console.log(`rows ${rows}`);
  };
  animalDataRow(animalData);

  console.log(`rows ${rows}`);

  return (
    <div style={{ height: "90vh", width: "90vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
      />
    </div>
  );
}
