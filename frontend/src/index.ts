import Vue from 'vue'
import App from './App.vue'

import VueApollo from '@vue/apollo-option'
import VueApolloComponents from '@vue/apollo-components'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
Vue.use(VueApollo)
Vue.use(VueApolloComponents)

import ApolloClient from 'apollo-boost'
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'

const apolloClient = new ApolloClient({
  uri: `https://graphql-pokemon.now.sh`,
  headers: {
    'X-Hasura-Admin-Secret': 'pleiapp',
  },
})

new Vue({
  setup(): any {
    provide(DefaultApolloClient, apolloClient)
  },
  render: (h) => h(App),
}).$mount('#app')
