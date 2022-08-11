import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Checkbox, Button } from "@mui/material";

export default function NewCage(props) {
  const [checked, setChecked] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);

  const nameRef = React.useRef();
  const experimentIdRef = React.useRef();

  // ========ANIMAL
  // const tagRef = React.useRef();
  // const genderRef = React.useRef();
  // const genotypeRef = React.useRef();
  // const phenotypeRef = React.useRef();
  // const birthDateRef = React.useRef();

  const handleCheck = (checked) => {
    setChecked(checked);
  };

  // ================ Create : Add new cage ======
  const addNewCage = async (cageData) => {
    const url = "http://localhost:4000/cages";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(cageData),
      headers: { "content-type": "application/json" },
    });
    const newCageData = await res.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //on Submit, data is passed to the database
    const cageData = {
      name: nameRef.current.value,
      experiment_id: Number(experimentIdRef.current.value),
      isBreeding: checked,
    };
    // console.log(cageData);
    addNewCage(cageData);

    setSubmit(true);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography>Add a new cage: </Typography>

        <TextField
          id="outlined-cageName"
          label="Cage Name"
          inputRef={nameRef}
        />
        <TextField
          id="outlined-experiementID"
          label="Experiment ID"
          inputRef={experimentIdRef}
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                checkbox={!checked}
                onChange={handleCheck}
              />
            }
            label="Breeding Cage"
          />
          <Button onClick={handleSubmit}>ADD CAGE</Button>
        </FormGroup>
        <br />
        <br />
      </div>
    </Box>
  );
}
