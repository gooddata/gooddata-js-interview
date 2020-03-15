import React from "react";

import CustomColumnChart from "../CustomColumnChart";

import { DATE_ATTRIBUTE_MONTHS } from "../../utils/constants";

const GrossProfitAllMonths: React.FC = () => {
  const viewBy = {
    visualizationAttribute: {
      displayForm: {
        uri: DATE_ATTRIBUTE_MONTHS
      },
      localIdentifier: "a1"
    }
  };

  return (
    <>
      <div className="profit__element">
        <h1>$ Gross Profit - All months</h1>
        {/* Created custom @gooddata/columnchart re-usable component  */}
        <CustomColumnChart viewBy={viewBy} />
      </div>
    </>
  );
};

export default GrossProfitAllMonths;
