<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand py-0">
          <img src="/Images/logo1.jpeg" alt="Universidade da Madeira" height="60">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/alunos">Alunos</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/docente">Docentes</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/documentos">Documentos</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/administrador">Administrador</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="btn btn-custom" to="/login">Login</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .btn-custom {
    background-color: lightskyblue;
    color: black;
  }
  .btn-custom:hover {
    background-color: lightblue;
  }
  </style>
  