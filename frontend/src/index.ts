import Vue from 'vue'
import App from './App.vue'

import 'regenerator-runtime'

import router from './router'

import './assets/css/tailwind.css'

import VueApollo from '@vue/apollo-option'
import VueApolloComponents from '@vue/apollo-components'
import VueCompositionApi from '@vue/composition-api'

import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueCompositionApi)
Vue.use(VueApollo)
Vue.use(VueApolloComponents)

import { ApolloClient } from 'apollo-client'
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'

const getHeaders = () => {
  const headers = {} as any
  const token = window.localStorage.getItem('apollo-token')
  if (token) {
    headers.authorization = `Bearer ${token}`
  } else {
    headers['X-Hasura-Admin-Secret'] = 'my-secret'
  }
  return headers
}

// Create a WebSocket link:
const link = new WebSocketLink({
  uri: 'ws://localhost:8080/v1/graphql',
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: () => {
      return { headers: getHeaders() }
    },
  },
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
})

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  setup(): any {
    provide(DefaultApolloClient, client)
  },
  router,
  render: (h) => h(App),
}).$mount('#app')
