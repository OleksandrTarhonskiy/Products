import { GET_COLORS } from './constants.js';
import { fetch } from '../index';

export const getColors = () => async(dispatch, getState) => {
  try {
    const res = await fetch.get('/products/colors');
    dispatch({ type: GET_COLORS, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};