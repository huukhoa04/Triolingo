import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create an HTTP link to your GraphQL endpoint
const httpLink = createHttpLink({
  uri: 'http://192.168.1.19:5000/graphql', // Change if needed
});

// Create a context link to set the authorization header
const authLink = setContext(async (_, { headers }) => {
  // Get the token from AsyncStorage
  const token = await AsyncStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Combine the authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;