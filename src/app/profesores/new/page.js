import Form from "@/components/FormProfesor"
import Button from "@/components/Button"
import { newProfesor } from "@/lib/actions"
import Atras from '@/components/buttonBack'

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <div className="container mx-auto p-4">
      <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo profesor</h3>
        <Form action={newProfesor} profesor={null}>
          <Button title='Crear profesor' />
        </Form>
      </div>
      <Atras />
    </>
  )
}

export default page
