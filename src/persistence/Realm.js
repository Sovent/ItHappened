import Realm from 'realm';
import { TRACKINGS } from './Schemas';

const trackingSchema = {
    name: TRACKINGS,
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        color: 'string',
        createdAt: 'date',
        lastUpdatedAt: { type: 'date', indexed: true },
        mandatoryCustomizations: 'int[]',
        optionalCustomizations: 'int[]',
        metricMeasurement: 'string?'
    }
};
export default Realm.open({ schema: [trackingSchema], inMemory: true });

