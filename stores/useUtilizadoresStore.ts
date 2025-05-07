// stores/useUtilizadoresStore.ts
import { defineStore } from 'pinia'

export const useUtilizadoresStore = defineStore('utilizadores', () => {
  const lista = ref<{ nome: string; email: string }[]>([])

  function adicionar(utilizador: { nome: string; email: string }) {
    lista.value.push(utilizador)
  }

  return { lista, adicionar }
})
