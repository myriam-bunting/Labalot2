import React, { useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";

function UpdateCage(props) {
  const nameRef = useRef();
  const experimentIdRef = useRef();
  console.log(props.cageData);

  // ============ Update: Cage ========

  const updateCage = async (updatedCageData) => {
    const url = `http://localhost:4000/cages/${props.cageData.id}`;
    const res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(updatedCageData),
      headers: { "content-type": "application/json" },
    });
    await res.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //on Submit, data is passed to the database

    const cageData = {
      name: nameRef.current.value,
      experiment_id: Number(experimentIdRef.current.value),
    };
    // console.log(cageData);
    updateCage(cageData);
    props.handleSubmit();
  };

  return (
    <div className="styles.update">
      <Typography>Update Cage: </Typography>

      <TextField
        id="outlined-cageName"
        label="Cage Name"
        inputRef={nameRef}
        defaultValue={props.cageData.name}
      />
      <TextField
        id="outlined-experiementID"
        label="Experiment ID"
        inputRef={experimentIdRef}
        defaultValue={props.cageData.experiment_id}
      />
      <Button onClick={handleSubmit}>UPDATE CAGE</Button>
    </div>
  );
}

export default UpdateCage;
