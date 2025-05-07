<template>
    <div class="mt-5">
      <h4 class="mb-3">Inscrição em Unidades Curriculares</h4>
  
      <form @submit.prevent="inscrever" class="row g-3 align-items-end">
        <div class="col-md-5">
          <label class="form-label">Unidade Curricular</label>
          <select v-model="ucSelecionada" class="form-select" required>
            <option disabled value="">Selecionar UC</option>
            <option v-for="uc in ucsDisponiveis" :key="uc" :value="uc">{{ uc }}</option>
          </select>
        </div>
  
        <div class="col-md-5">
          <label class="form-label">Utilizador</label>
          <select v-model="utilizadorSelecionado" class="form-select" required>
            <option disabled value="">Selecionar utilizador</option>
            <option
              v-for="u in utilizadoresStore.lista"
              :key="u.email"
              :value="u.nome"
            >
              {{ u.nome }} ({{ u.tipo }})
            </option>
          </select>
        </div>
  
        <div class="col-md-2">
          <button class="btn btn-success w-100">Inscrever</button>
        </div>
      </form>
  
      <div v-if="inscricoesStore.lista.length" class="mt-4">
        <h5>Inscrições Feitas</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>UC</th>
              <th>Utilizador</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in inscricoesStore.lista" :key="index">
              <td>{{ item.uc }}</td>
              <td>{{ item.utilizador }}</td>
              <td class="text-capitalize">{{ item.tipo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useUtilizadoresStore } from '~/stores/useUtilizadoresStore'
  import { useInscricoesStore } from '~/stores/useInscricoesStore'
  
  const utilizadoresStore = useUtilizadoresStore()
  const inscricoesStore = useInscricoesStore()
  
  const ucSelecionada = ref('')
  const utilizadorSelecionado = ref('')
  
  // Podes adaptar esta lista com dados dinâmicos mais tarde
  const ucsDisponiveis = [
    'Matemática Discreta',
    'Bases de Dados',
    'Programação Web'
  ]
  
  function inscrever() {
    const utilizador = utilizadoresStore.lista.find(u => u.nome === utilizadorSelecionado.value)
    if (!utilizador) return
  
    inscricoesStore.inscrever(ucSelecionada.value, utilizador.nome, utilizador.tipo)
  
    // Reset
    ucSelecionada.value = ''
    utilizadorSelecionado.value = ''
  }
  </script>
  