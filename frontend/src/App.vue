<template>
  <div class="antialiased font-inter flex-col flex h-screen">
    <Navigation></Navigation>
    <div class="mx-auto container py-8 flex h-full flex-col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>
