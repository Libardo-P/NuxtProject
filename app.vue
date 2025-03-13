<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->


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
      <NuxtPage />  <!-- Aqui aparecem as páginas -->
    </main>

    <footer>
      <p>© 2025 Meu Site</p>
    </footer>
  </div>
</template>
