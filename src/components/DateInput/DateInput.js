import React, { PureComponent } from "react";
import Select from '../Select';
import './DateInput.css';

class DateInput extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            month: this.props.selectedDate.month,
            year: this.props.selectedDate.year
        }
    }

    handleChange = (name, value) => {
        const { onDateChange } = this.props;

        this.setState({ [name]: value });

        onDateChange({
            ...this.state,
            [name]: value
        });
    };

    render() {
        const { monthOptions, yearOptions, label } = this.props;
        const { month, year } = this.state;

        return (

            <div className="DateInput">
                <div className="DateInput__Label">{label}</div>
                <div className="ForGroup">
                    <label>
                        <Select
                            options={monthOptions}
                            name="month"
                            value={month}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className="ForGroup">
                    <label>
                        <Select
                            options={yearOptions}
                            name="year"
                            value={year}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
            </div>
        )
    }
};

export default DateInput;
