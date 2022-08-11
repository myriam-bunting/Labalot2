import React, { useState, useEffect } from "react";
import CagesTable from "../components/CagesTable";
import UpdateCage from "../components/UpdateCage";
import { Button } from "@mui/material";
import Layout from "../components/Layout";

function Cages() {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [handleUpdateSubmit, setHandleUpdateSubmit] = React.useState(0);
  const [cages, setCages] = useState([]);
  const [updateCage, setUpdateCage] = useState(false);

  const nameRef = React.useRef();
  const experimentIdRef = React.useRef();

  const fetchCages = async () => {
    const url = "http://localhost:4000/cages";
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);

    const cageData = await res.json();

    console.log(res.status);
    // console.log(cageData);

    setCages(cageData);
    //passing cage data down in the state
  };

  const handleDelete = async () => {
    const url = `http://localhost:4000/cages/${selectedRow}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
    console.log(res);

    const cageData = await res.json();

    console.log(res.status);
    // console.log(cageData);
    setSelectedRow(null);
    alert("Deleted");

    //passing cage data down in the state
  };

  useEffect(() => {
    fetchCages();
  }, []);

  const handleSelectModelChange = ([e]) => {
    setSelectedRow(e);
  };

  return (
    <Layout>
      {updateCage && selectedRow && (
        <UpdateCage
          cageData={cages.find(({ id }) => id === selectedRow)}
          sx={{ zIndex: 100 }}
          handleSubmit={() => {
            setHandleUpdateSubmit(handleUpdateSubmit + 1);
          }}
        ></UpdateCage>
      )}
      <div>
        <Button
          onClick={() => {
            console.log(cages, selectedRow);
            setUpdateCage(true);
          }}
        >
          EDIT CAGE
        </Button>
        <Button
          onClick={() => {
            if (confirm("are you sure")) {
              handleDelete();
            }
          }}
        >
          DELETE CAGE
        </Button>
        {cages && (
          <CagesTable
            handleSelectModelChange={handleSelectModelChange}
            cageData={cages}
          ></CagesTable>
        )}
      </div>
    </Layout>
  );
}

export default Cages;
