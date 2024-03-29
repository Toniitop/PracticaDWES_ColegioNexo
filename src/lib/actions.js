'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: '⛔ El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "✅ Registro correcto" }
}



// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials',
            {
                email, password,
                redirectTo: globalThis.callbackUrl
                // redirectTo: user.role == 'ADMIN' ? '/admin' : '/dashboard'
            })
        return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}
export async function loginGitlab() {
    try {
        await signIn('gitlab', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}
export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

async function getProveedoresIds() {
    const proIds = await prisma.proveedor.findMany({
        select: { id: true }
    })
    return proIds.map(p => p.id)
}



// ARTÍCULOS

export async function getProductos() {
    try {
        const productos = await prisma.producto.findMany()
        return productos;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}


export async function getProducto(id) {  // obtener artículo con proveedores
    try {
        const producto = await prisma.producto.findUnique({
            where: { id },
            include: {
                proveedores: true
            }
        })

        console.log(producto);
        return producto;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}



export async function newProducto(formData) {
    try {
        const nombre = formData.get('nombre')
        const descripcion = formData.get('descripcion')
        const precio = Number(formData.get('precio'))

        // Array con IDs de todos los proveedores
        const ids = await getProveedoresIds()
        console.log('IDs ', ids);

        // Array con IDs de proveedores marcados por el usuario
        const checks = ids.map(id => formData.get(id.toString()))
            .filter(id => id !== null)
            .map(id => Number(id))
        console.log('CHECKS ', checks);

        // Array de objetos con IDs de proveedores a conectar al artículo
        const connect = checks.map(id => { return { id: Number(id) } })
        console.log('CONNECT ', connect);

        const producto = await prisma.producto.create({
            data: {
                nombre,
                descripcion,
                precio,
                proveedores: { connect },
            },
            include: {
                proveedores: true,
            },
        })

        console.log(producto);
        revalidatePath('/productos')
    } catch (error) {
        console.log(error);
    }
    redirect('/productos');
}


/* 
// EJEMPLO ACTUALIZACIÓN
const result = await prisma.articulo.update({
  where: {
    id: 16,
  },
  include: {
    proveedores: true,
  },
  data: {
    proveedores: {
      connect: [{id: 4}, {id: 5}],
      disconnect: [{ id: 12 }, { id: 19 }],
    },
  },
 
})
 
*/

export async function editProducto(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = Number(formData.get('precio'))

    // Array con IDs de todos los proveedores
    const ids = await getProveedoresIds()
    console.log('IDs ', ids);

    // Array con IDs de proveedores marcados por el usuario
    const checks = ids.map(id => formData.get(id.toString()))
        .filter(id => id !== null)
        .map(id => Number(id))
    console.log('CHECKS ', checks);

    // Array de objetos con IDs de proveedores a conectar al artículo
    const connect = checks.map(id => { return { id: Number(id) } })
    console.log('CONNECT ', connect);

    // Array de objetos con IDs de proveedores a desconectar del artículo
    // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    const difference = ids.filter(id => !checks.includes(id));
    const disconnect = difference.map(id => { return { id: Number(id) } })
    console.log('DISCONNECT ', disconnect);

    try {
        const producto = await prisma.producto.update({
            where: { id },
            data: {
                nombre,
                descripcion,
                precio,
                proveedores: { connect, disconnect },
            },
            include: {
                proveedores: true,
            },
        })

        console.log(producto);
        revalidatePath('/productos')
    } catch (error) {
        console.log(error);
    }
    redirect('/productos');
}


export async function deleteProducto(formData) {
    try {
        const id = Number(formData.get('id'))

        const producto = await prisma.producto.delete({
            where: {
                id: id,
            },
        })
        console.log(producto);
        revalidatePath('/productos')
    } catch (error) {
        console.log(error);
    }

    redirect('/productos');
}



// PROVEEDORES

export async function getProveedores() {
    try {
        const proveedores = await prisma.proveedor.findMany()
        return proveedores;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}



export async function getProveedor(id) {  // obtener proveedores con artículos
    try {
        const proveedor = await prisma.proveedor.findUnique({
            where: { id },
            include: {
                producto: true
            }
        })

        console.log(proveedor);
        return proveedor;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}



export async function newProveedor(formData) {
    try {
        const nombre = formData.get('nombre')
        let nacional = formData.get('nacional')

        nacional = Boolean(nacional)

        const proveedor = await prisma.proveedor.create({
            data: { nombre, nacional },
        })

        console.log(proveedor);
        revalidatePath('/proveedores')
    } catch (error) {
        console.log(error);
    }
    redirect('/proveedores');
}



export async function editProveedor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    let nacional = formData.get('nacional')

    nacional = Boolean(nacional)

    try {
        const proveedor = await prisma.proveedor.update({
            where: { id },
            data: { nombre, nacional },
        })
        console.log(proveedor);
        revalidatePath('/proveedores')
    } catch (error) {
        console.log(error);
    }
    redirect('/proveedores');
}



export async function deleteProveedor(formData) {
    try {
        const id = Number(formData.get('id'))

        const proveedor = await prisma.proveedor.delete({
            where: {
                id: id,
            },
        })
        console.log(proveedor);
        revalidatePath('/proveedores')
    } catch (error) {
        console.log(error);
    }

    redirect('/proveedores');
}

async function getProfesoresIds () {
    const proIds = await prisma.profesor.findMany({
        select: { id: true }
    })
    return proIds.map( p => p.id )
}

//ALUMNOS

export async function getAlumnos() {
    try {
        const alumnos = await prisma.alumno.findMany()
        return alumnos;
    } catch (error) {
        return null;
    }
}

export async function getAlumno(id) {
    try {
        const alumno = await prisma.alumno.findUnique({
            where: { id },
            include: {
                profesores: true
            }
        })
        console.log(alumno);
        return alumno;
    } catch (error) {
        return null;
    }
}

export async function newAlumno(formData) {
    try {
        const nombre = formData.get('nombre');
        const localidad = formData.get('localidad');
        const fechaNacimiento = new Date(formData.get('fechaNacimiento'));

        const ids = await getProfesoresIds()
        console.log('IDs ', ids);

        const checks = ids.map(id => formData.get(id.toString()))
            .filter(id => id !== null)
            .map(id => Number(id))
        console.log('CHECKS ', checks);

        const connect = checks.map(id => { return { id: Number(id) } })
        console.log('CONNECT ', connect);

        const alumno = await prisma.alumno.create({
            data: {
                nombre,
                localidad,
                fechaNacimiento,
                profesores: { connect },
            },
            include: {
                profesores: true,
            },
        })

        console.log(alumno);
        revalidatePath('/alumnos')
    } catch (error) {
        console.log(error);
    }
    redirect('/alumnos');
}

export async function editAlumno(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre');
    const localidad = formData.get('localidad');
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'));

    const ids = await getProfesoresIds()
    console.log('IDs ', ids);

    const checks = ids.map(id => formData.get(id.toString()))
        .filter(id => id !== null)
        .map(id => Number(id))
    console.log('CHECKS ', checks);

    const connect = checks.map(id => { return { id: Number(id) } })
    console.log('CONNECT ', connect);

    const difference = ids.filter(id => !checks.includes(id));
    const disconnect = difference.map(id => { return { id: Number(id) } })
    console.log('DISCONNECT ', disconnect);

    try {
        const alumno = await prisma.alumno.update({
            where: { id },
            data: {
                nombre,
                localidad,
                fechaNacimiento,
                profesores: { connect, disconnect },
            },
            include: {
                profesores: true,
            },
        })

        console.log(alumno);
        revalidatePath('/alumnos')
    } catch (error) {
        console.log(error)
    }
    redirect('/alumnos');
}

export async function deleteAlumno(formData) {
    try {
        const id = Number(formData.get('id'))

        const alumno = await prisma.alumno.delete({
            where: { 
                id: id,
            },
        })
        console.log(alumno);
        revalidatePath('/alumnos')
    } catch (error) {
        console.log(error)        
    }
    redirect('/alumnos');
}

//Profesores

export async function getProfesores() {
    try {
        const profesores = await prisma.profesor.findMany()
        return profesores;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function getProfesor(id) {
    try {
        const profesor = await prisma.profesor.findUnique({
            where: { id },
            include: {
                alumnos: true
            }
        })
        console.log(profesor);
        return profesor;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function newProfesor(formData) {
    try {
        const nombre = formData.get('nombre')
        const especialidad = formData.get('especialidad')

        const profesor = await prisma.profesor.create({
            data: { nombre, especialidad },
        })

        console.log(profesor);
        revalidatePath('/profesores')
    } catch (error) {
        console.log(error);
    }
    redirect('/profesores');
}

export async function editProfesor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')

    try {
        const profesor = await prisma.profesor.update({
            where: { id },
            data: { nombre, especialidad },
        })
        console.log(profesor);
        revalidatePath('/profesores')
    } catch (error) {
        console.log(error);
    }
    redirect('/profesores');
}

export async function deleteProfesor(formData) {
    try {
        const id = Number(formData.get('id'))

        const profesor = await prisma.profesor.delete({
            where: {
                id: id,
            },
        })
        console.log(profesor);
        revalidatePath('/profesores')
    } catch (error) {
        console.log(error);
    }
    redirect('/profesores');
}

