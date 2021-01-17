/* eslint-disable no-unused-vars */
import React from 'react';
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import MonthSelect from './MonthSelect';
import { Page } from '../../../components/common';
import styles from './GrossProfitMonth.module.scss';

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
    <Page inner>
      <h1>
        $ Gross Profit in month <MonthSelect dispatchMonthChange={dispatchMonthChange} /> 2016
      </h1>
      <div className={styles.columnChart}>
        <ColumnChart measures={measures} filters={[filter]} projectId={projectId} />
      </div>
    </Page>
  </>
);

export default GrossProfitMonthView;
