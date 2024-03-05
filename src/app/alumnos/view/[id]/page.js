import Form from "@/components/FormAlumno"
import { prisma } from '@/lib/prisma'
import { getAlumno } from "@/lib/actions"
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
      <h3 className="inline-block bg-green-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Ver alumno</h3>
      <Form action={getAlumno} alumno={alumno} disabled={true} />
      <AtrasAlumnos />
    </div>
  )
}

export default page