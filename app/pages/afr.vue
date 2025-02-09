<template>
  <div v-if="pageContent" class="bg-[url('/images/background.svg')] bg-repeat bg-cover text-customText font-strait">
    <ReturnButton/>    
    
    <div class="container mx-auto px-8">
      <div class="text-center py-4">
        <h1 class="text-3xl text-customA2 font-bold">{{ pageContent.title }}</h1>
        <p class="text-lg font-medium flex justify-center mx-auto md:w-2/3 p-2">{{ pageContent.description }}</p>
        <CarouselSection :items="pageContent.items" />
        <UButton to="https://afrbx-1f413.web.app/" target="_blank" size="xl" class="bg-customA3 focus-visible:outline-customA2 hover:bg-customA2 mt-4">Visiter le site (en construction)</UButton>
      </div>

      <ProjectOverviewSection :presentation="pageContent.presentation" :contribution="pageContent.contribution" :frontend="pageContent.frontend" :backend="pageContent.backend" />

      <ProjectsSection :projects="pageContent.projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ReturnButton from '~/components/projects/returnButton.vue'
import CarouselSection from '~/components/projects/carouselSection.vue';
import ProjectOverviewSection from '~/components/projects/projectOverviewSection.vue';
import ProjectsSection from '~/components/projects/projectsSection.vue';

import type { PageContent } from '~/types/pageContent';

const pageContent = ref<PageContent>();

onMounted(async () => {
  try {
    const res = await fetch('/json/content.json');
    if (res.ok) {
      const data = await res.json();
      pageContent.value = data['afr'];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error);
  }
});
</script>