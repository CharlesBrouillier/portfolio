<template>
  <div class="bg-[url('/images/background.svg')] bg-repeat bg-cover text-center min-h-screen">
    <UContainer class="p-0 w-full max-w-none">
      <Profile/>

      <div class="lg:py-6 pb-8">
        <h1 class="text-2xl text-custom-200 font-bold underline animate-slideUp opacity-0 mt-4 md:mt-0 md:mb-2 pb-8">Mes projets</h1>
        <div class="grid lg:grid-cols-3 gap-12 lg:gap-8 xl:w-4/5 w-2/3 mx-auto">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" draggable="false" />
        </div>
      </div>

      <div class="lg:py-6 pb-8">
        <h1 class="text-2xl text-custom-200 font-bold underline animate-slideUp opacity-0 mt-4 md:mt-0 md:mb-2 pb-8">Mes expériences</h1>
        <UTimeline
          :items="items"
          :ui="{ item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-right odd:text-left' }"
          :default-value="4"
          class="translate-x-[calc(50%-1rem)]"
        />
      </div>

    </UContainer>
  </div>
</template>

<script setup lang="ts">
import Profile from '../components/profileComponent.vue';
import ProjectCard from '../components/projectCardComponent.vue';

import projects from '~~/public/json/projects.json'

import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  {
    date: 'Depuis juin 2025',
    title: 'Développeur Java',
    description: '',
  },
  {
    date: 'Jan 2023 - Mai 2025',
    title: 'Développeur Java / COBOL',
    description: 'Oney via Infotel',
  },
  {
    date: 'Oct 2021 - Déc 2022',
    title: 'Développeur C# / COBOL',
    description: 'Euro-Information Développements via Apside',
  },
  {
    date: 'Sept 2018 - Sept 2021',
    title: 'Développeur COBOL',
    description: 'MATMUT',
  }
]
</script>