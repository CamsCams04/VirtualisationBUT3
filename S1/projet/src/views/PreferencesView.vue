<script setup>
    import { storeToRefs } from 'pinia';
    import { useDestinationStore } from '@/stores/DestinationStore.js'
    import { useDestinationService } from '@/services/DestinationService.js';
    import { ref } from 'vue'

    const store = useDestinationStore()

    const { idPreferred } = storeToRefs(store)

    let destination = useDestinationService()
    let destName = ref(null)
    let destNameFilter = ref(null)


    destination.getDestinations()
        .then((response) => {
    destName.value = response.data
    destNameFilter.value = destName.value.filter((d) => d.id != 3)
    })
        .catch((error) => {
    console.log(error)
    })




</script>

<template>
    <h1>Preferences</h1>

    <fieldset>
        <legend>Your preferred destination ?</legend>
        <div class="divPreference">
            <label v-for="d in destName" :key="d.id">
                <input type="radio" name="destination" :value="d.id" v-model="idPreferred"/>
                {{ d.name }}
            </label>
        </div>
    </fieldset>

</template>

<style scoped>
    label{
        margin-right: 50px;
    }
</style>