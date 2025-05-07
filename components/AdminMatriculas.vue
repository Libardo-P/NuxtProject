<template>
    <div>
      <h4 class="mb-3">Matricular Alunos</h4>
      <form class="mb-3" @submit.prevent="matricularAluno">
        <select v-model="selectedUc" class="form-select mb-2">
          <option value="">Selecionar UC</option>
          <option value="Matemática">Matemática</option>
          <option value="Bases de Dados">Bases de Dados</option>
        </select>
  
        <select v-model="selectedAluno" class="form-select mb-2">
          <option value="">Selecionar Aluno</option>
          <option value="João Silva">João Silva</option>
          <option value="Maria Costa">Maria Costa</option>
        </select>
  
        <button class="btn btn-success" :disabled="!selectedUc || !selectedAluno">
          Matricular
        </button>
      </form>
  
      <table class="table" v-if="inscricoesAluno.length">
        <thead>
          <tr>
            <th>UC</th>
            <th>Aluno</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, idx) in inscricoesAluno" :key="idx">
            <td>{{ i.uc }}</td>
            <td>{{ i.utilizador }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="remover(idx)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useInscricoesStore } from '~/stores/useInscricoesStore'
  
  const store = useInscricoesStore()
  const selectedUc = ref('')
  const selectedAluno = ref('')
  
  const inscricoesAluno = computed(() =>
    store.lista.filter(i => i.tipo === 'aluno')
  )
  
  function matricularAluno() {
    store.adicionar({ uc: selectedUc.value, utilizador: selectedAluno.value, tipo: 'aluno' })
    selectedUc.value = ''
    selectedAluno.value = ''
  }
  
  function remover(index) {
    const i = inscricoesAluno.value[index]
    const realIndex = store.lista.findIndex(e =>
      e.tipo === 'aluno' && e.uc === i.uc && e.utilizador === i.utilizador
    )
    if (realIndex !== -1) store.remover(realIndex)
  }
  </script>
  