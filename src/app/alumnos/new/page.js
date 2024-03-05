import Form from "@/components/FormAlumno"
import Button from "@/components/Button"
import { newAlumno } from "@/lib/actions"
import AtrasAlumnos from '@/components/buttonBackAlumnos'

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div className="container mx-auto p-4">
    <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo alumno</h3>
        <Form action={newAlumno} alumno={null}>
          <br />
          <Button title='Crear alumno' />
        </Form>
        <AtrasAlumnos />
    </div>
  )
}

export default page