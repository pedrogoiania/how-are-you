import React from 'react';
import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/client';
import Navigation from './navigation';

const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);
export default App;
