import React from "react";

import { ColumnChart } from "@gooddata/react-components";

import { GROSS_PROFIT_MEASURE, PROJECT_ID } from "../../utils/constants";
import { VisualizationObject } from "@gooddata/typings";

interface ICustomColumnChartProps {
  viewBy?: VisualizationObject.IVisualizationAttribute;
  filters?: VisualizationObject.VisualizationObjectFilter[];
}

const CustomColumnChart: React.FC<ICustomColumnChartProps> = ({
  filters,
  viewBy
}) => {
  const measures = [
    {
      measure: {
        localIdentifier: "m1",
        definition: {
          measureDefinition: {
            item: {
              uri: GROSS_PROFIT_MEASURE
            }
          }
        },
        alias: "$ Gross Profit"
      }
    }
  ];

  return (
    <div className="column__chart">
      {filters ? (
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={PROJECT_ID}
        />
      ) : (
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={PROJECT_ID}
        />
      )}
    </div>
  );
};

export default CustomColumnChart;
