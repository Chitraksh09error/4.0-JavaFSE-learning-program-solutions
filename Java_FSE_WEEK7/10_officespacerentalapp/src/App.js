const App = () => {
  const element = "Office Space, At Affordable Range";
  const imageAttr = (
    <img
      src="https://www.investopedia.com/thmb/B-zS06NuMwi1uB3gv8mGTY01rP4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-656544055-19ddbae5e1e1448db35b3969022eb3d0.jpg"
      alt="Office"
      height="25%"
      width="25%"
    />
  );

  const officeObj = {
    name: "BIGB",
    rent: 1_80_000,
    address: "Chennai",
  };

  return (
    <div>
      <h1>{element}</h1>
      {imageAttr}
      <h1>Name: {officeObj.name}</h1>
      <h3 style={{ color: officeObj.rent < 60_000 ? "red" : "green" }}>
        Rent: Rs {officeObj.rent}
      </h3>
      <h3>Address: {officeObj.address}</h3>
    </div>
  );
};

export default App;
