<template>
    <main class="container py-5">
      <UcLista :ucs="ucs" @lancarNotas="selecionarUc" />
      <NotasAluno v-if="ucSelecionada" :alunos="alunosDaUc" />
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import UcLista from '~/components/docentes/ucLista.vue'
  import NotasAluno from '~/components/docentes/notasAluno.vue'
  
  const ucSelecionada = ref(null)
  
  const ucs = [
    { nome: 'Matemática Discreta' },
    { nome: 'Algoritmos' }
  ]
  
  const alunosDaUc = ref([
    { nome: 'João Silva', numero: 12345, prova1: 16, trabalhoFinal: 17 },
    { nome: 'Maria Costa', numero: 67890, prova1: 19, trabalhoFinal: 18 }
  ])
  
  function selecionarUc(uc) {
    ucSelecionada.value = uc
  }
  </script>
  
  