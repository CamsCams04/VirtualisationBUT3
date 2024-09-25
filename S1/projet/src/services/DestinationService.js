import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/goncalve/plage',
    headers:{
        Accept: 'application/json'
    }
})

async function getDestinations(){
    return apiClient.get('/destinations');
}

async function getDestination(id){
    return apiClient.get('/destinations/' + id);
}

export function useDestinationService(){
    return {
        getDestinations,
        getDestination
    }
}