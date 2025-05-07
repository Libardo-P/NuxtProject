<template>
  <main>
    <h2 class="mb-4">Painel do Administrador</h2>

    <section class="mb-5">
      <UserForm />
    </section>

    <section class="mb-5">
      <UserList />
    </section>

    <section class="mb-5">
      <AdminMatriculas />
    </section>

    <section>
      <AdminDocentes />
    </section>
  </main>
</template>

<script setup>
import UserForm from '~/components/administrador/UserForm.vue'
import UserList from '~/components/administrador/UserList.vue'
import AdminMatriculas from '~/components/AdminMatriculas.vue'
import AdminDocentes from '~/components/AdminDocentes.vue'
</script>
