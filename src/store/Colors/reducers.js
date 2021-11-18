import { GET_COLORS } from './constants';

export default function colors(state = [], action) {
  const { type, payload } = action;

  switch (type) {
  case GET_COLORS:
    return [...payload];

  default:
    return state;
  }
}