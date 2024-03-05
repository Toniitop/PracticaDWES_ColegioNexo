import Form from "@/components/FormProfesor"
import { prisma } from '@/lib/prisma'
import { getProfesor } from "@/lib/actions"
import Atras from '@/components/buttonBack'

export const dynamic = 'force-dynamic'

async function Page({ params }) {
  const profesor = await prisma.profesor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-green-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Ver profesor</h3>
      <Form action={getProfesor} profesor={profesor} disabled={true} />
      <Atras />
    </div>
  )
}

export default Page;