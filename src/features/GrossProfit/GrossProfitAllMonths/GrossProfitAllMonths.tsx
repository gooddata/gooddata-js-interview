import React, { FunctionComponent } from 'react';
import { ColumnChart } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings';
import { Page } from '../../../components/common';
import styles from './GrossProfitAllMonth.module.scss';

export interface GrossProfitAllMonthsProps {
  measures: VisualizationObject.BucketItem[];
  viewBy: VisualizationObject.IVisualizationAttribute;
  projectId: string;
}

const GrossProfitAllMonths: FunctionComponent<GrossProfitAllMonthsProps> = ({
  measures,
  viewBy,
  projectId,
}) => (
  <>
    <Page inner>
      <h1>$ Gross Profit - All months</h1>
      <div className={styles.columnChart}>
        <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
      </div>
    </Page>
  </>
);

export default GrossProfitAllMonths;
