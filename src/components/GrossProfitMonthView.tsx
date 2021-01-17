/* eslint-disable no-unused-vars */
import React from 'react';
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import MonthSelect from './MonthSelect';

export interface GrossProfitMonthViewProps {
  measures: VisualizationObject.BucketItem[];
  filter: VisualizationObject.VisualizationObjectFilter;
  projectId: string;
  // eslint-disable-next-line no-unused-vars
  dispatchMonthChange: (month: string) => void;
}

const GrossProfitMonthView: React.FC<GrossProfitMonthViewProps> = ({
  measures,
  filter,
  projectId,
  dispatchMonthChange,
}) => (
  <>
    <h1>
      $ Gross Profit in month <MonthSelect dispatchMonthChange={dispatchMonthChange} /> 2016
    </h1>
    <div>
      <ColumnChart measures={measures} filters={[filter]} projectId={projectId} />
    </div>
  </>
);

export default GrossProfitMonthView;
