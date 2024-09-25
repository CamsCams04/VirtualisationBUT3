<script setup>
    const props = defineProps(['destination'])
</script>

<template>
  <p>
    {{ props.destination.description }}
  </p>
</template>
