<template>
  <main>
    <h2 class="mb-4">Notas do Aluno</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Unidade Curricular</th>
          <th>Docente</th>
          <th>Nota Final</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(uc, i) in ucsAluno" :key="'uc-' + i">
          <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ uc.nome }}</td>
            <td>{{ uc.docente }}</td>
            <td>{{ uc.notaFinal }}</td>
            <td>
              <span class="toggle-icon" @click="uc.expandido = !uc.expandido">
                {{ uc.expandido ? '🔼' : '🔽' }}
              </span>
            </td>
          </tr>
          <tr
            v-for="(d, j) in uc.detalhes"
            :key="'detalhe-' + i + '-' + j"
            v-if="uc.expandido"
          >
            <td></td>
            <td colspan="3">{{ d.titulo }}</td>
            <td>{{ d.nota }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useInscricoesStore } from '~/stores/useInscricoesStore'

// Simulação do aluno "autenticado"
const alunoAtual = ref({
  nome: 'João Silva',
  tipo: 'aluno'
})

// Notas por UC (pode vir da API mais tarde)
const notasPorUc = {
  'Matemática Discreta': {
    docente: 'Dr. João Silva',
    notaFinal: 16,
    detalhes: [
      { titulo: 'Prova 1', nota: 14 },
      { titulo: 'Prova 2', nota: 18 }
    ]
  },
  'Bases de Dados': {
    docente: 'Dr. Luís Ferreira',
    notaFinal: 14,
    detalhes: [
      { titulo: 'Prova Única', nota: 14 }
    ]
  }
}

const inscricoesStore = useInscricoesStore()

// UCs do aluno com info extra (docente, notas, etc.)
const ucsAluno = computed(() => {
  return inscricoesStore.lista
    .filter(i => i.utilizador === alunoAtual.value.nome && i.tipo === 'aluno')
    .map(i => {
      const dados = notasPorUc[i.uc] || {}
      return {
        nome: i.uc,
        docente: dados.docente || '—',
        notaFinal: dados.notaFinal ?? '—',
        detalhes: dados.detalhes || [],
        expandido: false
      }
    })
})
</script>

<style scoped>
.toggle-icon {
  cursor: pointer;
}
</style>
