// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
//import { User } from './user.js'
export class Perfil {
  // Mapping de propiedades de la tabla perfiles
  constructor (id = null, createdAt = null, nombre = null, user_id = null, estado = null, rol = null, avatar = null, apellidos = null, email = null) {
    this.id = id
    this.created_at = createdAt
    this.nombre = nombre
    this.user_id = user_id
    this.estado = estado
    this.rol = rol
    this.avatar = avatar
    this.apellidos = apellidos
    this.email = email
  }

  // leer todos
  static async getAll () {
    const { data: perfiles, error } = await supabase
      .from('Perfiles')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    // devuelve array de objetos
    return perfiles.map(({ id, createdAt, nombre, apellidos, user_id, estado, rol, avatar, email }) => {
      return new Perfil(id, createdAt, nombre, apellidos, user_id, estado, rol, avatar, email)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia) // generico
  static async getById (id) {
    const { data: perfiles, error } = await supabase
      .from('Perfiles')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Perfil(perfiles.id, perfiles.createdAt, perfiles.nombre, perfiles.user_id, perfiles.estado, perfiles.rol, perfiles.avatar, perfiles.apellidos, perfiles.email)
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia) //id del usuario vinculado a la tabla users y perfiles
  static async getByUserId (id) {
    const { data: perfiles, error } = await supabase
      .from('Perfiles')
      .select('*')
      .eq('user_id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // Devuelve un nuevo objeto con los datos del registro
    return new Perfil(perfiles.id, perfiles.createdAt, perfiles.nombre, perfiles.user_id, perfiles.estado, perfiles.rol, perfiles.avatar, perfiles.apellidos, perfiles.email)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (perfil) {
    // const user = await User.getUser()

    const { error } = await supabase
      .from('Perfiles')
      .insert([
        { id: perfil.id, created_at: perfil.createdAt, nombre: perfil.nombre, user_id: perfil.user_id, apellido: perfil.apellido, email: perfil.email }
      ])

    if (error) {
      throw new Error(error.message)
    }

    // devuelve el nuevo objeto creado con los datos del registro insertado
    return new Perfil(perfil.id, perfil.createdAt, perfil.nombre, perfil.user_id, perfil.apellido, perfil.email)
  }

  // mediante su email
  // static async getByEmail (email) {
  //   const { data: Perfiles, error } = await supabase
  //     .from('Perfiles')
  //     .select('*')
  //     .eq('email', email)
  //     .single()
  //   if (error) {
  //     throw new Error(error.message)
  //   }
  //   // Devuelve un nuevo objeto con los datos del registro
  //   return new Perfil(Perfiles.id, Perfiles.nombre, Perfiles.apellidos, Perfiles.user_id, Perfiles.estado, Perfiles.rol, Perfiles.avatar)
  // }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('Perfiles')
      .update({
        nombre: this.nombre,
        apellidos: this.apellidos,
        avatar: this.avatar
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // borrar
  static async delete (id) {
    const { error } = await supabase
      .from('Perfiles')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
