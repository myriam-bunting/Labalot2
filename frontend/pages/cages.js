import React, { useState, useEffect } from "react";
import CagesTable from "../components/CagesTable";

function Cages() {
  const [cages, setCages] = useState([]);

  useEffect(() => {
    fetchCages();
  }, []);

  const fetchCages = async () => {
    const url = "/api/cages";
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

  return (
    <div>
      {cages && <CagesTable cageData={cages} type={cages}></CagesTable>}
    </div>
  );
}

export default Cages;
