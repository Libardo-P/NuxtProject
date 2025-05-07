<template>
    <div class="card p-4">
      <h4 class="mb-3">Atribuir Utilizador a UC</h4>
  
      <form @submit.prevent="adicionarInscricao">
        <div class="mb-3">
          <label class="form-label">Unidade Curricular</label>
          <input v-model="uc" type="text" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Nome do Utilizador</label>
          <input v-model="utilizador" type="text" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Tipo</label>
          <select v-model="tipo" class="form-select" required>
            <option disabled value="">Selecione...</option>
            <option value="aluno">Aluno</option>
            <option value="docente">Docente</option>
          </select>
        </div>
  
        <button type="submit" class="btn btn-success">Atribuir</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useInscricoesStore } from '~/stores/useInscricoesStore'
  
  const store = useInscricoesStore()
  
  const uc = ref('')
  const utilizador = ref('')
  const tipo = ref('')
  
  function adicionarInscricao() {
    if (!uc.value || !utilizador.value || !tipo.value) return
  
    store.adicionar({
      uc: uc.value,
      utilizador: utilizador.value,
      tipo: tipo.value
    })
  
    uc.value = ''
    utilizador.value = ''
    tipo.value = ''
  }
  </script>
  