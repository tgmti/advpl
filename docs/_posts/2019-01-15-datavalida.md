---
layout: post
category: functions
title: DataValida
description: Retorna uma data válida para fiscal. Considerando finais de semana e feriados.
date: 2019-02-04

tags:
    - Data e Hora
    - Financeiro
    - Fiscal

---
# DataValida

Retorna uma data válida para fiscal. Considerando finais de semana e feriados.

```js language-advpl
DataValida(dData,lProxima)
/*
    Obs.: Não consegui o Sintax com o advpl, apesar de ter no GH
    https://github.com/github/linguist/blob/master/vendor/README.md

    Pra colocar advpl no cantinho, tem que adicioanar essse estilo em algum lugar:    
    div[class*="advpl"]:before {
        content: 'advpl';
    }
*/
```

## Parâmetros

| Nome       | Tipo   | Descrição | Padrão | Obrigatório |
| ---------- | ------ | --------- | ------ | ----------- |
| dData      | Data   | Data Avaliada | dDataBase? | Não |
| lProxima   | Lógico | próxima data (.T.) ou anterior (.F.) | .T. | Não |

## Retorno

* Tipo: Data
* Descrição: Retorna a primeira data válida imediatamente após (ou antes) a partir da data informada.

## Exemplos

    > DataValida(data_domingo,.T.) // Retorna data de segunda
    > DataValida(data_domingo,.F.) // Retorna data de sexta
