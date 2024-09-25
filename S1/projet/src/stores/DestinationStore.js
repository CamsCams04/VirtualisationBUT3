import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDestinationStore = 
    defineStore ('destination', () => {
        const idPreferred = ref(null)
        
        return { idPreferred }
    }) 