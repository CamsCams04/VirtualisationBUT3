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
            <section class="destination-illustration">
                <img :src="`/src/assets/images/${destination.image}`" alt="image de paysage d'Hawaii"/>
            </section>
            <section class="destination-information">
                <nav>
                    <ul>
                        <li><RouterLink :to="{ name: 'description' }">Description</RouterLink></li>
                        <li><RouterLink :to="{ name: 'experiences' }">Experiences</RouterLink></li>
                    </ul>
                    <RouterView :destination="destination"/>
                </nav>
            </section>
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
.destination nav ul {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  line-height: 4ch;
  border-bottom: 1px solid;
  width: 50ch;
}
.destination nav a {
  padding: 0 1ch;
  text-decoration: none;
  display: block;
  color: #0d6efd;
}
.destination nav a.router-link-exact-active {
  border-left: 1px solid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: #2c3e50;
}
</style>