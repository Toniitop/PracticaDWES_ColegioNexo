async function ImgFondo() {
    return (
        <div className="w-full h-full relative">
            <img
                className="w-full h-full object-cover filter brightness-75"
                src="/colegio1.jpg"
                alt=""
                srcSet="/colegio1@2x.jpg 2x, /colegio1@3x.jpg 3x"
            />
        </div>
    );
}

export default ImgFondo;
