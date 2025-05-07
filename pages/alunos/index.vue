<!-- <template>
    <div class="container mt-5">
      <h1 class="mb-3">Página de Alunos</h1>
      <p>Bem-vindo à página dos alunos da Universidade da Madeira.</p>
    </div>
  </template> -->
  

  <template>
    <main class="container py-5">
      <h2 class="mb-4">Lista de Alunos</h2>
  
      <!-- Formulário para adicionar novo aluno -->
      <form class="row g-3 mb-4" @submit.prevent="adicionar">
        <div class="col-md-5">
          <input
            v-model="novoNome"
            type="text"
            class="form-control"
            placeholder="Nome do aluno"
            required
          />
        </div>
        <div class="col-md-5">
          <input
            v-model="novoEmail"
            type="email"
            class="form-control"
            placeholder="Email do aluno"
            required
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-success w-100">Adicionar</button>
        </div>
      </form>
  
      <!-- Lista de alunos -->
      <AlunoInfo
        v-for="(aluno, index) in alunosStore.lista"
        :key="index"
        :aluno="aluno"
      />
    </main>
  </template>
  
  <script setup>
  // 🧠 Store (gestão de estado global)
  import { useAlunosStore } from '~/stores/useAlunosStore'
  
  // 🧩 Componentes
  import AlunoInfo from '~/components/alunos/AlunoInfo.vue'
  
  import { ref } from 'vue'
  
  // 🧠 Estado local do formulário
  const novoNome = ref('')
  const novoEmail = ref('')
  
  // 🗂️ Aceder à store
  const alunosStore = useAlunosStore()
  
  // 🧾 Função para adicionar novo aluno
  function adicionar() {
    if (novoNome.value && novoEmail.value) {
      alunosStore.adicionarAluno({
        nome: novoNome.value,
        email: novoEmail.value
      })
  
      // Reset dos campos
      novoNome.value = ''
      novoEmail.value = ''
    }
  }
  </script>
  