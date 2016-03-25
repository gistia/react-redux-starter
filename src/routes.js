import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HelloWorld from './components/hello_world';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    {/* <Route path="resource/:id" component={Resource} /> */}
  </Route>
);
