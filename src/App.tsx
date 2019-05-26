import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppShell } from './AppShell';
import { browserHistory, store } from './store';

export const App = () => (
  <Provider store={store}>
    <AppShell>
      <ConnectedRouter history={browserHistory}>
        <Switch>
          <Route exact path="/" render={() => <div>Atomic Design with Redux</div>} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </ConnectedRouter>
    </AppShell>
  </Provider>
);
