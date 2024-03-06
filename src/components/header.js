import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

async function Header() {
    const session = await auth();
    // console.log(session);

    return (
        <nav className="bg-gray-800 border-b border-yellow-600">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center flex-shrink-0">
                        <Link legacyBehavior href="/">
                            <img className="w-auto h-8 lg:h-10 mx-2 md:mx-4" src="/logo1.svg" alt="" srcSet="/logo1@2x.svg 2x, /logo1@3x.svg 3x" />
                        </Link>
                        {session?.user?.role === 'ADMIN' && (
                            <Link legacyBehavior href="/admin">
                                <a className="ml-10 font-bold text-white hover:text-gray-300">Panel Administrador</a>
                            </Link>
                        )}
                        {session && (
                            <Link legacyBehavior href="/dashboard">
                                <a className="ml-10 font-bold text-white hover:text-gray-300">Panel de Usuario</a>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        {session ? (
                            <form>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-orange-500 transition duration-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    formAction={logout}>
                                    SignOut
                                </button>
                            </form>
                        ) : (
                            <div className="flex">
                                <Link legacyBehavior href="/auth/register">
                                    <a className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-orange-500 transition duration-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        SignUp
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/auth/login">
                                    <a className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-cyan-700 transition duration-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        SignIn
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header
