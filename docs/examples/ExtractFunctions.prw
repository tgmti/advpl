#INCLUDE 'PROTHEUS.CH'


/*/{Protheus.doc}ExtFuncs
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
User Function ExtFuncs()

  /*
    aHash:= {}
    GetFunctions('*DATAVALI*')[2]:List(@aHash)
    U_StdOutLn(aHash)
    U_StdOutLn( U_ExtractFunctions() )
  */

  Local aPaginas:= ExtractFunctions('A*')
  CONOUT(LEN(aPaginas))
  aEval(aPaginas, {|x| MemoWrite('\_expfunctions\2019-03-10-'+x[1] + '.md', x[2]) })

Return



/*/{Protheus.doc}ExtractFunctions
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static function ExtractFunctions(cMascara)
  Local cModelo:= MemoRead('\_expfunctions\modelo_funcao_var.md')
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
    Local xTemp
    Local aVarList:= { 'nome_funcao', 'nome_funcao', 'data_extract', 'tipo', 'parametros', 'desc_param', 'arquivo', 'data_hora'  }

    For nX:= 1 To Len(aDados)
      aModelo := aMap( aVarList, {|uVal, nInd| aDados[nX]:Get(uVal, @xTemp), xTemp } )
      aDados[nX]:Get('nome_funcao', @xTemp)
      aAdd( aPaginas, { xTemp, i18n(cModelo, aModelo) } )
    Next nX

Return ( aPaginas )



/*/{Protheus.doc}GetFunctions
@description Rotina para Extração das assinaturas das funções do RPO

@author Thiago Mota <tgmspawn@gmail.com>
@url https://github.com/tgmti

@since 09/03/2019
/*/
Static Function GetFunctions(cMascara)

  Local oHash
  Local aTipo:= {}
  Local aArquivo:= {}
  Local aLinha:= {}
  Local aData:= {}
  Local aHora:= {}
  Local aParam
  Local aRet:= {}
  Local nInd

  Local aFunctions := GetFuncArray( cMascara, @aTipo, @aArquivo, @aLinha, @aData, @aHora )

  CONOUT(LEN(aFunctions))

  for nInd:= 1 To Len(aFunctions)
    cNomeFun:= aFunctions[nInd]
    aParam:= DescParam(GetFuncPrm(cNomeFun))
    oHash:= HMNew()
    oHash:Set('nome_funcao' , cNomeFun )
    oHash:Set('parametros'  , aParam[1] )
    oHash:Set('tipo'        , If( Left(aTipo[nInd],1)=='U', 'User Function', 'Function' ) )
    oHash:Set('arquivo'     , aArquivo[nInd] )
    oHash:Set('data_hora'   , DtoC(aData[nInd]) + ' ' + aHora[nInd] )
    oHash:Set('desc_param'  , aParam[2] )
    oHash:Set('data_extract', MsDate() )

    aAdd(aRet, oHash)
  Next nInd

  CONOUT(LEN(ARET))

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

  Static aTipos

  aParam:= aMap(aParam, {|x| Lower(Left(x,1)) + Capital(substr(x,2)) })
  cParams:= aJoin( aParam , ',')


  If aTipos == Nil
    aTipos:= HMNew()
    aTipos:Set('L', 'Lógico')
    aTipos:Set('C', 'Caractere')
    aTipos:Set('D', 'Data')
    aTipos:Set('B', 'Bloco de Código')
    aTipos:Set('A', 'Array')
    aTipos:Set('U', 'Qualquer Tipo')
    aTipos:Set('X', 'Qualquer Tipo')
  EndIf

  For nX:= 1 To Len(aParam)
    If !Empty(aParam[nX])
      aTipos:Get(Upper(Left(aParam[nX],1)), @cTipo)
      cTipo:= iIf(Empty(cTipo), aParam[nX], cTipo)
      cDescParam+= iif(nX > 1, Chr(10), '')
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
