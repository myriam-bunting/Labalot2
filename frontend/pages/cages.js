import React, { useState, useEffect } from "react";

function Cages() {
  const [cages, setCages] = useState();

  useEffect(() => {
    viewCages();
  }, [cages]);

  const viewCages = async () => {
    const url = "/api/cages";
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);
    const cageData = await res.json();
    console.log(res.status);
    console.log(cageData);

    if (cageData.length === 0) {
      console.log("No cages here");
      alert(`You have yet to add cages!`);
    }
    cageData;
  };

  return <div>{cages && <CagesTable cageData={cageData}></CagesTable>}</div>;
}

export default Cages;
