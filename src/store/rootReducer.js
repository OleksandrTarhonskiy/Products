import { combineReducers } from 'redux';

import products from './Products/reducers';
import sizes from './Sizes/reducers';
import colors from './Colors/reducers';
import categories from './Categories/reducers';

export default combineReducers({
  products,
  sizes,
  colors,
  categories,
});