<template>
  <div class="pt-4 mb-4">
    <ul class="space-y-2">
      <li>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1258390180190281728/x-Yuqz_W_400x400.jpg"
              class="w-4 h-4 rounded-full mr-2"
            />
            <div class="italic">[{{ user.username }}]: {{ text }}</div>
          </div>
          <button
            class="text-red-500 hover:text-red-700 duration-200 transition"
          >
            <x-circle-icon
              size="1x"
              @click="deleteCommmentMutation({ id })"
            ></x-circle-icon>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { XCircleIcon } from 'vue-feather-icons'
import { defineComponent } from '@vue/composition-api'
import { useDeleteCommentByIdMutation } from '../apolloGraphQLSdk'

export default defineComponent({
  components: {
    XCircleIcon,
  },
  props: {
    id: Number,
    text: String,
    user: Object,
  },
  setup() {
    const { mutate: deleteCommmentMutation } = useDeleteCommentByIdMutation(
      {} as any
    )
    return { deleteCommmentMutation }
  },
})
</script>
