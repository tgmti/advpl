(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{337:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"regexp-advpl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regexp-advpl","aria-hidden":"true"}},[a._v("#")]),a._v(" RegExp + ADVPL")]),a._v(" "),s("h2",{attrs:{id:"motivacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivacao","aria-hidden":"true"}},[a._v("#")]),a._v(" Motivação")]),a._v(" "),s("p",[a._v("Precisei consumir uma API rest para integrar dados de rastradores de frota (Autotrac) no Protheus. Até aí tudo normal, a API tinha seus probleminhas em relação à documentação, mas resolvemos isso de boa.")]),a._v(" "),s("p",[a._v('Só que na hora de gravar os dados e relacionar com os veículos do ERP, surgiu um probleminha. O código que vem na API não temos no sistema, no cadastro de veículos temos somente a placa do cavalo. Ah, mas essa estava na API, em um campo "Name". Pô, legal, vou usar o name então.')]),a._v(" "),s("p",[a._v("Só que, ao consultar o cadastro completo dos veículos no API, eis que aparecem coisas assim:")]),a._v(" "),s("div",{staticClass:"language-Json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Vehicles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PLA0001"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Scania PLA0002"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Carreta PLA0003 / PLA0004"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bi-Trem PLA0004 / PLA0005 / PLA0006"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bi-Trem2 PLA0A01 / PLA0A01 / PLA0A01"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Avaliei com os responsáveis pelo cadastro, e a placa que precisamos sempre será a primeira, mas não há um padrão para as descrições antes desta placa.")]),a._v(" "),s("p",[a._v("Na hora comecei a escrever mentalmente um While, que tem todo jeito de gambiarra:")]),a._v(" "),s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    nPos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    While nPos "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        nPos"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),a._v("\n        cChar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("SubsStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nPos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        If "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("AtendeOPadrao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cChar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cPlaca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            cPlaca"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" cChar\n        Else\n            cPlaca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v("\n        EndIf\n        If "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cPlaca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("\n            Exit\n        EndIf\n    Endo\n\n")])])]),s("p",[a._v('Bom, nesse caso, "AtendeOPadrao" iria verificar se o próximo caractere se encaixa no padrão '),s("code",[a._v("(A-Z)[3]+(0-9)[1](0-Z)[1](0-9)[2]")]),a._v(". Mas eita, quando tentei montar esse padrão na cabeça, me toquei que era uma "),s("a",{attrs:{href:"https://pt.wikipedia.org/wiki/Express%C3%A3o_regular",target:"_blank",rel:"noopener noreferrer"}},[a._v("Expressão regular"),s("OutboundLink")],1),a._v(" simples, só que nunca vi nenhuma função padrão pra compilar Regex no ADVPL.")]),a._v(" "),s("h2",{attrs:{id:"pesquisa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pesquisa","aria-hidden":"true"}},[a._v("#")]),a._v(" Pesquisa")]),a._v(" "),s("p",[a._v("Bom, primeiro eu testei o "),s("a",{attrs:{href:"https://regexr.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Regex na Web"),s("OutboundLink")],1),a._v(", pra ajustar o padrão correto:")]),a._v(" "),s("p",[s("code",[a._v("([A-Z]{3})([0-9]{1})([0-Z]{1})([0-9]{2})")])]),a._v(" "),s("p",[a._v("Depois, fui de TDN e nada. No Google encontrei alguns posts do Naldo, demonstrando como utilizar ferramentas externas, "),s("a",{attrs:{href:"http://www.blacktdn.com.br/2012/04/blacktdn-expressoes-regulares-regexp.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("via Ezzy Learning Validation"),s("OutboundLink")],1),a._v(" e via "),s("a",{attrs:{href:"http://www.blacktdn.com.br/2012/04/blacktdn-validando-expressoes-regulares.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("PowerShell"),s("OutboundLink")],1),a._v(". Mas não era bem o que eu queria.")]),a._v(" "),s("p",[a._v("Então apareceu um Repositório arquivado do Google Code: "),s("a",{attrs:{href:"https://code.google.com/archive/p/advpl-regex/",target:"_blank",rel:"noopener noreferrer"}},[a._v("advpl-regex"),s("OutboundLink")],1),a._v(", desenvolvido por um cada com um baita nome: Thiago Santos.")]),a._v(" "),s("p",[a._v("Poxa, é isso mesmo cara. Achei que ia precisar fazer muitos ajustes, pois é de 2013. Mas pra minha surpresa, só precisei ajustar a função usada para montar a tela de testes.")]),a._v(" "),s("h2",{attrs:{id:"solucao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solucao","aria-hidden":"true"}},[a._v("#")]),a._v(" Solução")]),a._v(" "),s("p",[a._v("Então, percorri o array com os objetos, e para cada Obj:Name eu consegui extrair usando esse código:")]),a._v(" "),s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*/{Protheus.doc}GetPlaca\n\n    @description\n    Extrai a placa da String da Autotrac Usando Regex\n    @author Thiago Mota <mota.thiago@totvs.com.br>\n    @version 1.0\n    @since 30/08/2019\n/*/")]),a._v("\n\nStatic cRegExp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'([A-Z]{3})([0-9]{1})([0-Z]{1})([0-9]{2})'")]),a._v("\nStatic oMatcher "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("U_ReComp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("StrTran")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("StrTran")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cRegExp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nStatic Function "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetPlaca")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" cTexto "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    Local cPlaca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v("\n    Local aPlacas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    If oMatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cTexto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        aPlacas "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" oMatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("Result\n        If "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ValType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aPlacas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'A'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("And"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aPlacas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n            cPlaca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" aPlacas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n        EndIf\n    EndIf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" cPlaca "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"agradecendo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agradecendo","aria-hidden":"true"}},[a._v("#")]),a._v(" Agradecendo")]),a._v(" "),s("p",[a._v("Bom, implementar com o While seria quase a mesma coisa para este caso.")]),a._v(" "),s("p",[a._v("Mas, ao menos estou usando com RegEx, espero que seja de bom uso para mais alguém.")]),a._v(" "),s("p",[a._v("Como o Google Code está como arquivado, e não permite mais incluir commits, copiei o código para abrir no meu GitHub, procurei o contato do "),s("a",{attrs:{href:"https://github.com/Farenheith",target:"_blank",rel:"noopener noreferrer"}},[a._v("Thiago Santos"),s("OutboundLink")],1),a._v(", pra avisá-lo que estarei usando e compartilhando.")]),a._v(" "),s("p",[a._v("Então, quem precisar usar e quiser contribuir, fique a vontade: https://github.com/tgmti/advpl-regex")])])},[],!1,null,null,null);t.default=n.exports}}]);