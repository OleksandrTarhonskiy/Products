import { GET_SIZES } from './constants.js';
import { fetch } from '../index';

export const getSizes = () => async(dispatch, getState) => {
  try {
    const res = await fetch.get('/products/sizes');
    dispatch({ type: GET_SIZES, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};