<template>
  <div class="w-full">
    <ul class="flex flex-wrap -m-4">
      <Post v-for="i in 5" :key-="i" class="p-4"></Post>
    </ul>
  </div>
</template>

<script>
import Post from '../components/Post'

export default {
  components: {
    Post,
  },
}
</script>
