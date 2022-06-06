const imagenes = document.querySelectorAll(".galeria .contenedor-imagen");
const imagenModal = document.getElementById("imagen-modal");

imagenes.forEach((imagen) => {
  console.log(imagen);
  imagen.addEventListener("click", () => {
    const ruta = imagen.querySelector("img").src;
    console.log(ruta);
    imagenModal.src = ruta;
  });
});
