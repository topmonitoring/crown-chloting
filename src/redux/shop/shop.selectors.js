import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);
export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionLeaded = createSelector(
  [selectShop],
  shop => !!shop.collections //we get the boolean value of the collections !! important not an object !!
);
