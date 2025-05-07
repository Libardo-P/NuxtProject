<template>
    <div>
      <h4 class="mb-3">Atribuir Docentes</h4>
      <form class="mb-3" @submit.prevent="atribuirDocente">
        <select v-model="selectedUc" class="form-select mb-2">
          <option value="">Selecionar UC</option>
          <option value="Matemática">Matemática</option>
          <option value="Bases de Dados">Bases de Dados</option>
        </select>
  
        <select v-model="selectedDocente" class="form-select mb-2">
          <option value="">Selecionar Docente</option>
          <option value="Dr. João Silva">Dr. João Silva</option>
          <option value="Prof. Ana Costa">Prof. Ana Costa</option>
        </select>
  
        <button class="btn btn-success" :disabled="!selectedUc || !selectedDocente">
          Atribuir
        </button>
      </form>
  
      <table class="table" v-if="inscricoesDocente.length">
        <thead>
          <tr>
            <th>UC</th>
            <th>Docente</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, idx) in inscricoesDocente" :key="idx">
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
  const selectedDocente = ref('')
  
  const inscricoesDocente = computed(() =>
    store.lista.filter(i => i.tipo === 'docente')
  )
  
  function atribuirDocente() {
    store.adicionar({ uc: selectedUc.value, utilizador: selectedDocente.value, tipo: 'docente' })
    selectedUc.value = ''
    selectedDocente.value = ''
  }
  
  function remover(index) {
    const i = inscricoesDocente.value[index]
    const realIndex = store.lista.findIndex(e =>
      e.tipo === 'docente' && e.uc === i.uc && e.utilizador === i.utilizador
    )
    if (realIndex !== -1) store.remover(realIndex)
  }
  </script>
  