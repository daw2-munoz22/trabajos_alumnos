// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header.js'
import { footer } from './componentes/footer.js'
// import { pruebas } from './vistas/pruebas'
// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/router'

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer.template
// document.querySelector('main').innerHTML = pruebas.template
// pruebas.script()
enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
