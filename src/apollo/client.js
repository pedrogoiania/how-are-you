import ApolloClient from 'apollo-boost';

import headers from './headers';

const client = new ApolloClient({
  uri: 'http://localhost:3004/',
  headers,
});

export default client;
