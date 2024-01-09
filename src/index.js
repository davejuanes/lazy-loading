import { registerImage } from "./lazy";

// crear (1) imagen
// agregar #imagen

{/* <div>
  <img
    class="mx-auto"
    width="320"
    src="https://randomfox.ca/images/2.jpg"
    alt="Fix Image"
  />
</div>; */}
const minimum = 1
const maximum = 122
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.src = `https://randomfox.ca/images/${random()}.jpg` // TODO

    container.appendChild(imagen)

    return container
};

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')
const addImagen = () => {
    const newImage = createImageNode()
    mountNode.appendChild(newImage)
    registerImage(newImage)
};
addButton.addEventListener('click', addImagen)

