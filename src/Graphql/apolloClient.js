//import ApolloClient from 'apollo-boost'
// const client=new ApolloClient({
//     uri:"http://localhost:4000/",
//     headers: {
//         Authorization: `Bearer ${window.sessionStorage.getItem("token")}`
//       },
// })


import { ApolloClient } from 'apollo-client'
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4000/',
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`
    }
  }),
  cache: new InMemoryCache()
})


export default client;