function Profesor({ children, profesor }) {
    return (
        <div className='card'>
            <p><strong>{profesor.nombre}</strong></p>
            <p>Especialidad: {profesor.especialidad}</p>
            {children}
        </div>
    )
}

export default Profesor