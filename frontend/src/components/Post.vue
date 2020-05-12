<template>
  <li class="rounded-md lg:w-1/3 md:w-1/2 w-full">
    <img :src="image_url" class="rounded-t-md object-cover h-56 w-full" />
    <div class="p-4 border rounded-b-md">
      <div class="border-b pb-4">
        <div class="mb-4">
          <h1 class="text-xl font-bold">{{ name }}</h1>
          <div class="flex items-inline justify-between">
            <p>{{ datetime }}</p>
            <div class="flex items-center">
              <div class="flex items-center mr-8">
                <users-icon class="mr-2" size="1x"></users-icon>
                <p>8</p>
              </div>
              <div class="flex items-center">
                <map-pin-icon class="mr-2" size="1x"></map-pin-icon>
                <p>{{ location }}</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          {{ description }}
        </p>
      </div>
      <Comment
        v-for="userComment in comments"
        :id="userComment.id"
        :key="userComment.text"
        :text="userComment.text"
        :user="userComment.user"
      ></Comment>
      <button
        class="text-white w-full bg-black rounded-md px-3 py-1 hover:bg-gray-900 duration-200 transition"
        @click="addComment = true"
        v-if="!addComment"
      >
        Add a comment
      </button>
      <div v-else>
        <textarea
          class="border w-full rounded-md px-3 py-1 mb-2"
          placeholder="Add a comment"
          v-model="comment"
        ></textarea>
        <button
          @click="addCommentMutation({ meetupId: id, text: comment })"
          class="text-white w-full bg-black rounded-md px-3 py-1 hover:bg-gray-900 duration-200 transition"
        >
          Submit
        </button>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { UsersIcon, MapPinIcon, XCircleIcon } from 'vue-feather-icons'
import { defineComponent } from '@vue/composition-api'
import { useAddCommentMutation } from '../apolloGraphQLSdk'
import Comment from './Comment.vue'

export default defineComponent({
  components: {
    UsersIcon,
    MapPinIcon,
    XCircleIcon,
    Comment,
  },
  props: {
    id: Number,
    name: String,
    location: String,
    description: String,
    image_url: String,
    datetime: String,
    comments: Array as any,
  },
  setup() {
    const { mutate: addCommentMutation } = useAddCommentMutation({} as any)
    return {
      addComment: false,
      comment: '',
      addCommentMutation,
    }
  },
})
</script>
