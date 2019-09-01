---
layout: post
category: howto
title: RegExp + ADVPL
description: Usando expressões regulares para resolver problemas simples com ADVPL 
date: 2019-09-01
tags:
    - Blog
    - Regex
    - Regular Expressions
    - Expressões Regulares
    - Strings
    - Disp:Terceiros
---
# RegExp + ADVPL

## Motivação

Precisei consumir uma API rest para integrar dados de rastradores de frota (Autotrac) no Protheus. Até aí tudo normal, a API tinha seus probleminhas em relação à documentação, mas resolvemos isso de boa.

Só que na hora de gravar os dados e relacionar com os veículos do ERP, surgiu um probleminha. O código que vem na API não temos no sistema, no cadastro de veículos temos somente a placa do cavalo. Ah, mas essa estava na API, em um campo "Name". Pô, legal, vou usar o name então.

Só que, ao consultar o cadastro completo dos veículos no API, eis que aparecem coisas assim:

```Json
    {"Vehicles": [
        { "Name": "PLA0001" }
        { "Name": "Scania PLA0002" }
        { "Name": "Carreta PLA0003 / PLA0004" }
        { "Name": "Bi-Trem PLA0004 / PLA0005 / PLA0006" }
        { "Name": "Bi-Trem2 PLA0A01 / PLA0A01 / PLA0A01" }

    ]}
```

Avaliei com os responsáveis pelo cadastro, e a placa que precisamos sempre será a primeira, mas não há um padrão para as descrições antes desta placa.

Na hora comecei a escrever mentalmente um While, que tem todo jeito de gambiarra:

```JS
    nPos:= 0
    While nPos <= Len(cName)
        nPos++
        cChar:= SubsStr(cName, nPos, 1)
        If AtendeOPadrao(cChar, cPlaca)
            cPlaca+= cChar
        Else
            cPlaca:= ''
        EndIf
        If Len(cPlaca) == 7
            Exit
        EndIf
    Endo

```

Bom, nesse caso, "AtendeOPadrao" iria verificar se o próximo caractere se encaixa no padrão `(A-Z)[3]+(0-9)[1](0-Z)[1](0-9)[2]`. Mas eita, quando tentei montar esse padrão na cabeça, me toquei que era uma [Expressão regular](https://pt.wikipedia.org/wiki/Expressão_regular) simples, só que nunca vi nenhuma função padrão pra compilar Regex no ADVPL.

## Pesquisa

Bom, primeiro eu testei o [Regex na Web](https://regexr.com/), pra ajustar o padrão correto:

`([A-Z]{3})([0-9]{1})([0-Z]{1})([0-9]{2})`

Depois, fui de TDN e nada. No Google encontrei alguns posts do Naldo, demonstrando como utilizar ferramentas externas, [via Ezzy Learning Validation](http://www.blacktdn.com.br/2012/04/blacktdn-expressoes-regulares-regexp.html) e via [PowerShell](http://www.blacktdn.com.br/2012/04/blacktdn-validando-expressoes-regulares.html). Mas não era bem o que eu queria.

Então apareceu um Repositório arquivado do Google Code: [advpl-regex](https://code.google.com/archive/p/advpl-regex/), desenvolvido por um cada com um baita nome: Thiago Santos.

Poxa, é isso mesmo cara. Achei que ia precisar fazer muitos ajustes, pois é de 2013. Mas pra minha surpresa, só precisei ajustar a função usada para montar a tela de testes.

## Solução

Então, percorri o array com os objetos, e para cada Obj:Name eu consegui extrair usando esse código:

```JS
/*/{Protheus.doc}GetPlaca

    @description
    Extrai a placa da String da Autotrac Usando Regex
    @author Thiago Mota <mota.thiago@totvs.com.br>
    @version 1.0
    @since 30/08/2019
/*/

Static cRegExp:= '([A-Z]{3})([0-9]{1})([0-Z]{1})([0-9]{2})'
Static oMatcher := U_ReComp(StrTran(StrTran(cRegExp, chr(13)), chr(10)))

Static Function GetPlaca( cTexto )
    Local cPlaca:= ''
    Local aPlacas:= {}
    If oMatcher:Find(cTexto)
        aPlacas := oMatcher:Result
        If ValType(aPlacas) == 'A' .And. Len(aPlacas) > 0
            cPlaca:= aPlacas[1][1]
        EndIf
    EndIf
Return ( cPlaca )
```

## Agradecendo

Bom, implementar com o While seria quase a mesma coisa para este caso.

Mas, ao menos estou usando com RegEx, espero que seja de bom uso para mais alguém.

Como o Google Code está como arquivado, e não permite mais incluir commits, copiei o código para abrir no meu GitHub, procurei o contato do [Thiago Santos](https://github.com/Farenheith), pra avisá-lo que estarei usando e compartilhando.

Então, quem precisar usar e quiser contribuir, fique a vontade: https://github.com/tgmti/advpl-regex
