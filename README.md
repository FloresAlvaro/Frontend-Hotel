# Frontend Hotel

Base del frontend con Nuxt 4, Vue, TypeScript, Nuxt UI, Tailwind CSS, Pinia y Nuxt Image.

## Requisitos

Node.js 24.21.0 (definido en `.nvmrc`) y npm.

## Instalación y desarrollo

```bash
npm ci
npm run dev
```

El frontend está disponible en http://localhost:3001. La instalación ejecuta `nuxt prepare` para generar tipos y la configuración de ESLint en `.nuxt`.

## Autenticación local

El backend debe estar disponible en `http://localhost:3000/api`. Copiar `.env.example` a `.env` para personalizar `NUXT_PUBLIC_API_BASE`.

En el contenedor del backend, configurar `FRONTEND_URL=http://localhost:3001`, `CORS_ORIGIN=http://localhost:3001`, `CORS_CREDENTIALS=true` y `COOKIE_SECURE=false` para desarrollo local con HTTP. Reiniciar el contenedor si cambia su configuración.

El login usa los endpoints `/users/login`, `/users/profile` y `/account/logout`, con la cookie HttpOnly `hotel_session`. No se guardan tokens en localStorage. La comprobación inicial de sesión ocurre en el navegador, porque la cookie del backend está limitada a `/api`. El middleware controla la navegación; el backend valida la sesión y los permisos.

Visitar `/auth/login` con una cuenta existente del backend. Tras iniciar sesión, `/` muestra el usuario y permite cerrar la sesión. No se incluyen registro ni recuperación de contraseña todavía.

## Calidad de código

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run typecheck
npm run check
```

ESLint utiliza la configuración de Nuxt para JavaScript, TypeScript y Vue. Prettier se encarga del formato. `check` ejecuta lint, comprobación de formato y comprobación de tipos.

En VS Code se recomienda instalar Vue - Official, ESLint y Prettier. `.editorconfig` define indentación y saltos de línea.

## Producción

```bash
npm run build
npm run preview
```

Para generar una versión estática, usar `npm run generate`.

## Estructura

- `app/app.vue`: raíz de la aplicación con el proveedor `UApp` de Nuxt UI.
- `app/assets/css/main.css`: estilos globales e imports de Tailwind CSS y Nuxt UI.
- `public/`: archivos públicos.
- `nuxt.config.ts`: módulos y configuración de Nuxt.

Las dependencias Tiptap satisfacen los requisitos del componente Editor de Nuxt UI. Las pruebas funcionales se incorporarán al desarrollar las primeras funcionalidades.

## Integración continua

GitHub Actions ejecuta `npm ci`, `npm run check` y `npm run build` en cada push y pull request. Mantener `package-lock.json` versionado.

Los archivos `.env` están excluidos de Git. Si se añaden variables de entorno, documentarlas en `.env.example` sin incluir secretos.
