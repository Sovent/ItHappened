import uuidv4 from 'uuid/v4';
import Realm from './Realm';
import { TRACKINGS } from './Schemas';

class TrackingRepository {
    async getTrackings() {
        const realm = await Realm;
        const trackings = realm.objects(TRACKINGS).sorted('lastUpdatedAt', true);
        return trackings;
    }

    async addTracking(tracking) {
        const realm = await Realm;
        realm.write(() => {
            const trackingToAdd = {
                ...tracking,
                id: uuidv4()
            };
            realm.create(TRACKINGS, trackingToAdd);
        });
    }
}

export default TrackingRepository;
