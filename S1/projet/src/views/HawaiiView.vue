<script setup>
  import axios from 'axios'
  import {ref} from 'vue'

  let destination = ref(null)

  axios
    .get('https://my-json-server.typicode.com/goncalve/plage/destinations/3')
    .then((response) => {
      destination.value = response.data
    })
    .catch((error) =>{
      console.log(error)
    })

</script>

<template>
  <div v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/src/assets/images/${destination.image}`" alt="image de paysage d'Hawaii"/>
        <p>{{destination.description}}</p>
      </div>
  </div>
</template>

<style scoped>
/* Destination Details */
.destination-details {
  display: flex;
  gap: 30px;
  align-items: start;
}
.destination-details img {
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
