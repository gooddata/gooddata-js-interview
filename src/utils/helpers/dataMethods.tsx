import { GROSS_PROFIT_MEASURE, DATE_ATTR_IN_MONTHS, DATE_ATTR } from '../../constants';

export const MEASURES = [
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

export const VIEW_BY = {
  visualizationAttribute: {
    displayForm: {
      uri: DATE_ATTR_IN_MONTHS,
    },
    localIdentifier: 'a1',
  },
};

export const INITIAL_MONTH_FILTER = {
  absoluteDateFilter: {
    dataSet: {
      uri: DATE_ATTR,
    },
    from: '2016-01-01',
    to: '2016-01-31',
  },
};
