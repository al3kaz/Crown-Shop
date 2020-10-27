import shopActionTypes from './shop.type';

export const updateCollections = collectionsMap => ({
   type: shopActionTypes.UPDATE_COLLECTIONS,
   payload: collectionsMap
 });