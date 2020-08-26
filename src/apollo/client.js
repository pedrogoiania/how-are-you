import ApolloClient from 'apollo-boost';

import headers from './headers';

const client = new ApolloClient({
  uri: 'https://howareyou.8020digital.com.br',
  headers,
});

export default client;
