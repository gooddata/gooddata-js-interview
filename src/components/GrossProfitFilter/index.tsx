import React from "react";

import CustomColumnChart from "../CustomColumnChart";
import FilterSelectField from "../FilterSelectField";

import useHandleDropdown from "../../hooks/useHandleDropdown";
import { ENUM_MONTHS } from "../../utils/types";
import "@gooddata/react-components/styles/css/main.css";
import "../../styles/_index.scss";

const GrossProfitFilter: React.FC = () => {
  const { filters, handleMonth } = useHandleDropdown();

  return (
    <>
      <div className="profit__element">
        <h1>
          $ GrossProfit in month
          <FilterSelectField onChange={handleMonth} data={ENUM_MONTHS} />
          2016
        </h1>
        <CustomColumnChart filters={[filters]} />
      </div>
    </>
  );
};

export default GrossProfitFilter;
