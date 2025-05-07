<template>
  <div class="table-container" id="ucs">
    <h2 class="mb-4">Unidades Curriculares</h2>

    <div v-for="(uc, index) in ucs" :key="index" class="mb-5">
      <h5>{{ index + 1 }}. {{ uc.nome }}</h5>

      <div class="d-flex gap-2 mb-3">
        <button class="btn btn-custom btn-sm" @click="uc.formAtivo = !uc.formAtivo">
          {{ uc.formAtivo ? 'Cancelar' : 'Adicionar Momento' }}
        </button>
        <button class="btn btn-custom btn-sm" @click="uc.notasVisiveis = !uc.notasVisiveis">
          {{ uc.notasVisiveis ? 'Fechar Notas' : 'Lançar Notas' }}
        </button>
      </div>

      <!-- Formulário para adicionar momento -->
      <form v-if="uc.formAtivo" class="mb-3" @submit.prevent="guardarMomento(uc)">
        <div class="row g-2 align-items-end">
          <div class="col-md-6">
            <label class="form-label">Título</label>
            <input v-model="uc.novoTitulo" type="text" class="form-control" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Data</label>
            <input v-model="uc.novaData" type="date" class="form-control" required />
          </div>
          <div class="col-md-2">
            <button type="submit" class="btn btn-success w-100">Guardar</button>
          </div>
        </div>
      </form>

      <!-- Lista de momentos -->
      <ul v-if="uc.momentos?.length" class="list-group mb-3">
        <li class="list-group-item" v-for="(momento, i) in uc.momentos" :key="i">
          📌 {{ momento.titulo }} — {{ momento.data }}
        </li>
      </ul>

      <!-- Tabela de lançamento de notas -->
      <div v-if="uc.notasVisiveis">
        <h6>Notas dos Alunos</h6>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nº</th>
              <th>Prova 1</th>
              <th>Trabalho Final</th>
              <th>Nota Final</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(aluno, i) in uc.alunos" :key="i">
              <td>{{ aluno.nome }}</td>
              <td>{{ aluno.numero }}</td>
              <td>
                <input type="number" class="form-control" v-model.number="aluno.prova1" min="0" max="20" />
              </td>
              <td>
                <input type="number" class="form-control" v-model.number="aluno.trabalho" min="0" max="20" />
              </td>
              <td>
                <strong>{{ calcularMedia(aluno) }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ucs: {
    type: Array,
    required: true
  }
})

function guardarMomento(uc) {
  if (!uc.momentos) uc.momentos = []
  uc.momentos.push({
    titulo: uc.novoTitulo,
    data: uc.novaData
  })
  uc.novoTitulo = ''
  uc.novaData = ''
  uc.formAtivo = false
}

function calcularMedia(aluno) {
  const p1 = Number(aluno.prova1) || 0
  const trab = Number(aluno.trabalho) || 0
  const media = (p1 + trab) / 2
  return media ? media.toFixed(1) : '—'
}
</script>

<style scoped>
.btn-custom {
  background-color: lightskyblue;
  color: black;
}
.btn-custom:hover {
  background-color: lightblue;
}
</style>
