<template>
  <li class="rounded-md lg:w-1/3 md:w-1/2 w-full">
    <img
      src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      class="rounded-t-md object-cover h-56 w-full"
    />
    <div class="p-4 border rounded-b-md">
      <div class="border-b pb-4">
        <div class="mb-4">
          <h1 class="text-xl font-bold">Vue Meetup</h1>
          <div class="flex items-inline justify-between">
            <p>Mar. 4th 2001 @ 8PM</p>
            <div class="flex items-center">
              <div class="flex items-center mr-8">
                <users-icon class="mr-2" size="1x"></users-icon>
                <p>8</p>
              </div>
              <div class="flex items-center">
                <map-pin-icon class="mr-2" size="1x"></map-pin-icon>
                <p>Berlin</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam aliquid at debitis dicta dolor doloribus eius est harum id
          iste itaque.
        </p>
      </div>
      <div class="pt-4 mb-4">
        <ul class="space-y-2">
          <li>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
              <img src="https://pbs.twimg.com/profile_images/1258390180190281728/x-Yuqz_W_400x400.jpg" class="w-4 h-4 rounded-full mr-2"></img>
              <div class="italic">This is cool!</div>
               </div>
              <button class="text-red-500 hover:text-red-700 duration-200 transition"><x-circle-icon size="1x"></x-circle-icon>
            </button>
            </div>
          </li>
        </ul>
      </div>
      <button class="text-white w-full bg-black rounded-md px-3 py-1 hover:bg-gray-900 duration-200 transition" @click="addComment = true" v-if="!addComment">Add a comment</button>
      <div v-else>
        <textarea class="border w-full rounded-md px-3 py-1 mb-2" placeholder="Add a comment" v-model="comment"></textarea>
        <button class="text-white w-full bg-black rounded-md px-3 py-1 hover:bg-gray-900 duration-200 transition">Submit</button>
      </div>
    </div>
  </li>
</template>

<script>
import { UsersIcon, MapPinIcon, XCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    UsersIcon,
    MapPinIcon,
    XCircleIcon
  },
  data: function () {
    return {
      addComment: false,
      comment: ''
    }
  },
}
</script>
