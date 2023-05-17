import { P as Proyectos } from "./proyectos-9ff6e2ab.js";
import "./main-24098f61.js";
const detalleProyectoVista = {
  template: `
<div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <a href="#/proyectos" class="btn btn-outline-secondary btn-sm">< Proyectos</a>
      <h1 id="nombre_proyecto" class="w-100 text-center p-2"></h1>
      <div class="d-flex justify-content-center m-5">
       <h1 id="titulo"></h1> 
      </div>
    </div>
    <!-- DAtos proyecto -->
    <div class="col-12 col-md-4 mt-2">
      <h5> Información general: </h5>
      <p>Autor: <span id="autor_proyecto" class="text-center p-2"></span></p>
      <p>Enunciado: <span id="enunciado_proyecto" class="text-center p-2"></span></p>
      <p>Enlace: <a id="enlace_proyecto" class="text-center p-2" target="_black">Link a mi proyecto</a></p>
      <h5>Descripción:</h5>
      <p id="descripcion_proyecto"></p>
    </div>
    <!-- Valoracion   -->
    <div class="col-12 col-md-8">
      <div class="row">
        <div class="col-12 col-xl-6 mt-2">
        <div class="d-flex justify-content-between">
          <h5>Valoración alumnos:</h5>
          <input title="Enviar nota" id="notaMedia" class=" w-25 ms-auto me-2 text-center fw-bold btn-sm mb-2" value="6.0"></input>
          <button title="Enviar nota" id="notaMedia" class="btn btn-warning text-dark fw-bold btn-sm mb-2" >Enviar nota</button>
        </div>  
        

          <div id="valoracion">
            <!-- Aqui van los criterios y las estrellas -->
          </div>
          
        </div>
        <div class="col-12 col-xl-6 mt-3 ">
          <h5>Tu valoración:</h5>
          <div id="valoracionPersonal">
            <!-- Aqui van los criterios y las estrellas -->
            
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
    `,
  script: async (id) => {
    const proyecto = await Proyectos.getById(id);
    const titulo = document.querySelector("#titulo");
    document.querySelector("#autor_proyecto");
    titulo.innerHTML = proyecto.nombre;
  }
};
export {
  detalleProyectoVista as default
};
