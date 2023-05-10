// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
import { User } from './user.js'
export class Proyectos {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, created_at = null, nombre = null, description = null, nota = null, user_id = null, enlace = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.description = description
    this.nota = nota
    this.user_id = user_id
    this.enlace = enlace
  }

  // leer todos
  static async getAll () {
    const {
      data: proyectos,
      error
    } = await supabase
      .from('Proyectos')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return proyectos.map(({
      id,
      created_at,
      nombre,
      description,
      nota,
      user_id,
      enlace
    }) => {
      return new Proyectos(id, created_at, nombre, description, nota, user_id, enlace)
    })
  }
  // let { data: Proyectos, error } = await supabase
  // .from('Proyectos')
  // .select('user_id')
  static async create(proyectos) {
    let user = await User.getUser();
      
    const { error } = await supabase
      .from('Proyectos')
      .insert([
        { nombre: proyectos.nombre, description: proyectos.description, enlace: proyectos.enlace, user_id: user.id},
      ]);
  
    if (error) {
      throw new Error(error.message)
    }
  
    // devuelve el nuevo objeto creado con los datos del registro insertado
    return new Proyectos(proyectos.id, proyectos.created_at, proyectos.nombre, proyectos.description, proyectos.enlace, proyectos.user_id)
  }
  
  
  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const {
      data: proyectos,
      error
    } = await supabase
      .from('Proyectos')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Proyectos(proyectos.id, proyectos.created_at, proyectos.nombre, proyectos.description, proyectos.nota, proyectos.user_id, proyectos.enlace)
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('Proyectos')
      .update({
        //created_at: this.created_at,
        nombre: this.nombre,
        description: this.description,
        nota: this.nota,
        enlace: this.enlace
        //user_id: this.user_id
      })
      .eq('id', this.id)
      .single()

    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // eliminar
  static async delete (id) {
    const { error } = await supabase
      .from('Proyectos')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}