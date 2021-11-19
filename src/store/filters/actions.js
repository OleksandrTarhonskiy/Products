import { 
  GET_CATEGORIES,
  GET_COLORS,
  GET_SIZES,
} from './constants';
import { fetch } from '../index';

export const getCategories = () => async(dispatch) => {
  try {
    const res = await fetch.get('/products/categories');
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};

export const getColors = () => async(dispatch) => {
  try {
    const res = await fetch.get('/products/colors');
    dispatch({ type: GET_COLORS, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};

export const getSizes = () => async(dispatch) => {
  try {
    const res = await fetch.get('/products/sizes');
    dispatch({ type: GET_SIZES, payload: res.data });
  } catch (e) {
    console.error(e.message);
  }
};