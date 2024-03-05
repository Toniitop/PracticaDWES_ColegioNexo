function Form({ children, action, profesor, disabled = false }) {
    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md">
            <input type='hidden' name='id' value={profesor?.id} />
            <fieldset disabled={disabled} className="mb-4">
                {/* <legend className="text-lg font-semibold"># {profesor?.id}</legend> */}
                <div className="mb-4">
                    <label htmlFor='nombre' className="block font-bold text-xl text-black">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={profesor?.nombre}
                        autoFocus
                        required
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='especialidad' className="block font-bold text-xl text-black">Especialidad:</label>
                    <input
                        type='text'
                        id='especialidad'
                        name='especialidad'
                        placeholder='Especialidad'
                        defaultValue={profesor?.especialidad}
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            {children}
        </form>
    );
}

export default Form;
