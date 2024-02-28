import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCrewStore = defineStore('crewStore', () => {
  const crew1 = ref(['Luffy', 'Zoro', 'Sanji', 'Nami', 'Usopp'])
  const crew2 = ref(['Chopper', 'Franky', 'Robin', 'Brook', '???'])

  const userCrew = ref<string[]>([])

  function setUserCrew(crew: string[]) {
    userCrew.value = crew
  }

  return {
    crew1,
    crew2,
    userCrew,
    setUserCrew
  }
})
