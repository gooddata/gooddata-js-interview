import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({month, onChange}) => (
    <select value={month} onChange={onChange}>
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>September</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
    </select>
);

DropDown.propTypes = {
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDown;
