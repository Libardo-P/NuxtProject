// stores/useAlunosStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlunosStore = defineStore('alunos', () => {
  const lista = ref([
    { nome: 'João Silva', email: 'joao@uma.pt' },
    { nome: 'Maria Costa', email: 'maria@uma.pt' }
  ])

  function adicionarAluno(aluno: { nome: string; email: string }) {
    lista.value.push(aluno)
  }

  return { lista, adicionarAluno }
})
