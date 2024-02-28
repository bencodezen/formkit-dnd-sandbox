<script setup lang="ts">
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'

const [parent, crew] = useDragAndDrop(['Luffy', 'Zoro', 'Nami', 'Sanji', 'Usopp'])
</script>

<template>
  <h1>FormKit DnD Experiments</h1>
  <h2>Sorting a List with Drag and Drop</h2>
  <ol ref="parent">
    <li v-for="member in crew" :key="member">{{ member }}</li>
  </ol>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
