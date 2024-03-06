import Link from "next/link";
import ImgFondo from '@/components/ImagenFondo'
import { auth } from '@/auth'

export default function Home() {
  //const session = auth();

  return (
    <>
      <main className="h-screen relative flex flex-col items-center justify-center">
        <div className="bg-cover bg-center absolute inset-0">
          <ImgFondo />
        </div>
        <div className="flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-white text-6xl font-bold mb-4 italic hover:text-orange-500 transition duration-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Bienvenido a Nexo
          </h1>
          <br />
          <p className="text-white text-xl mb-8">
            Web para registrar personas de centros educativos y administrar la información correspondiente.
          </p>
          <Link href="/auth/login">
            <svg className="h-20 w-20 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </main>
    </>
  );
}
