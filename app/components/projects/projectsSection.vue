<template>
  <div class="text-center text-lg font-extrabold underline sm:mb-4 mb-8">
    <p>Mes autres projets</p>
  </div>
  <div class="grid lg:grid-cols-2 w-3/4 gap-12 lg:gap-8 mx-auto sm:p-8 pb-4">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '../projectCardComponent.vue';
import type { PropType } from 'vue';
import type { Project } from '~/types/project'; 

defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    default: () => [] 
  }
});
</script>