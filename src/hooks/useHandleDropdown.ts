import { useState } from "react";

import { DEFAULT_FILTERS_VALUES } from "./../utils/types";
import { DATE_ATTRIBUTE } from "../utils/constants";

/**
 * React hook, that will take care of update the filter everytime
 * onChange event is triggered
 */

const useHandleDropdown = () => {
  const [filters, setFilters] = useState({
    absoluteDateFilter: {
      dataSet: {
        uri: DATE_ATTRIBUTE
      },
      // Default values of filter, I add it on some enum, so if our application
      // scales it will be easier to find and change.
      from: DEFAULT_FILTERS_VALUES.FROM,
      to: DEFAULT_FILTERS_VALUES.TO
    }
  });

  function handleMonth(event: React.ChangeEvent<HTMLSelectElement>) {
    const updatedMonth = event.target.value;

    setFilters(
      Object.assign({}, filters, {
        absoluteDateFilter: {
          ...filters.absoluteDateFilter,
          from: `2016-${updatedMonth}-01`,
          to: `2016-${updatedMonth}-31`
        }
      })
    );
  }

  return { filters, handleMonth };
};

export default useHandleDropdown;
