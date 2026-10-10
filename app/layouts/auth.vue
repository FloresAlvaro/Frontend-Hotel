<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <main class="auth-layout">
    <section class="auth-layout__welcome" aria-labelledby="welcome-title">
      <AppBrand class="auth-layout__brand" />
      <div class="auth-layout__copy">
        <p class="auth-layout__eyebrow">EL PORTAL DE TU HOTEL</p>
        <h1 id="welcome-title">Bienvenido de nuevo</h1>
        <p class="auth-layout__description">
          Reservas, huéspedes y cada detalle de la operación,<br
            class="auth-layout__break"
          />
          siempre a mano.
        </p>
      </div>
      <p class="auth-layout__caption">
        <span aria-hidden="true">✓</span> Acceso privado para el equipo del
        hotel
      </p>
    </section>
    <section class="auth-layout__panel" aria-label="Acceso al sistema">
      <div class="auth-layout__form"><slot /></div>
      <footer class="auth-layout__footer">
        <span>© {{ year }} Roomly</span>
        <span>Acceso protegido</span>
      </footer>
    </section>
  </main>
</template>

<style scoped lang="scss" src="~/assets/scss/layouts/auth.scss"></style>
