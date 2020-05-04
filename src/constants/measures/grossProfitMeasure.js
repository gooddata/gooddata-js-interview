import { Uri } from '../../utils/Uri';

export const GROSS_PROFIT_MEASURE = [
    {
        measure: {
            localIdentifier: 'm1',
            definition: {
                measureDefinition: {
                    item: {
                        uri: Uri.getProfitMeasure()
                    }
                }
            },
            alias: '$ Gross Profit',
            format: '#,##0'
        }
    }
]