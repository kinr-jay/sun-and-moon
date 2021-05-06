/* eslint-disable react-hooks/exhaustive-deps */
// React import, context import, custom hook imports
import React, { useContext } from "react";
import { LocationContext } from "../../App.jsx";
import { useIPG } from "../../api-calls/useIPG";

// Component imports
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import TheSun from "../../components/Icons/TheSun";
import SunData from "../../components/DataDisplays/SunData";

// SCSS import
import "./sunpage.scss";

const SunPage = () => {
  const location = useContext(LocationContext).location;

  // API call to ipgeolocation
  const [ipgData, setIpgData] = useIPG(null);

  React.useEffect(() => {
    setIpgData(location);
  }, [location]);


  // JSX to render when data is loading vs loaded.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const loaded = () => {
    return (
      <div className="sun">
        <Header />
        <SearchForm />
        <TheSun sunAzimuth={ipgData.sun_azimuth} />
        <SunData ipgData={ipgData} />
      </div>
    );
  };

  return ipgData ? loaded() : loading();
};

export default SunPage;
