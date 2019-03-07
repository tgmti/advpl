---
layout: post
category: functions
title: DataValida
description: Verifica data válida no sistema
date: 2019-02-04

tags:
    - Data e Hora
    - Financeiro
    - Fiscal
    - Abrangência:V10
    - Ambiente:Logado

---
# DataValida

Verifica data válida no sistema

Retorna uma data válida para fiscal. Considerando finais de semana e feriados.

```js
DataValida(dData,lProxima)
```

## Parâmetros e Retorno

| Nome       | Tipo   | Descrição | Padrão | Obrigatório |
| ---------- | ------ | --------- | ------ | ----------- |
| dData      | Data   | Data para iniciar o cálculo da função | dDataBase? | Não |
| lProxima   | Lógico | Se **.T.** posterga a data recebida para o próximo dia últil - Se **.F.** retrocede a data recebida para o dia últil anterior. | .T. | Não |
||
| **Retorno**   | **Lógico** | **próxima data (.T.) ou anterior (.F.)** | **.T.** |  |

## Fonte

    DATAVALI.PRW

## Observações

A função irá considerar as datas encontradas na tabela 63 do SX5 (Tabela de Feriados), os sábados (caso o parâmetro MV_SABFERI seja igual a "S") e os domingos como sendo feriados, retornando assim a próxima data válida.

## Exemplos

```js
DataValida(data_domingo,.T.) // Retorna data de segunda

DataValida(data_domingo,.F.) // Retorna data de sexta

DataValida(cTod("31/12/2018"),.T.) // Retorna 02/01/2019
```

## Referências

[TDN](http://tdn.totvs.com/pages/releaseview.action?pageId=6815098)
