import React from "react";
import Banner from "./Banner";

import ItemList from "./ItemList";

const Body = () => {
  return (
    <div className="container py-5">
      <Banner />
      <ItemList/>
    </div>
  );
};

export default Body;
