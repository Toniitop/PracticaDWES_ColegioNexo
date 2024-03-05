import Form from "@/components/FormAlumno"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteAlumno } from "@/lib/actions"
import AtrasAlumnos from '@/components/buttonBackAlumnos'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const alumno = await prisma.alumno.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
<div className="container mx-auto p-4">
      <h3 className="inline-block bg-red-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Eliminar alumno</h3>
      <Form action={deleteAlumno} alumno={alumno} disabled={true} >
        <br />
        <Button title='Eliminar alumno' />
      </Form>
      <AtrasAlumnos />
    </div>
  )
}

export default page