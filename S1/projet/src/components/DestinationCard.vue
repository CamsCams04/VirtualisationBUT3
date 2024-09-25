<script setup>
  defineProps(['destName', 'destImg', 'idDestination'])
</script>

<template>
  <RouterLink :to="{ name: 'destination' , params: {id: idDestination}}">
    <div class="destination">
      <h2>{{ destName }}</h2>
      <img :src="`/src/assets/images/${destImg}`"/>
    </div>
  </RouterLink>
</template>


<style scoped>
.destination {
  padding: 0.3rem;
  margin: 0.3rem;
  text-align: center;
  border: 1px solid #39495c;
}
.destination img {
  max-width: 230px;
}
</style>
