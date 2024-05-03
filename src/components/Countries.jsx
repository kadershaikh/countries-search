import React, { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  const inputStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "center"
  };

  return (
    <>
    <div>
        <input
          type="text"
          placeholder="Search for countries"
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
        />
      </div>
    <div style={containerStyle}>
      
      {filteredCountries.map((country) => (
        <div key={country.cca3} style={cardStyle} className="countryCard">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
    </>
  );
}

export default Countries;
