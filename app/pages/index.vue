<template>
  <div class="bg-[url('/images/background.svg')] bg-repeat bg-cover text-center">
    <UContainer class="p-0 w-full max-w-none">
      <Profile/>

      <div class="lg:py-6 pb-8">
        <h1 class="text-2xl text-customA2 font-bold underline animate-slideUp opacity-0 mt-4 md:mt-0 md:mb-2 pb-8">Mes projets</h1>
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-8 xl:w-4/5 w-2/3 mx-auto">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" draggable="false" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Profile from '../components/profileComponent.vue';
import ProjectCard from '../components/projectCardComponent.vue';

import projects from '~~/public/json/projects.json'

</script>