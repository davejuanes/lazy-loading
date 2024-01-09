const isIntersecting = (entry) => {
    // 200px lejos de la pantalla -- x, y
    return entry.isIntersecting // true (dentro de la pantalla)
}

const accion = (entry) => {
    const nodo = entry.target
    console.log('holis');

    // desregistra la imagen (unlisten)
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

//
export const registerImage = (imagen) => {
    // IntersectionObserver -> observer(imagen)
    observer.observe(imagen)
}
