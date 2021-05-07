/* eslint-disable react-hooks/exhaustive-deps */
// React import, context import, custom hook imports
import React, { useContext } from "react";
import { LocationContext } from "../../App.jsx";
import { useIPG } from "../../api-calls/useIPG";
import { useFarmsense } from "../../api-calls/useFarmsense";

// Component imports
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import TheMoon from "../../components/Icons/TheMoon";
import MoonData from "../../components/DataDisplays/MoonData";

// SCSS import
import "./moonpage.scss";

const MoonPage = () => {
  const location = useContext(LocationContext).location;

  // API Call for ipgeolocation.
  const [ipgData, setIpgData] = useIPG(null);

  React.useEffect(() => {
    setIpgData(location);
  }, [location]);

  // API Call for Farmsense API. Date in Unix Timestamp.
  const [farmsenseData, setFarmsenseData] = useFarmsense(null);

  React.useEffect(() => {
    setFarmsenseData();
  }, [location]);

  // JSX to render when data is loading vs loaded.
  const loading = () => {
    return <h1>Howling...</h1>;
  };

  const loaded = () => {
    return (
      <div className="moon">
        <Header />
        <SearchForm />
        <TheMoon moonAzimuth={ipgData.moon_azimuth} />
        <MoonData ipgData={ipgData} farmsenseData={farmsenseData} />
      </div>
    );
  };;;

  return ipgData && farmsenseData ? loaded() : loading();
};

export default MoonPage;
