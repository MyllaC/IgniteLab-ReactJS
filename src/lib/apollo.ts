import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odzzme1xaw01xrgj6qdqna/master',
  cache: new InMemoryCache()
})
