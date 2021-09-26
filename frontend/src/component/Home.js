import React from "react";
import Products from "./Products";
import Slider from "./Slider";
import Filter_List from "./FilterList";
function Home() {
  return (
    <div>
      <div className="filter-header">
        <Filter_List />
      </div>

      <Slider />
      <Products />
    </div>
  );
}

export default Home;
