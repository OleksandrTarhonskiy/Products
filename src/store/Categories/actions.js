import { GET_CATEGORIES } from './constants.js';
import { fetch } from '../index';

export const getCategories = () => async(dispatch, getState) => {
  try {
    const res = await fetch.get('/products/categories');
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};