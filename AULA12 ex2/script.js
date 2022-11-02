function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro..verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua idade é de ${idade} anos`
        img = document.getElementById('imagem')
        var sexo = ''

        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade <= 4) {
                img.src = 'img/baby.jpg'
            }
            else if (idade > 4 && idade <= 11) {
                img.src = 'img/kidm.jpg'
            }
            else if (idade > 11 && idade <= 20) {
                img.src = 'img/jovemm.jpg'
            }
            else if (idade > 20 && idade <= 45) {
                img.src = 'img/adultom.jpg'
            }
            else if (idade > 45) {
                img.src = 'img/idosom.jpg'
            }


        } else if (fsex[1].checked) {
            sexo = 'mulher'
            if (idade <= 4) {
                img.src = 'img/baby.jpg'
            }
            else if (idade > 4 && idade <= 11) {
                img.src = 'img/kidf.jpg'
            }
            else if (idade > 11 && idade <= 20) {
                img.src = 'img/jovemf.jpg'
            }
            else if (idade > 20 && idade <= 45) {
                img.src = 'img/adultof.jpg'
            }
            else if (idade > 45) {
                img.src = 'img/idosof.jpg'
            }

        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    }

}