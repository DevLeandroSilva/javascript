var area = window.document.getElementById('area')

    area.addEventListener('click', clicou)
    area.addEventListener('mouseenter', entrou)
    area.addEventListener('mouseout', saiu)

function clicou(){
    area.innerText = 'clicou'
    area.style.background = 'purple'
}

function entrou(){
    area.innerText = 'entrou'
    area.style.background ='red'
}

 function saiu(){
    area.innerText = 'saiu'
    area.style.background = 'orange'
 }