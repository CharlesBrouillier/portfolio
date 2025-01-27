<template>
  <NuxtLink :to="project.link" class="flex h-full focus:outline-customA2 focus:outline-offset-4">
    <div class="flex hover:scale-105 transition-all">
      <div class="relative flex flex-col cursor-pointer animate-slideUp opacity-0 hover:animate-hoverScal rounded-xl text-white bg-customA3 border-neutral-400 border-2" :style="{ animationDelay: project.animationDelay }">
        <div class="overflow-hidden rounded-xl border-neutral-600 border-2 mx-4 -mt-6">
          <NuxtImg :src="'/images/' + project.image" :alt="project.title" format="webp" width="600" height="360" draggable="false" loading="eager"/>
        </div>
        <div class="text-center p-4"> 
          <p class="text-xl font-bold mb-2">{{ project.title }}</p>
          <div v-if="project.date">
            <p class="mb-2">({{ project.date }})</p>
            <hr class="h-0.5 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 mb-4" >
            <p>{{ project.description }}</p>
          </div>
        </div>
        <div class="mt-auto px-1 py-3">
          <div class="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-1 items-start">
            <div v-for="(tech, index) in project.technologies" :key="index" class="text-white text-xs flex min-h-12 p-1" :class="!tech.name ? 'hidden lg:block' : ''">
              <div v-if="tech.name" class="flex items-center w-full rounded-full bg-black shadow-sm">
                <div class="flex h-5 w-5 m-1.5">
                  <NuxtImg :src="'/images/' + tech.image" :alt="tech.name" class="rounded-full" format="webp" width="20" height="20" draggable="false" loading="lazy"/>
                </div>
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Project } from '~/types/project'; 

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
});

</script>
