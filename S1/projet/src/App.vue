<script setup>
import TheNav from './components/TheNav.vue'
</script>

<template>

  <header>
    <TheNav />
  </header>
  <RouterView />
</template>
<style>
a,
a:visited {
  color: #2c3e50;
}
main {
  margin: 0 auto;
  max-width: 960px;
}

</style>
