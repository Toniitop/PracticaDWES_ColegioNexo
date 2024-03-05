function LayoutProfesores({ children }) {
    return (
        <section className="container mx-auto p-4">
            <br />
            <h1 className="text-3xl underlined font-bold mb-4">Profesores</h1>
            <hr className="mb-4 border-t-2 border-gray-500" />
            {children}
        </section>
    );
}

export default LayoutProfesores;
