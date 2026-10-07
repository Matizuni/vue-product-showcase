# 🛍️ Vue Product Showcase

Aplicación web desarrollada con **Vue 3** que permite visualizar, filtrar y gestionar productos obtenidos desde una API externa.

El proyecto fue desarrollado como parte del **Módulo 7 de Front-End**, aplicando conceptos de arquitectura basada en componentes, consumo de APIs, gestión de estado global con Vuex, pruebas automatizadas y diseño de interfaces con Vuetify.

---

## 📌 Descripción

**Vue Product Showcase** es un catálogo interactivo de productos que consume información desde **Fake Store API** mediante Axios.

La aplicación permite:

- Visualizar productos.
- Filtrar productos por categoría.
- Agregar y eliminar productos de favoritos.
- Consultar dinámicamente la cantidad de favoritos.
- Utilizar una interfaz responsive.
- Alternar entre tema claro y oscuro.
- Gestionar estados de carga y errores.

El proyecto también incorpora pruebas unitarias y una prueba End-to-End para validar funcionalidades principales de la aplicación.

---

## 🎯 Objetivo del proyecto

El objetivo principal es demostrar la capacidad de desarrollar una aplicación Front-End moderna utilizando Vue 3, integrando:

- Consumo de APIs REST.
- Gestión de estado global.
- Componentes reutilizables.
- Programación asíncrona.
- Manejo de errores.
- Diseño responsive.
- Sistemas de temas.
- Pruebas unitarias.
- Pruebas End-to-End.

---

## ✨ Características principales

- 🌐 Consumo de API REST mediante Axios.
- 🛍️ Visualización dinámica de productos.
- 🔍 Filtrado de productos por categoría.
- 🧠 Gestión de estado global mediante Vuex.
- 📦 Módulos independientes para productos, filtros y favoritos.
- ❤️ Sistema para agregar y eliminar productos favoritos.
- 🔢 Contador dinámico de favoritos.
- 🎨 Interfaz desarrollada con Vuetify 3.
- ☀️ Tema claro.
- 🌙 Tema oscuro.
- 📱 Diseño responsive.
- ⏳ Manejo visual de estados de carga.
- ⚠️ Manejo de errores durante el consumo de la API.
- 🧪 Pruebas unitarias con Jest y Vue Test Utils.
- 🚀 Prueba End-to-End con Cypress.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Vue 3 | Framework principal |
| Vue CLI | Creación y administración del proyecto |
| JavaScript | Lógica de la aplicación |
| Vuex | Gestión del estado global |
| Axios | Consumo de la API |
| Vuetify 3 | Componentes y diseño de interfaz |
| Jest | Pruebas unitarias |
| Vue Test Utils | Pruebas de componentes Vue |
| Cypress | Pruebas End-to-End |
| HTML5 | Estructura |
| CSS3 | Estilos y responsive design |

---

## 🧩 Arquitectura

La aplicación está organizada utilizando componentes reutilizables y módulos de estado independientes.

