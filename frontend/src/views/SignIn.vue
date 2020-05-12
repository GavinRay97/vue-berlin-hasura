<template>
  <div class="h-full flex items-center justify-center">
    <div class="max-w-lg w-full py-12">
      <users-icon class="mx-auto h-8 w-auto"></users-icon>
      <p class="mt-4 text-center text-gray-900">
        Sign in to your Meetups account
      </p>
      <form class="mt-8" v-on:submit.prevent>
        <div class="mb-2">
          <input
            aria-label="Username"
            name="username"
            type="text"
            required=""
            class="w-full px-3 py-1 border rounded-md"
            placeholder="Username"
            v-model="state.username"
          />
        </div>
        <div>
          <input
            aria-label="Password"
            name="password"
            type="password"
            required=""
            class="w-full px-3 py-1 border rounded-md"
            placeholder="Password"
            v-model="state.password"
          />
        </div>
        <div class="mt-4">
          <button
            @click="login"
            class="w-full px-3 py-1 rounded-md text-white font-medium bg-black hover:bg-gray-900 duration-200 transition"
            v-if="signIn"
          >
            Sign in
          </button>
          <button
            @click="signup"
            class="w-full px-3 py-1 rounded-md text-white font-medium bg-black hover:bg-gray-900 duration-200 transition"
            v-else
          >
            Sign up
          </button>
        </div>
      </form>
      <div class="mt-4">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 bg-white text-gray-500" v-if="signIn"
              >Don't have an account?</span
            >
            <span class="px-2 bg-white text-gray-500" v-else
              >Already have an account?</span
            >
          </div>
        </div>
        <div class="mt-4">
          <button
            class="w-full px-3 py-1 border rounded-md font-medium hover:border-black duration-200 transition"
            @click="signIn = !signIn"
            v-if="signIn"
          >
            Sign up
          </button>
          <button
            class="w-full px-3 py-1 border rounded-md font-medium hover:border-black duration-200 transition"
            @click="signIn = !signIn"
            v-else
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UsersIcon } from 'vue-feather-icons'
import { useResult } from '@vue/apollo-composable'
import { defineComponent, reactive, ref } from '@vue/composition-api'
import {
  useLoginQuery,
  useSignupMutation,
  SignupMutationVariables,
} from '../apolloGraphQLSdk'

export default defineComponent({
  components: {
    UsersIcon,
  },
  setup() {
    const state = reactive({
      username: '',
      password: '',
      error: '',
    })

    const { mutate: signupMutation } = useSignupMutation({
      variables: (() => ({
        username: state.username,
        password: state.password,
      })) as any,
    })

    const queryOptions = ref({
      // whatever options you need
      enabled: false,
    })

    const { result, error, refetch } = useLoginQuery(
      () => ({
        username: state.username,
        password: state.password,
      }),
      queryOptions
    )

    function toggleQuery() {
      if (!queryOptions.value.enabled) {
        queryOptions.value.enabled = true
        return
      }
      refetch()
    }

    function login() {
      toggleQuery()
      if (error) {
        console.log(error)
      }
      const jwt = useResult(result, null, (data) => data.Login.token)
      if (jwt) window.localStorage.setItem('apollo-token', jwt.value as any)
    }

    async function signup() {
      console.log(state.username, state.password)
      const result = await signupMutation()
      console.log(result)
    }

    return {
      state,
      signIn: true,
      login,
      signup,
    }
  },
})
</script>
