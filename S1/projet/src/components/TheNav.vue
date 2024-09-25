<script setup>
  import { useDestinationService } from '@/services/DestinationService.js';
  import {ref} from 'vue'
 
  import { storeToRefs } from 'pinia';
  import { useDestinationStore } from '@/stores/DestinationStore.js'

  const store = useDestinationStore()

  const { idPreferred } = storeToRefs(store)

  let destName = ref(null)
  let destNameFilter = ref(null)
  let destPrefFilter = ref(null)

  let destination = useDestinationService()

  destination.getDestinations()
  .then((response) => {
    destName.value = response.data
    destPrefFilter.value = destName.value.filter((d) => d.id == idPreferred)[0]
    destNameFilter.value = destName.value.filter((d) => d.id != idPreferred)
  })
  .catch((error) => {
    console.log(error)
  })

// autre méthode de filter
  /*
  import {computed} from 'vue'
  destNameFilter = computed(() => {
    return destonations.value.filter((d) => d.id != 3)
  })

  */

</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink v-if="destPrefFilter != null" :to="{ name: 'destination' , params: {id: idPreferred}}">{{destPrefFilter.name}}, my favorite</RouterLink>
    <RouterLink v-for="d in destNameFilter" :key="d.id" :to="{ name: 'destination' , params: {id: d.id}}">{{d.name}}</RouterLink>
    <RouterLink :to="{name : 'preferences'}">Preference</RouterLink>
    <RouterLink :to="{name : 'about'}">About</RouterLink>
    <p>{{ idPreferred }}</p>
  </nav>
</template>


<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}
nav a.active,
nav a:hover {
  opacity: 1;
}

.router-link-active{
  color: aqua;
}
</style>