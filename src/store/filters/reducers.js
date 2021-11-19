import { 
  GET_CATEGORIES,
  GET_COLORS,
  GET_SIZES,
} from './constants';

const initialState = {
  categories: [],
  colors: [],
  sizes: [],
};

export default function filters(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case GET_CATEGORIES:
    return {
      ...state,
      categories: payload
    };

    case GET_COLORS:
    return {
      ...state,
      colors: payload
    };

    case GET_SIZES:
    return {
      ...state,
      sizes: payload
    };

  default:
    return state;
  }
}