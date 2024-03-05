import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div className="bg-gray-200 p-8">
      <div className="max-w-2xl mx-auto p-4 bg-gray-300 rounded-lg shadow-lg mt-8 mb-8">
        <br />
        <h1 className="text-4xl font-bold mb-6 italic text-center">Sobre Nexo</h1>
        <br />
        <h2 className="text-2xl font-bold mb-4 text-center">Bienvenido a "La Plataforma Integral de Gestión Educativa"</h2>
        <p className="text-lg mb-4">
          <em>Nexo</em> es la solución integral para instituciones educativas que buscan una gestión eficiente y segura de sus recursos académicos. Diseñada para simplificar y potenciar la administración escolar, nuestra plataforma proporciona un entorno seguro y fácil de usar para la gestión de profesores, alumnos y recursos educativos.
        </p>
        <br />
        <h3 className="text-xl font-bold mb-2">Características Destacadas:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Gestión de Usuarios: Nexo facilita el proceso de autenticación y gestión de usuarios, brindando acceso personalizado a profesores, alumnos y personal administrativo. La autenticación segura y la asignación de roles garantizan la privacidad y la seguridad de la información.</li>
          <br />
          <li>Administración de Profesores y Alumnos: Con Nexo, la administración de perfiles de profesores y alumnos se vuelve intuitiva. Desde la creación de cuentas hasta la gestión de datos personales y académicos, nuestra plataforma agiliza los procesos, permitiendo un seguimiento detallado del rendimiento y la asistencia.</li>
          <br />
          <li>Registro y Seguimiento Académico: Nexo simplifica el proceso de registro de alumnos y profesores, ofreciendo un seguimiento académico completo. Desde calificaciones y asistencias hasta informes de progreso, la plataforma proporciona herramientas detalladas para evaluar y mejorar el rendimiento educativo.</li>
          <br />
          <li>Comunicación Eficiente: La comunicación entre profesores, alumnos y administradores es fundamental para el éxito educativo. Nexo facilita la interacción a través de mensajes integrados, notificaciones y actualizaciones en tiempo real, fomentando una comunidad educativa informada y conectada.</li>
          <br />
          <li>Gestión de Recursos: Nuestra plataforma no solo se centra en personas, sino también en recursos físicos y digitales. La asignación y seguimiento de aulas, materiales y tareas se simplifican, permitiendo una gestión eficiente de los recursos educativos.</li>
        </ul>
        <br />
        <h3 className="text-xl font-bold mb-2">Ventajas de Nexo:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Eficiencia Operativa: Automatiza tareas administrativas, ahorrando tiempo y recursos.</li>
          <br />
          <li>Seguridad: Garantiza la privacidad de los datos con autenticación segura y cifrado.</li>
          <br />
          <li>Interfaz Intuitiva: Diseño fácil de usar para una experiencia sin complicaciones.</li>
          <br />
          <li>Colaboración: Facilita la colaboración entre profesores, alumnos y padres para un aprendizaje más efectivo.</li>
        </ul>
        <br />
        <p className="text-lg mb-4">
          <strong>Únete a Nexo y Transforma tu Experiencia Educativa.</strong>
        </p>

        <p className="text-lg mb-8">
          Descubre el poder de una gestión educativa eficiente con Nexo. Simplifica, organiza y mejora tu institución educativa para un futuro académico exitoso. ¡Regístrate hoy y haz que la administración escolar sea un proceso fácil y eficaz!
        </p>
        <div className='text-center mt-16 mb-4'>
        <Link legacyBehavior href="/">
          <a className="text-white bg-cyan-700 hover:bg-orange-500 transition duration-400 py-2 px-4 rounded">
            Inicio
          </a>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
