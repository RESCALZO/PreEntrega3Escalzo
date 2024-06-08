function mostrarDetalle(nombre, rutaImagen, precio) { // definimos parámetros para obtener elementos del html por su id //
    var detalleProducto = document.getElementById('detalle-producto'); 
    var nombreProducto = document.getElementById('nombre-producto');
    var imagenProducto = document.getElementById('imagen-producto');
    var descripcionProducto = document.getElementById('descripcion-producto');
    var precioProducto = document.getElementById('precio-producto');
    
    // lo que se debe mostrar en el contenedor abierto del producto cliqueado (nombre, imagen, precio) //
    nombreProducto.textContent = nombre;
    imagenProducto.src = rutaImagen;
    descripcionProducto.textContent = "Detalles del producto: " + nombre;
    precioProducto.textContent = "Precio: $" + precio;

    detalleProducto.style.display = 'flex';
}

// cerrar contenedor al cliquear 'x' //
function cerrarDetalle() {
    var detalleProducto = document.getElementById('detalle-producto');
    detalleProducto.style.display = 'none';
}


// mostrar alerta al agregar un producto al carrito //
function comprarProducto() {
    alert("Producto agregado al carrito!");
}