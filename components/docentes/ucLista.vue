<template>
  <div class="table-container" id="ucs">
    <h2 class="mb-4">Unidades Curriculares</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Unidade Curricular</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(uc, index) in ucs" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ uc.nome }}</td>
          <td>
            <button class="btn btn-custom btn-sm" @click="$emit('adicionarMomento', uc)">Adicionar Momento</button>
            <button class="btn btn-custom btn-sm" @click="$emit('lancarNotas', uc)">Lançar Notas</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  ucs: {
    type: Array,
    required: true
  }
})

defineEmits(['adicionarMomento', 'lancarNotas'])
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
