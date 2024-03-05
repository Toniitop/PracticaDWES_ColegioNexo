import ListaProfesores from './ListaProfesores'
import { Suspense } from 'react'


function Form({ children, action, alumno, disabled = false }) {

    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md" >
            <input type='hidden' name='id' value={alumno?.id} />
            <fieldset disabled={disabled} className="mb-4">
                {/* <legend># {alumno?.id}</legend> */}
                <div className="mb-4">
                    <label htmlFor='nombre' className="block font-bold text-xl text-black">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={alumno?.nombre}
                        autoFocus
                        required
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='localidad' className="block font-bold text-xl text-black">Especialidad:</label>
                    <input
                        type='text'
                        id='localidad'
                        name='localidad'
                        placeholder='Localidad'
                        defaultValue={alumno?.localidad}
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='fechaNacimiento' className="block font-bold text-xl text-black">Fecha Nacimiento:</label>
                    <input
                        type='date'
                        id='fechaNacimiento'
                        name='fechaNacimiento'
                        placeholder='fechaNacimiento'
                        defaultValue={alumno?.fechaNacimiento ? alumno.fechaNacimiento.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="overflow-x-auto">
                    <ListaProfesores alumnoId={alumno?.id} disabled={disabled} />
                </div>
            </Suspense>
            {children}
        </form >
    )
}

export default Form