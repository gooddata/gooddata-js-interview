// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from "react";

import GrossProfit from "./pages/GrossProfit";

import { PROJECT_ID } from "./utils/constants";

import "@gooddata/react-components/styles/css/main.css";

const App: React.FC = () => {
  return (
    // Will be the root/index of the application. Were we will have all new pages
    // For example we can use react-router-dom and create some HOC to deal with
    // the different routes we will have
    <div className="App">
      {/* <CustomRouter> 
        We will have all the pages + routes specified in case we want to add more to the APP*/}
      <GrossProfit projectId={PROJECT_ID} />
      {/* </CustomRouter> */}
    </div>
  );
};

export default App;
