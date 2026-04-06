//esta configuracion se le indica a vite que el proyecto se va a publicar en github pages, y que el repositorio se llama js-vite-blackjack,
//  si no se hace esto, al publicar el proyecto en github pages, no se van a cargar los archivos css y js, porque el path de estos archivos
//  va a ser incorrecto, ya que por defecto vite asume que el proyecto se va a publicar en la raiz del dominio, pero al publicar en github pages, 
// el proyecto se publica en una carpeta con el nombre del repositorio, por lo que es necesario indicar a vite que el proyecto se va a publicar en esa carpeta,
//  para que el path de los archivos css y js sea correcto.

import { defineConfig } from 'vite'

export default defineConfig({
    base: '/js-vite-blackjack/',

})