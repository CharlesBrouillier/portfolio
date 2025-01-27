<template>
  <div v-if="items">
    <UCarousel v-slot="{ item }" :items="items" loop arrows dots class="my-4 xl:mx-20 md:mx-10" :ui="{ prev: 'cursor-pointer 2xl:mx-32 xl:mx-4', next: 'cursor-pointer 2xl:mx-32 xl:mx-4', arrows: 'max-md:hidden' }">
      <NuxtImg :src="'/images/' + item" class="mx-auto flex" width="1000" alt="" loading="lazy"/>
    </UCarousel>
  </div>
  <div v-else>
    <USkeleton class="flex mx-auto h-[60dvh] w-[60dvw] bg-neutral-400"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true
  }
})
</script>