function About() {
    return (
        <>
            <div className="bg-blue-500 text-white p-8 text-center">
                <h1 className="text-3xl font-bold mb-4 underline hover:text-orange-500 hover:underline">Nexo - Conectando Educadores y Estudiantes</h1>
                <p className="mb-4">
                    ¡Bienvenido a Nexo, tu plataforma educativa donde se encuentran profesores y alumnos en un entorno colaborativo y seguro! A continuación, te proporcionamos información sobre el funcionamiento de Nexo, la innovadora web diseñada para facilitar la autenticación y el acceso para educadores y estudiantes.
                </p>
            </div>
            <div className="bg-blue-700 text-white p-8">
                <h2 className="text-xl font-bold mb-2">¿Qué es Nexo?</h2>
                <p className="mb-4">
                    Nexo es una plataforma educativa que tiene como objetivo conectar de manera eficiente a profesores y alumnos, proporcionando un entorno digital seguro y fácil de usar. A través de Nexo, los educadores pueden ofrecer una experiencia de aprendizaje enriquecedora, mientras que los estudiantes pueden acceder a recursos educativos y participar en actividades académicas de manera intuitiva.
                </p>

                <h2 className="text-xl font-bold mb-2">Características Principales:</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Autenticación Segura:</strong>
                        <ul className="list-disc pl-6">
                            <li><strong>Profesores:</strong> Ingresan a la plataforma con credenciales seguras, garantizando un acceso protegido a la información del profesor.</li>
                            <li><strong>Alumnos:</strong> Se registran en Nexo con información validada, asegurando la integridad de la comunidad educativa.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Panel de Control Personalizado:</strong>
                        <ul className="list-disc pl-6">
                            <li><strong>Profesores:</strong> Tienen acceso a un panel de control personalizado donde pueden gestionar clases, asignar tareas y evaluar el progreso del alumno.</li>
                            <li><strong>Alumnos:</strong> Pueden ver sus cursos, entregar tareas y acceder a materiales educativos de manera organizada.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Interacción en Tiempo Real:</strong>
                        <ul className="list-disc pl-6">
                            <li><strong>Foros y Mensajería:</strong> Profesores y alumnos pueden interactuar en tiempo real a través de foros y mensajería, facilitando la comunicación fluida y la resolución de dudas.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Opciones de Autenticación:</strong>
                        <ul className="list-disc pl-6">
                            <li><strong>Login Tradicional:</strong> Utiliza tu dirección de correo electrónico y contraseña para acceder.</li>
                            <li><strong>Autenticación con Credenciales:</strong> Permite una autenticación más segura mediante credenciales únicas y seguras.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Recursos Educativos:</strong>
                        <ul className="list-disc pl-6">
                            <li><strong>Biblioteca Digital:</strong> Accede a una amplia gama de recursos educativos, desde libros electrónicos hasta videos didácticos, que complementan las lecciones impartidas.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-xl font-bold mb-2">Cómo Funciona:</h2>
                <ol className="list-decimal pl-6 mb-4">
                    <li>
                        <strong>Registro y Autenticación:</strong>
                        <ul className="list-disc pl-6">
                            <li>Profesores y alumnos se registran en Nexo proporcionando la información requerida.</li>
                            <li>La autenticación se realiza de manera segura, utilizando direcciones de correo electrónico y contraseñas sólidas, o a través de métodos de autenticación de credenciales avanzados.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Panel de Control Personalizado:</strong>
                        <ul className="list-disc pl-6">
                            <li>Después del inicio de sesión, cada usuario es dirigido a un panel de control personalizado.</li>
                            <li>Profesores pueden gestionar sus cursos y tareas, mientras que los alumnos pueden acceder a sus lecciones y recursos.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Interacción y Comunicación:</strong>
                        <ul className="list-disc pl-6">
                            <li>Los foros y la mensajería integrados permiten la interacción en tiempo real entre profesores y alumnos.</li>
                            <li>Se fomenta la colaboración y la participación activa en la comunidad educativa.</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Recursos Educativos y Evaluación:</strong>
                        <ul className="list-disc pl-6">
                            <li>La biblioteca digital ofrece recursos educativos actualizados y relevantes.</li>
                            <li>Profesores pueden evaluar el progreso de los alumnos y asignar tareas directamente desde la plataforma.</li>
                        </ul>
                    </li>
                </ol>

                <p>
                    Nexo es la plataforma que une a educadores y estudiantes en un entorno digital seguro y eficiente. Únete a nosotros y descubre una nueva forma de aprendizaje colaborativo y enriquecedor. ¡Nexo, donde la educación se encuentra con la innovación!
                </p>
            </div>

        </>
    );
}

export default About;
