import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';
import Products from 'views/Products';
import NotFound from 'layout/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route exact path="/" component={Products} />
          <Redirect to="/404" />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
