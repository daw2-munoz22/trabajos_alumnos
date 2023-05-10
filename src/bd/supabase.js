import { createClient } from '@supabase/supabase-js'
// conexion con supabase
const supabaseUrl = 'https://zeaybplyvgakwrldkevh.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplYXlicGx5dmdha3dybGRrZXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTIsImV4cCI6MTk5Mjc1MjYxMn0.pJA2BXnDliEb4SSYO8ESDeLbkpBSPKEILluo7y4WZe8'
// exportamos la conexión a supabase
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log('Conexion a supabase', supabase)
