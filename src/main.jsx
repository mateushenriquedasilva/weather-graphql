import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from '@apollo/client';
import client from './gql/client';

import { Provider } from 'react-redux';
import store from './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);
