import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from './constants.js';
import { fetch } from '../index';

export const getProducts = (filters) => async(dispatch, getState) => {
  try {
    dispatch({ type: GET_PRODUCTS_LOADING });
    const res = await fetch.get(`/products${filters || ''}`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: e.message });
  }
};