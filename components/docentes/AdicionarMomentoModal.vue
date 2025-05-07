<template>
    <div class="modal fade" id="modalMomento" tabindex="-1" aria-labelledby="modalMomentoLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalMomentoLabel">Adicionar Momento de Avaliação</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submeterMomento">
              <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input v-model="titulo" type="text" id="titulo" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input v-model="data" type="date" id="data" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-success">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['guardar'])
  
  const titulo = ref('')
  const data = ref('')
  const ucAtual = ref(null)
  
  function abrir(uc) {
    ucAtual.value = uc
    titulo.value = ''
    data.value = ''
    const modal = new bootstrap.Modal(document.getElementById('modalMomento'))
    modal.show()
  }
  
  function submeterMomento() {
    emit('guardar', {
      uc: ucAtual.value,
      titulo: titulo.value,
      data: data.value
    })
  
    bootstrap.Modal.getInstance(document.getElementById('modalMomento')).hide()
  }
  
  defineExpose({ abrir })
  </script>
  