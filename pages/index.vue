<template>
  <div class="main-content">
    <div class="container text-center">
      <h1>Universidade da Madeira</h1>
      <p>
        Bem-vindo ao portal da UMa. Explore informações sobre alunos, docentes, licenciaturas e muito mais
      </p>

      <div class="container text-center my-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="/Images/UMa.png" alt="Universidade" class="img-fluid rounded" />
          </div>
          <div class="col-md-6">
            <h2>Abra os seus horizontes e progrida na sua carreira</h2>
            <p>
              Venha conhecer a nossa oferta formativa, CTeSPs, pós-graduações, faculdades e escolas
            </p>
            <div class="d-flex justify-content-center mt-3">
              <NuxtLink to="/alunos" class="btn btn-custom me-2">Info Alunos</NuxtLink>
              <NuxtLink to="/docente" class="btn btn-custom">Docentes</NuxtLink>
            </div>
          </div>
        </div>

        <div class="row text-center mt-5">
          <div class="col-md-3">
            <h3>14</h3>
            <p>Centros e Núcleos de Investigação</p>
          </div>
          <div class="col-md-3">
            <h3>05</h3>
            <p>Serviços de Apoio ao Estudante</p>
          </div>
          <div class="col-md-3">
            <h3>78</h3>
            <p>Cursos Superiores</p>
          </div>
          <div class="col-md-3">
            <h3>06</h3>
            <p>Faculdades e Escolas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: left;
}

.btn-custom {
  background-color: lightskyblue;
  color: black;
  transition: 0.2s ease-in-out;
}
.btn-custom:hover {
  background-color: lightblue;
  color: black;
}
</style>

