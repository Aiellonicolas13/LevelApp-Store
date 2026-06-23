const API = "http://127.0.0.1:3000/juegos";

document.getElementById("btnJuegos").addEventListener("click", mostrarOcultarJuegos);

document.getElementById("btnBuscarJuego").addEventListener("click", buscarJuego);

document.getElementById("btnCrear").addEventListener("click", crearJuego);

document.getElementById("btnActualizar").addEventListener("click", actualizarJuego);

document.getElementById("btnEliminar").addEventListener("click", eliminarJuego);

document.getElementById("btnCompras").addEventListener("click", mostrarOcultarCompras);

document.getElementById("btnBuscarCompra").addEventListener("click", buscarCompra);


let juegosMostrados = false;
let comprasVisibles = false;

async function mostrarOcultarJuegos() {

    const contenedor =
        document.getElementById("listaJuegos");

    const boton =
        document.getElementById("btnJuegos");


    if (!juegosMostrados) {


        await obtenerJuegos();


        contenedor.style.display = "grid";


        boton.textContent = "Ocultar Juegos";


        juegosMostrados = true;


    } else {


        contenedor.style.display = "none";


        boton.textContent = "Cargar Juegos";


        juegosMostrados = false;

    }

}

async function mostrarOcultarCompras() {

    const contenedor =
        document.getElementById("listaCompras");

    const boton =
        document.getElementById("btnCompras");


    if (!comprasVisibles) {


        await obtenerCompras();


        contenedor.style.display = "grid";


        boton.textContent = "Ocultar Compras";


        comprasVisibles = true;


    } else {


        contenedor.style.display = "none";


        boton.textContent = "Cargar Compras";


        comprasVisibles = false;

    }

}

function mostrarError() {
    const mensaje = document.getElementById("mensajeError");

    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 5000); 
}
function mostrarErrorCompra() {

    const mensaje = document.getElementById("mensajeErrorCompra");


    mensaje.style.display = "block";

    setTimeout(() => {

        mensaje.style.display = "none";

    }, 3000);


}

