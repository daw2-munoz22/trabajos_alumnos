
import { createClient} from '@supabase/supabase-js'
export const pruebas = {
    template: `<h1>Pruebas</h1>`,
    script: async () => {
        console.log('Vista pruebas cargada');

        //conexion con supabase
        const supabaseUrl = 'https://zeaybplyvgakwrldkevh.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplYXlicGx5dmdha3dybGRrZXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTIsImV4cCI6MTk5Mjc1MjYxMn0.pJA2BXnDliEb4SSYO8ESDeLbkpBSPKEILluo7y4WZe8'
        // const supabaseKey = process.env.SUPABASE_KEY
        const supabase = createClient(supabaseUrl, supabaseKey)
        console.log("Conexion a supabase", supabase)

        const leerTodosPerfiles = async ()=>{
            // READ ALL ROWS
            let { data: Perfiles, error } = await supabase
            .from('Perfiles')
            .select('*')
            console.log(Perfiles)

        }
    
        const agregarPerfil = async ()=>{
            // INSERT A ROW
            const { data, error } = await supabase
            .from('Perfiles')
            .insert([
                { 
                    nombre: 'Ejemplo'
                },
            ])
        }
        //proyectos detalle a partir de funcion postrgeeSQL
        const leerProyectosDetalle = async ()=>{
        //INVOKE FUNCTION    
        let { data, error } = await supabase
        .rpc('proyectosdetalle')

        if (error) console.error(error)
        else console.log('detalle: ',data)
        }
        leerProyectosDetalle()
    }
}