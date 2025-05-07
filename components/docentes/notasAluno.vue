<template>
    <div class="table-container mt-4">
      <h4 class="mb-3">Alunos Inscritos</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Número</th>
            <th>Prova 1</th>
            <th>Trabalho Final</th>
            <th>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, index) in alunos" :key="index">
            <td>{{ aluno.nome }}</td>
            <td>{{ aluno.numero }}</td>
            <td>
              <input
                type="number"
                class="form-control"
                v-model.number="aluno.prova1"
                min="0"
                max="20"
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                v-model.number="aluno.trabalhoFinal"
                min="0"
                max="20"
              />
            </td>
            <td><strong>{{ notaFinal(aluno) }}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  defineProps({
    alunos: {
      type: Array,
      required: true
    }
  })
  
  function notaFinal(aluno) {
    const { prova1 = 0, trabalhoFinal = 0 } = aluno
    return ((prova1 + trabalhoFinal) / 2).toFixed(1)
  }
  </script>
  