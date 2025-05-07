<!-- components/alunos/AlunoInfo.vue -->
<template>
  <BaseCard>
    <h5>{{ aluno.nome }}</h5>
    <p>{{ aluno.email }}</p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '~/components/cards/BaseCard.vue'

defineProps({
  aluno: {
    type: Object,
    required: true
  }
})
</script>