async function obtenerJuegos() {
    try {
        const response = await fetch(API);
        const juegos = await response.json();
        const contenedor = document.getElementById("listaJuegos");
        contenedor.innerHTML = "";
        juegos.forEach(juego => {
            contenedor.innerHTML += `
                <div class="game-card">
                    <div class="game-info">
                        <p class="idJuego">ID: ${juego.IdJuego}</p>
                        <h3>${juego.Nombre}</h3>
                        <p class="price">$${juego.Precio}</p>
                        <p class="stock">Stock: ${juego.Stock}</p>
                        <p>Categoría: ${juego.IdCategoria}</p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.log(error);
        alert("Error al cargar juegos");
    }
}

async function buscarJuego() {

    try {
        const id = document.getElementById("idJuego").value;
        const response = await fetch(`${API}/${id}`);

        if (!response.ok) {
            throw new Error("Juego no encontrado");
        }
        const juego = await response.json();

        document.getElementById("juegoEncontrado").innerHTML = `
            <div class="user-card">
                <h3>${juego.Nombre}</h3>
                <p>Precio: $${juego.Precio}</p>
                <p>Stock: ${juego.Stock}</p>
                <p>Categoria: ${juego.Categoria}</p>
            </div>
        `;
    } catch (error) {
        console.log(error);
        mostrarError();
    }
}

async function crearJuego() {

    try {

        const juego = {
            Nombre: document.getElementById("nombre").value,
            Precio: Number(document.getElementById("precio").value),
            Stock: Number(document.getElementById("stock").value),
            IdCategoria: Number(document.getElementById("categoria").value)
        };
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(juego)
        });
        if (!response.ok) {
            throw new Error();
        }
        alert("Juego creado correctamente");
        obtenerJuegos();
    } catch (error) {
        console.log(error);
        alert("Error al crear juego");
    }
}

async function actualizarJuego() {

    try {

        const id =
            document.getElementById("updateId").value;

        const juegoActualizado = {};

        const precio =
            document.getElementById("updatePrecio").value;

        const stock =
            document.getElementById("updateStock").value;

        if (precio !== "") {
            juegoActualizado.Precio = Number(precio);
        }

        if (stock !== "") {
            juegoActualizado.Stock = Number(stock);
        }

        const response = await fetch(`${API}/${id}`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(juegoActualizado)
        });

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();

        console.log(data);

        alert("Juego actualizado correctamente");

        obtenerJuegos();

    } catch (error) {
        console.log(error);
        alert("Error al actualizar juego");
    }
}

async function eliminarJuego() {
    const id = document.getElementById("eliminateId").value;
    if (!id) {
        alert("Ingrese un ID");
        return;
    }
    try {
        const respuesta = await fetch(`http://127.0.0.1:3000/juegos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!respuesta.ok) {
            throw new Error("No se pudo eliminar el juego");
        }
        const data = await respuesta.json();
        alert("Juego eliminado correctamente");
        console.log(data);
        
    } catch (error) {
        console.error(error);
        alert("Error eliminando juego");
    }
}

async function obtenerJuegosUsuario() {

    try {

        const idUsuario =
            document.getElementById("idUsuario").value;

        const response =
            await fetch(`${API}/usuario/${idUsuario}`);

        if (!response.ok) {
            throw new Error();
        }

        const juegos =
            await response.json();

        const contenedor =
            document.getElementById("listaJuegosUsuario");

        contenedor.innerHTML = "";

        juegos.forEach(juego => {

            contenedor.innerHTML += `
                <div class="user-card">

                    <h3>${juego.Nombre}</h3>

                    <p>Precio: $${juego.Precio}</p>

                    <p>Stock: ${juego.Stock}</p>

                </div>
            `;
        });

    } catch (error) {
        console.log(error);
        alert("Error al obtener juegos del usuario");
    }
}

async function obtenerCompras() {
    try {
        const response = await fetch(
            "http://127.0.0.1:3000/compras"
        );
        if (!response.ok) {
            throw new Error();
        }
        const compras = await response.json();
        const contenedor = document.getElementById("listaCompras");
        contenedor.innerHTML = "";
        compras.forEach(compra => {
            contenedor.innerHTML += `
            <div class="game-card">
                <div class="game-info">
                    <p class="idJuego">
                        Compra ID: ${compra.IdCompra}
                    </p>
                    <p>
                        Usuario: ${compra.Usuario}
                    </p>
                    <p class="price">
                        Total: ${compra.Total} $
                    </p>
                    <p>
                        Fecha: ${compra.FechaCompra}
                    </p>
                </div>
            </div>`;
        });
    } catch(error) {
        console.log(error);
        alert(
            "Error al cargar compras"
        );
    }
}

async function buscarCompra() {

    try {
        const id = document.getElementById("idCompraJuego").value;
        if (!id) {
            alert("Ingrese un ID de juego");
            return;
        }
        const response = await fetch(`http://127.0.0.1:3000/compras/${id}`);
        if (!response.ok) {
            throw new Error("Compra no encontrada");
        }
        const datos = await response.json();
        const contenedor = document.getElementById("compraEncontrada");
        contenedor.innerHTML = "";
        const compras = Array.isArray(datos) ? datos: [datos];
        compras.forEach(compra => { contenedor.innerHTML += `
            <div class="user-card">
                <h3>Compra ID: ${compra.IdJuego}</h3>
                <p>Juego: ${compra.Nombre}</p>
                <p>Cantidad: ${compra.TotalUnidadesVendidas}</p>
                <p>Total ingresos: ${compra.TotalIngresos}</p>
            </div>`;
        });
    } catch(error) {
        console.log(error);        
        mostrarErrorCompra();
        const contenedor = document.getElementById("compraEncontrada");
        contenedor.innerHTML = "";
        // alert("No se encontraron compras");
    }
}