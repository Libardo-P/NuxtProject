<template>
    <div>
      <h4 class="mb-3">Lista de Utilizadores</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, i) in store.lista" :key="i">
            <td>{{ u.nome }}</td>
            <td>{{ u.email }}</td>
            <td class="text-capitalize">{{ u.tipo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useUtilizadoresStore } from '~/stores/useUtilizadoresStore'
  const store = useUtilizadoresStore()
  </script>
  