// stores/useInscricoesStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Inscricao {
  uc: string
  utilizador: string
  tipo: 'aluno' | 'docente'
}

export const useInscricoesStore = defineStore('inscricoes', () => {
  const lista = ref<Inscricao[]>([
    // Alunos
    { uc: 'Matemática Discreta', utilizador: 'João Silva', tipo: 'aluno' },
    { uc: 'Bases de Dados', utilizador: 'João Silva', tipo: 'aluno' },
    { uc: 'Bases de Dados', utilizador: 'Maria Costa', tipo: 'aluno' },

    // Docentes
    { uc: 'Matemática Discreta', utilizador: 'Dr. João Silva', tipo: 'docente' },
    { uc: 'Bases de Dados', utilizador: 'Dr. Luís Ferreira', tipo: 'docente' }
  ])

  function adicionar(inscricao: Inscricao) {
    lista.value.push(inscricao)
  }

  function remover(index: number) {
    lista.value.splice(index, 1)
  }

  return { lista, adicionar, remover }
})
