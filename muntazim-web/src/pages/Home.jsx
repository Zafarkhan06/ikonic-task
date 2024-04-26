import React from "react";

import Categories from "../components/Categories";
import Bookmarks from "../components/Bookmarks";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <Categories />
      </div>

      <div className="col-span-3">
        <Bookmarks />
      </div>
    </div>
  );
};

export default Home;
