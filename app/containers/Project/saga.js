import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { onError, saveImages } from './actions';
import { CALL_IMAGES } from './constants';

function callAPI(input) {
  return axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=A9AimaC8jMiJNlpRdF3mCpBW2879RkDN&limit=20`,
  );
}

export function* getImagesSaga(request) {
  try {
    const { data } = yield call(callAPI, request.input);
`
    const gifs = data.data.map(i => i.images.preview_gif.url);

    yield put(saveImages(gifs));
  } catch (err) {
    yield put(onError(err.message));
  }
}

export default function* watch() {
  yield takeLatest(CALL_IMAGES, getImagesSaga);
}
