<script setup lang="ts">
import { ref } from 'vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'

const crew1 = ref(['Luffy', 'Zoro', 'Sanji', 'Nami', 'Usopp'])
const crew2 = ref(['Chopper', 'Franky', 'Robin', 'Brook', '???'])

const [elParent, renderedCrew] = useDragAndDrop(crew1.value)
const [elCrew1, renderedCrew1] = useDragAndDrop(crew1.value, { group: 'crew' })
const [elCrew2, renderedCrew2] = useDragAndDrop(crew2.value, { group: 'crew' })
</script>

<template>
  <h1>FormKit DnD Experiments</h1>
  <h2>Sorting a List with Drag and Drop</h2>
  <ol ref="elParent">
    <li v-for="member in renderedCrew" :key="member">{{ member }}</li>
  </ol>
  <h2>Dragging Between Two Lists</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr">
    <ul ref="elCrew1">
      <li v-for="member in renderedCrew1" :key="member">{{ member }}</li>
    </ul>
    <ul ref="elCrew2">
      <li v-for="member in renderedCrew2" :key="member">{{ member }}</li>
    </ul>
  </div>
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
