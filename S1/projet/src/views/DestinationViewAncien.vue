<script setup>
  //import axios from 'a, watchEffectxios'
  import {ref} from 'vue'
  import {watchEffect} from 'vue'
  import {useDestinationService} from '@/services/DestinationService.js'

  const props = defineProps(['id'])

  let destination = ref(null)
  let testError = ref(false)

  

  const destinationService = useDestinationService()

  watchEffect(() => {
    destinationService.getDestination(props.id)
    .then((response) =>  {
      destination.value = response.data
    })
    .catch((error) =>{
      console.log(error)
      testError.value = true
    })
  })
  
/*
  axios
    .get(`https://my-json-server.typicode.com/goncalve/plage/destinations/${props.id}`)
    .then((response) => {
      destination.value = response.data
    })
    .catch((error) =>{
      console.log(error)
      testError.value = true
    })
*/
</script>

<template>
  <main>
    <div v-if="destination!=null" class="destination">
      <h1>{{ destination.name }}</h1>
        <div class="destination-details">
          <img :src="`/src/assets/images/${destination.image}`" alt="image de paysage d'Hawaii"/>
          <p>{{destination.description}}</p>
        </div>
    </div>
    <div v-else-if="testError" class="destination">
      <h1>Erreur de connexion !</h1>
    </div>
    <div v-else class="destination">
      <h1>Chargement en cours...</h1>
    </div>
  </main>
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
