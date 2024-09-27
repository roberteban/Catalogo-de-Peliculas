function recomendarPelicula(genero) {
    const edad = parseInt(document.getElementById("age").value);
    let mensaje = "";

    if (isNaN(edad) || edad <= 0) {
        mensaje = "Por favor, ingresa una edad válida.";
    } else {
        switch (genero) {
            case 'comedia':
                if (edad < 13) {
                    mensaje = "Te recomendamos: Back to the Future (ATP)";
                } else if (edad < 16) {
                    mensaje = "Te recomendamos: The Truman Show (+13)";
                } else {
                    mensaje = "Te recomendamos: The Wolf of Wall Street (+16)";
                }
                break;

            case 'drama':
                if (edad < 13) {
                    mensaje = "Te recomendamos: Casablanca (ATP)";
                } else if (edad < 16) {
                    mensaje = "Te recomendamos: The Shawshank Redemption (+13)";
                } else {
                    mensaje = "Te recomendamos: Taxi Driver (+16)";
                }
                break;

            case 'musical':
                if (edad < 13) {
                    mensaje = "Te recomendamos: La La Land (ATP)";
                } else if (edad < 16) {
                    mensaje = "Te recomendamos: Les Miserables (+13)";
                } else {
                    mensaje = "Te recomendamos: The Rocky Horror Picture Show (+16)";
                }
                break;

            case 'crimen':
                if (edad < 13) {
                    mensaje = "Lo sentimos, no hay películas disponibles para tu edad en este género.";
                } else if (edad < 16) {
                    mensaje = "Te recomendamos: El secreto de sus ojos (+13)";
                } else {
                    mensaje = "Te recomendamos: The Godfather (+16)";
                }
                break;

            default:
                mensaje = "Género no reconocido.";
                break;
        }
    }

    document.getElementById("recomendacion").textContent = mensaje;
}
