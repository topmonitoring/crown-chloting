import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertColectionSnapshotToMap
} from "../../firebase/firabase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucsess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCSESS,
  payload: collectionsMap
});
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALULURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertColectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSucsess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
