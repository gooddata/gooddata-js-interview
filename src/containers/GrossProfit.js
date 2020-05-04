// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { PureComponent } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { ColumnChart } from '@gooddata/react-components';
import Select from '../components/Select';
import DateInput from '../components/DateInput';
import { CONFIG } from '../config';
import { MONTHS_DROPDOWN_LIST } from '../constants/dateDropdown/monthsDropdownList';
import { YEARS_DROPDOWN_LIST } from '../constants/dateDropdown/yearsDropdownList';
import { GROSS_PROFIT_MEASURE } from '../constants/measures/grossProfitMeasure';
import { BY_MONTHS } from '../constants/viewBy/byMonths';
import { DATE_FILTER } from '../constants/filters/dateFilter';
import { DateFilter } from '../utils/DateFilter';
import { updateAbsoluteDateFilter } from '../utils/updateAbsoluteDateFilter';

const defaultDate = {
    month: "01",
    year: 2016
}

class GrossProfit extends PureComponent {
    constructor(props) {
        super(props);

        const monthFilters = {
            ...DATE_FILTER,
            absoluteDateFilter: {
                ...DATE_FILTER.absoluteDateFilter,
                ...DateFilter.getFromTo(defaultDate)
            }
        }

        this.state = {
            month: {
                measures: GROSS_PROFIT_MEASURE,
                filters: monthFilters,
                projectId: CONFIG.projectId
            },
            allMonths: {
                measures: GROSS_PROFIT_MEASURE,
                viewBy: BY_MONTHS,
                projectId: CONFIG.projectId
            },
            selectedDate: defaultDate
        }
    }

    handleDateChange = (selectedDate) => {
        const fromTo = DateFilter.getFromTo(selectedDate);
        this.updateDateFilters(fromTo);
    }

    updateDateFilters = (fromTo) => {
        const { month } = this.state;
        const monthFilters = updateAbsoluteDateFilter(month.filters, fromTo);

        this.setState((prevState) => {
            return {
                month: {
                    ...prevState.month,
                    filters: monthFilters
                }
            }
        })
    }

    render() {
        const { month, allMonths, selectedDate } = this.state;

        return (
            <div className="App">
                <h1>$ Gross Profit</h1>
                <div className="Date">
                    <DateInput
                        label="Select a date:"
                        selectedDate={selectedDate}
                        monthOptions={MONTHS_DROPDOWN_LIST}
                        yearOptions={YEARS_DROPDOWN_LIST}
                        onDateChange={this.handleDateChange}
                    />
                </div>

                <h3>Month</h3>
                <div style={{ height: 400, width: 600 }}>
                    <ColumnChart
                       {...month}
                       filters={[month.filters]}
                    />
                </div>

                <h3>All months</h3>
                <div style={{ height: 400, width: 600 }}>
                    <ColumnChart
                        {...allMonths}
                    />
                </div>
            </div>
        );
    }
}

export default GrossProfit;
