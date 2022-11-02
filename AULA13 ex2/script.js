function multiplicar() {
    let num = document.getElementById('numtxt')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)
    let r = Number(num.value)
    tab.innerHTML = ''
    for (let m = 1; m <= 10; r = n * m) {
        let res = document.createElement('option')
        res.text += `${n} x ${m} = ${r} ` 
        tab.appendChild(res)
        m++
    }


}