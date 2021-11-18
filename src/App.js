import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';
import Products from 'views/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
