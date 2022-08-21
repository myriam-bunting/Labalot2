import * as React from "react";
import DataTable from "../components/AnimalsTable";
import Layout from "../components/Layout";
import UpdateAnimal from "../components/UpdateAnimal";
import Button from "@mui/material/Button";

function DashboardContent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  // =============== Update Animals through UpdateAnimals component
  const [updateAnimal, setUpdateAnimal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [handleUpdateSubmit, setHandleUpdateSubmit] = React.useState(0);
  // ================ Read : Fetch all animals
  const [animals, setAnimals] = React.useState([]);

  React.useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    const url = "http://localhost:4000/animals";
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);

    const animalData = await res.json();

    console.log(res.status);
    console.log(animalData);

    setAnimals(animalData);
    //passing cage data down in the state
  };
  const handleSelectModelChange = ([e]) => {
    setSelectedRow(e);
  };

  return (
    <Layout>
      {updateAnimal && selectedRow && (
        <UpdateAnimal
          animalData={animals.find(({ id }) => id === selectedRow)}
          sx={{ zIndex: 100 }}
          handleSubmit={() => {
            setHandleUpdateSubmit(handleUpdateSubmit + 1);
          }}
        ></UpdateAnimal>
      )}
      <div>
        <Button
          onClick={() => {
            console.log(animals, selectedRow);
            setUpdateAnimal(true);
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
        {animals && (
          <DataTable
            handleSelectModelChange={handleSelectModelChange}
            animalData={animals}
          ></DataTable>
        )}
      </div>
      <DataTable animalData={animals} />
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
