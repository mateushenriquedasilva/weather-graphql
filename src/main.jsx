import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from '@apollo/client';
import client from './gql/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persitor } from './redux/store/store';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <ApolloProvider client={client}>
            <App />
            <GlobalStyle />
        </ApolloProvider>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);
