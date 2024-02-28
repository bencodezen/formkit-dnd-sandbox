<script setup lang="ts">
import { watch } from 'vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import { useCrewStore } from '@/stores/crewStore'

const crewStore = useCrewStore()

const [elParent, renderedCrew] = useDragAndDrop(crewStore.crew1)
const [elCrew1, renderedCrew1] = useDragAndDrop(crewStore.crew1, { group: 'crew' })
const [elCrew2, renderedCrew2] = useDragAndDrop(crewStore.crew2, { group: 'crew' })

watch(renderedCrew1, (newCrew: string[]) => {
  crewStore.setUserCrew(newCrew)
})
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
  <h3>Final Crew List</h3>
  <pre>
    {{ crewStore.userCrew }}
  </pre>
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
