import { CONFIG } from '../../config';
const grossProfitMeasure = `/gdc/md/${CONFIG.projectId}/obj/6877`;

export const GROSS_PROFIT_MEASURE = [
    {
        measure: {
            localIdentifier: 'm1',
            definition: {
                measureDefinition: {
                    item: {
                        uri: grossProfitMeasure
                    }
                }
            },
            alias: '$ Gross Profit',
            format: '#,##0'
        }
    }
]