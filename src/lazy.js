const isIntersecting = (entry) => {
    // 200px lejos de la pantalla -- x, y
    return entry.isIntersecting // true (dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target // container (DIV)
    const imagen = container.firstChild
    const url = imagen.dataset.src
    // cargue la imagen
    imagen.src = url

    // desregistra la imagen (unlisten)
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

//
export const registerImage = (imagen) => {
    // IntersectionObserver -> observer(imagen)
    observer.observe(imagen)
}
