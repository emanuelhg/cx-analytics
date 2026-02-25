# EG CX Analytics - Landing Page

Landing page estatica y responsive para **EG CX Analytics**, orientada a servicios de auditoria de calidad, coaching y optimizacion de experiencia del cliente (CX) para operaciones de call center.

## Objetivo

Presentar la propuesta de valor de la marca con una experiencia visual profesional y un flujo de contacto simple sin backend.

## Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5 via CDN
- Bootstrap Icons via CDN

## Estructura del proyecto

```text
.
|-- index.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
|-- assets/
|   |-- .gitkeep
|   |-- hero-bg.svg
|   `-- logo-v2.svg
|-- .nojekyll
`-- README.md
```

## Funcionalidades principales

- Navbar sticky con estado activo segun seccion visible.
- Hero con fondo local optimizado (`assets/hero-bg.svg`).
- Secciones de desafios, servicios, diferenciales, metodologia y contacto.
- Tarjetas con iconos y efectos hover suaves.
- Animaciones de entrada (`reveal`) con `IntersectionObserver`.
- Formulario de contacto sin backend usando `mailto`.
- Boton flotante de WhatsApp.
- Footer con navegacion rapida y datos de contacto.

## Ejecucion local

1. Clona este repositorio.
2. Abre `index.html` en tu navegador.

No requiere instalar dependencias ni levantar servidor.

## Publicacion en GitHub Pages

1. Sube el contenido al repositorio remoto.
2. En GitHub, entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` y carpeta `/ (root)`
4. Guarda cambios y espera la publicacion.

El archivo `.nojekyll` ya esta incluido para evitar procesamiento de Jekyll.

## Personalizacion rapida

- Logo: reemplaza `assets/logo-v2.svg`.
- Fondo hero: reemplaza `assets/hero-bg.svg`.
- Colores: variables CSS en `:root` dentro de `css/styles.css`.
- Textos y secciones: `index.html`.
- Logica UI (nav activo, reveal, mailto): `js/main.js`.

## Notas

- El sitio esta pensado para ser 100% estatico.
- Si luego necesitas formulario real (sin `mailto`), se puede conectar a un backend o servicio externo.
