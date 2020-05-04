import React from "react";
import './Select.css';

export const Select = ( props ) => {
    const { options, name, value, defaultValue, disabled, onChangeRaw, onChange } = props;

    const handleChange = (event) => {
        const value = event.target.value;

        onChangeRaw && onChangeRaw(event);

        if (onChange) {
            if (name) {
                onChange(name, value);

            } else {
                onChange(value);
            }
        }
    }

    return (

        <select
            className="Select"
            defaultValue={value}
            name={name}
            onChange={handleChange}
            disabled={disabled}
        >
            {options.map((option) => {
                return <option value={option.value} key={option.value}>{option.name}</option>
            })}
        </select>
    )
};
