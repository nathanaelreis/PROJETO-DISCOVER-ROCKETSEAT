function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

   // pegar a tag img
   const img = document.querySelector("#profile img")
   
   //substituir a imagem
   if(html.classList.contains('light')) {
       //se tiver light mode, adicionar imagem light
       img.setAttribute('src', './img/profile-ligth-mode.jpg')
       img.setAttribute('height', '100px')
       img.setAttribute('alt', 'photo-profile-ligth')
    }else{
       //se tiver sem light mode, manter a imaguem normal
img.setAttribute('src', './img/Captura de tela 2024-01-24 112159.png')
   }

}