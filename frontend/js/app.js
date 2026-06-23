const API = "http://127.0.0.1:3000/juegos";

document.getElementById("btnJuegos").addEventListener("click", obtenerJuegos);

document.getElementById("btnBuscarJuego").addEventListener("click", buscarJuego);

document.getElementById("btnCrear").addEventListener("click", crearJuego);

document.getElementById("btnActualizar").addEventListener("click", actualizarJuego);

document.getElementById("btnUsuario").addEventListener("click", obtenerJuegosUsuario);

function mostrarError() {
    const mensaje = document.getElementById("mensajeError");

    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 5000); 
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
                        <p class="idJuego">
                            ID: ${juego.IdJuego}
                        </p>
                        <h3>${juego.Nombre}</h3>
                        <p class="price">
                            $${juego.Precio}
                        </p>
                        <p class="stock">
                            Stock: ${juego.Stock}
                        </p>
                        <p>
                            Categoría: ${juego.IdCategoria}
                        </p>
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
                <p>Categoria: ${juego.IdCategoria}</p>
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