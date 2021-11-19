import { combineReducers } from 'redux';

import products from './Products/reducers';
import filters from './filters/reducers';

export default combineReducers({
  products,
  filters,
});