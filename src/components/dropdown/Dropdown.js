import React from 'react';
import PropTypes from 'prop-types';

function Dropdown(props) {
    let defaultValue = props.defaultValue ? props.defaultValue : '';
    
    return (
        <select defaultValue={defaultValue} onChange={props.onChange}>
            {props.items.map((item, index) => <option value={item.value} key={index}>{item.text}</option>)}
        </select>
    );
}

Dropdown.propTypes = {
    defaultValue: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func
}

export default Dropdown;
