<template>
  <div>
    <h2>event id :{{ $route.params.id }}</h2>
  </div>
</template>

<script setup lang="ts">
// const  route = useRoute();
//  console.log("🚀 ~ file: [id].vue:9 ~ route:", route);

const nuxt = useNuxtApp();
console.log("🚀 ~ file: [id].vue:11 ~ nuxt:", nuxt);
</script>

<style scoped></style>