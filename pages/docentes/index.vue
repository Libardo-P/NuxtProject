<template>
  <UcLista :ucs="listaUcs" @lancarNotas="uc => console.log('Notas:', uc)" />
</template>

<script setup>
import { ref } from 'vue'
import UcLista from '~/components/docentes/ucLista.vue'

const listaUcs = ref([
  { nome: 'Matemática Discreta' },
  { nome: 'Algoritmos' }
])
</script>
