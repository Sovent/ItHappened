import uuidv4 from 'uuid/v4';
import Realm from './Realm';
import { TRACKINGS } from './Schemas';

class TrackingRepository {
    async getTrackings() {
        const realm = await Realm;
        const trackings = realm.objects(TRACKINGS)
            .filtered('isDeleted = false')
            .sorted('lastUpdatedAt', true);
        return trackings;
    }

    async addTracking(tracking) {
        const realm = await Realm;
        const creationDate = new Date();
        realm.write(() => {
            const trackingToAdd = {
                ...tracking,
                id: uuidv4(),
                createdAt: creationDate,
                lastUpdatedAt: creationDate,
            };
            realm.create(TRACKINGS, trackingToAdd);
        });
    }

    async removeTracking(id) {
        const realm = await Realm;
        realm.write(() => {
            realm.create(TRACKINGS, { id, isDeleted: true }, true);
        });
    }
}

export default TrackingRepository;
