import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link"
import localStateResolvers from './local-state/resolvers'
import localStateDefaults from './local-state/defaults'
import { withClientState } from 'apollo-link-state'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: localStateResolvers,
  defaults: localStateDefaults
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink
  ]),
});

export default client
