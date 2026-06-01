'use strict'

import {criarPreview} from "./pages/preview.js"
import {criarlogin} from "./pages/login.js"

const paginas ={
    preview :{
        titulo: 'PREVIEW DE IMAGENS',
        renderizar: criarPreview
    },
    login :{
        titulo: 'Login sistema de fotos',
        renderizar: criarlogin
    }
}
paginas.preview.titulo
paginas['preview'].titulo
paginas['preview']['titulo']

export function renderizarPaginas(nomePagina){
    const pagina = paginas[nomePagina].renderizar()

document.getElementById('main-view').replaceChildren(pagina)
}

renderizarPaginas('login')