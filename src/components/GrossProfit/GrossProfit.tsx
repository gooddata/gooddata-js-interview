// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { FunctionComponent, useState } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { VisualizationObject } from '@gooddata/typings';
// import styles from './GrossProfit.module.scss';
import { PROJECT_ID } from '../../constants';
// eslint-disable-next-line object-curly-newline
import { formatDate, INITIAL_MONTH_FILTER, MEASURES, VIEW_BY } from '../../utils/helpers';
import GrossProfitMonth from '../../features/GrossProfit/GrossProfitMonth/GrossProfitMonth';
import GrossProfitAllMonths from '../../features/GrossProfit/GrossProfitAllMonths/GrossProfitAllMonths';

const GrossProfit: FunctionComponent = () => {
  const [filter, setFilter] = useState<VisualizationObject.IVisualizationObjectAbsoluteDateFilter>(
    INITIAL_MONTH_FILTER,
  );

  const updateFilter = (month: string) => {
    const monthNum = parseInt(month, 10);
    const from = formatDate(new Date(2016, monthNum - 1, 1));
    const to = formatDate(new Date(2016, monthNum, 0));
    // eslint-disable-next-line no-shadow
    setFilter((filter) => ({
      absoluteDateFilter: {
        ...filter.absoluteDateFilter,
        from,
        to,
      },
    }));
  };

  return (
    <div>
      <GrossProfitMonth
        measures={MEASURES}
        filter={filter}
        projectId={PROJECT_ID}
        dispatchMonthChange={updateFilter}
      />
      <GrossProfitAllMonths measures={MEASURES} viewBy={VIEW_BY} projectId={PROJECT_ID} />
    </div>
  );
};

export default GrossProfit;
