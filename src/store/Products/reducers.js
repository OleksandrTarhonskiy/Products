import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from './constants';

const initialState = {
  data: {}, 
  loading: false, 
  error: false
}

export default function products(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case GET_PRODUCTS_LOADING:
    return {
      ...state,
      loading: true
    };

  case GET_PRODUCTS_SUCCESS:
    return {
      error: false,
      loading: false,
      data: payload
    };

  case GET_PRODUCTS_FAILURE:
    return {
      ...state,
      loading: false,
      error: true
    };

  default:
    return state;
  }
}