import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Navigation/MobileDropNav';
// import { LOCAL_STATE_QUERY } from '../components/Navigation/SmallNav';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleDrop(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { dropOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // Write the cart State to the opposite
            const data = {
              data: { dropOpen: !dropOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        dropOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
