<template>
  <div v-if="pageContent" class="bg-[url('/images/background.svg')] bg-repeat bg-cover text-customText font-strait">
    <ReturnButton/>

    <div class="container mx-auto px-8">
      <div class="text-center py-4">
        <h1 class="text-3xl text-customA2 font-bold">
          {{ pageContent.title }}
        </h1>
        <p class="text-lg font-medium flex justify-center mx-auto md:w-2/3 p-2">{{ pageContent.description }}</p>
        <CarouselSection :items="pageContent.items" />
        <UButton to="https://charlesbrouillier.fr/gameon/" target="_blank" size="xl" class="disabled:bg-customA3 focus-visible:outline-customA2 hover:bg-customA2 mt-4">Visiter le site</UButton>
      </div>

      <ProjectOverviewSection :presentation="pageContent.presentation" :contribution="pageContent.contribution" :technologies="pageContent.technologies" :frontend="pageContent.frontend" :backend="pageContent.backend" :keyfunctions="pageContent.keyfunctions"/>

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
      pageContent.value = data['gameon'];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error);
  }
});
</script>