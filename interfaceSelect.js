//Para o nome do jogador
nomeJogador = document.getElementById("nomeJOGADOR")
function confirmarJogador(){
    let inputJogador = document.getElementById('inputJogador').value
    document.getElementById("nomeJOGADOR").innerText = inputJogador
}

//Para o clã
const clãSelecionado = document.getElementById('clãSelecionado')
clãSelecionado.addEventListener('change', function(){
    // Nome do clã
    valor = clãSelecionado.value
    document.getElementById('nomeCLÃ').innerText = valor

    // Cor do nome
    if(valor === 'Sem Clã'){
        nomeCLÃ.className = 'sem-clã'
    }
    else if(valor === 'Berllot'){
        nomeCLÃ.className = 'berllot'
    }
    else if(valor === 'Bichos do Mato'){
        nomeCLÃ.className = 'bichos-do-mato'
    }
    else if(valor === 'Firebirds'){
        nomeCLÃ.className = 'firebirds'
    }
    else if(valor === 'Inimigos da Moda'){
        nomeCLÃ.className = 'inimigos-da-moda'
    }
    else if(valor === 'Ulgrimnism'){
        nomeCLÃ.className = 'ulgrimnism'
    }
    else if(valor === 'Vasco'){
        nomeCLÃ.className = 'vasco'
    }
    else{
        nomeCLÃ.className = ''
    }
    })


//Para o personagem
const personagemSelecionado = document.getElementById('personagemSelecionado')
const nomeLENDA = document.getElementById('nomeLENDA')
personagemSelecionado.addEventListener('change', function(){
    // Imagem do personagem
    valor = personagemSelecionado.value
    lenda.src = valor

    // Nome do personagem
    const nome = personagemSelecionado.options[personagemSelecionado.selectedIndex].getAttribute("data-value")
    nomeLENDA.innerHTML = nome
})


//Para o custo
const custoSelecionado = document.getElementById('custoSelecionado')

custoSelecionado.addEventListener('change', function(){
    valor = custoSelecionado.value
    custo.src = valor
})