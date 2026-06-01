import { renderizarPaginas } from "../main.js"


export function criarPreview(){
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const input = document.createElement('input')
    input.id = 'preview-input'
    input.classList.add('preview-input')
    input.type = 'file'
    input.accept = 'image/*'

    const label = document.createElement('label')
    label.className = 'preview-label'
    label.htmlFor = 'preview-input'

    const image = document.createElement('img')
    image.id = 'preview-image'
    image.className = 'preview-image'
    image.src = './img/upload-icon.svg'


    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'

    const upload = document.createElement('button')
    upload.id = 'upload-button'
    upload.className = 'button'
    upload.type = 'button'
    upload.textContent = 'Salvar'

    const cancelar = document.createElement('button')
    cancelar.className = 'button'
    cancelar.type = 'button'
    cancelar.textContent = 'Cancelar'
    cancelar.onclick = ()=> renderizarPaginas('login')



    buttonContainer.append(upload, cancelar)
    previewContainer.append(input, label, image, buttonContainer)

    container.append(previewContainer)
    return container
}