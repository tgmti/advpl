#INCLUDE 'PROTHEUS.CH'

//====================================================================================================================\
/*/{Protheus.doc}ExtFuncs
  ====================================================================================================================
    @description
    Rotina para Extração das assinaturas das funções do RPO

    @author Thiago Mota <tgmspawn@gmail.com>
    @url https://github.com/tgmti
    @version 1.0
    @since 09/03/2019

/*/
//===================================================================================================================\
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
// FIM da Funcao ExtFuncs
//======================================================================================================================



//====================================================================================================================\
/*/{Protheus.doc}ExtractFunctions
  ====================================================================================================================
    @description
    Rotina para Extração das assinaturas das funções do RPO

    @author Thiago Mota <tgmspawn@gmail.com>
    @url https://github.com/tgmti
    @version 1.0
    @since 09/03/2019

/*/
//===================================================================================================================\
Static function ExtractFunctions(cMascara)
  Local cModelo:= MemoRead('\_expfunctions\modelo_funcao_var.md')
  Local aFunctions:= GetFunctions(cMascara)

Return ( MontaPagina( cModelo, aFunctions ) )
// FIM da Funcao ExtractFunctions
//======================================================================================================================



//====================================================================================================================\
/*/{Protheus.doc}MontaPagina
  ====================================================================================================================
    @description
    Montar página a partir de um arquivo de modelo, utizando a função i18n

    @author Thiago Mota <tgmspawn@gmail.com>
    @url https://github.com/tgmti
    @version 1.0
    @since 09/03/2019

/*/
//===================================================================================================================\
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
// FIM da Funcao MontaPagina
//====================================================================================================================\



//====================================================================================================================\
/*/{Protheus.doc}GetFunctions
  ====================================================================================================================
    @description
    Rotina para Extração das assinaturas das funções do RPO

    @author Thiago Mota <tgmspawn@gmail.com>
    @url https://github.com/tgmti
    @version 1.0
    @since 09/03/2019

/*/
//===================================================================================================================\
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
// FIM da Funcao GetFunctions
//====================================================================================================================\



//====================================================================================================================\
/*/{Protheus.doc}DescParam
  ====================================================================================================================
  @description
  Avalia o tipo dos parâmetros e retorna uma descrição válida


  @author Thiago Mota <tgmspawn@gmail.com>
  @url https://github.com/tgmti
  @version 1.0
  @since 09/03/2019

/*/
//===================================================================================================================\
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
// FIM da Funcao DescParam
//======================================================================================================================



//============================================================================\
/*/{Protheus.doc}aMap
  ==============================================================================
    @description
    Implementação da Função Map para ADVPL
    O método map() invoca a função callback passada por argumento para cada
    elemento do Array e devolve um novo Array como resultado.

    Inspirado no ArrayUtils.map do Javascript moderno
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    @author Thiago Mota
    @author tgmspawn@gmail.com
    @author https://github.com/tgmti/
    @url    https://github.com/tgmti/TGM_Advpl_Tools/blob/master/ArrayUtils/aMap/aMap.prw

    @version 1.0
    @since 24/01/2019

    @param aOrigin, Array, Array Original a ser avaliado
    @param bCallback, Bloco de Código, Função que ao ser executada por Eval() produz o elemento do novo Array.

    @return Array, Novo Array com as modificações

    @obs
        O Callback Recebe três argumentos:
        1 - uValue, Qualquer, O elemento que está sendo processado no array.
        2 - nIndex, Número, O índice do elemento atual que está sendo processado no array.
        3 - aOrigin, Array, O array para qual map foi chamada.

/*/
//============================================================================\
Static Function aMap( aOrigin, bCallback )
    Local aDestino:= {}
    aEval(aOrigin, {|uValue,nIndex| aAdd(aDestino, Eval(bCallback, uValue, nIndex, aOrigin)) })
Return ( aDestino )
// FIM da Funcao aMap
//==============================================================================



//============================================================================\
/*/{Protheus.doc}aJoin
  ==============================================================================
    @description
    Implementação da Função Join para array de ADVPL

/*/
//============================================================================\
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
// FIM da Funcao aJoin
//==============================================================================
