import Link from "next/link";

function NotFound() {
    return (
        <section className="not-found p-8 text-center 100vh">
            <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
            <img
                src="404.png"
                alt="Imagen no encontrada"
                className="mx-auto max-w-full h-auto mb-4"
            />
            <p className="text-lg mb-4">
                La página que estás buscando no se ha encontrado.
            </p>
            <p className="text-lg mb-4">
                Puedes volver al inicio pulsando{" "}
                <Link legacyBehavior href={"/"}>
                    <a className="text-blue-500 hover:underline">aquí</a>
                </Link>
            </p>
        </section>
    );
}

export default NotFound;
