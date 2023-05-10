// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'

export class Nota {
  // Mapping de propiedades de la tabla notas
  constructor (id = null, createdAt = null, nota = null, proyectoId = null, userId = null) {
    this.id = id
    this.created_at = createdAt
    this.nota = nota
    this.proyecto_id = proyectoId
    this.user_id = userId
  }

  // leer todos
  static async getAll () {
    const { data: Notas, error } = await supabase
      .from('Notas')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }

    // devuelve array de objetos
    return Notas.map(({ id, createdAt, nota, proyectoId, userId }) => {
      return new Nota(id, createdAt, nota, proyectoId, userId)
    })
  }

  // leer todos
  static async getAllByProjectId (id) {
    const { data: Notas, error } = await supabase
      .from('Notas')
      .select('*')
      .eq('proyecto_id', id)
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }

    // devuelve array de objetos
    return Notas.map(({ id, createdAt, nota, proyectoId, userId }) => {
      return new Nota(id, createdAt, nota, proyectoId, userId)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: Notas, error } = await supabase
      .from('Notas')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return new Nota(Notas.id, Notas.nota, Notas.proyecto_id, Notas.user_id)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (notaData) {
    const { error } = await supabase
      .from('Notas')
      .insert(notaData)
      .select()
    console.log('nuevo nota', error)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('Notas')
      .update({
        nota: this.nota,
        proyecto_id: this.proyecto_id,
        user_id: this.user_id
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
      .from('Notas')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
