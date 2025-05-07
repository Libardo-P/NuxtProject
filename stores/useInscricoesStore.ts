import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInscricoesStore = defineStore('inscricoes', () => {
  const lista = ref<{ uc: string; utilizador: string; tipo: string }[]>([])

  function inscrever(uc: string, utilizador: string, tipo: string) {
    lista.value.push({ uc, utilizador, tipo })
  }

  return { lista, inscrever }
})
