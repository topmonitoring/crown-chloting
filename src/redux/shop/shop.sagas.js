import {
  firestore,
  convertColectionSnapshotToMap
} from "../../firebase/firabase.utils";
import {
  fetchCollectionsSucsess,
  fetchCollectionsFailure
} from "../shop/shop.actions";
import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertColectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSucsess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
