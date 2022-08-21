import React, { useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";

function UpdateAnimal(props) {
  const tagRef = useRef();
  const genderRef = useRef();
  const dobRef = useRef();
  const genotypeRef = useRef();
  const phenotypeRef = useRef();
  const experimentIdRef = useRef();

  console.log(props.animalData);

  // ============ Update: Animal ========

  const updateAnimal = async (updatedAnimalData) => {
    const url = `http://localhost:4000/animals/${props.animalData.id}`;
    const res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(updatedAnimalData),
      headers: { "content-type": "application/json" },
    });
    await res.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //on Submit, data is passed to the database

    const animalData = {
      tag: Number(tagRef.current.value),
      gender: genderRef.current.value,
      birth_date: dobRef.current.value,
      genotype: genotypeRef.current.value,
      phenotype: phenotypeRef.current.value,
      experiment_id: Number(experimentIdRef.current.value),
    };
    // console.log(animalData);
    updateAnimal(animalData);
    props.handleSubmit();
  };

  return (
    <div className="styles.update">
      <Typography>Update Animal: </Typography>

      <TextField
        id="outlined-tag"
        label="tag"
        inputRef={tagRef}
        defaultValue={props.animalData.tag}
      />
      <TextField
        id="outlined-gender"
        label="gender"
        inputRef={genderRef}
        defaultValue={props.animalData.gender}
      />
      <TextField
        id="outlined-birth_date"
        label="DOB"
        inputRef={dobRef}
        defaultValue={props.animalData.birth_date}
      />
      <TextField
        id="outlined-genotype"
        label="genotype"
        inputRef={genotypeRef}
        defaultValue={props.animalData.genotype}
      />
      <TextField
        id="outlined-phenotype"
        label="phenotype"
        inputRef={phenotypeRef}
        defaultValue={props.animalData.phenotype}
      />
      <TextField
        id="outlined-experiementID"
        label="Experiment ID"
        inputRef={experimentIdRef}
        defaultValue={props.animalData.experiment_id}
      />
      <Button onClick={handleSubmit}>UPDATE ANIMAL</Button>
    </div>
  );
}

export default UpdateAnimal;
