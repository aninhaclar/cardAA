'use strict'  
const cidade =  [ 
    {nome: 'Itapevi',cor:'red', icon: 'dowload1.png'},
    {nome: 'Barueri',cor: 'blue', icon: 'dowload6.png'},
    {nome: 'Osasco', cor: 'purple', icon: 'dowload3.png'},
    {nome: 'Barueri',cor: 'pink', icon: 'dowload4.png'} ,
    {nome: 'Caracas City', cor: 'green', icon: 'dowload5.png'},
]

function criarMenu (cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icon/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.nome
 
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}
cidade.forEach(criarMenu)