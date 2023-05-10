import { Perfil } from '../bd/perfiles'
import { User } from '../bd/user'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

export const formEditarUsuario = {
  template: `
    
<!-- Modal -->
<div class="modal fade" id="editarUsuario">
<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title">Editar usuario</h5>
        <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        >
        <span aria-hidden="true"></span>
        </button>
    </div>
    <div class="modal-body">
        <form id="formEditarUsuario" class="p-3">
        <label class="mt-3 form-label" for="nick">Nombre: </label>
        <input id="edit_nombre" type="text" class="form-control" name="nombre" value="" />

        <label class="mt-3 form-label" for="apellidos">Apellidos: </label>
        <input id="edit_apellidos" type="text" class="form-control" value="" name="apellidos"/>
        </form>
    </div>
    <div class="modal-footer">
        <button id="guardarCambiosUsuario" type="button" class="btn btn-primary"  data-bs-dismiss="modal">
        Guardar cambios
        </button>
        <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        >
        Cerrar
        </button>
    </div>
    </div>
</div>
</div>
  `,
  script: async (id) => {
    // Código de validación
    // Seleccionamos el formulario de editar usuario
    const formulario = document.querySelector('#formEditarUsuario')
    try {
      // Capturamos los datos del usuario a editar
      const usuario = await Perfil.getById(id)
      // Insertamos los datos en el formulario para editar el usuario
      formulario.nombre.value = usuario.nombre
      formulario.apellidos.value = usuario.apellidos
    } catch (error) {
      console.error(error)
    }

    // Evento de click en el botón guardar
    document.querySelector('#guardarCambiosUsuario').addEventListener('click', async (e) => {
      try {
        // Capturamos los datos del usuario a editar
        const usuario = await Perfil.getById(id)
        // Modificamos los campos del usuario
        usuario.nombre = formulario.nombre.value
        usuario.apellidos = formulario.apellidos.value
        // Guardamos los cambios en la bd
        await usuario.update()
        window.location.href = '/#/adminUsuarios'
        window.alert('Usuario actualizado')
      } catch (error) {
        window.alert('No se pudo guardar los cambios ' + error)
      }
    })
  }
}
