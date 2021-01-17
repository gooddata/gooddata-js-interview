// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { VisualizationObject } from '@gooddata/typings';
import { GROSS_PROFIT_MEASURE, DATE_ATTR_IN_MONTHS, DATE_ATTR } from './utils/constants';
import GrossProfitAllMonthsView from './components/GrossProfitAllMonthsView';
import GrossProfitMonthView from './components/GrossProfitMonthView';

const MEASURES = [
  {
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: GROSS_PROFIT_MEASURE,
          },
        },
      },
      alias: '$ Gross Profit',
    },
  },
];

const VIEW_BY = {
  visualizationAttribute: {
    displayForm: {
      uri: DATE_ATTR_IN_MONTHS,
    },
    localIdentifier: 'a1',
  },
};

const INITIAL_MONTH_FILTER: VisualizationObject.IVisualizationObjectAbsoluteDateFilter = {
  absoluteDateFilter: {
    dataSet: {
      uri: DATE_ATTR,
    },
    from: '2016-01-01',
    to: '2016-01-31',
  },
};

const PROJECT_ID = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

// eslint-disable-next-line prettier/prettier
const formatDate = (date: Date) => [date.getFullYear(), `00${date.getMonth()}`.slice(-2), `00${date.getDate()}`.slice(-2)].join('-');

const App: React.FC = () => {
  const [
    filter,
    setFilter,
  ] = React.useState<VisualizationObject.IVisualizationObjectAbsoluteDateFilter>(
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
    <div className="App">
      <GrossProfitMonthView
        measures={MEASURES}
        filter={filter}
        projectId={PROJECT_ID}
        dispatchMonthChange={updateFilter}
      />
      <GrossProfitAllMonthsView measures={MEASURES} viewBy={VIEW_BY} projectId={PROJECT_ID} />
    </div>
  );
};

export default App;
