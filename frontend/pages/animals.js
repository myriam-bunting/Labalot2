import * as React from "react";
import DataTable from "../components/AnimalsTable";
import Layout from "../components/Layout";

function DashboardContent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // ================ Read : Fetch all animals
  const [viewAnimals, setViewAnimals] = React.useState(true);
  const [animals, setAnimals] = React.useState([]);
  const [viewCages, setViewCages] = React.useState(false);

  const handleViewCages = () => {
    setViewCages(!viewCages);
    setViewAnimals(false);
    console.log(`show me those cages baby`);
  };
  const handleViewAnimals = () => {
    setViewAnimals(true);
    console.log(`animals updated`);
  };

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

  return (
    <Layout>
      <DataTable animalData={animals} />
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
