function exer_1(){
    let a 
    let b
    let c
    let d
    let aux 

   for (let cont=1; cont<=5; cont++){
     a = Number(prompt(`Informe o valor de a`))
     b = Number(prompt(`Informe o valor de b`))
     c = Number(prompt(`Informe o valor de c`))
     d = Number(prompt(`Informe o valor de d`))

        if (a>b){
            aux = a
            a = b
            b = aux
        }
        if(b>c){
            aux = b 
            b = c
            c = aux
        }
        if (c>d){
            aux = c
            c = d
            d = aux
        }
            alert(`ordem crescente ${a} ${b} ${c} ${d}`)
            alert(`ordem decrescente ${d} ${c} ${b} ${a}`)
    }
    
}

function exer_1_2(){
    let a, b, c, d, e, f, aux
   
     for (let cont=1; cont<=5; cont++){
        a = Number(prompt(`Informe o valor de a`))
        b = Number(prompt(`Informe o valor de b`))
        c = Number(prompt(`Informe o valor de c`))
        d = Number(prompt(`Informe o valor de d`))
        e = Number(prompt(`Informe o valor de e`))
        f = Number(prompt(`Informe o valor de f`))
    

       
        if (a>b){
            aux = a
            a = b
            b = aux
         }
        if(b>c){
            aux = b 
            b = c
            c = aux
        }
        if (c>d){
            aux = c
            c = d
            d = aux
        }
        if (d>e){
            aux = d
            d = e
            e = aux
        }
        if (e>f){
            aux = e
            e = f
            f = aux
        }
            alert(`ordem crescente ${a} ${b} ${c} ${d} ${e} ${f}`)
            alert(`ordem decrescente ${f} ${e} ${d} ${c} ${b} ${a}`)
    }   
    
}

function exer_2(){
    let quant = 120
    let lucro 
    let saida = " "
    let mlucro
    let mpreco
    let mquant
    for (let preco = 5.0; preco >=1.0; preco = preco - 0.50){
        lucro = (preco * quant) - 200
        
        
        if (lucro > mlucro){
            mlucro = lucro
            mpreco = preco
            mquant = quant
           
        }

        saida = saida + (`Preço: ${preco}, Quantidade: ${quant}, Despesa: 200, Lucro: ${lucro}`) + `\n`
        quant = quant + 26
    }   
    alert(saida)
    alert(`\n` + `Preço: ${mpreco}, Quantidade: ${mquant}, Despesa: 200, Lucro: ${mlucro}`)
    
}

function exer_21(){
    let opcao
    let qtde1 = 0; let qtde2 = 0; let qtde3 = 0; let qtde4 = 0; let qtdeNulo = 0; let qtdeBranco = 0
    do {
        opcao = Number(prompt(`Informe \n1. Cand1 \n2. Cand2 \n3. Cand3 \n4. Cand4 \n5. Nulo \n6. Branco \n0. Sair`))
        switch(opcao){
            case 1: qtde1++; break
            case 1: qtde1++ 
                    break
            case 2: qtde2++; break
            case 3: qtde3++; break
            case 3: qtde3++ 
                    break
            case 4: qtde4++; break
            case 5: qtdeNulo++; break
            case 6: qtdeBranco++; break
        }
    }
    while (opcao != 0)
    let total = qtde1 + qtde2 + qtde3 + qtde4 + qtdeBranco + qtdeNulo
    alert(`Cand 1: ${qtde1} Cand 2: ${qtde2} Cand 3: ${qtde3} Cand 4: ${qtde4} Branco: ${qtdeBranco} Nulo: ${qtdeNulo}`)
    alert(`% Branco: ${qtdeBranco/total*100} % Nulo: ${qtdeNulo/total*100}`)
}
