<script setup lang="ts">
const {
  email,
  password,
  passwordVisible,
  loading,

  fieldErrors,
  validateField,
  clearFieldError,
  handleLogin
} = useLoginForm()
</script>

<template>
  <section class="login-page" aria-labelledby="login-title">
    <h2 id="login-title">Iniciar sesión</h2>
    <p class="login-page__intro">Ingresa tus datos para continuar.</p>
    <form class="login-page__form" novalidate @submit.prevent="handleLogin">
      <div class="login-page__field">
        <label for="login-email">Correo electrónico</label>
        <div
          class="login-page__input"
          :class="{ 'login-page__input--error': fieldErrors.email }"
        >
          <AppGlyph name="mail" />
          <input
            id="login-email"
            v-model.trim="email"
            type="email"
            name="email"
            placeholder="nombre@hotel.com"
            autocomplete="username"
            required
            :disabled="loading"
            :aria-invalid="Boolean(fieldErrors.email)"
            :aria-describedby="
              fieldErrors.email ? 'login-email-error' : undefined
            "
            @blur="validateField('email')"
            @input="clearFieldError('email')"
          />
        </div>
        <p
          v-if="fieldErrors.email"
          id="login-email-error"
          class="login-page__error"
          role="alert"
        >
          {{ fieldErrors.email }}
        </p>
      </div>
      <div class="login-page__field">
        <label for="login-password">Contraseña</label>
        <div
          class="login-page__input"
          :class="{ 'login-page__input--error': fieldErrors.password }"
        >
          <AppGlyph name="lock" />
          <input
            id="login-password"
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            name="password"
            placeholder="Escribe tu contraseña"
            autocomplete="current-password"
            required
            :disabled="loading"
            :aria-invalid="Boolean(fieldErrors.password)"
            :aria-describedby="
              fieldErrors.password ? 'login-password-error' : undefined
            "
            @blur="validateField('password')"
            @input="clearFieldError('password')"
          />
          <button
            class="login-page__toggle"
            type="button"
            :aria-label="
              passwordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'
            "
            :aria-pressed="passwordVisible"
            :disabled="loading"
            @click="passwordVisible = !passwordVisible"
          >
            <AppGlyph :name="passwordVisible ? 'eye-off' : 'eye'" />
          </button>
        </div>
        <p
          v-if="fieldErrors.password"
          id="login-password-error"
          class="login-page__error"
          role="alert"
        >
          {{ fieldErrors.password }}
        </p>
      </div>
      <AppButton
        class="login-page__submit"
        type="submit"
        block
        :loading="loading"
      >
        {{ loading ? 'Iniciando sesión…' : 'Iniciar sesión' }}
        <span v-if="!loading" aria-hidden="true">→</span>
      </AppButton>
    </form>
    <p class="login-page__security">
      <AppGlyph name="lock" />
      Acceso privado para el equipo del hotel
    </p>
  </section>
</template>

<style scoped lang="scss" src="~/assets/scss/pages/login.scss"></style>
