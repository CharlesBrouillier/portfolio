<template>
  <div class="flex justify-evenly items-center w-1/2 mx-auto max-lg:order-3 max-lg:mt-4 max-lg:justify-center gap-8">
    <NuxtLink v-for="item in socials" :key="item.image" :to="item.link" target="_blank" class="cursor-pointer hover:scale-125 transition-all focus:outline-customA2 focus:outline-offset-4">
      <NuxtImg :src="'/images/' + item.image" :alt="item.link" width="40" height="40" draggable="false" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import socials from '~~/public/json/socials.json';
</script>