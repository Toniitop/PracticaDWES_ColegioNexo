import LoginForm from '@/components/login-form'
import OAuthForm from '@/components/oauth-form'

// https://next-auth.js.org/configuration/pages#sign-in-page
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");


function page({ searchParams }) {
  const { error, callbackUrl } = searchParams
  // Usamos globalThis para almacenar variable global
  // La usaremos en los actions de login
  globalThis.callbackUrl = decodeURIComponent(callbackUrl ?? '%2Fdashboard')

  return (
    <>
      {error && <h3>{errors.get(error)}</h3>}
      <div className="form bg-gray-200">
        <div class="flex flex-col items-center justify-center">
          <svg tabindex="0" class="focus:outline-none" aria-label="logo" role="banner" width="188" height="74" viewBox="0 0 188 74" fill="none" xmlns="http:www.w3.org/2000/svg"></svg>

          <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6 mb-20">
            <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login</p>
            <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">No tienes cuenta? <a href="/auth/register" class="hover:text-gray-500 
            focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"> Registrate aquí</a></p>

            <OAuthForm error={error} />
            <LoginForm error={error} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page