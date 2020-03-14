// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';
import Dropdown from './components/dropdown/Dropdown';
import { monthsNames, getISODateString } from './utils/date';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMonth: 0,
            selectedYear: 2016
        };
    }

    getMonthFilter(year, month) {
        const from = new Date(year, month, 2);
        const to = new Date(year, month + 1, 1);

        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: getISODateString(from.toISOString()),
                to: getISODateString(to.toISOString())
            }

        }
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: dateAttributeInMonths
                },
                localIdentifier: 'a1'
            }
        }
    }

    onMonthChange(e) {
        if (e.target && e.target.value) {
            this.setState({ selectedMonth: parseInt(e.target.value) });
        }
    }

    onYearChange(e) {
        if (e.target && e.target.value) {
            this.setState({ selectedYear: e.target.value });
        }
    }

    renderMonthDropdown() {
        return <Dropdown items={monthsNames.map((item, index) => ({ value: index.toString(), text: item}))} defaultValue="0" onChange={e => this.onMonthChange(e)} />;
    }

    renderYearDropdown() {
        return <Dropdown items={['2015', '2016', '2017', '2018'].map(item => ({ value: item, text: item }))} defaultValue="2016" onChange={e => this.onYearChange(e)} />;
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter(this.state.selectedYear, this.state.selectedMonth)];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();

        return (
            <div className="App">
                <h1>$ Gross Profit in month {this.renderMonthDropdown()} {this.renderYearDropdown()}</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        filters={filters}
                        projectId={projectId}
                    />
                </div>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default App;
