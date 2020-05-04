export const updateAbsoluteDateFilter = (filters, data) => {
    const dateFilters = {...filters};

    dateFilters.absoluteDateFilter = {
        ...dateFilters.absoluteDateFilter,
        ...data
    }

    return dateFilters;
}