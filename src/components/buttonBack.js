import Link from "next/link";
//profesores

async function atras() {
    return (
        <>
            <Link legacyBehavior href="/profesores">
                <a>
                    <img src="/flecha.svg" alt="Flecha" className="w-16 h-16" />
                </a>
            </Link>
        </>
    )
}

export default atras;