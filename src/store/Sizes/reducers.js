import { GET_SIZES } from './constants';

export default function sizes(state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case GET_SIZES:
    return [...payload];

  default:
    return state;
  }
}