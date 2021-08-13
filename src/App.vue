<template>
  <div class="relative flex overflow-hidden h-full bg-gray-100">
    <div class="flex-1 flex flex-col overflow-auto focus:outline-none" tabindex="0">
      <Nav />
      <News />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Nav from './components/Partials/Nav.vue'
import News from './components/News/Main.vue'
import Footer from './components/Partials/Footer.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>
