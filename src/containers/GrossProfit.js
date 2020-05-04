// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { PureComponent } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';
import DateInput from '../components/DateInput';
import Chart from '../components/Chart';
import Box from '../components/Box';
import { CONFIG } from '../config';
import { MONTHS_DROPDOWN_LIST } from '../constants/dateDropdown/monthsDropdownList';
import { YEARS_DROPDOWN_LIST } from '../constants/dateDropdown/yearsDropdownList';
import { GROSS_PROFIT_MEASURE } from '../constants/measures/grossProfitMeasure';
import { BY_MONTHS } from '../constants/viewBy/byMonths';
import { BY_YEARS } from '../constants/viewBy/byYears';
import { DATE_FILTER } from '../constants/filters/dateFilter';
import { DateFilter } from '../utils/DateFilter';
import { updateAbsoluteDateFilter } from '../utils/updateAbsoluteDateFilter';

const defaultDate = {
    month: "01",
    year: 2016
}
const CHART_WIDTH = 400;
const CHART_HEIGHT = 400;

class GrossProfit extends PureComponent {
    constructor(props) {
        super(props);

        const monthFilters = {
            ...DATE_FILTER,
            absoluteDateFilter: {
                ...DATE_FILTER.absoluteDateFilter,
                ...DateFilter.getMonth(defaultDate)
            }
        }

        const yearFilters = {
            ...DATE_FILTER,
            absoluteDateFilter: {
                ...DATE_FILTER.absoluteDateFilter,
                ...DateFilter.getYear(defaultDate)
            }
        }

        this.state = {
            month: {
                measures: GROSS_PROFIT_MEASURE,
                filters: monthFilters,
                projectId: CONFIG.projectId
            },
            year: {
                measures: GROSS_PROFIT_MEASURE,
                filters: yearFilters,
                projectId: CONFIG.projectId
            },
            allMonths: {
                measures: GROSS_PROFIT_MEASURE,
                viewBy: BY_MONTHS,
                projectId: CONFIG.projectId
            },
            allYears: {
                measures: GROSS_PROFIT_MEASURE,
                viewBy: BY_YEARS,
                projectId: CONFIG.projectId
            },
            selectedDate: defaultDate
        }
    }

    handleDateChange = (selectedDate) => {
        const monthPeriod = DateFilter.getMonth(selectedDate);
        const yearPeriod = DateFilter.getYear(selectedDate);
        this.updateDateFilters(monthPeriod, yearPeriod);
    }

    updateDateFilters = (monthPeriod, yearPeriod) => {
        const { month } = this.state;
        const monthFilters = updateAbsoluteDateFilter(month.filters, monthPeriod);
        const yearFilters = updateAbsoluteDateFilter(month.filters, yearPeriod);

        this.setState((prevState) => {
            return {
                month: {
                    ...prevState.month,
                    filters: monthFilters
                },
                year: {
                    ...prevState.month,
                    filters: yearFilters
                }
            }
        })
    }

    render() {
        const { month, year, allMonths, allYears, selectedDate } = this.state;

        return (
            <div className="App">
                <h1>$ Gross Profit</h1>
                <div className="Date" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <DateInput
                        label="Select a date:"
                        selectedDate={selectedDate}
                        monthOptions={MONTHS_DROPDOWN_LIST}
                        yearOptions={YEARS_DROPDOWN_LIST}
                        onDateChange={this.handleDateChange}
                    />
                </div>
                <Box>
                    <Chart
                        title="Month"
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <ColumnChart
                            {...month}
                            filters={[month.filters]}
                        />
                    </Chart>

                    <Chart
                        title="Year"
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <ColumnChart
                            {...year}
                            filters={[year.filters]}
                        />
                    </Chart>
                </Box>
                <Box>
                    <Chart
                        title="All months"
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <ColumnChart
                            {...allMonths}
                        />
                    </Chart>

                    <Chart
                        title="All years"
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <ColumnChart
                            {...allYears}
                        />
                    </Chart>
                </Box>
            </div>
        );
    }
}

export default GrossProfit;
