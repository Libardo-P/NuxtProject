<template>
    <div class="card p-4">
      <h4 class="mb-3">Adicionar Novo Utilizador</h4>
      <form @submit.prevent="adicionarUtilizador">
        <div class="mb-3">
          <label class="form-label">Nome</label>
          <input v-model="nome" type="text" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label">Tipo</label>
          <select v-model="tipo" class="form-select" required>
            <option disabled value="">Selecionar...</option>
            <option value="aluno">Aluno</option>
            <option value="docente">Docente</option>
          </select>
        </div>
  
        <button class="btn btn-success">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUtilizadoresStore } from '~/stores/useUtilizadoresStore'
  
  const store = useUtilizadoresStore()
  const nome = ref('')
  const email = ref('')
  const tipo = ref('')
  
  function adicionarUtilizador() {
    store.adicionar({ nome: nome.value, email: email.value, tipo: tipo.value })
    nome.value = ''
    email.value = ''
    tipo.value = ''
  }
  </script>
  