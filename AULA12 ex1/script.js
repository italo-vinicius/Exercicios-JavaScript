function carregar() {
var horadiv = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
horadiv.innerHTML = `agora são ${hora}:${minutos} horas`
if (hora >= 0 && hora < 12) {
    img.src = "img/manha.jpg"
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    img.src = "img/tarde.jpg"
    document.body.style.background = '#b9846f'
} else {
    img.src = "img/noite.jpg"
    document.body.style.background = '#515154'
    
}


}