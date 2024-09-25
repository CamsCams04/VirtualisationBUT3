<script setup>
defineProps(['experience'])
</script>
<template>
  <div class="card">
    <img :src="`/src/assets/images/${experience.image}`" :alt="`photo de ${experience.name}`" />
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<style scoped>
img {
  width: 250px;
  height: 150px;
  object-fit: cover;
}
.card .card__text {
  background: #2c3e50;
  color: white;
  display: block;
  border-top: 2px solid #4e6c71;
  padding: 5px;
}
.card {
  text-align: center;
}
</style>