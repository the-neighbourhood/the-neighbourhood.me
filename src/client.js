import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  headers: {
    authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZjVhNGEwYTEtMGJjMi00YjIyLTk4NjItMWJmZTVhNDkyNGIwIn0.spqeXiwdSVLIIkhKu0v1OkVPgPa3bGIJwUBTvhYjckQ`,
  },
  uri: `https://api-apeast.graphcms.com/v1/cjn4i2roe32qr01fui66yrzhk/master`
})

export default client