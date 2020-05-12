<template>
  <div class="App">
    <header class="App-header">
      <!-- ~ Tilde Paths:  -->
      <!--  ~/foo resolves foo relative to the nearest package root or, if not found, the entry root. -->
      <img src="~/logo.svg" class="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.vue</code> and save to reload.
      </p>
    </header>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.id }} - {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { defineComponent, watchEffect } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import PokemonCard from './components/PokemonCard.vue'

export default defineComponent({
  name: 'App',
  components: { PokemonCard },
  setup() {
    const { result } = useQuery(gql`
      query {
        pokemons(first: 10) {
          id
          number
          name
        }
      }
    `)

    const pokemons = useResult(result)

    watchEffect(() => {
      console.log(pokemons)
    })

    return {
      message: 'Learn Vue',
      pokemons,
    }
  },
})
</script>

<style>
.App {
  text-align: center;
}
.App-header {
  background-color: #f9f6f6;
  color: #32485f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
.App-link {
  color: #00c185;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}
@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
</style>
