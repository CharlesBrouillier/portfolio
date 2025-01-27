<template>
  <div>&nbsp;</div>
</template>

<script setup>
import { useRouter, useRoute } from '#app';

const router = useRouter();
const route = useRoute();

if (route.path !== '/gameon') {
  router.push('/');
}
</script>