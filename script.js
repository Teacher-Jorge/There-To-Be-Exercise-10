let btnAre = document.getElementById("btnAre")
let btnIs = document.getElementById("btnIs")
let btnHas = document.getElementById("btnHas")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnAre.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    let audio = document.getElementById('right')
    audio.play()
    let image1 = document.getElementById('img01')
    image1.style.opacity = '0'
    let image2 = document.getElementById('img02')
    image2.style.opacity = '1'
    answer.innerHTML = "Are"
    btnAre.style.background = 'lime'
    answer.style.color = 'lime'
    btnIs.disabled = 'true'
    btnAre.disabled = 'true'
    btnHas.disabled = 'true'
})

btnHas.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'have'
    btnHas.style.background = 'red'
    answer.style.color = 'red'
    btnHas.disabled = 'true'
})

btnIs.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    let audio = document.getElementById('wrong2')
    audio.play()
    answer.innerHTML = "Is"
    answer.style.color = 'red'
    btnIs.style.background = ' red'
    btnIs.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audioClick = document.getElementById('click')
    audioClick.play()
    btnTranslate.innerHTML = 'Há muitas pessoas no show?'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



