<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div class="app-shell">
      <AppHeader />
      <main class="app-shell__main">
        
      </main>
      <AppFooter />
    </div>
  </UApp>
</template>

<style scoped lang="scss">
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__main {
    flex: 1;
    width: 100%;
    max-width: 80rem;
    margin-inline: auto;
    padding: 2rem clamp(1rem, 4vw, 2rem);
  }
}
</style>
