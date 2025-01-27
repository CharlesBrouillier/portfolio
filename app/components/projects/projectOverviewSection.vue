<template>
  <div class="w-3/4 md:w-2/3 mx-auto">
    <div v-for="(section, index) in sections" :key="index" class="my-4">
      <h2 class="text-center text-lg font-extrabold underline mb-4">{{ section.title }}</h2>
      <p class="text-justify">{{ section.content }}</p>
      <div v-if="section.details" class="space-y-1 my-8">
        <div v-for="(label, key) in { Frontend: section.details.frontend, Backend: section.details.backend }" :key="key" class="text-justify">
          <span class="underline font-bold">{{ key }} :</span>&nbsp;{{ label }}
        </div>

        <div v-if="section.details.keyfunctions.length > 0">
          <p class="text-justify underline font-bold mb-1">Fonctionnalités clés :</p>
          <ul class="list-disc text-justify md:ml-8 ml-6 space-y-0.5">
            <li v-for="(keyfunction, keyfunctionindex) in section.details.keyfunctions" :key="keyfunctionindex">{{ keyfunction }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  presentation: {
    type: String,
    default: ''
  },
  contribution: {
    type: String,
    default: ''
  },
  frontend: {
    type: String,
    default: ''
  },
  backend: {
    type: String,
    default: ''
  },
  keyfunctions: {
    type: Array as PropType<string[]>,
    default: () => []
  }
});

const sections = [
  {
    title: 'Présentation du projet',
    content: props.presentation
  },
  {
    title: 'Ce que m\'a apporté le projet',
    content: props.contribution
  },
  {
    title: 'Technologies utilisées',
    details: {
      frontend: props.frontend,
      backend: props.backend,
      keyfunctions: props.keyfunctions
    }
  }
];
</script>