
# DataValida

Retorna uma data válida para fiscal. Considerando finais de semana e feriados.

    > DataValida(dData,lProxima)

### Parâmetros

| Nome       | Tipo   | Descrição | Padrão | Obrigatório |
| ---------- | ------ | --------- | ------ | ----------- |
| dData      | Data   | Data Avaliada | dDataBase? | Não |
| lProxima   | Lógico | próxima data (.T.) ou anterior (.F.) | .T. | Não |



### Retorno
 * Tipo: Data
 * Descrição: Retorna a primeira data válida imediatamente após (ou antes) a partir da data informada.

### Exemplos

    > DataValida(data_domingo,.T.) // Retorna data de segunda
    > DataValida(data_domingo,.F.) // Retorna data de sexta
