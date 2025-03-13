<template>
    <div>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <NuxtLink to="/">Início</NuxtLink> |
          <NuxtLink to="/sobre">Sobre</NuxtLink>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
  
      <footer>
        <p>© 2025 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <style>
  header {
    background: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  footer {
    margin-top: 20px;
    text-align: center;
    padding: 10px;
    background: #f0f0f0;
  }
  </style>
  