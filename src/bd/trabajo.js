// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'
export class Trabajo {
  // Mapping de propiedades de la tabla trabajos
  constructor (id = null, nombre = null, definicion = null, uf = null, ra = null, fechaInicio = null, fechaFinal = null, modulo) {
    this.id = id
    this.nombre = nombre
    this.definicion = definicion
    this.uf = uf
    this.ra = ra
    this.fechaInicio = fechaInicio
    this.fechaFinal = fechaFinal
    this.modulo = modulo
  }

  // leer todos
  static async getAll () {
    const { data: Trabajos, error } = await supabase
      .from('Trabajos')
      .select('*')

    if (error) {
      throw new Error(error.message)
    }

    // devuelve array de objetos
    return Trabajos.map(({ id, nombre, definicion, uf, ra, fechaInicio, fechaFinal, modulo }) => {
      return new Trabajo(id, nombre, definicion, uf, ra, fechaInicio, fechaFinal, modulo)
    })
  }

  // leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: Trabajos, error } = await supabase
      .from('Trabajos')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return new Trabajo(Trabajos.id, Trabajos.nombre, Trabajos.apellidos, Trabajos.user_id, Trabajos.estado, Trabajos.rol, Trabajos.avatar)
  }

  // crear registro (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async create (trabajoData) {
    const { error } = await supabase
      .from('Trabajos')
      .insert(trabajoData)
      .select()
    console.log('nuevo trabajo ', error)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // actualizar
  async update () {
    const { error } = await supabase
      .from('Trabajos')
      .update({
        nombre: this.nombre,
        definicion: this.definicion,
        uf: this.uf,
        ra: this.ra,
        fechaInicio: this.fechaInicio,
        fechaFinal: this.fechaFinal,
        modulo: this.modulo
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
      .from('Trabajos')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
