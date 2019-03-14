---
layout: post
category: blog
title: ArrayUtils - Conhecendo Javascript para melhorar o ADVPL
description: Estudando Javascript criei ferramentas úteis para usar com ADVPL
date: 2019-03-01

tags:
    - Blog
    - Array
    - Matrizes
    - Disp:Terceiros

---
# ArrayUtils - Conhecendo Javascript para melhorar o ADVPL

## Motivação

É interessante como estudar uma coisa abre a mente para outras.

Tenho estudado bastante para me atualizar sobre estas "modernidades" do Javascript, pois quando eu usava esse negócio, só servia para validar formulário.

Ao mesmo tempo que estava aprendendo mais sobre os novos métodos da classe Array.prototype (map, filter, reduce), também estava trabalhando bastante com ExecAuto e outras coisas que usam matrizes no Protheus (quem nunca).

Então eu me vi querendo filtrar um array no Protheus, e parei quando comecei a escrever algo assim:

```js ADVPL
aItens:= GetArrayItens()
aFiltrado:= {}
For nX:= 1 To Len(aItens)
    If aItens[nX][1] == "CAMPO"
        aAdd(aFiltrado, aItens[nX])
    EndIf
Next nX
```

Aí eu pensei, vou colocar esse filtro numa função. Mas, poxa, um bloco de código com aEval já resolveria:

```js ADVPL
aFiltrado:= {}
aEval(GetArrayItens(), {|x| iif(x[1]=="CAMPO", aAdd(aFiltrado, x), Nil) })
```

Mas fica uma complicação pra ler um fonte quando tem um bloco de código com `iif`, `aAdd`, `nil`. 

## Criação da aFilter

Então criei uma a função chamada aFilter, que resolve o negócio assim:

```js ADVPL
aFiltrado:= aFilter(GetArrayItens(), {|x| x[1] == "CAMPO" })
```

Tem um bloco de código, mas é totalmente sucinto, e ele só precisa da expressão que define se o item entra ou não no novo array, nada de `iif`, `aAdd`, `Nil`.

E não tem nada de Rocket science:

```js ADVPL
Static Function aFilter( aOrigin, bCallback )
    Local aDestiny:= {}

    aEval(aOrigin, {|uValue, nIndex| ;
        If(Eval(bCallback, uValue, nIndex, aOrigin), ;
            aAdd(aDestiny, uValue), ;
        Nil) ;
    })

Return ( aDestiny )
```

## Testes e validação

Bom, pra ter certeza que não estava fazendo uma caca muito grande, escrevi alguns testes com [advpl-testsuite](https://github.com/nginformatica/advpl-testsuite), e botei pra rodar.

Cara, eu abusei do negócio, e funcionou muito bem para o que eu precisava.

Cheguei a fazer algumas comparações de desempenho com o for, e em algumas situações foi bem mais rápido.

Só que como eu tive que pensar de forma funcional pra implementar as validações, mesmo só um for com na avaliação da expressão, já seria mais "performático".

## Conclusão

Quando vi que ficou legal, peguei a documentação do Array.prototype na [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro) e comecei a explorar se tinha mais alguma que eu poderia implementar.

E foi assim que nasceu a biblioteca [ArrayUtils](https://github.com/tgmti/TGM_Advpl_Tools/tree/master/ArrayUtils), que por enquanto conta com aFilter, aFind, aJoin, aMap e aReduce. Está disponível no meu Github, com a explicação de cada uma, além de exemplos e alguns testes.

**Críticas e contribuições são bem vindas!**

## Referências

* [MDN: JavaScript Array Prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
* [TDN: aEval](http://tdn.totvs.com/display/tec/AEVal)
* [TDN: Funções para Manipulação de matriz](http://tdn.totvs.com/pages/viewpage.action?pageId=6063768)
* [NG: AdvPL TestSuite](https://github.com/nginformatica/advpl-testsuite)
