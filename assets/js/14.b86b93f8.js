(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{329:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"arrayutils-conhecendo-javascript-para-melhorar-o-advpl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrayutils-conhecendo-javascript-para-melhorar-o-advpl","aria-hidden":"true"}},[a._v("#")]),a._v(" ArrayUtils - Conhecendo Javascript para melhorar o ADVPL")]),a._v(" "),s("h2",{attrs:{id:"motivacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivacao","aria-hidden":"true"}},[a._v("#")]),a._v(" Motivação")]),a._v(" "),s("p",[a._v("É interessante como estudar uma coisa abre a mente para outras.")]),a._v(" "),s("p",[a._v('Tenho estudado bastante para me atualizar sobre estas "modernidades" do Javascript, pois quando eu usava esse negócio, só servia para validar formulário.')]),a._v(" "),s("p",[a._v("Ao mesmo tempo que estava aprendendo mais sobre os novos métodos da classe Array.prototype (map, filter, reduce), também estava trabalhando bastante com ExecAuto e outras coisas que usam matrizes no Protheus (quem nunca).")]),a._v(" "),s("p",[a._v("Então eu me vi querendo filtrar um array no Protheus, e parei quando comecei a escrever algo assim:")]),a._v(" "),s("div",{staticClass:"language-js ADVPL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("aItens"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetArrayItens")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\naFiltrado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nFor nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" To "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aItens"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    If aItens"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CAMPO"')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aFiltrado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" aItens"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("nX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    EndIf\nNext nX\n")])])]),s("p",[a._v("Aí eu pensei, vou colocar esse filtro numa função. Mas, poxa, um bloco de código com aEval já resolveria:")]),a._v(" "),s("div",{staticClass:"language-js ADVPL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("aFiltrado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aEval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetArrayItens")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("iif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CAMPO"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aFiltrado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" Nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Mas fica uma complicação pra ler um fonte quando tem um bloco de código com "),s("code",[a._v("iif")]),a._v(", "),s("code",[a._v("aAdd")]),a._v(", "),s("code",[a._v("nil")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"criacao-da-afilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#criacao-da-afilter","aria-hidden":"true"}},[a._v("#")]),a._v(" Criação da aFilter")]),a._v(" "),s("p",[a._v("Então criei uma a função chamada aFilter, que resolve o negócio assim:")]),a._v(" "),s("div",{staticClass:"language-js ADVPL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("aFiltrado"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetArrayItens")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CAMPO"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Tem um bloco de código, mas é totalmente sucinto, e ele só precisa da expressão que define se o item entra ou não no novo array, nada de "),s("code",[a._v("iif")]),a._v(", "),s("code",[a._v("aAdd")]),a._v(", "),s("code",[a._v("Nil")]),a._v(".")]),a._v(" "),s("p",[a._v("E não tem nada de Rocket science:")]),a._v(" "),s("div",{staticClass:"language-js ADVPL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Static Function "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" aOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" bCallback "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    Local aDestiny"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aEval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("uValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("If")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" uValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" aOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("aAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aDestiny"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" uValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        Nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" aDestiny "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"testes-e-validacao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testes-e-validacao","aria-hidden":"true"}},[a._v("#")]),a._v(" Testes e validação")]),a._v(" "),s("p",[a._v("Bom, pra ter certeza que não estava fazendo uma caca muito grande, escrevi alguns testes com "),s("a",{attrs:{href:"https://github.com/nginformatica/advpl-testsuite",target:"_blank",rel:"noopener noreferrer"}},[a._v("advpl-testsuite"),s("OutboundLink")],1),a._v(", e botei pra rodar.")]),a._v(" "),s("p",[a._v("Cara, eu abusei do negócio, e funcionou muito bem para o que eu precisava.")]),a._v(" "),s("p",[a._v("Cheguei a fazer algumas comparações de desempenho com o for, e em algumas situações foi bem mais rápido.")]),a._v(" "),s("p",[a._v('Só que como eu tive que pensar de forma funcional pra implementar as validações, mesmo só um for com na avaliação da expressão, já seria mais "performático".')]),a._v(" "),s("h2",{attrs:{id:"conclusao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusao","aria-hidden":"true"}},[a._v("#")]),a._v(" Conclusão")]),a._v(" "),s("p",[a._v("Quando vi que ficou legal, peguei a documentação do Array.prototype na "),s("a",{attrs:{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN"),s("OutboundLink")],1),a._v(" e comecei a explorar se tinha mais alguma que eu poderia implementar.")]),a._v(" "),s("p",[a._v("E foi assim que nasceu a biblioteca "),s("a",{attrs:{href:"https://github.com/tgmti/TGM_Advpl_Tools/tree/master/ArrayUtils",target:"_blank",rel:"noopener noreferrer"}},[a._v("ArrayUtils"),s("OutboundLink")],1),a._v(", que por enquanto conta com aFilter, aFind, aJoin, aMap e aReduce. Está disponível no meu Github, com a explicação de cada uma, além de exemplos e alguns testes.")]),a._v(" "),s("p",[s("strong",[a._v("Críticas e contribuições são bem vindas!")])]),a._v(" "),s("h2",{attrs:{id:"referencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencias","aria-hidden":"true"}},[a._v("#")]),a._v(" Referências")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN: JavaScript Array Prototype"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://tdn.totvs.com/display/tec/AEVal",target:"_blank",rel:"noopener noreferrer"}},[a._v("TDN: aEval"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"http://tdn.totvs.com/pages/viewpage.action?pageId=6063768",target:"_blank",rel:"noopener noreferrer"}},[a._v("TDN: Funções para Manipulação de matriz"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nginformatica/advpl-testsuite",target:"_blank",rel:"noopener noreferrer"}},[a._v("NG: AdvPL TestSuite"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);