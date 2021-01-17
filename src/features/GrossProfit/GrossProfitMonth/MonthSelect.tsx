import React, { useState } from 'react';
import { MONTHS } from '../../../constants';

export interface MonthSelectProps {
  // eslint-disable-next-line no-unused-vars
  dispatchMonthChange: (month: string) => void;
}

const MonthSelect: React.FC<MonthSelectProps> = ({ dispatchMonthChange }) => {
  const [month, setMonth] = useState<string>('1');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line no-shadow
    const month = e.currentTarget.value;
    setMonth(() => month);
    dispatchMonthChange(month);
  };

  return (
    <select defaultValue={month} onChange={onChange}>
      {MONTHS.map((monthItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option key={index} value={index + 1}>
          {monthItem}
        </option>
      ))}
    </select>
  );
};

export default MonthSelect;
