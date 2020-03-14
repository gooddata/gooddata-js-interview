export const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getISODateString(isoDateTime) {
    return isoDateTime.substring(0, 10);
}
