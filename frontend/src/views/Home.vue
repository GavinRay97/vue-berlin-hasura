<template>
  <div class="w-full">
    <ul class="flex flex-wrap -m-4">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <template v-else-if="meetups">
        <Post
          v-for="meetup in meetups"
          :key="meetup.id"
          :id="meetup.id"
          :name="meetup.name"
          :datetime="meetup.datetime"
          :description="meetup.description"
          :image_url="meetup.image_url"
          :location="meetup.location"
          :comments="meetup.comments"
          class="p-4"
        />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useResult } from '@vue/apollo-composable'
import { useMeetupsWithCommentsAndUserSubscription } from '../apolloGraphQLSdk'
import Post from '../components/Post.vue'

export default defineComponent({
  components: {
    Post,
  },
  setup() {
    const {
      result,
      loading,
      error,
    } = useMeetupsWithCommentsAndUserSubscription()
    const meetups = useResult(result, null, (query) => query.meetup)
    return { meetups, loading, error }
  },
})
</script>