```text
src/
│
├── components/
│   ├── AppHeader.vue
│   ├── ProductCard.vue
│   ├── ProductList.vue
│   └── AppFooter.vue
│
├── plugins/
│   └── vuetify.js
│
├── store/
│   ├── index.js
│   │
│   └── modules/
│       ├── products.js
│       ├── filters.js
│       └── favorites.js
│
├── App.vue
└── main.js

📦 Módulo products
Se encarga de:
- Obtener los productos desde la API.
- Gestionar el estado de carga.
- Gestionar posibles errores.
- Almacenar los productos obtenidos.
🔍 Módulo filters
Gestiona la categoría seleccionada por el usuario para realizar el filtrado de productos.
❤️ Módulo favorites
Permite:
- Agregar productos a favoritos.
- Eliminar productos de favoritos.
- Comprobar si un producto es favorito.
- Obtener la cantidad total de favoritos.
🌐 API utilizada
El proyecto utiliza Fake Store API como fuente de datos.
Endpoint
https://fakestoreapi.com/products

Los productos son obtenidos mediante una petición HTTP realizada con Axios.
Ejemplo
const response = await axios.get(
  'https://fakestoreapi.com/products'
)

🎨 Interfaz de usuario
La interfaz fue desarrollada utilizando Vuetify 3, incorporando componentes visuales como:
- Cards.
- Botones.
- Selectores.
- Alertas.
- Indicadores de carga.
- Sistema de temas.
La aplicación cuenta además con modo claro y modo oscuro.
El diseño es responsive y se adapta a diferentes tamaños de pantalla, incluyendo computadores, tablets y dispositivos móviles.
❤️ Sistema de favoritos
Cada producto puede ser agregado o eliminado de favoritos.
El estado de los favoritos es administrado globalmente mediante Vuex, permitiendo que distintos componentes puedan acceder a la misma información.
El encabezado de la aplicación muestra dinámicamente la cantidad de productos seleccionados como favoritos.
🔍 Filtrado de productos
Los productos pueden filtrarse según su categoría.
Entre las categorías entregadas por la API se encuentran:
- electronics
- jewelery
- men's clothing
- women's clothing
Al seleccionar una categoría, la interfaz actualiza automáticamente los productos mostrados.
🧪 Pruebas automatizadas
El proyecto incorpora pruebas unitarias y una prueba End-to-End.
🔬 Pruebas unitarias
Las pruebas unitarias fueron desarrolladas utilizando:
- Jest
- Vue Test Utils
Se implementaron 2 pruebas unitarias.
ProductCard
Comprueba que el componente renderice correctamente la información de un producto.
Se validan elementos como:
- Título.
- Categoría.
- Descripción.
- Precio.
ProductList
Comprueba la respuesta visual de la aplicación cuando ocurre un error durante la obtención de productos desde la API.
Ejecutar pruebas unitarias
npm run test:unit

Resultado
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total

🚀 Prueba End-to-End
La prueba E2E fue desarrollada utilizando Cypress.
La prueba simula el comportamiento de un usuario real:
Usuario ingresa a la aplicación
        ↓
Se cargan los productos
        ↓
Abre el filtro de categorías
        ↓
Selecciona "electronics"
        ↓
La aplicación actualiza el catálogo
        ↓
Se muestran únicamente productos electrónicos

La prueba comprueba que inicialmente se carguen 20 productos y que, después de seleccionar la categoría electronics, se muestren los productos correspondientes a esa categoría.
Ejecutar Cypress
npm run test:e2e

⚙️ Instalación
Requisitos
- Node.js
- npm
1. Clonar el repositorio
git clone https://github.com/Matizuni/vue-product-showcase.git

2. Entrar al proyecto
cd vue-product-showcase

3. Instalar dependencias
npm install

4. Ejecutar la aplicación
npm run serve

Vue CLI mostrará la dirección local de desarrollo, normalmente:
http://localhost:8080/

🧪 Ejecutar pruebas
Pruebas unitarias
npm run test:unit

Pruebas End-to-End
npm run test:e2e

📱 Responsive Design
La interfaz fue diseñada para adaptarse a diferentes resoluciones.
🖥️ Escritorio
El catálogo utiliza una distribución de varias columnas para aprovechar el espacio disponible.
📱 Tablets
La cantidad de columnas disminuye para mantener una correcta visualización.
📲 Dispositivos móviles
Los productos se presentan principalmente en una sola columna para facilitar la navegación.
🌙 Tema claro y oscuro
La aplicación incorpora un selector de tema que permite alternar entre:
- ☀️ Modo claro
- 🌙 Modo oscuro
El sistema utiliza el manejo de temas proporcionado por Vuetify.
📚 Conceptos aplicados
Durante el desarrollo del proyecto se aplicaron conceptos como:
- Componentización en Vue.
- Componentes reutilizables.
- Props.
- Computed properties.
- Métodos.
- Ciclo de vida de componentes.
- Renderizado dinámico.
- Directivas de Vue.
- Consumo de APIs REST.
- Programación asíncrona.
- Axios.
- Vuex.
- Estado global.
- Actions.
- Mutations.
- Getters.
- Diseño responsive.
- Librerías de componentes.
- Pruebas unitarias.
- Pruebas End-to-End.
🧠 Aprendizajes
Este proyecto permitió consolidar conocimientos en:
- Arquitectura basada en componentes con Vue 3.
- Gestión de estado global con Vuex.
- Consumo y manejo de APIs REST.
- Programación asíncrona con Axios.
- Diseño de interfaces utilizando Vuetify.
- Manejo de estados de carga y errores.
- Diseño responsive.
- Implementación de sistemas de temas.
- Pruebas unitarias con Jest y Vue Test Utils.
- Pruebas End-to-End con Cypress.
📸 Evidencias
Las imágenes utilizadas en esta sección se encuentran dentro del directorio:
docs/images/

📁 Estructura de evidencias
docs/
└── images/
    ├── app-light.png
    ├── filter-electronics.png
    ├── app-dark.png
    ├── jest-tests.png
    └── cypress-e2e.png

☀️ Aplicación — Modo claro
Vista principal de Vue Product Showcase mostrando el catálogo de productos obtenido desde Fake Store API.

🔍 Filtrado por categoría
Filtrado dinámico de productos utilizando la categoría electronics.

🌙 Aplicación — Modo oscuro
La aplicación permite alternar dinámicamente entre tema claro y oscuro mediante el sistema de temas de Vuetify.

🧪 Pruebas unitarias
Pruebas realizadas con Jest y Vue Test Utils para validar el comportamiento de los componentes principales.
Resultado: 2 pruebas aprobadas.

🚀 Prueba End-to-End
Prueba E2E realizada con Cypress simulando el filtrado de productos desde la interfaz.

🎯 Propósito profesional
Este proyecto forma parte de mi proceso de formación en desarrollo Front-End y demuestra la aplicación práctica de conceptos de desarrollo de software, arquitectura de componentes, consumo de APIs, gestión de estado y testing automatizado.
La experiencia adquirida durante su desarrollo constituye una base para continuar evolucionando hacia proyectos de mayor complejidad y soluciones tecnológicas integrales.
👨‍💻 Autor
Matías Zúñiga
Estudiante de Técnico Universitario en Ciberseguridad y desarrollador de soluciones digitales.
🔗 Enlaces
- 🌐 Portafolio
- 💼 LinkedIn
- 💻 GitHub
- 📦 Repositorio
