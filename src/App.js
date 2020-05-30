// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { useState } from "react";
import "@gooddata/react-components/styles/css/main.css";

import { ColumnChart } from "@gooddata/react-components";
import DropDown from "./components/DropDown";

const grossProfitMeasure = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877";
const dateAttributeInMonths =
  "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142";
const dateAttribute = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180";

const getMonthFilter = month => {
  const monthFixed = ('0' + month).slice(-2);
  return {
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute
      },
      from: "2016-"+monthFixed+"-01",
      to: "2016-"+monthFixed+"-31"
    }
  };
};

const getMeasures = () => {
  return [
    {
      measure: {
        localIdentifier: "m1",
        definition: {
          measureDefinition: {
            item: {
              uri: grossProfitMeasure
            }
          }
        },
        alias: "$ Gross Profit"
      }
    }
  ];
};

const getViewBy = () => {
  return {
    visualizationAttribute: {
      displayForm: {
        uri: dateAttributeInMonths
      },
      localIdentifier: "a1"
    }
  };
};

const App = () => {
  const [month, setMonth] = useState(1);

  const onDropDownChange = e => setMonth(parseInt(e.target.value,10));

  const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
  const filters = [getMonthFilter(month)];
  const measures = getMeasures();
  const viewBy = getViewBy();

  return (
    <div className="App">
      <h1>
        $ Gross Profit in month{" "}
        <DropDown month={month} onChange={onDropDownChange} /> 2016
      </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
        />
      </div>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};

export default App;
