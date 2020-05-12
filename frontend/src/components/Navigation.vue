<template>
  <nav class="bg-black text-white py-3">
    <div class="mx-auto container flex justify-between">
      <router-link to="/" class="font-medium flex items-center"
        ><users-icon class="mr-2" size="1x"></users-icon> Meetups</router-link
      >
      <ul class="flex space-x-4">
        <li
          class="px-3 py-1 rounded-md hover:bg-gray-900 transition duration-200"
        >
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="px-3 py-1 rounded-md hover:bg-gray-900 transition duration-200"
        >
          <router-link to="/sign_in">Sign in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { UsersIcon } from 'vue-feather-icons'

export default {
  name: 'Navigation',
  components: {
    UsersIcon,
  },
}
</script>
