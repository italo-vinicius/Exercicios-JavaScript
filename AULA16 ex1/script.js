let valores = []
function adicionar() {
    let valor = document.getElementById('numtxt')
    let v = Number(valor.value)
    valores.push(v)

    if (v == 0 || valor.value.length == 0) {
        window.alert('Erro..Digite apenas números válidos')
    } else {
    let tab = document.getElementById('boxtxt')
    let res = document.createElement('option')
        res.text += `Valor ${v} adicionado` 
        tab.appendChild(res) }

        
    }

function finalizar()  {
    let lista = document.getElementById('listatxt')
    lista.innerHTML = ``

    soma = 0
    maior = menor = 0 
    for (let pos in valores) {
        soma += valores[pos]
        if (pos == 0) {
        maior = menor = valores[0]
    }   else {
        if (maior < valores[pos]) {
            maior = valores[pos]
        } if (menor > valores[pos]){
            menor = valores[pos]
        }
    }
    }

    lista.innerHTML += `Ao todos, temos ${valores.length} números digitados <br>`
    lista.innerHTML += `O maior valor informado foi ${maior} <br>`
    lista.innerHTML += `O menor valor informado foi ${menor} <br>`
    lista.innerHTML += `Somando todos os valores, temos ${soma} <br>`
    lista.innerHTML += `A média dos valores digitados é ${soma / valores.length} <br>`


}