// Cargar la libreria de supabase
import { createClient } from '@supabase/supabase-js'
export const pruebas = {
  template: '<h1>Pruebas</h1>',
  script: async () => {
    // conexion con supabase
    const supabaseUrl = 'https://zeaybplyvgakwrldkevh.supabase.co'
    // const supabaseKey = process.env.SUPABASE_KEY
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplYXlicGx5dmdha3dybGRrZXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTIsImV4cCI6MTk5Mjc1MjYxMn0.pJA2BXnDliEb4SSYO8ESDeLbkpBSPKEILluo7y4WZe8'
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('Conexion a supabase', supabase)

    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: Perfiles, error } = await supabase
        .from('Perfiles')
        .select('*')
      console.log(Perfiles)
      return Perfiles
    }

    const agregarPerfil = async () => {
      // INSERT A ROW
      const { data, error } = await supabase
        .from('Perfiles')
        .insert([{
          nombre: 'Ejemplo'
        }])
    }
    // proyectos detalle a partir de funcion postrgeeSQL
    const leerProyectosDetalle = async () => {
      // INVOKE FUNCTION
      const { data, error } = await supabase
        .rpc('proyectosdetalle')

      if (error) console.error(error)
      else console.log('detalle: ', data)
      return data
    }

    const registro = async () => {
      // USER SIGNUP
      const { data, error } = await supabase.auth.signUp({
        email: 'edgarmunozpomar372@gmail.com',
        password: '123456'
      })
    }

    const login = async () => {
      // USER LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'edgarmunozpomar372@gmail.com',
        password: '123456'
      })
    }

    const verUsuarioLogeado = async () => {
      // GET USER
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }

    const logout = async () => {
      // USER LOGOUT
      const { error } = await supabase.auth.signOut()
    }

    // 1. miramos usuario logeado
    console.log('detalle usuario logeado: ', await verUsuarioLogeado())

    // 2. me logueo
    await login()
    // 3. miramos usuario logeado
    console.log('detalle usuario logeado: ', await verUsuarioLogeado())

    await logout()
  }
}
