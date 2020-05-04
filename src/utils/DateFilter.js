
const monthDays = {
    "01": 31,
    "02": 28,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30,
    "10": 31,
    "11": 30,
    "12": 31,
}

function getFromTo(date) {
    const endDay = monthDays[date.month];

    return {
        from: `${date.year}-${date.month}-01`,
        to: `${date.year}-${date.month}-${endDay}`
    }
}

export const DateFilter = {
    getFromTo: getFromTo
}