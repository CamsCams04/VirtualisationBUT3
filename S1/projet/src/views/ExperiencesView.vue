<script setup>
  import ExperienceCard from '@/components/ExperienceCard.vue'
  const props = defineProps(['destination'])
</script>

<template>
  <ul class="cards">
    <li v-for="exp in props.destination.experiences" :key="exp.name">
      <ExperienceCard  :experience="exp"/>
    </li>
  </ul>
  
</template>


<style scoped>
ul.cards {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  list-style-type: none;
  padding-left: 0;
}
</style>