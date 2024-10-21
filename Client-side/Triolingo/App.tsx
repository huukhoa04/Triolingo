import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import React from 'react';
import Signup from './app/signup'; // hoặc đúng đường dẫn đến file signup của bạn

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // Thay URI đúng
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Signup />
    </ApolloProvider>
  );
}
