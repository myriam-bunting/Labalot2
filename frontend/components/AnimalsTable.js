import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", flex: 0, minWidth: 60 },
  { field: "tag", headerName: "Tag", flex: 1, minWidth: 80 },
  { field: "gender", headerName: "Gender", flex: 1, minWidth: 80 },
  {
    field: "age",
    headerName: "Age",

    flex: 1,
    minWidth: 80,
  },
  {
    field: "genotype",
    headerName: "Genotype",
    width: 100,
    flex: 1,
    minWidth: 80,
  },
  { field: "phenotype", headerName: "Phenotype", flex: 1, minWidth: 80 },
  {
    field: "experiment_id",
    headerName: "Experiment Id",
    flex: 1,
    minWidth: 80,
  },
];

export default function DataTable({ animalData }) {
  let today = new Date();
  //today ==> string

  console.log("My animal data is :", animalData);
  // console.log("One animal birthdate is :", animalData[0].birth_date);

  const Age = (startDate, endDate) => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    console.log(msInWeek);

    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  };
  console.log(Age("20221908", "20221907"));

  const ageToday = () => {
    for (const animal in animalData) {
      Age(animalData[animal].birth_date, today);
    }
  };

  ageToday();

  const rows = [];

  const animalDataRow = (animals) => {
    for (const animal of animals) {
      rows.push({
        id: animal.id,
        tag: animal.tag,
        gender: animal.gender,
        age: animal.birth_date.split("T")[0],
        genotype: animal.genotype,
        phenotype: animal.phenotype,
        experiment_id: animal.experiment_id,
      });

      //add number of animals
    }
  };
  animalDataRow(animalData);

  return (
    <div style={{ height: "90vh", width: "90vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // columns={[ { field: 'id', flex: 1, minWidth: 150, }]}
        pageSize={100}
        rowsPerPageOptions={[100]}
      />
    </div>
  );
}
