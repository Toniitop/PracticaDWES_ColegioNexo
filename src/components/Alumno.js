function Alumno({ children, alumno }) {
    return (
        <div className='card'>
            <p><strong>{alumno.nombre}</strong></p>
            <p>{alumno.localidad}</p>
            {/* <p>{alumno.fechaNacimiento ? alumno.fechaNacimiento.toLocaleDateString() : 'Fecha no disponible'}</p> */}
            <p>{alumno.fechaNacimiento.toLocaleDateString()}</p>
            {children}
        </div>
    )
}

export default Alumno