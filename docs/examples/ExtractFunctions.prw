#INCLUDE 'PROTHEUS.CH'


/*/{Protheus.doc}ExtFuncs
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Function U_ExtFuncs()

  Local aPaginas
  Local nX
  Local cModelo:= MemoRead('\_expfunctions\modelo_funcao_var.md')
  Local cExport:= '\_expfunctions\functions\#1-#2.md'
  Local cMascara:= '*'

  Set(_SET_DATEFORMAT, 'dd/mm/yyyy')

  aPaginas:= ExtractFunctions(cMascara, cModelo)
  
  CONOUT(LEN(aPaginas))

  For nX:= 1 To Len(aPaginas)
    Set(_SET_DATEFORMAT, 'yyyy-mm-dd')
    cFileDat:= DToC(aPaginas[nX][3])
    Set(_SET_DATEFORMAT, 'dd/mm/yyyy')
    cFile:= i18n(cExport, { cFileDat , aPaginas[nX][1] })
    MemoWrite( cFile , aPaginas[nX][2] )
  Next nX

Return



/*/{Protheus.doc}ExtractFunctions
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static function ExtractFunctions(cMascara, cModelo)
  Local aFunctions:= GetFunctions(cMascara)

Return ( MontaPagina( cModelo, aFunctions ) )



/*/{Protheus.doc}MontaPagina
@description Montar página a partir de um arquivo de modelo, utizando a função i18n

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static Function MontaPagina( cModelo, aDados )

    Local aPaginas:= {}
    Local aModelo
    Local nX

    // Esse array deve estar na mesma ordem que os parâmetros no modelo para o i18n funcionar
    Local aVarList:= { 'nome_funcao', 'nome_funcao', 'data_extract', ;
      'tipo', 'parametros', 'desc_param', 'arquivo', 'data_hora' }

    For nX:= 1 To Len(aDados)
      aModelo := aMap( aVarList, {|uVal, nInd| aDados[nX][uVal] } )
      
      aAdd( aPaginas, { aDados[nX]['nome_funcao'], i18n(cModelo, aModelo), aDados[nX]['data_extract'] } )
    Next nX

Return ( aPaginas )



/*/{Protheus.doc}GetFunctions
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static Function GetFunctions(cMascara)

  Local oFunction
  Local aTipo:= {}
  Local aArquivo:= {}
  Local aLinha:= {}
  Local aData:= {}
  Local aHora:= {}
  Local aParam
  Local aRet:= {}
  Local nInd
  Local aFunctions := GetFuncArray( cMascara, @aTipo, @aArquivo, @aLinha, @aData, @aHora )
  Local nTotFun:= Len(aFunctions)

  CONOUT('LISTA DAS FUNÇÕES ENCONTRADAS: ')
  aEval(aFunctions, {|x| ConOut( x ) })

  CONOUT('TOTAL DE FUNÇÕES ENCONTRADAS: ')
  CONOUT(nTotFun)

  for nInd:= 1 To nTotFun
    
    cNomeFun:= aFunctions[nInd]

    If Left(cNomeFun,1) == '%' .Or. cNomeFun == 'H_PWSA062'
      Loop
    EndIf

    CONOUT(cValToChar(nInd)+'/'+cValToChar(nTotFun) + ' - Lendo dados da função ' + cNomeFun)
    
    aParam:= DescParam(GetFuncPrm(cNomeFun))

    oFunction:= JsonObject():new()
    oFunction['nome_funcao'] := cNomeFun
    oFunction['parametros']  := aParam[1]
    oFunction['tipo']        := If( Left(aTipo[nInd],1)=='U', 'User Function', 'Function' )
    oFunction['arquivo']     := aArquivo[nInd]
    oFunction['data_hora']   := DtoC(aData[nInd]) + ' ' + aHora[nInd]
    oFunction['desc_param']  := aParam[2]
    oFunction['data_extract']:= MsDate()

    aAdd(aRet, oFunction)
  Next nInd

  CONOUT('')
  CONOUT('TOTAL DE FUNÇÕES AVALIADAS')
  CONOUT(LEN(aRet))
  
Return ( aRet )



/*/{Protheus.doc}DescParam
@description Avalia o tipo dos parâmetros e retorna uma descrição válida

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static Function DescParam( aParam )

  Local cParams
  Local cDescParam:= ''
  Local nX
  Local cTipo

  Static oTipos

  aParam:= aMap(aParam, {|x| Lower(Left(x,1)) + Capital(substr(x,2)) })
  cParams:= aJoin( aParam , ',')


  If oTipos == Nil
    oTipos:= JsonObject():new()
    oTipos['L']:= 'Lógico'
    oTipos['C']:= 'Caractere'
    oTipos['D']:= 'Data'
    oTipos['B']:= 'Bloco de Código'
    oTipos['A']:= 'Array'
    oTipos['U']:= 'Qualquer Tipo'
    oTipos['X']:= 'Qualquer Tipo'
  EndIf

  For nX:= 1 To Len(aParam)
    If !Empty(aParam[nX])
      cTipo:= oTipos[ Upper(Left(aParam[nX],1)) ]
      cTipo:= iIf(Empty(cTipo), aParam[nX], cTipo)
      cDescParam+= iIf(nX > 1, Chr(10), '')
      cDescParam+= '| ' + aParam[nX] + ' | ' + cTipo + ' |   |   |   |   |'
    EndIf
  Next nX

Return ( {cParams, cDescParam} )



/*/{Protheus.doc}aMap
@description Implementação da Função Map para ADVPL
@url https://github.com/tgmti/TGM_Advpl_Tools/blob/master/ArrayUtils/aMap/aMap.prw
/*/
Static Function aMap( aOrigin, bCallback )
    Local aDestino:= {}
    aEval(aOrigin, {|uValue,nIndex| aAdd(aDestino, Eval(bCallback, uValue, nIndex, aOrigin)) })
Return ( aDestino )



/*/{Protheus.doc}aJoin
@description Implementação da Função Join para array de ADVPL
@url https://github.com/tgmti/TGM_Advpl_Tools/blob/master/ArrayUtils/aJoin/aJoin.prw
/*/
Static Function aJoin( aOrigin, cSep, lRecursive )
  Local cRet:= ''
	Local nLenght:= Len(aOrigin)
	Default cSep:= ''
	Default lRecursive:= .T.
    aEval(aOrigin, {|uValue, nIndex| cRet += ;
		If( lRecursive .And. ValType(uValue) == "A", ;
			aJoin(uValue, cSep, lRecursive), ;
			AsString(uValue) ) + ;
		IIf(nIndex >= nLenght, '', cSep) ;
	})
Return ( cRet )
