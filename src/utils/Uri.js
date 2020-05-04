
import { CONFIG } from '../config';

function getDateAttribute() {
    return `/gdc/md/${CONFIG.projectId}/obj/2180`;
}

function getDateAttributeInYears() {
    return `/gdc/md/${CONFIG.projectId}/obj/2005`;
}

function getDateAttributeInMonths() {
    return `/gdc/md/${CONFIG.projectId}/obj/2142`;
}
function getProfitMeasure() {
    return `/gdc/md/${CONFIG.projectId}/obj/6877`;
}

export const Uri = {
    getDateAttribute: getDateAttribute,
    getDateAttributeInYears: getDateAttributeInYears,
    getDateAttributeInMonths: getDateAttributeInMonths,
    getProfitMeasure: getProfitMeasure,
}