import { getAlumno, getProfesores } from '@/lib/actions'

async function ListaProfesores({ alumnoId, disabled }) {
    const profesores = await getProfesores()

    let alumno = null;
    let profeAlumno = [];
    if (alumnoId) {
        alumno = await getAlumno(alumnoId)
        profeAlumno = alumno.profesores.map(p => p.id);
    }

    return (
        <div className="border rounded bg-gray-300 p-4 mt-4">
            <fieldset disabled={disabled} className="p-4 mt-2 relative">
                <legend className="text-xl font-bold mb-2">
                    Profesores
                </legend>
                <div className="flex flex-col space-y-2">
                    {profesores?.map((profesor) => (
                        <div key={profesor.id} className="flex items-center mb-2">
                            <input
                                type='checkbox'
                                name={profesor.id}
                                value={profesor.id}
                                defaultChecked={profeAlumno.includes(profesor.id)}
                                className="mr-2"
                            />
                            <span className="flex-grow">{profesor.nombre}</span>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>

    );
}

export default ListaProfesores