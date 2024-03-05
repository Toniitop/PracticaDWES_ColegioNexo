import { auth } from "@/auth";
import Link from "next/link";

async function Dashboard() {
    const session = await auth();

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gray-300 p-8">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg mt-8 mb-8">
                <div className="flex items-center mb-12">
                    {session?.user.image ? (
                        <img
                            src={session?.user.image}
                            alt={session?.user.name}
                            className="w-16 h-16 rounded-full mr-12 text-white"
                        />
                    ) : (
                        <img
                            src="/default.png"  // Ruta de la imagen predeterminada
                            alt="Default User"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                    )}
                    <div>
                        <h1 className="text-2xl text-white font-bold mb-4">{session?.user.name}</h1>
                        <p className="text-gray-400">📧 {session?.user.email}</p>
                        <p className="text-gray-400">💻 {session?.user.role}</p>
                    </div>
                </div>

                <h1 className="text-3xl text-white font-bold mb-4 text-center hover:text-orange-500 transition duration-300">Dashboard</h1>
                <hr className="mb-0"/>
                <ul className="space-y-2 list-none">
                    <br />
                    <li className="bg-cyan-700 text-white rounded-md p-2 cursor-pointer transition duration-300 hover:bg-orange-500 text-center">
                        <Link href="/profesores">Profesores</Link>
                    </li>
                    <li className="bg-cyan-700 text-white rounded-md p-2 cursor-pointer transition duration-300 hover:bg-orange-500 text-center">
                        <Link href="/alumnos">Alumnos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
