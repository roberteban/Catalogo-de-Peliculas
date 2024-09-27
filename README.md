# Cine Recomendador de Películas

Este es un proyecto de una página web que recomienda películas según la edad y el género preferido del espectador. A través de un campo de entrada para la edad y botones para seleccionar el género, el sistema muestra una película adecuada para el espectador.

## Funcionalidad

La página permite al usuario:
- Ingresar su edad.
- Seleccionar uno de los siguientes géneros: Comedia, Drama, Musical o Crimen.
- Recibir una recomendación de película del catálogo disponible del cine, acorde a la clasificación de edad.

El catálogo de películas tiene películas clasificadas en 3 rangos de edad:
- **ATP (Apta para Todo Público)**: Menores de 13 años.
- **+13**: Menores de 16 años.
- **+16**: 16 años o más.

### Catálogo de Películas

- **Comedia**
  - Back to the Future (ATP)
  - The Truman Show (+13)
  - The Wolf of Wall Street (+16)

- **Crimen**
  - El secreto de sus ojos (+13)
  - The Godfather (+16)

- **Drama**
  - Casablanca (ATP)
  - The Shawshank Redemption (+13)
  - Taxi Driver (+16)

- **Musical**
  - La La Land (ATP)
  - Les Miserables (+13)
  - The Rocky Horror Picture Show (+16)

## Estructura del Proyecto

- `index.html`: Archivo HTML que contiene la estructura de la página.
- `styles.css`: Archivo CSS que define los estilos de la página.
- `script.js`: Archivo JavaScript que implementa la lógica para recomendar películas basadas en la edad y el género seleccionado.
