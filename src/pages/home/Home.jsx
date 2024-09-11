import React, { useEffect, useState } from "react";
import FirstSection from "../../components/home/firstSection/FirstSection";
import EmsContracting from "../../components/home/emsContracting/EmsContracting";

const Home = () => {
  const [firstData, setFirstData] = useState([]);
  const [contractingData, setContractingData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/db.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setFirstData(data.home);
        setContractingData(data.contarcting);
      } catch (error) {
        console.log("There was an error fetching the data!", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {firstData && <FirstSection data={firstData} />}
      {contractingData && <EmsContracting data={contractingData} />}
    </>
  );
};

export default Home;
