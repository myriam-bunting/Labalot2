import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

function Experiments() {
  const [experiment, setExperiment] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "protocol_id", headerName: "Protocol", width: 150 },
    { field: "start_date", headerName: "Start Date", width: 150 },
    { field: "end_date", headerName: "End Date", width: 150 },
    { field: "description", headerName: "Description    ", width: 150 },
  ];

  const rows = [];

  const experimentDataRow = (experiments) => {
    for (const experiment of experiments) {
      rows.push({
        id: experiment.id,
        protocol_id: experiment.protocol_id,
        start_date: experiment.start_date,
        end_date: experiment.end_date,
        description: experiment.description,
      });
    }
  };

  // ========READ : Experiments

  const fetchExperiments = async () => {
    console.log();
    const url = "http://localhost:4000/experiments";
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);

    const experimentData = await res.json();

    console.log(res.status);
    console.log(experimentData);

    setExperiment(experimentData);

    //passing cage data down in the state
  };

  experimentDataRow(experiment);

  useEffect(() => {
    fetchExperiments();
  }, []);

  return (
    <div style={{ height: "90vh", width: "70vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={80}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default Experiments;
