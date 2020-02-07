// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedMonth: '1',
			selectedYear: '2016'
		}
	}

	getAbsoluteDateFilter() {
		var totalDaysInSelectedMonthYear = this.getTotalDaysInMonthYear(this.state.selectedMonth, this.state.selectedYear);
		var fromDate = this.formatAbsoluteDate(this.state.selectedYear, this.state.selectedMonth, '1');
		var toDate = this.formatAbsoluteDate(this.state.selectedYear, this.state.selectedMonth, totalDaysInSelectedMonthYear);

		return {
			absoluteDateFilter: {
				dataSet: {
					uri: dateAttribute
				},
				from: fromDate,
				to: toDate
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

	getTotalDaysInMonthYear(month, year) {
		return new Date(year, month, 0).getDate();
	}

	formatAbsoluteDate(year, month, day) {
		return `${year}-${month}-${day}`;
	}

	onMonthChange = (e) => this.setState({ selectedMonth: e.target.value });

	onYearChange = (e) => this.setState({ selectedYear: e.target.value });

	renderMonthDropdown() {
		return (
			<select value={this.state.selectedMonth} onChange={this.onMonthChange}>
				<option value="1">January</option>
				<option value="2">February</option>
				<option value="3">March</option>
				<option value="4">April</option>
				<option value="5">May</option>
				<option value="6">June</option>
				<option value="7">July</option>
				<option value="8">August</option>
				<option value="9">September</option>
				<option value="10">October</option>
				<option value="11">November</option>
				<option value="12">December</option>
			</select>
		)
	}

	renderYearDropdown() {
		return (
			<select value={this.state.selectedYear} onChange={this.onYearChange}>
				<option value="2015">2015</option>
				<option value="2016">2016</option>
				<option value="2017">2017</option>
			</select>
		)
	}

	render() {
		const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
		const filters = [this.getAbsoluteDateFilter()];
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
