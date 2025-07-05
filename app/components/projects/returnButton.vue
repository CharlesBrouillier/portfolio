<template>
  <NuxtLink class="flex cursor-pointer md:absolute relative justify-center md:pl-4 pt-4" @click="goBack()">
    <div class="inline-flex border-2 border-custom-200 rounded-md text-custom-100 hover:bg-customTextAlt px-3 py-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
      </svg>
      <span class="font-bold text-lg ml-1">Retour</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

import { useRouter } from '#app';
const router = useRouter();

const goBack = () => {
  router.push('/');
};
</script>