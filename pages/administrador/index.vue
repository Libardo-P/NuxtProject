<template>
  <main class="container py-5">
      <h2 class="mb-4">Gestão de Matrículas</h2>

      <form class="mb-3" @submit.prevent="matricularAluno">
        <label for="uc-select" class="form-label">Selecionar Unidade Curricular:</label>
        <select v-model="selectedUc" id="uc-select" class="form-control">
          <option value="">---- Selecionar ----</option>
          <option value="Matemática">Matemática</option>
          <option value="Bases de Dados">Bases de Dados</option>
        </select>

        <label for="student-select" class="form-label mt-3">Selecionar Aluno:</label>
        <select v-model="selectedAluno" id="student-select" class="form-control">
          <option value="">---- Selecionar ----</option>
          <option value="João Silva">João Silva</option>
          <option value="Maria Costa">Maria Costa</option>
        </select>

        <div v-if="formError" class="alert alert-danger mt-3">
          Por favor preencha ambos os campos.
        </div>

        <button
          type="submit"
          class="btn btn-success mt-3"
          :disabled="!selectedUc || !selectedAluno"
        >
          Matricular Aluno
        </button>
      </form>

      <table v-if="matriculas.length" class="table table-striped">
        <thead>
          <tr>
            <th>Unidade Curricular</th>
            <th>Aluno</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in matriculas" :key="index">
            <td>{{ item.uc }}</td>
            <td>{{ item.aluno }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removerMatricula(index)">
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else class="text-muted">Nenhuma matrícula registada ainda.</p>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const selectedUc = ref('')
const selectedAluno = ref('')
const matriculas = ref([])
const formError = ref(false)

function matricularAluno() {
  if (!selectedUc.value || !selectedAluno.value) {
    formError.value = true
    return
  }

  matriculas.value.push({
    uc: selectedUc.value,
    aluno: selectedAluno.value
  })

  // Reset
  selectedUc.value = ''
  selectedAluno.value = ''
  formError.value = false
}

function removerMatricula(index) {
  matriculas.value.splice(index, 1)
}
</script>

<style scoped>
.main-content {
  padding-top: 120px;
  padding-bottom: 80px;
}
</style>
