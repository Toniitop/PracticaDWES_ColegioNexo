'use client'
import { useFormStatus } from 'react-dom'

function Button({ title }) {
    const { pending } = useFormStatus()
    return (
        <button type='submit' disabled={pending} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-950 text-sm font-semibold 
        leading-none text-white focus:outline-none bg-gray-800 border rounded transition-all duration-300 ease-in-out hover:bg-orange-500 py-4 w-full">
            {pending ? 'Realizando operación...' : title}
        </button>
    )
}

export default Button

