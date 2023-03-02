// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { footer } from "./componentes/footer.js";
import { header } from "./componentes/header.js";
import { pruebas } from "./vistas/pruebas.js";
import { home } from "./vistas/home.js";
document.querySelector('main').innerHTML = pruebas.template;
pruebas.script()
document.querySelector('header').innerHTML = header.template;
document.querySelector('footer').innerHTML = footer.template;