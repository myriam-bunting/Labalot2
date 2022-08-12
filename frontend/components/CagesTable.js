import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function CagesTable({ cageData, handleSelectModelChange }) {
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "experiment_id", headerName: "Experiment", width: 150 },
    { field: "isBreeding", headerName: "Breeding", width: 150 },
  ];

  const rows = [];

  const cageDataRow = (cages) => {
    for (const cage of cages) {
      rows.push({
        id: cage.id,
        name: cage.name,
        experiment_id: cage.experiment_id,
        isBreeding: cage.isBreeding,
      });

      //add number of animals
    }
  };

  cageDataRow(cageData);

  return (
    <div style={{ height: "90vh", width: "90vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={80}
        rowsPerPageOptions={[10]}
        onSelectionModelChange={handleSelectModelChange}
      />
    </div>
  );
}
