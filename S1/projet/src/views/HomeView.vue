<script setup>
  import DestinationCard from '@/components/DestinationCard.vue'
  //import axios from 'axios'
  import { useDestinationService } from '@/services/DestinationService.js';
  import {ref} from 'vue'
  let destinations = ref(null)

  let testError = ref(false)

  const destinationService = useDestinationService()

  destinationService.getDestinations()
    .then((response) => {
      destinations.value = response.data
    })
    .catch((error) => {
      console.log(error)
      testError.value = true
    })

/*
  axios
    .get('https://my-json-server.typicode.com/goncalve/plage/destinations')
    .then((response) => {
      destinations.value = response.data
    })
    .catch((error) => {
      console.log(error.message)
      testError.value = true
    })*/
    
  /*import {ref} from 'vue'
  let destinations = ref(null) 

  fetch('https://my-json-server.typicode.com/goncalve/plage/destinations')
  .then((response)=> {
    if(response.ok){
      return response.json()
    }else{
      throw 'Err' + response.status
    }
  })
  .then((data) => {destinations.value = data})
  .catch((error) => {console.log(error)})*/

</script>

<template>
  <main v-if="destinations!=null" id="destinations">
    <DestinationCard v-for="d in destinations" :key=d.id :idDestination=d.id :destName=d.name :destImg=d.image />
  </main>
  <main v-else-if="testError == true" id="destinations">
    <h1>Erreur de Chargement !</h1>
  </main>
  <main v-else>
    <h1>Chargement en cours...</h1>
  </main>
</template>
<style scoped>
img {
  max-width: 230px;
}
#destinations {
  display: flex;
  justify-content: space-between;
}
</style>
