import * as React from "react";
import { DataGrid, GridRow } from "@mui/x-data-grid";

export default function CagesTable({ cageData }) {
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 80 },
    { field: "experiment_id", headerName: "Experiment", width: 80 },
  ];

  const rows = [];

  const cageDataRow = (cages) => {
    for (const cage of cages) {
      rows.push({
        id: cage.id,
        name: cage.name,
        experiment_id: cage.experiment_id,
      });

      //add number of animals
    }
    console.log(`rows ${rows}`);
  };
  cageDataRow(cageData);
  //add number of animals

  console.log(`rows ${rows}`);

  // cageDataRow();

  return (
    <div style={{ height: "90vh", width: "90vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={80}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
