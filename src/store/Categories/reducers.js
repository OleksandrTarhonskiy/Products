import { GET_CATEGORIES } from './constants';

export default function categories(state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case GET_CATEGORIES:
    return [...payload];

  default:
    return state;
  }
}