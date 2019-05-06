/*
 *
 * Project actions
 *
 */

import {
  DEFAULT_ACTION,
  INPUT_IMAGE_NAME,
  CALL_IMAGES,
  IMAGES_LOADED,
  ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeImageName(input) {
  return {
    type: INPUT_IMAGE_NAME,
    input,
  };
}

export function getImages(input) {
  return {
    type: CALL_IMAGES,
    input,
  };
}

export function saveImages(images) {
  return {
    type: IMAGES_LOADED,
    images,
  };
}

export function onError(error) {
  return {
    type: ERROR,
    error,
  };
}
