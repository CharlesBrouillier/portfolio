<template>
  <div>&nbsp;</div>
</template>

<script setup>

const router = useRouter();
const route = useRoute();

if (route.path !== '/gameon') {
  router.push('/');
}
</script>