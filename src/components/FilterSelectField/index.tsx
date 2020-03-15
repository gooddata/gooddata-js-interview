import React from "react";

interface IFilterSelectFieldProps {
  data: {
    [key in string]: string;
  };
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * This will be a re-usable select field in case we want to add more to our application
 */
const FilterSelectField: React.FC<IFilterSelectFieldProps> = ({
  data,
  onChange
}) => {
  return (
    <>
      <select className="select__month" onChange={onChange}>
        {Object.entries(data).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterSelectField;
