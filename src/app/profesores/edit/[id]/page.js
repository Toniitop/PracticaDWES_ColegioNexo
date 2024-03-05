import Form from "@/components/FormProfesor"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { editProfesor } from "@/lib/actions"
import Atras from '@/components/buttonBack'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const profesor = await prisma.profesor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-yellow-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Editar profesor</h3>
      <Form action={editProfesor} profesor={profesor} >
        <Button title='Editar profesor' />
      </Form>
      <Atras />
    </div>
  )
}


export default page