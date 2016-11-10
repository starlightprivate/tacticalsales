/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,e,d){var c={invalid:[],getCaret:function(){try{var r,b=0,e=a.get(0),d=document.selection,f=e.selectionStart;if(d&&-1===navigator.appVersion.indexOf("MSIE 10"))r=d.createRange(),r.moveStart("character",-c.val().length),b=r.text.length;else if(f||"0"===f)b=f;return b}catch(g){}},setCaret:function(r){try{if(a.is(":focus")){var c,
b=a.get(0);b.setSelectionRange?(b.focus(),b.setSelectionRange(r,r)):(c=b.createTextRange(),c.collapse(!0),c.moveEnd("character",r),c.moveStart("character",r),c.select())}}catch(e){}},events:function(){a.on("keydown.mask",function(c){a.data("mask-keycode",c.keyCode||c.which)}).on(b.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){n===
c.val()||a.data("changed")||a.trigger("change");a.data("changed",!1)}).on("blur.mask",function(){n=c.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!p.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],c,b,d,f,l=0;l<e.length;l++)(c=g.translation[e.charAt(l)])?(b=c.pattern.toString().replace(/.{1}$|^.{1}/g,""),d=c.optional,(c=c.recursive)?(a.push(e.charAt(l)),f={digit:e.charAt(l),pattern:b}):a.push(d||
c?b+"?":b)):a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");f&&(a=a.replace(new RegExp("("+f.digit+"(.*"+f.digit+")?)"),"($1)?").replace(new RegExp(f.digit,"g"),f.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(c){var b=a.is("input")?"val":"text";if(0<arguments.length){if(a[b]()!==c)a[b](c);b=a}else b=a[b]();return b},getMCharsBeforeCount:function(a,c){for(var b=0,d=0,
f=e.length;d<f&&d<a;d++)g.translation[e.charAt(d)]||(a=c?a+1:a,b++);return b},caretPos:function(a,b,d,h){return g.translation[e.charAt(Math.min(a-1,e.length-1))]?Math.min(a+d-b-h,d):c.caretPos(a+1,b,d,h)},behaviour:function(d){d=d||window.event;c.invalid=[];var e=a.data("mask-keycode");if(-1===b.inArray(e,g.byPassKeys)){var m=c.getCaret(),h=c.val().length,f=c.getMasked(),l=f.length,k=c.getMCharsBeforeCount(l-1)-c.getMCharsBeforeCount(h-1),n=m<h;c.val(f);n&&(8!==e&&46!==e&&(m=c.caretPos(m,h,l,k)),
c.setCaret(m));return c.callbacks(d)}},getMasked:function(a,b){var m=[],h=void 0===b?c.val():b+"",f=0,l=e.length,k=0,n=h.length,q=1,p="push",u=-1,t,w;d.reverse?(p="unshift",q=-1,t=0,f=l-1,k=n-1,w=function(){return-1<f&&-1<k}):(t=l-1,w=function(){return f<l&&k<n});for(;w();){var x=e.charAt(f),v=h.charAt(k),s=g.translation[x];if(s)v.match(s.pattern)?(m[p](v),s.recursive&&(-1===u?u=f:f===t&&(f=u-q),t===u&&(f-=q)),f+=q):s.optional?(f+=q,k-=q):s.fallback?(m[p](s.fallback),f+=q,k-=q):c.invalid.push({p:k,
v:v,e:s.pattern}),k+=q;else{if(!a)m[p](x);v===x&&(k+=q);f+=q}}h=e.charAt(t);l!==n+1||g.translation[h]||m.push(h);return m.join("")},callbacks:function(b){var g=c.val(),m=g!==n,h=[g,b,a,d],f=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};f("onChange",!0===m,h);f("onKeyPress",!0===m,h);f("onComplete",g.length===e.length,h);f("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,d])}};a=b(a);var g=this,n=c.val(),p;e="function"===typeof e?e(c.val(),void 0,a,d):e;g.mask=e;g.options=d;g.remove=
function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.getMaskedVal=function(a){return c.getMasked(!1,a)};g.init=function(e){e=e||!1;d=d||{};g.clearIfNotMatch=b.jMaskGlobals.clearIfNotMatch;g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.extend({},b.jMaskGlobals.translation,d.translation);g=b.extend(!0,{},g,d);p=c.getRegexMask();!1===e?(d.placeholder&&a.attr("placeholder",d.placeholder),
a.data("mask")&&a.attr("autocomplete","off"),c.destroyEvents(),c.events(),e=c.getCaret(),c.val(c.getMasked()),c.setCaret(e+c.getMCharsBeforeCount(e,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),e={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(e.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(z(a,d,e))return a.data("mask",new y(this,
d,e))},z=function(a,e,d){d=d||{};var c=b(a).data("mask"),g=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===typeof e&&(e=e(a)),"object"!==typeof c||g(c.options)!==g(d)||c.mask!==e}catch(n){}};b.fn.mask=function(a,e){e=e||{};var d=this.selector,c=b.jMaskGlobals,g=c.watchInterval,c=e.watchInputs||c.watchInputs,n=function(){if(z(this,a,e))return b(this).data("mask",new y(this,a,e))};b(this).each(n);d&&""!==d&&c&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(n)},
g));return this};b.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",
dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,"return;"),d="function"===typeof b[a]);return d}("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);
p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=t.getBoundingClientRect(),o={};for(var n in e)o[n]=e[n];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=i(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,n=[];if("fixed"===o)return[t];for(var i=t;(i=i.parentNode)&&i&&1===i.nodeType;){var r=void 0;try{r=getComputedStyle(i)}catch(s){}if("undefined"==typeof r||null===r)return n.push(i),n;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&n.push(i)}return n.push(t.ownerDocument.body),t.ownerDocument!==document&&n.push(t.ownerDocument.defaultView),n}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,n=i(t),r=P();return n.top-=r.top,n.left-=r.left,"undefined"==typeof n.width&&(n.width=document.body.scrollWidth-n.left-n.right),"undefined"==typeof n.height&&(n.height=document.body.scrollHeight-n.top-n.bottom),n.top=n.top-o.clientTop,n.left=n.left-o.clientLeft,n.right=e.body.clientWidth-n.width-n.left,n.bottom=e.body.clientHeight-n.height-n.top,n}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var n=t.offsetWidth;o===n&&(n=e.clientWidth),document.body.removeChild(e);var i=o-n;return M={width:i,height:i}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),n=c(t).replace(o," ");g(t,n)}}function u(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function p(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){-1===e.indexOf(o)&&p(t,o)&&d(t,o)}),e.forEach(function(e){p(t,e)||u(t,e)})}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),n=0;e>n;n++)o[n]=arguments[n];return o.forEach(function(e){var o=e.top,n=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof n&&(n=parseFloat(n,10)),t.top+=o,t.left+=n}),t}function C(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),n=o,i=getComputedStyle(e);if(e=[n.left,n.top,o.width+n.left,o.height+n.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(i["border"+t+"Width"]):e[o]-=parseFloat(i["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=i(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){n(this,t)}return E(t,[{key:"on",value:function(t,e,o){var n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:n})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,n=Array(o>1?o-1:0),i=1;o>i;i++)n[i-1]=arguments[i];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,n),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:i,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:u,removeClass:d,hasClass:p,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),j=function(t,e,o){for(var n=!0;n;){var i=t,r=e,s=o;n=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(i);if(null===l)return;t=l,e=r,o=s,n=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,u=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var n=e[o];if(void 0!==t.style[n])return n}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,n=function i(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(i,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,n)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,n=t.top;return"auto"===o&&(o=F[e.left]),"auto"===n&&(n=H[e.top]),{left:o,top:n}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),n=o[0],i=o[1];return{top:n,left:i}},q=R,I=function(t){function e(t){var o=this;n(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(n,t);var i=this.options,s=i.element,a=i.target,f=i.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),u(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&u(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var n=getComputedStyle(o),i=o.scrollWidth>o.clientWidth||[n.overflow,n.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;i&&(r=15);var s=t.height-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(n.borderLeftWidth)-15},f=0;408>s&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(n.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.options.addTargetClasses!==!1&&u(this.target,this.getClass("enabled")),u(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var n=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var i=this._addAttachClasses;t.top&&i.push(this.getClass("element-attached")+"-"+t.top),t.left&&i.push(this.getClass("element-attached")+"-"+t.left),e.top&&i.push(this.getClass("target-attached")+"-"+e.top),e.left&&i.push(this.getClass("target-attached")+"-"+e.left);var r=[];n.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var n=this.cache("element-bounds",function(){return a(t.element)}),i=n.width,r=n.height;if(0===i&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;i=s.width,r=s.height}else this.lastSize={width:i,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,u=C(V(this.attachment),{width:i,height:r}),p=C(V(o),d),c=C(this.offset,{width:i,height:r}),g=C(this.targetOffset,d);u=w(u,c),p=w(p,g);for(var m=h.left+p.left-u.left,v=h.top+p.top-u.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:n,offset:u,targetOffset:p,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-i+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),(-1===["","static"].indexOf(A.body.style.position)||-1===["","static"].indexOf(A.body.parentElement.style.position))&&(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-i),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),n=getComputedStyle(e),i=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(n["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-i.width+r.right,o.bottom=A.body.scrollHeight-o.top-i.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var n in t){o[n]={};for(var i in t[n]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[n]&&!y(a[n][i],t[n][i])){r=!0;break}}r||(o[n][i]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var n="undefined"!=typeof e.options.optimizations,i=n?e.options.optimizations.gpu:null;if(i!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var n=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==n&&k(function(){e.element.parentNode.removeChild(e.element),n.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!u){for(var p=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){p=!1;break}c=c.parentNode}p||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var i in l){var v=l[i],b=this.element.style[i];b!==v&&(m=!0,g[i]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=d.height,p=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},i),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);("target"===d||"both"===d)&&(o<b[1]&&"top"===v.top&&(o+=u,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=u,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=u,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-u)>=b[1]&&(o-=s-u,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=u,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-u)<=b[3]&&(o+=s-u,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),("target"===h||"both"===h)&&(n<b[0]&&"left"===v.left&&(n+=p,v.left="right"),n+f>b[2]&&"right"===v.left&&(n-=p,v.left="left")),"together"===h&&(n<b[0]&&"left"===v.left?"right"===y.left?(n+=p,v.left="right",n+=f,y.left="left"):"left"===y.left&&(n+=p,v.left="right",n-=f,y.left="right"):n+f>b[2]&&"right"===v.left?"left"===y.left?(n-=p,v.left="left",n-=f,y.left="right"):"right"===y.left&&(n-=p,v.left="left",n+=f,y.left="left"):"center"===v.left&&(n+f>b[2]&&"left"===y.left?(n-=f,y.left="right"):n<b[0]&&"right"===y.left&&(n+=f,y.left="left"))),("element"===d||"both"===d)&&(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),("element"===h||"both"===h)&&(n<b[0]&&("right"===y.left?(n+=f,y.left="left"):"center"===y.left&&(n+=f/2,y.left="left")),n+f>b[2]&&("left"===y.left?(n-=f,y.left="right"):"center"===y.left&&(n-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),n<b[0]&&(l.indexOf("left")>=0?(n=b[0],w.push("left")):C.push("left")),n+f>b[2]&&(l.indexOf("right")>=0?(n=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),(v.top!==i.top||v.left!==i.left||y.top!==e.attachment.top||y.left!==e.attachment.left)&&(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:n}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,n=t.left,i=this.cache("element-bounds",function(){return a(e.element)}),r=i.height,s=i.width,f=this.getTargetBounds(),l=o+r,h=n+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];(e===n||e===h)&&d.push(t)}),n<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];(e===o||e===l)&&d.push(t)});var u=[],p=[],c=["left","top","right","bottom"];return u.push(this.getClass("abutted")),c.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),d.length&&p.push(this.getClass("abutted")),d.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,p,u),m(e.element,p,u)}),!0}});var z=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(f){i=!0,r=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var n=this.options.shift;"function"==typeof this.options.shift&&(n=this.options.shift.call(this,{top:e,left:o}));var i=void 0,r=void 0;if("string"==typeof n){n=n.split(" "),n[1]=n[1]||n[0];var s=n,a=z(s,2);i=a[0],r=a[1],i=parseFloat(i,10),r=parseFloat(r,10)}else i=n.top,r=n.left;return e+=i,o+=r,{top:e,left:o}}}}),$});
/*! mailcheck v1.1.2 @licence MIT */var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift3Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){var g=f.domain,j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),1==j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift3Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift3Distance:function(a,b){if(null==a||0===a.length)return null==b||0===b.length?0:b.length;if(null==b||0===b.length)return a.length;for(var c=0,d=0,e=0,f=0,g=5;c+d<a.length&&c+e<b.length;){if(a.charAt(c+d)==b.charAt(c+e))f++;else{d=0,e=0;for(var h=0;g>h;h++){if(c+h<a.length&&a.charAt(c+h)==b.charAt(c)){d=h;break}if(c+h<b.length&&a.charAt(c)==b.charAt(c+h)){e=h;break}}}c++}return(a.length+b.length)/2-f},splitEmail:function(a){var b=a.trim().split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0==e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var c=1;c<e.length;c++)g+=e[c]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);

/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];


  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };



  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();



  var classes = [];


  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;


  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';


  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }

  }

  ;

  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);

/*!
 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),+function(a){"use strict";function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(a){return(a[0]||a).nodeType}function d(){return{bindType:h.end,delegateType:h.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}}}function e(){if(window.QUnit)return!1;var a=document.createElement("bootstrap");for(var b in j)if(void 0!==a.style[b])return{end:j[b]};return!1}function f(b){var c=this,d=!1;return a(this).one(k.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||k.triggerTransitionEnd(c)},b),this}function g(){h=e(),a.fn.emulateTransitionEnd=f,k.supportsTransitionEnd()&&(a.event.special[k.TRANSITION_END]=d())}var h=!1,i=1e6,j={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},k={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(Math.random()*i);while(document.getElementById(a));return a},getSelectorFromElement:function(a){var b=a.getAttribute("data-target");return b||(b=a.getAttribute("href")||"",b=/^#[a-z]/i.test(b)?b:null),b},reflow:function(a){new Function("bs","return bs")(a.offsetHeight)},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},typeCheckConfig:function(a,d,e){for(var f in e)if(e.hasOwnProperty(f)){var g=e[f],h=d[f],i=void 0;if(i=h&&c(h)?"element":b(h),!new RegExp(g).test(i))throw new Error(a.toUpperCase()+": "+('Option "'+f+'" provided type "'+i+'" ')+('but expected type "'+g+'".'))}}};return g(),k}(jQuery),g=(function(a){var b="alert",d="4.0.0-alpha.4",g="bs.alert",h="."+g,i=".data-api",j=a.fn[b],k=150,l={DISMISS:'[data-dismiss="alert"]'},m={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+i},n={ALERT:"alert",FADE:"fade",IN:"in"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"close",value:function(a){a=a||this._element;var b=this._getRootElement(a),c=this._triggerCloseEvent(b);c.isDefaultPrevented()||this._removeElement(b)}},{key:"dispose",value:function(){a.removeData(this._element,g),this._element=null}},{key:"_getRootElement",value:function(b){var c=f.getSelectorFromElement(b),d=!1;return c&&(d=a(c)[0]),d||(d=a(b).closest("."+n.ALERT)[0]),d}},{key:"_triggerCloseEvent",value:function(b){var c=a.Event(m.CLOSE);return a(b).trigger(c),c}},{key:"_removeElement",value:function(b){return a(b).removeClass(n.IN),f.supportsTransitionEnd()&&a(b).hasClass(n.FADE)?void a(b).one(f.TRANSITION_END,a.proxy(this._destroyElement,this,b)).emulateTransitionEnd(k):void this._destroyElement(b)}},{key:"_destroyElement",value:function(b){a(b).detach().trigger(m.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);e||(e=new b(this),d.data(g,e)),"close"===c&&e[c](this)})}},{key:"_handleDismiss",value:function(a){return function(b){b&&b.preventDefault(),a.close(this)}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(m.CLICK_DATA_API,l.DISMISS,o._handleDismiss(new o)),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){var b="button",d="4.0.0-alpha.4",f="bs.button",g="."+f,h=".data-api",i=a.fn[b],j={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},k={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},l={CLICK_DATA_API:"click"+g+h,FOCUS_BLUR_DATA_API:"focus"+g+h+" "+("blur"+g+h)},m=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"toggle",value:function(){var b=!0,c=a(this._element).closest(k.DATA_TOGGLE)[0];if(c){var d=a(this._element).find(k.INPUT)[0];if(d){if("radio"===d.type)if(d.checked&&a(this._element).hasClass(j.ACTIVE))b=!1;else{var e=a(c).find(k.ACTIVE)[0];e&&a(e).removeClass(j.ACTIVE)}b&&(d.checked=!a(this._element).hasClass(j.ACTIVE),a(this._element).trigger("change")),d.focus()}}else this._element.setAttribute("aria-pressed",!a(this._element).hasClass(j.ACTIVE));b&&a(this._element).toggleClass(j.ACTIVE)}},{key:"dispose",value:function(){a.removeData(this._element,f),this._element=null}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(f);d||(d=new b(this),a(this).data(f,d)),"toggle"===c&&d[c]()})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,k.DATA_TOGGLE_CARROT,function(b){b.preventDefault();var c=b.target;a(c).hasClass(j.BUTTON)||(c=a(c).closest(k.BUTTON)),m._jQueryInterface.call(a(c),"toggle")}).on(l.FOCUS_BLUR_DATA_API,k.DATA_TOGGLE_CARROT,function(b){var c=a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS,/^focus(in)?$/.test(b.type))}),a.fn[b]=m._jQueryInterface,a.fn[b].Constructor=m,a.fn[b].noConflict=function(){return a.fn[b]=i,m._jQueryInterface},m}(jQuery),function(a){var b="carousel",d="4.0.0-alpha.4",g="bs.carousel",h="."+g,i=".data-api",j=a.fn[b],k=600,l=37,m=39,n={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},o={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},p={NEXT:"next",PREVIOUS:"prev"},q={SLIDE:"slide"+h,SLID:"slid"+h,KEYDOWN:"keydown"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h,LOAD_DATA_API:"load"+h+i,CLICK_DATA_API:"click"+h+i},r={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},s={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},t=function(){function i(b,d){c(this,i),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(d),this._element=a(b)[0],this._indicatorsElement=a(this._element).find(s.INDICATORS)[0],this._addEventListeners()}return e(i,[{key:"next",value:function(){this._isSliding||this._slide(p.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(p.PREVIOUS)}},{key:"pause",value:function(b){b||(this._isPaused=!0),a(this._element).find(s.NEXT_PREV)[0]&&f.supportsTransitionEnd()&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(b){var c=this;this._activeElement=a(this._element).find(s.ACTIVE_ITEM)[0];var d=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding)return void a(this._element).one(q.SLID,function(){return c.to(b)});if(d===b)return this.pause(),void this.cycle();var e=b>d?p.NEXT:p.PREVIOUS;this._slide(e,this._items[b])}}},{key:"dispose",value:function(){a(this._element).off(h),a.removeData(this._element,g),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_addEventListeners",value:function(){this._config.keyboard&&a(this._element).on(q.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(q.MOUSEENTER,a.proxy(this.pause,this)).on(q.MOUSELEAVE,a.proxy(this.cycle,this))}},{key:"_keydown",value:function(a){if(a.preventDefault(),!/input|textarea/i.test(a.target.tagName))switch(a.which){case l:this.prev();break;case m:this.next();break;default:return}}},{key:"_getItemIndex",value:function(b){return this._items=a.makeArray(a(b).parent().find(s.ITEM)),this._items.indexOf(b)}},{key:"_getItemByDirection",value:function(a,b){var c=a===p.NEXT,d=a===p.PREVIOUS,e=this._getItemIndex(b),f=this._items.length-1,g=d&&0===e||c&&e===f;if(g&&!this._config.wrap)return b;var h=a===p.PREVIOUS?-1:1,i=(e+h)%this._items.length;return i===-1?this._items[this._items.length-1]:this._items[i]}},{key:"_triggerSlideEvent",value:function(b,c){var d=a.Event(q.SLIDE,{relatedTarget:b,direction:c});return a(this._element).trigger(d),d}},{key:"_setActiveIndicatorElement",value:function(b){if(this._indicatorsElement){a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);var c=this._indicatorsElement.children[this._getItemIndex(b)];c&&a(c).addClass(r.ACTIVE)}}},{key:"_slide",value:function(b,c){var d=this,e=a(this._element).find(s.ACTIVE_ITEM)[0],g=c||e&&this._getItemByDirection(b,e),h=Boolean(this._interval),i=b===p.NEXT?r.LEFT:r.RIGHT;if(g&&a(g).hasClass(r.ACTIVE))return void(this._isSliding=!1);var j=this._triggerSlideEvent(g,i);if(!j.isDefaultPrevented()&&e&&g){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(g);var l=a.Event(q.SLID,{relatedTarget:g,direction:i});f.supportsTransitionEnd()&&a(this._element).hasClass(r.SLIDE)?(a(g).addClass(b),f.reflow(g),a(e).addClass(i),a(g).addClass(i),a(e).one(f.TRANSITION_END,function(){a(g).removeClass(i).removeClass(b),a(g).addClass(r.ACTIVE),a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i),d._isSliding=!1,setTimeout(function(){return a(d._element).trigger(l)},0)}).emulateTransitionEnd(k)):(a(e).removeClass(r.ACTIVE),a(g).addClass(r.ACTIVE),this._isSliding=!1,a(this._element).trigger(l)),h&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d=a.extend({},n,a(this).data());"object"==typeof b&&a.extend(d,b);var e="string"==typeof b?b:d.slide;if(c||(c=new i(this,d),a(this).data(g,c)),"number"==typeof b)c.to(b);else if("string"==typeof e){if(void 0===c[e])throw new Error('No method named "'+e+'"');c[e]()}else d.interval&&(c.pause(),c.cycle())})}},{key:"_dataApiClickHandler",value:function(b){var c=f.getSelectorFromElement(this);if(c){var d=a(c)[0];if(d&&a(d).hasClass(r.CAROUSEL)){var e=a.extend({},a(d).data(),a(this).data()),h=this.getAttribute("data-slide-to");h&&(e.interval=!1),i._jQueryInterface.call(a(d),e),h&&a(d).data(g).to(h),b.preventDefault()}}}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(q.CLICK_DATA_API,s.DATA_SLIDE,t._dataApiClickHandler),a(window).on(q.LOAD_DATA_API,function(){a(s.DATA_RIDE).each(function(){var b=a(this);t._jQueryInterface.call(b,b.data())})}),a.fn[b]=t._jQueryInterface,a.fn[b].Constructor=t,a.fn[b].noConflict=function(){return a.fn[b]=j,t._jQueryInterface},t}(jQuery),function(a){var b="collapse",d="4.0.0-alpha.4",g="bs.collapse",h="."+g,i=".data-api",j=a.fn[b],k=600,l={toggle:!0,parent:""},m={toggle:"boolean",parent:"string"},n={SHOW:"show"+h,SHOWN:"shown"+h,HIDE:"hide"+h,HIDDEN:"hidden"+h,CLICK_DATA_API:"click"+h+i},o={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},q={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},r=function(){function h(b,d){c(this,h),this._isTransitioning=!1,this._element=b,this._config=this._getConfig(d),this._triggerArray=a.makeArray(a('[data-toggle="collapse"][href="#'+b.id+'"],'+('[data-toggle="collapse"][data-target="#'+b.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return e(h,[{key:"toggle",value:function(){a(this._element).hasClass(o.IN)?this.hide():this.show()}},{key:"show",value:function(){var b=this;if(!this._isTransitioning&&!a(this._element).hasClass(o.IN)){var c=void 0,d=void 0;if(this._parent&&(c=a.makeArray(a(q.ACTIVES)),c.length||(c=null)),!(c&&(d=a(c).data(g),d&&d._isTransitioning))){var e=a.Event(n.SHOW);if(a(this._element).trigger(e),!e.isDefaultPrevented()){c&&(h._jQueryInterface.call(a(c),"hide"),d||a(c).data(g,null));var i=this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),this._element.style[i]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var j=function(){a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),b._element.style[i]="",b.setTransitioning(!1),a(b._element).trigger(n.SHOWN)};if(!f.supportsTransitionEnd())return void j();var l=i[0].toUpperCase()+i.slice(1),m="scroll"+l;a(this._element).one(f.TRANSITION_END,j).emulateTransitionEnd(k),this._element.style[i]=this._element[m]+"px"}}}}},{key:"hide",value:function(){var b=this;if(!this._isTransitioning&&a(this._element).hasClass(o.IN)){var c=a.Event(n.HIDE);if(a(this._element).trigger(c),!c.isDefaultPrevented()){var d=this._getDimension(),e=d===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[d]=this._element[e]+"px",f.reflow(this._element),a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var g=function(){b.setTransitioning(!1),a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)};return this._element.style[d]=0,f.supportsTransitionEnd()?void a(this._element).one(f.TRANSITION_END,g).emulateTransitionEnd(k):void g()}}}},{key:"setTransitioning",value:function(a){this._isTransitioning=a}},{key:"dispose",value:function(){a.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),c.toggle=Boolean(c.toggle),f.typeCheckConfig(b,c,m),c}},{key:"_getDimension",value:function(){var b=a(this._element).hasClass(p.WIDTH);return b?p.WIDTH:p.HEIGHT}},{key:"_getParent",value:function(){var b=this,c=a(this._config.parent)[0],d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return a(c).find(d).each(function(a,c){b._addAriaAndCollapsedClass(h._getTargetFromElement(c),[c])}),c}},{key:"_addAriaAndCollapsedClass",value:function(b,c){if(b){var d=a(b).hasClass(o.IN);b.setAttribute("aria-expanded",d),c.length&&a(c).toggleClass(o.COLLAPSED,!d).attr("aria-expanded",d)}}}],[{key:"_getTargetFromElement",value:function(b){var c=f.getSelectorFromElement(b);return c?a(c)[0]:null}},{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this),d=c.data(g),e=a.extend({},l,c.data(),"object"==typeof b&&b);if(!d&&e.toggle&&/show|hide/.test(b)&&(e.toggle=!1),d||(d=new h(this,e),c.data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),h}();return a(document).on(n.CLICK_DATA_API,q.DATA_TOGGLE,function(b){b.preventDefault();var c=r._getTargetFromElement(this),d=a(c).data(g),e=d?"toggle":a(this).data();r._jQueryInterface.call(a(c),e)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="dropdown",d="4.0.0-alpha.4",g="bs.dropdown",h="."+g,i=".data-api",j=a.fn[b],k=27,l=38,m=40,n=3,o={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+i,KEYDOWN_DATA_API:"keydown"+h+i},p={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},q={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},r=function(){function b(a){c(this,b),this._element=a,this._addEventListeners()}return e(b,[{key:"toggle",value:function(){if(this.disabled||a(this).hasClass(p.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(p.OPEN);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(q.NAVBAR_NAV).length){var e=document.createElement("div");e.className=p.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(o.SHOW,f);return a(c).trigger(g),!g.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),a(c).toggleClass(p.OPEN),a(c).trigger(a.Event(o.SHOWN,f)),!1)}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._element).off(h),this._element=null}},{key:"_addEventListeners",value:function(){a(this._element).on(o.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(g);if(d||a(this).data(g,d=new b(this)),"string"==typeof c){if(void 0===d[c])throw new Error('No method named "'+c+'"');d[c].call(this)}})}},{key:"_clearMenus",value:function(c){if(!c||c.which!==n){var d=a(q.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(q.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(p.OPEN)&&!(c&&"click"===c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(g,c.target))){var i=a.Event(o.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN,h)))}}}}},{key:"_getParentFromElement",value:function(b){var c=void 0,d=f.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode}},{key:"_dataApiKeydownHandler",value:function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(p.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(p.OPEN);if(!e&&c.which!==k||e&&c.which===k){if(c.which===k){var f=a(d).find(q.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a.makeArray(a(q.VISIBLE_ITEMS));if(g=g.filter(function(a){return a.offsetWidth||a.offsetHeight}),g.length){var h=g.indexOf(c.target);c.which===l&&h>0&&h--,c.which===m&&h<g.length-1&&h++,h<0&&(h=0),g[h].focus()}}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(o.KEYDOWN_DATA_API,q.DATA_TOGGLE,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_MENU,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_LISTBOX,r._dataApiKeydownHandler).on(o.CLICK_DATA_API,r._clearMenus).on(o.CLICK_DATA_API,q.DATA_TOGGLE,r.prototype.toggle).on(o.CLICK_DATA_API,q.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="modal",d="4.0.0-alpha.4",g="bs.modal",h="."+g,i=".data-api",j=a.fn[b],k=300,l=150,m=27,n={backdrop:!0,keyboard:!0,focus:!0,show:!0},o={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+i},q={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},r={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},s=function(){function i(b,d){c(this,i),this._config=this._getConfig(d),this._element=b,this._dialog=a(b).find(r.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return e(i,[{key:"toggle",value:function(a){return this._isShown?this.hide():this.show(a)}},{key:"show",value:function(b){var c=this,d=a.Event(p.SHOW,{relatedTarget:b});a(this._element).trigger(d),this._isShown||d.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),a(document.body).addClass(q.OPEN),this._setEscapeEvent(),this._setResizeEvent(),a(this._element).on(p.CLICK_DISMISS,r.DATA_DISMISS,a.proxy(this.hide,this)),a(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){a(c._element).one(p.MOUSEUP_DISMISS,function(b){a(b.target).is(c._element)&&(c._ignoreBackdropClick=!0)})}),this._showBackdrop(a.proxy(this._showElement,this,b)))}},{key:"hide",value:function(b){b&&b.preventDefault();var c=a.Event(p.HIDE);a(this._element).trigger(c),this._isShown&&!c.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),a(document).off(p.FOCUSIN),a(this._element).removeClass(q.IN),a(this._element).off(p.CLICK_DISMISS),a(this._dialog).off(p.MOUSEDOWN_DISMISS),f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._element).one(f.TRANSITION_END,a.proxy(this._hideModal,this)).emulateTransitionEnd(k):this._hideModal())}},{key:"dispose",value:function(){a.removeData(this._element,g),a(window).off(h),a(document).off(h),a(this._element).off(h),a(this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_showElement",value:function(b){var c=this,d=f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,d&&f.reflow(this._element),a(this._element).addClass(q.IN),this._config.focus&&this._enforceFocus();var e=a.Event(p.SHOWN,{relatedTarget:b}),g=function(){c._config.focus&&c._element.focus(),a(c._element).trigger(e)};d?a(this._dialog).one(f.TRANSITION_END,g).emulateTransitionEnd(k):g()}},{key:"_enforceFocus",value:function(){var b=this;a(document).off(p.FOCUSIN).on(p.FOCUSIN,function(c){document===c.target||b._element===c.target||a(b._element).has(c.target).length||b._element.focus()})}},{key:"_setEscapeEvent",value:function(){var b=this;this._isShown&&this._config.keyboard?a(this._element).on(p.KEYDOWN_DISMISS,function(a){a.which===m&&b.hide()}):this._isShown||a(this._element).off(p.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?a(window).on(p.RESIZE,a.proxy(this._handleUpdate,this)):a(window).off(p.RESIZE)}},{key:"_hideModal",value:function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){a(document.body).removeClass(q.OPEN),b._resetAdjustments(),b._resetScrollbar(),a(b._element).trigger(p.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(a(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(b){var c=this,d=a(this._element).hasClass(q.FADE)?q.FADE:"";if(this._isShown&&this._config.backdrop){var e=f.supportsTransitionEnd()&&d;if(this._backdrop=document.createElement("div"),this._backdrop.className=q.BACKDROP,d&&a(this._backdrop).addClass(d),a(this._backdrop).appendTo(document.body),a(this._element).on(p.CLICK_DISMISS,function(a){return c._ignoreBackdropClick?void(c._ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"===c._config.backdrop?c._element.focus():c.hide()))}),e&&f.reflow(this._backdrop),a(this._backdrop).addClass(q.IN),!b)return;if(!e)return void b();a(this._backdrop).one(f.TRANSITION_END,b).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){a(this._backdrop).removeClass(q.IN);var g=function(){c._removeBackdrop(),b&&b()};f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._backdrop).one(f.TRANSITION_END,g).emulateTransitionEnd(l):g()}else b&&b()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var b=parseInt(a(r.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=b+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var a=document.createElement("div");a.className=q.SCROLLBAR_MEASURER,document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),b}}],[{key:"_jQueryInterface",value:function(b,c){return this.each(function(){var d=a(this).data(g),e=a.extend({},i.Default,a(this).data(),"object"==typeof b&&b);if(d||(d=new i(this,e),a(this).data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b](c)}else e.show&&d.show(c)})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(p.CLICK_DATA_API,r.DATA_TOGGLE,function(b){var c=this,d=void 0,e=f.getSelectorFromElement(this);e&&(d=a(e)[0]);var h=a(d).data(g)?"toggle":a.extend({},a(d).data(),a(this).data());"A"===this.tagName&&b.preventDefault();var i=a(d).one(p.SHOW,function(b){b.isDefaultPrevented()||i.one(p.HIDDEN,function(){a(c).is(":visible")&&c.focus()})});s._jQueryInterface.call(a(d),h,this)}),a.fn[b]=s._jQueryInterface,a.fn[b].Constructor=s,a.fn[b].noConflict=function(){return a.fn[b]=j,s._jQueryInterface},s}(jQuery),function(a){var b="scrollspy",d="4.0.0-alpha.4",g="bs.scrollspy",h="."+g,i=".data-api",j=a.fn[b],k={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},m={ACTIVATE:"activate"+h,SCROLL:"scroll"+h,LOAD_DATA_API:"load"+h+i},n={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},o={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},q=function(){function i(b,d){c(this,i),this._element=b,this._scrollElement="BODY"===b.tagName?window:b,this._config=this._getConfig(d),this._selector=this._config.target+" "+o.NAV_LINKS+","+(this._config.target+" "+o.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,a(this._scrollElement).on(m.SCROLL,a.proxy(this._process,this)),this.refresh(),this._process()}return e(i,[{key:"refresh",value:function(){var b=this,c=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,d="auto"===this._config.method?c:this._config.method,e=d===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var g=a.makeArray(a(this._selector));g.map(function(b){var c=void 0,g=f.getSelectorFromElement(b);return g&&(c=a(g)[0]),c&&(c.offsetWidth||c.offsetHeight)?[a(c)[d]().top+e,g]:null}).filter(function(a){return a}).sort(function(a,b){return a[0]-b[0]}).forEach(function(a){b._offsets.push(a[0]),b._targets.push(a[1])})}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._scrollElement).off(h),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}},{key:"_getConfig",value:function(c){if(c=a.extend({},k,c),"string"!=typeof c.target){var d=a(c.target).attr("id");d||(d=f.getUID(b),a(c.target).attr("id",d)),c.target="#"+d}return f.typeCheckConfig(b,c,l),c}},{key:"_getScrollTop",value:function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop}},{key:"_getScrollHeight",value:function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"_process",value:function(){var a=this._getScrollTop()+this._config.offset,b=this._getScrollHeight(),c=this._config.offset+b-this._scrollElement.offsetHeight;if(this._scrollHeight!==b&&this.refresh(),a>=c){var d=this._targets[this._targets.length-1];this._activeTarget!==d&&this._activate(d)}if(this._activeTarget&&a<this._offsets[0])return this._activeTarget=null,void this._clear();for(var e=this._offsets.length;e--;){var f=this._activeTarget!==this._targets[e]&&a>=this._offsets[e]&&(void 0===this._offsets[e+1]||a<this._offsets[e+1]);f&&this._activate(this._targets[e])}}},{key:"_activate",value:function(b){this._activeTarget=b,this._clear();var c=this._selector.split(",");c=c.map(function(a){return a+'[data-target="'+b+'"],'+(a+'[href="'+b+'"]')});var d=a(c.join(","));d.hasClass(n.DROPDOWN_ITEM)?(d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),d.addClass(n.ACTIVE)):d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),a(this._scrollElement).trigger(m.ACTIVATE,{relatedTarget:b})}},{key:"_clear",value:function(){a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b&&b||null;if(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return k}}]),i}();return a(window).on(m.LOAD_DATA_API,function(){for(var b=a.makeArray(a(o.DATA_SPY)),c=b.length;c--;){var d=a(b[c]);q._jQueryInterface.call(d,d.data())}}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=j,q._jQueryInterface},q}(jQuery),function(a){var b="tab",d="4.0.0-alpha.4",g="bs.tab",h="."+g,i=".data-api",j=a.fn[b],k=150,l={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK_DATA_API:"click"+h+i},m={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},n={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",
ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"show",value:function(){var b=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!a(this._element).hasClass(m.ACTIVE)){var c=void 0,d=void 0,e=a(this._element).closest(n.UL)[0],g=f.getSelectorFromElement(this._element);e&&(d=a.makeArray(a(e).find(n.ACTIVE)),d=d[d.length-1]);var h=a.Event(l.HIDE,{relatedTarget:this._element}),i=a.Event(l.SHOW,{relatedTarget:d});if(d&&a(d).trigger(h),a(this._element).trigger(i),!i.isDefaultPrevented()&&!h.isDefaultPrevented()){g&&(c=a(g)[0]),this._activate(this._element,e);var j=function(){var c=a.Event(l.HIDDEN,{relatedTarget:b._element}),e=a.Event(l.SHOWN,{relatedTarget:d});a(d).trigger(c),a(b._element).trigger(e)};c?this._activate(c,c.parentNode,j):j()}}}},{key:"dispose",value:function(){a.removeClass(this._element,g),this._element=null}},{key:"_activate",value:function(b,c,d){var e=a(c).find(n.ACTIVE_CHILD)[0],g=d&&f.supportsTransitionEnd()&&(e&&a(e).hasClass(m.FADE)||Boolean(a(c).find(n.FADE_CHILD)[0])),h=a.proxy(this._transitionComplete,this,b,e,g,d);e&&g?a(e).one(f.TRANSITION_END,h).emulateTransitionEnd(k):h(),e&&a(e).removeClass(m.IN)}},{key:"_transitionComplete",value:function(b,c,d,e){if(c){a(c).removeClass(m.ACTIVE);var g=a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g&&a(g).removeClass(m.ACTIVE),c.setAttribute("aria-expanded",!1)}if(a(b).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0),d?(f.reflow(b),a(b).addClass(m.IN)):a(b).removeClass(m.FADE),b.parentNode&&a(b.parentNode).hasClass(m.DROPDOWN_MENU)){var h=a(b).closest(n.DROPDOWN)[0];h&&a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0)}e&&e()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);if(e||(e=e=new b(this),d.data(g,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c]()}})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,n.DATA_TOGGLE,function(b){b.preventDefault(),o._jQueryInterface.call(a(this),"show")}),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b="tooltip",d="4.0.0-alpha.4",g="bs.tooltip",h="."+g,i=a.fn[b],j=150,k="bs-tether",l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},m={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},n={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},o={IN:"in",OUT:"out"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},q={FADE:"fade",IN:"in"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},s={element:!1,enabled:!1},t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},u=function(){function i(a,b){c(this,i),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}return e(i,[{key:"enable",value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(b){if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.IN))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),this.cleanupTether(),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var b=this,c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),g=f.getUID(this.constructor.NAME);e.setAttribute("id",g),this.element.setAttribute("aria-describedby",g),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,j=this._getAttachment(h);a(e).data(this.constructor.DATA_KEY,this).appendTo(document.body),a(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:j,element:e,target:this.element,classes:s,classPrefix:k,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),f.reflow(e),this._tether.position(),a(e).addClass(q.IN);var l=function(){var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};if(f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END,l).emulateTransitionEnd(i._TRANSITION_DURATION);l()}}},{key:"hide",value:function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),g=function(){c._hoverState!==o.IN&&d.parentNode&&d.parentNode.removeChild(d),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),c.cleanupTether(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.IN),f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(f.TRANSITION_END,g).emulateTransitionEnd(j):g(),this._hoverState="")}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE).removeClass(q.IN),this.cleanupTether()}},{key:"setElementContent",value:function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)}},{key:"getTitle",value:function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a}},{key:"cleanupTether",value:function(){this._tether&&this._tether.destroy()}},{key:"_getAttachment",value:function(a){return n[a.toUpperCase()]}},{key:"_setListeners",value:function(){var b=this,c=this.config.trigger.split(" ");c.forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,a.proxy(b.toggle,b));else if(c!==t.MANUAL){var d=c===t.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===t.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,a.proxy(b._enter,b)).on(e,b.config.selector,a.proxy(b._leave,b))}}),this.config.selector?this.config=a.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?t.FOCUS:t.HOVER]=!0),a(c.getTipElement()).hasClass(q.IN)||c._hoverState===o.IN?void(c._hoverState=o.IN):(clearTimeout(c._timeout),c._hoverState=o.IN,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.IN&&c.show()},c.config.delay.show)):void c.show())}},{key:"_leave",value:function(b,c){var d=this.constructor.DATA_KEY;if(c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?t.FOCUS:t.HOVER]=!1),!c._isWithActiveTrigger())return clearTimeout(c._timeout),c._hoverState=o.OUT,c.config.delay&&c.config.delay.hide?void(c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)):void c.hide()}},{key:"_isWithActiveTrigger",value:function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1}},{key:"_getConfig",value:function(c){return c=a.extend({},this.constructor.Default,a(this.element).data(),c),c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),f.typeCheckConfig(b,c,this.constructor.DefaultType),c}},{key:"_getDelegateConfig",value:function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return g}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return m}}]),i}();return a.fn[b]=u._jQueryInterface,a.fn[b].Constructor=u,a.fn[b].noConflict=function(){return a.fn[b]=i,u._jQueryInterface},u}(jQuery));(function(a){var f="popover",h="4.0.0-alpha.4",i="bs.popover",j="."+i,k=a.fn[f],l=a.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m=a.extend({},g.DefaultType,{content:"(string|element|function)"}),n={FADE:"fade",IN:"in"},o={TITLE:".popover-title",CONTENT:".popover-content",ARROW:".popover-arrow"},p={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},q=function(g){function k(){c(this,k),d(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return b(k,g),e(k,[{key:"isWithContent",value:function(){return this.getTitle()||this._getContent()}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(o.TITLE),this.getTitle()),this.setElementContent(b.find(o.CONTENT),this._getContent()),b.removeClass(n.FADE).removeClass(n.IN),this.cleanupTether()}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(i),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new k(this,d),a(this).data(i,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return h}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return m}}]),k}(g);return a.fn[f]=q._jQueryInterface,a.fn[f].Constructor=q,a.fn[f].noConflict=function(){return a.fn[f]=k,q._jQueryInterface},q})(jQuery)}(jQuery);
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.8.1, built on 2016-07-29 1:10:54 AM
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2016 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
// Register the namespace
window.FormValidation = {
    AddOn:     {},  // Add-ons
    Framework: {},  // Supported frameworks
    I18n:      {},  // i18n
    Validator: {}   // Available validators
};

if (typeof jQuery === 'undefined') {
    throw new Error('FormValidation requires jQuery');
}

(function($) {
    var version = $.fn.jquery.split(' ')[0].split('.');
    if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
        throw new Error('FormValidation requires jQuery version 1.9.1 or higher');
    }
}(jQuery));

(function($) {
    // TODO: Remove backward compatibility
    /**
     * Constructor
     *
     * @param {jQuery|String} form The form element or selector
     * @param {Object} options The options
     * @param {String} [namespace] The optional namespace which is used for data-{namespace}-xxx attributes and internal data.
     * Currently, it's used to support backward version
     * @constructor
     */
    FormValidation.Base = function(form, options, namespace) {
        this.$form      = $(form);
        this.options    = $.extend({}, $.fn.formValidation.DEFAULT_OPTIONS, options);
        this._namespace = namespace || 'fv';

        this.$invalidFields = $([]);    // Array of invalid fields
        this.$submitButton  = null;     // The submit button which is clicked to submit form
        this.$hiddenButton  = null;

        // Validating status
        this.STATUS_NOT_VALIDATED = 'NOT_VALIDATED';
        this.STATUS_VALIDATING    = 'VALIDATING';
        this.STATUS_INVALID       = 'INVALID';
        this.STATUS_VALID         = 'VALID';
        this.STATUS_IGNORED       = 'IGNORED';

        // Default message
        this.DEFAULT_MESSAGE      = $.fn.formValidation.DEFAULT_MESSAGE;

        // Determine the event that is fired when user change the field value
        // Most modern browsers supports input event except IE 7, 8.
        // IE 9 supports input event but the event is still not fired if I press the backspace key.
        // Get IE version
        // https://gist.github.com/padolsey/527683/#comment-7595
        this._ieVersion = (function() {
            var v = 3, div = document.createElement('div'), a = div.all || [];
            while (div.innerHTML = '<!--[if gt IE '+(++v)+']><br><![endif]-->', a[0]) {}
            return v > 4 ? v : document.documentMode;
        }());

        var el = document.createElement('div');
        this._changeEvent = (this._ieVersion === 9 || !('oninput' in el)) ? 'keyup' : 'input';

        // The flag to indicate that the form is ready to submit when a remote/callback validator returns
        this._submitIfValid = null;

        // Field elements
        this._cacheFields = {};

        this._init();
    };

    FormValidation.Base.prototype = {
        constructor: FormValidation.Base,

        /**
         * Check if the number of characters of field value exceed the threshold or not
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _exceedThreshold: function($field) {
            var ns        = this._namespace,
                field     = $field.attr('data-' + ns + '-field'),
                threshold = this.options.fields[field].threshold || this.options.threshold;
            if (!threshold) {
                return true;
            }
            var cannotType = $.inArray($field.attr('type'), ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit']) !== -1;
            return (cannotType || $field.val().length >= threshold);
        },

        /**
         * Init form
         */
        _init: function() {
            var that    = this,
                ns      = this._namespace,
                options = {
                    addOns:         {},
                    autoFocus:      this.$form.attr('data-' + ns + '-autofocus'),
                    button: {
                        selector: this.$form.attr('data-' + ns + '-button-selector') || this.$form.attr('data-' + ns + '-submitbuttons'), // Support backward
                        disabled: this.$form.attr('data-' + ns + '-button-disabled')
                    },
                    control: {
                        valid:   this.$form.attr('data-' + ns + '-control-valid'),
                        invalid: this.$form.attr('data-' + ns + '-control-invalid')
                    },
                    err: {
                        clazz:     this.$form.attr('data-' + ns + '-err-clazz'),
                        container: this.$form.attr('data-' + ns + '-err-container') || this.$form.attr('data-' + ns + '-container'), // Support backward
                        parent:    this.$form.attr('data-' + ns + '-err-parent')
                    },
                    events: {
                        formInit:         this.$form.attr('data-' + ns + '-events-form-init'),
                        formPreValidate:  this.$form.attr('data-' + ns + '-events-form-prevalidate'),
                        formError:        this.$form.attr('data-' + ns + '-events-form-error'),
                        formReset:        this.$form.attr('data-' + ns + '-events-form-reset'),
                        formSuccess:      this.$form.attr('data-' + ns + '-events-form-success'),
                        fieldAdded:       this.$form.attr('data-' + ns + '-events-field-added'),
                        fieldRemoved:     this.$form.attr('data-' + ns + '-events-field-removed'),
                        fieldInit:        this.$form.attr('data-' + ns + '-events-field-init'),
                        fieldError:       this.$form.attr('data-' + ns + '-events-field-error'),
                        fieldReset:       this.$form.attr('data-' + ns + '-events-field-reset'),
                        fieldSuccess:     this.$form.attr('data-' + ns + '-events-field-success'),
                        fieldStatus:      this.$form.attr('data-' + ns + '-events-field-status'),
                        localeChanged:    this.$form.attr('data-' + ns + '-events-locale-changed'),
                        validatorError:   this.$form.attr('data-' + ns + '-events-validator-error'),
                        validatorSuccess: this.$form.attr('data-' + ns + '-events-validator-success'),
                        validatorIgnored: this.$form.attr('data-' + ns + '-events-validator-ignored')
                    },
                    excluded:      this.$form.attr('data-' + ns + '-excluded'),
                    icon: {
                        valid:      this.$form.attr('data-' + ns + '-icon-valid')      || this.$form.attr('data-' + ns + '-feedbackicons-valid'),      // Support backward
                        invalid:    this.$form.attr('data-' + ns + '-icon-invalid')    || this.$form.attr('data-' + ns + '-feedbackicons-invalid'),    // Support backward
                        validating: this.$form.attr('data-' + ns + '-icon-validating') || this.$form.attr('data-' + ns + '-feedbackicons-validating'), // Support backward
                        feedback:   this.$form.attr('data-' + ns + '-icon-feedback')
                    },
                    live:          this.$form.attr('data-' + ns + '-live'),
                    locale:        this.$form.attr('data-' + ns + '-locale'),
                    message:       this.$form.attr('data-' + ns + '-message'),
                    onPreValidate: this.$form.attr('data-' + ns + '-onprevalidate'),
                    onError:       this.$form.attr('data-' + ns + '-onerror'),
                    onReset:       this.$form.attr('data-' + ns + '-onreset'),
                    onSuccess:     this.$form.attr('data-' + ns + '-onsuccess'),
                    row: {
                        selector: this.$form.attr('data-' + ns + '-row-selector') || this.$form.attr('data-' + ns + '-group'), // Support backward
                        valid:    this.$form.attr('data-' + ns + '-row-valid'),
                        invalid:  this.$form.attr('data-' + ns + '-row-invalid'),
                        feedback: this.$form.attr('data-' + ns + '-row-feedback')
                    },
                    threshold:     this.$form.attr('data-' + ns + '-threshold'),
                    trigger:       this.$form.attr('data-' + ns + '-trigger'),
                    verbose:       this.$form.attr('data-' + ns + '-verbose'),
                    fields:        {}
                };

            this.$form
                // Disable client side validation in HTML 5
                .attr('novalidate', 'novalidate')
                .addClass(this.options.elementClass)
                // Disable the default submission first
                .on('submit.' + ns, function(e) {
                    e.preventDefault();
                    that.validate();
                })
                .on('click.' + ns, this.options.button.selector, function() {
                    that.$submitButton  = $(this);
                    // The user just click the submit button
                    that._submitIfValid = true;
                });

            if (this.options.declarative === true || this.options.declarative === 'true') {
                // Find all fields which have either "name" or "data-{namespace}-field" attribute
                this.$form
                    .find('[name], [data-' + ns + '-field]')
                    .each(function() {
                        var $field = $(this),
                            field  = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                            opts   = that._parseOptions($field);
                        if (opts) {
                            $field.attr('data-' + ns + '-field', field);
                            options.fields[field] = $.extend({}, opts, options.fields[field]);
                        }
                    });
            }

            this.options = $.extend(true, this.options, options);

            // Normalize the err.parent option
            if ('string' === typeof this.options.err.parent) {
                this.options.err.parent = new RegExp(this.options.err.parent);
            }

            // Support backward
            if (this.options.container) {
                this.options.err.container = this.options.container;
                delete this.options.container;
            }
            if (this.options.feedbackIcons) {
                this.options.icon = $.extend(true, this.options.icon, this.options.feedbackIcons);
                delete this.options.feedbackIcons;
            }
            if (this.options.group) {
                this.options.row.selector = this.options.group;
                delete this.options.group;
            }
            if (this.options.submitButtons) {
                this.options.button.selector = this.options.submitButtons;
                delete this.options.submitButtons;
            }

            // If the locale is not found, reset it to default one
            if (!FormValidation.I18n[this.options.locale]) {
                this.options.locale = $.fn.formValidation.DEFAULT_OPTIONS.locale;
            }

            // Parse the add-on options from HTML attributes
            if (this.options.declarative === true || this.options.declarative === 'true') {
                this.options = $.extend(true, this.options, { addOns: this._parseAddOnOptions() });
            }

            // When pressing Enter on any field in the form, the first submit button will do its job.
            // The form then will be submitted.
            // I create a first hidden submit button
            this.$hiddenButton = $('<button/>')
                                    .attr('type', 'submit')
                                    .prependTo(this.$form)
                                    .addClass('fv-hidden-submit')
                                    .css({ display: 'none', width: 0, height: 0 });

            this.$form
                .on('click.' +  this._namespace, '[type="submit"]', function(e) {
                    // #746: Check if the button click handler returns false
                    if (!e.isDefaultPrevented()) {
                        var $target = $(e.target),
                            // The button might contain HTML tag
                            $button = $target.is('[type="submit"]') ? $target.eq(0) : $target.parent('[type="submit"]').eq(0);

                        // Don't perform validation when clicking on the submit button/input which
                        // aren't defined by the 'button.selector' option
                        if (that.options.button.selector && !$button.is(that.options.button.selector) && !$button.is(that.$hiddenButton)) {
                            that.$form.off('submit.' + that._namespace).submit();
                            // Fix the issue where 'formnovalidate' causes IE to send two postbacks to server
                            return false;
                        }
                    }
                });

            for (var field in this.options.fields) {
                this._initField(field);
            }

            // Init the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].init) {
                    FormValidation.AddOn[addOn].init(this, this.options.addOns[addOn]);
                }
            }

            this.$form.trigger($.Event(this.options.events.formInit), {
                bv: this,   // Support backward
                fv: this,
                options: this.options
            });

            // Prepare the events
            if (this.options.onPreValidate) {
                this.$form.on(this.options.events.formPreValidate, function(e) {
                    FormValidation.Helper.call(that.options.onPreValidate, [e]);
                });
            }
            if (this.options.onSuccess) {
                this.$form.on(this.options.events.formSuccess, function(e) {
                    FormValidation.Helper.call(that.options.onSuccess, [e]);
                });
            }
            if (this.options.onError) {
                this.$form.on(this.options.events.formError, function(e) {
                    FormValidation.Helper.call(that.options.onError, [e]);
                });
            }
            if (this.options.onReset) {
                this.$form.on(this.options.events.formReset, function(e) {
                    FormValidation.Helper.call(that.options.onReset, [e]);
                });
            }
        },

        /**
         * Init field
         *
         * @param {String|jQuery} field The field name or field element
         */
        _initField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    fields.attr('data-' + ns + '-field', field);
                    break;
                default:
                    break;
            }

            // We don't need to validate non-existing fields
            if (fields.length === 0) {
                return;
            }

            if (this.options.fields[field] === null || this.options.fields[field].validators === null) {
                return;
            }

            var validators = this.options.fields[field].validators,
                validatorName,
                alias;
            for (validatorName in validators) {
                alias = validators[validatorName].alias || validatorName;
                if (!FormValidation.Validator[alias]) {
                    delete this.options.fields[field].validators[validatorName];
                }
            }
            if (this.options.fields[field].enabled === null) {
                this.options.fields[field].enabled = true;
            }

            var that      = this,
                total     = fields.length,
                type      = fields.attr('type'),
                updateAll = (total === 1) || ('radio' === type) || ('checkbox' === type),
                trigger   = this._getFieldTrigger(fields.eq(0)),
                clazz     = this.options.err.clazz.split(' ').join('.'),
                events    = $.map(trigger, function(item) {
                    return item + '.update.' + ns;
                }).join(' ');

            for (var i = 0; i < total; i++) {
                var $field    = fields.eq(i),
                    row       = this.options.fields[field].row || this.options.row.selector,
                    $parent   = $field.closest(row),
                    // Allow user to indicate where the error messages are shown
                    // Support backward
                    container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    $message  = (container && container !== 'tooltip' && container !== 'popover') ? $(container) : this._getMessageContainer($field, row);

                if (container && container !== 'tooltip' && container !== 'popover') {
                    $message.addClass(this.options.err.clazz);
                }

                // Remove all error messages and feedback icons
                $message.find('.' + clazz + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove();
                $parent.find('i[data-' + ns + '-icon-for="' + field + '"]').remove();

                // Whenever the user change the field value, mark it as not validated yet
                $field.off(events).on(events, function() {
                    that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
                });

                // Create help block elements for showing the error messages
                $field.data(ns + '.messages', $message);
                for (validatorName in validators) {
                    $field.data(ns + '.result.' + validatorName, this.STATUS_NOT_VALIDATED);

                    if (!updateAll || i === total - 1) {
                        $('<small/>')
                            .css('display', 'none')
                            .addClass(this.options.err.clazz)
                            .attr('data-' + ns + '-validator', validatorName)
                            .attr('data-' + ns + '-for', field)
                            .attr('data-' + ns + '-result', this.STATUS_NOT_VALIDATED)
                            .html(this._getMessage(field, validatorName))
                            .appendTo($message);
                    }

                    // Init the validator
                    alias = validators[validatorName].alias || validatorName;
                    if ('function' === typeof FormValidation.Validator[alias].init) {
                        FormValidation.Validator[alias].init(this, $field, this.options.fields[field].validators[validatorName], validatorName);
                    }
                }

                // Prepare the feedback icons
                if (this.options.fields[field].icon !== false && this.options.fields[field].icon !== 'false'
                    && this.options.icon
                    && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating
                    && (!updateAll || i === total - 1))
                {
                    // $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid).addClass(this.options.row.feedback);
                    // Keep error messages which are populated from back-end
                    $parent.addClass(this.options.row.feedback);
                    var $icon = $('<i/>')
                                    .css('display', 'none')
                                    .addClass(this.options.icon.feedback)
                                    .attr('data-' + ns + '-icon-for', field)
                                    .insertAfter($field);

                    // Store the icon as a data of field element
                    (!updateAll ? $field : fields).data(ns + '.icon', $icon);

                    if ('tooltip' === container || 'popover' === container) {
                        (!updateAll ? $field : fields)
                            .on(this.options.events.fieldError, function() {
                                $parent.addClass('fv-has-tooltip');
                            })
                            .on(this.options.events.fieldSuccess, function() {
                                $parent.removeClass('fv-has-tooltip');
                            });

                        $field
                            // Show tooltip/popover message when field gets focus
                            .off('focus.container.' + ns)
                            .on('focus.container.' + ns, function() {
                                that._showTooltip($(this), container);
                            })
                            // and hide them when losing focus
                            .off('blur.container.' + ns)
                            .on('blur.container.' + ns, function() {
                                that._hideTooltip($(this), container);
                            });
                    }

                    if ('string' === typeof this.options.fields[field].icon && this.options.fields[field].icon !== 'true') {
                        $icon.appendTo($(this.options.fields[field].icon));
                    } else {
                        this._fixIcon($field, $icon);
                    }
                }
            }

            // Sort the validators by priority
            var sortedByPriority = [];
            for (validatorName in validators) {
                alias = validators[validatorName].alias || validatorName;

                // Determine the priority
                validators[validatorName].priority = parseInt(validators[validatorName].priority
                                                            || FormValidation.Validator[alias].priority
                                                            || 1, 10);
                sortedByPriority.push({
                    validator: validatorName,
                    priority: validators[validatorName].priority
                });
            }
            sortedByPriority = sortedByPriority.sort(function(a, b) {
                return a.priority - b.priority;
            });

            // Prepare the events
            fields
                .data(ns + '.validators', sortedByPriority)
                .on(this.options.events.fieldSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, null, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                })
                .on(this.options.events.fieldError, function(e, data) {
                    var onError = that.getOptions(data.field, null, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.fieldReset, function(e, data) {
                    var onReset = that.getOptions(data.field, null, 'onReset');
                    if (onReset) {
                        FormValidation.Helper.call(onReset, [e, data]);
                    }
                })
                .on(this.options.events.fieldStatus, function(e, data) {
                    var onStatus = that.getOptions(data.field, null, 'onStatus');
                    if (onStatus) {
                        FormValidation.Helper.call(onStatus, [e, data]);
                    }
                })
                .on(this.options.events.validatorError, function(e, data) {
                    var onError = that.getOptions(data.field, data.validator, 'onError');
                    if (onError) {
                        FormValidation.Helper.call(onError, [e, data]);
                    }
                })
                .on(this.options.events.validatorIgnored, function(e, data) {
                    var onIgnored = that.getOptions(data.field, data.validator, 'onIgnored');
                    if (onIgnored) {
                        FormValidation.Helper.call(onIgnored, [e, data]);
                    }
                })
                .on(this.options.events.validatorSuccess, function(e, data) {
                    var onSuccess = that.getOptions(data.field, data.validator, 'onSuccess');
                    if (onSuccess) {
                        FormValidation.Helper.call(onSuccess, [e, data]);
                    }
                });

            // Set live mode
            this.onLiveChange(fields, 'live', function() {
                if (that._exceedThreshold($(this))) {
                    that.validateField($(this));
                }
            });

            fields.trigger($.Event(this.options.events.fieldInit), {
                bv: this,   // Support backward
                fv: this,
                field: field,
                element: fields
            });
        },

        /**
         * Check if the field is excluded.
         * Returning true means that the field will not be validated
         *
         * @param {jQuery} $field The field element
         * @returns {Boolean}
         */
        _isExcluded: function($field) {
            var ns           = this._namespace,
                excludedAttr = $field.attr('data-' + ns + '-excluded'),
                // I still need to check the 'name' attribute while initializing the field
                field        = $field.attr('data-' + ns + '-field') || $field.attr('name');

            switch (true) {
                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'true' || this.options.fields[field].excluded === true)):
                case (excludedAttr === 'true'):
                case (excludedAttr === ''):
                    return true;

                case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'false' || this.options.fields[field].excluded === false)):
                case (excludedAttr === 'false'):
                    return false;

                case (!!field && this.options.fields && this.options.fields[field] && 'function' === typeof this.options.fields[field].excluded):
                    return this.options.fields[field].excluded.call(this, $field, this);

                case (!!field && this.options.fields && this.options.fields[field] && 'string' === typeof this.options.fields[field].excluded):
                case (excludedAttr):
                    return FormValidation.Helper.call(this.options.fields[field].excluded, [$field, this]);

                default:
                    if (this.options.excluded) {
                        // Convert to array first
                        if ('string' === typeof this.options.excluded) {
                            this.options.excluded = $.map(this.options.excluded.split(','), function(item) {
                                // Trim the spaces
                                return $.trim(item);
                            });
                        }

                        var length = this.options.excluded.length;
                        for (var i = 0; i < length; i++) {
                            if (('string' === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]))
                                || ('function' === typeof this.options.excluded[i] && this.options.excluded[i].call(this, $field, this) === true))
                            {
                                return true;
                            }
                        }
                    }
                    return false;
            }
        },

        /**
         * Get a field changed trigger event
         *
         * @param {jQuery} $field The field element
         * @returns {String[]} The event names triggered on field change
         */
        _getFieldTrigger: function($field) {
            var ns      = this._namespace,
                trigger = $field.data(ns + '.trigger');
            if (trigger) {
                return trigger;
            }

            // IE10/11 auto fires input event of elements using the placeholder attribute
            // https://connect.microsoft.com/IE/feedback/details/856700/
            var type  = $field.attr('type'),
                name  = $field.attr('data-' + ns + '-field'),
                event = ('radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === $field.get(0).tagName)
                        ? 'change'
                        : (this._ieVersion >= 10 && $field.attr('placeholder') ? 'keyup' : this._changeEvent);
            trigger   = ((this.options.fields[name] ? this.options.fields[name].trigger : null) || this.options.trigger || event).split(' ');

            // Since the trigger data is used many times, I need to cache it to use later
            $field.data(ns + '.trigger', trigger);

            return trigger;
        },

        /**
         * Get the error message for given field and validator
         *
         * @param {String} field The field name
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        _getMessage: function(field, validatorName) {
            if (!this.options.fields[field] || !this.options.fields[field].validators) {
                return '';
            }
            var validators = this.options.fields[field].validators,
                alias      = (validators[validatorName] && validators[validatorName].alias) ? validators[validatorName].alias : validatorName;
            if (!FormValidation.Validator[alias]) {
                return '';
            }

            switch (true) {
                case !!validators[validatorName].message:
                    return validators[validatorName].message;
                case !!this.options.fields[field].message:
                    return this.options.fields[field].message;
                case !!this.options.message:
                    return this.options.message;
                case (!!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][alias] && !!FormValidation.I18n[this.options.locale][alias]['default']):
                    return FormValidation.I18n[this.options.locale][alias]['default'];
                default:
                    return this.DEFAULT_MESSAGE;
            }
        },

        /**
         * Get the element to place the error messages
         *
         * @param {jQuery} $field The field element
         * @param {String} row
         * @returns {jQuery}
         */
        _getMessageContainer: function($field, row) {
            if (!this.options.err.parent) {
                throw new Error('The err.parent option is not defined');
            }

            var $parent = $field.parent();
            if ($parent.is(row)) {
                return $parent;
            }

            var cssClasses = $parent.attr('class');
            if (!cssClasses) {
                return this._getMessageContainer($parent, row);
            }

            if (this.options.err.parent.test(cssClasses)) {
                return $parent;
            }

            return this._getMessageContainer($parent, row);
        },

        /**
         * Parse the add-on options from HTML attributes
         *
         * @returns {Object}
         */
        _parseAddOnOptions: function() {
            var ns     = this._namespace,
                names  = this.$form.attr('data-' + ns + '-addons'),
                addOns = this.options.addOns || {};

            if (names) {
                names = names.replace(/\s/g, '').split(',');
                for (var i = 0; i < names.length; i++) {
                    if (!addOns[names[i]]) {
                        addOns[names[i]] = {};
                    }
                }
            }

            // Try to parse each add-on options
            var addOn, attrMap, attr, option;
            for (addOn in addOns) {
                if (!FormValidation.AddOn[addOn]) {
                    // Add-on is not found
                    delete addOns[addOn];
                    continue;
                }

                attrMap = FormValidation.AddOn[addOn].html5Attributes;
                if (attrMap) {
                    for (attr in attrMap) {
                        option = this.$form.attr('data-' + ns + '-addons-' + addOn.toLowerCase() + '-' + attr.toLowerCase());
                        if (option) {
                            addOns[addOn][attrMap[attr]] = option;
                        }
                    }
                }
            }

            return addOns;
        },

        /**
         * Parse the validator options from HTML attributes
         *
         * @param {jQuery} $field The field element
         * @returns {Object}
         */
        _parseOptions: function($field) {
            var ns           = this._namespace,
                field        = $field.attr('name') || $field.attr('data-' + ns + '-field'),
                validators   = {},
                aliasAttr    = new RegExp('^data-' + ns + '-([a-z]+)-alias$'),
                validatorSet = $.extend({}, FormValidation.Validator),
                validator,
                v,          // Validator name
                attrName,
                enabled,
                optionName,
                optionAttrName,
                optionValue,
                html5AttrName,
                html5AttrMap;

            // Determine whether the alias validator is used by checking the data-fv-validator-alias attribute
            $.each($field.get(0).attributes, function(i, attribute) {
                if (attribute.value && aliasAttr.test(attribute.name)) {
                    v = attribute.name.split('-')[2];
                    if (validatorSet[attribute.value]) {
                        validatorSet[v]       = validatorSet[attribute.value];
                        validatorSet[v].alias = attribute.value;
                    }
                }
            });

            for (v in validatorSet) {
                validator    = validatorSet[v];
                attrName     = 'data-' + ns + '-' + v.toLowerCase(),
                enabled      = $field.attr(attrName) + '';
                html5AttrMap = ('function' === typeof validator.enableByHtml5) ? validator.enableByHtml5($field) : null;

                if ((html5AttrMap && enabled !== 'false')
                    || (html5AttrMap !== true && ('' === enabled || 'true' === enabled || attrName === enabled.toLowerCase())))
                {
                    // Try to parse the options via attributes
                    validator.html5Attributes = $.extend({}, {
                                                    message: 'message',
                                                    onerror: 'onError',
                                                    onreset: 'onReset',
                                                    onsuccess: 'onSuccess',
                                                    priority: 'priority',
                                                    transformer: 'transformer'
                                                }, validator.html5Attributes);
                    validators[v] = $.extend({}, html5AttrMap === true ? {} : html5AttrMap, validators[v]);
                    if (validator.alias) {
                        validators[v].alias = validator.alias;
                    }

                    for (html5AttrName in validator.html5Attributes) {
                        optionName     = validator.html5Attributes[html5AttrName];
                        optionAttrName = 'data-' + ns + '-' + v.toLowerCase() + '-' + html5AttrName;
                        optionValue    = $field.attr(optionAttrName);
                        if (optionValue) {
                            if ('true' === optionValue || optionAttrName === optionValue.toLowerCase()) {
                                optionValue = true;
                            } else if ('false' === optionValue) {
                                optionValue = false;
                            }
                            validators[v][optionName] = optionValue;
                        }
                    }
                }
            }

            var opts = {
                    autoFocus:   $field.attr('data-' + ns + '-autofocus'),
                    err:         $field.attr('data-' + ns + '-err-container') || $field.attr('data-' + ns + '-container'), // Support backward
                    enabled:     $field.attr('data-' + ns + '-enabled'),
                    excluded:    $field.attr('data-' + ns + '-excluded'),
                    icon:        $field.attr('data-' + ns + '-icon') || $field.attr('data-' + ns + '-feedbackicons') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].feedbackIcons : null), // Support backward
                    message:     $field.attr('data-' + ns + '-message'),
                    onError:     $field.attr('data-' + ns + '-onerror'),
                    onReset:     $field.attr('data-' + ns + '-onreset'),
                    onStatus:    $field.attr('data-' + ns + '-onstatus'),
                    onSuccess:   $field.attr('data-' + ns + '-onsuccess'),
                    row:         $field.attr('data-' + ns + '-row') || $field.attr('data-' + ns + '-group') || (this.options.fields && this.options.fields[field] ? this.options.fields[field].group : null), // Support backward
                    selector:    $field.attr('data-' + ns + '-selector'),
                    threshold:   $field.attr('data-' + ns + '-threshold'),
                    transformer: $field.attr('data-' + ns + '-transformer'),
                    trigger:     $field.attr('data-' + ns + '-trigger'),
                    verbose:     $field.attr('data-' + ns + '-verbose'),
                    validators:  validators
                },
                emptyOptions    = $.isEmptyObject(opts),        // Check if the field options are set using HTML attributes
                emptyValidators = $.isEmptyObject(validators);  // Check if the field validators are set using HTML attributes

            if (!emptyValidators || (!emptyOptions && this.options.fields && this.options.fields[field])) {
                //opts.validators = validators;
                return opts;
            } else {
                return null;
            }
        },

        /**
         * Called when all validations are completed
         */
        _submit: function() {
            var isValid = this.isValid();
            if (isValid === null) {
                return;
            }

            var eventType = isValid ? this.options.events.formSuccess : this.options.events.formError,
                e         = $.Event(eventType);

            this.$form.trigger(e);

            // Call default handler
            // Check if whether the submit button is clicked
            if (this.$submitButton) {
                isValid ? this._onSuccess(e) : this._onError(e);
            }
        },

        // ~~~~~~
        // Events
        // ~~~~~~

        /**
         * The default handler of error.form.fv event.
         * It will be called when there is a invalid field
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onError: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            if ('submitted' === this.options.live) {
                // Enable live mode
                this.options.live = 'enabled';

                var that = this;
                for (var field in this.options.fields) {
                    (function(f) {
                        var fields  = that.getFieldElements(f);
                        if (fields.length) {
                            that.onLiveChange(fields, 'live', function() {
                                if (that._exceedThreshold($(this))) {
                                    that.validateField($(this));
                                }
                            });
                        }
                    })(field);
                }
            }

            // Determined the first invalid field which will be focused on automatically
            var ns = this._namespace;
            for (var i = 0; i < this.$invalidFields.length; i++) {
                var $field    = this.$invalidFields.eq(i),
                    autoFocus = this.isOptionEnabled($field.attr('data-' + ns + '-field'), 'autoFocus');
                if (autoFocus) {
                    // Focus the field
                    $field.focus();
                    break;
                }
            }
        },

        /**
         * Called after validating a field element
         *
         * @param {jQuery} $field The field element
         * @param {String} [validatorName] The validator name
         */
        _onFieldValidated: function($field, validatorName) {
            var ns            = this._namespace,
                field         = $field.attr('data-' + ns + '-field'),
                validators    = this.options.fields[field].validators,
                counter       = {},
                numValidators = 0,
                data          = {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    validator: validatorName,
                    result: $field.data(ns + '.response.' + validatorName)
                };

            // Trigger an event after given validator completes
            if (validatorName) {
                switch ($field.data(ns + '.result.' + validatorName)) {
                    case this.STATUS_INVALID:
                        $field.trigger($.Event(this.options.events.validatorError), data);
                        break;
                    case this.STATUS_VALID:
                        $field.trigger($.Event(this.options.events.validatorSuccess), data);
                        break;
                    case this.STATUS_IGNORED:
                        $field.trigger($.Event(this.options.events.validatorIgnored), data);
                        break;
                    default:
                        break;
                }
            }

            counter[this.STATUS_NOT_VALIDATED] = 0;
            counter[this.STATUS_VALIDATING]    = 0;
            counter[this.STATUS_INVALID]       = 0;
            counter[this.STATUS_VALID]         = 0;
            counter[this.STATUS_IGNORED]       = 0;

            for (var v in validators) {
                if (validators[v].enabled === false) {
                    continue;
                }

                numValidators++;
                var result = $field.data(ns + '.result.' + v);
                if (result) {
                    counter[result]++;
                }
            }

            // The sum of valid fields now also include ignored fields
            if (counter[this.STATUS_VALID] + counter[this.STATUS_IGNORED] === numValidators) {
                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                $field.trigger($.Event(this.options.events.fieldSuccess), data);
            }
            // If all validators are completed and there is at least one validator which doesn't pass
            else if ((counter[this.STATUS_NOT_VALIDATED] === 0 || !this.isOptionEnabled(field, 'verbose')) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
                // Add to the list of invalid fields
                this.$invalidFields = this.$invalidFields.add($field);

                $field.trigger($.Event(this.options.events.fieldError), data);
            }
        },

        /**
         * The default handler of success.form.fv event.
         * It will be called when all the fields are valid
         *
         * @param {jQuery.Event} e The jQuery event object
         */
        _onSuccess: function(e) {
            if (e.isDefaultPrevented()) {
                return;
            }

            // Submit the form
            this.disableSubmitButtons(true).defaultSubmit();
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Abstract methods
        // Need to be implemented by sub-class that supports specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
        },

        // ~~~~~~~~~~~~~~
        // Public methods
        // ~~~~~~~~~~~~~~

        /**
         * Submit the form using default submission.
         * It also does not perform any validations when submitting the form
         */
        defaultSubmit: function() {
            var ns = this._namespace;
            if (this.$submitButton) {
                // Create hidden input to send the submit buttons
                $('<input/>')
                    .attr({
                        'type': 'hidden',
                        name: this.$submitButton.attr('name')
                    })
                    .attr('data-' + ns + '-submit-hidden', '')
                    .val(this.$submitButton.val())
                    .appendTo(this.$form);
            }

            // Submit form
            this.$form.off('submit.' + ns).submit();
        },

        /**
         * Disable/enable submit buttons
         *
         * @param {Boolean} disabled Can be true or false
         * @returns {FormValidation.Base}
         */
        disableSubmitButtons: function(disabled) {
            if (!disabled) {
                this.$form
                    .find(this.options.button.selector)
                        .removeAttr('disabled')
                        .removeClass(this.options.button.disabled);
            } else if (this.options.live !== 'disabled') {
                // Don't disable if the live validating mode is disabled
                this.$form
                    .find(this.options.button.selector)
                        .attr('disabled', 'disabled')
                        .addClass(this.options.button.disabled);
            }

            return this;
        },

        /**
         * Retrieve the field elements by given name
         *
         * @param {String} field The field name
         * @returns {null|jQuery[]}
         */
        getFieldElements: function(field) {
            if (!this._cacheFields[field]) {
                if (this.options.fields[field] && this.options.fields[field].selector) {
                    // Look for the field inside the form first
                    var f = this.$form.find(this.options.fields[field].selector);
                    // If not found, search in entire document
                    this._cacheFields[field] = f.length ? f : $(this.options.fields[field].selector);
                } else {
                    this._cacheFields[field] = this.$form.find('[name="' + field + '"]');
                }
            }

            return this._cacheFields[field];
        },

        /**
         * Get the field value after applying transformer
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String}
         */
        getFieldValue: function(field, validatorName) {
            var $field, ns = this._namespace;
            if ('string' === typeof field) {
                $field = this.getFieldElements(field);
                if ($field.length === 0) {
                    return null;
                }
            } else {
                $field = field;
                field  = $field.attr('data-' + ns + '-field');
            }

            if (!field || !this.options.fields[field]) {
                return $field.val();
            }

            var transformer = (this.options.fields[field].validators && this.options.fields[field].validators[validatorName]
                                ? this.options.fields[field].validators[validatorName].transformer : null)
                                || this.options.fields[field].transformer;
            return transformer ? FormValidation.Helper.call(transformer, [$field, validatorName, this]) : $field.val();
        },

        /**
         * Get the namespace
         *
         * @returns {String}
         */
        getNamespace: function() {
            return this._namespace;
        },

        /**
         * Get the field options
         *
         * @param {String|jQuery} [field] The field name or field element. If it is not set, the method returns the form options
         * @param {String} [validator] The name of validator. It null, the method returns form options
         * @param {String} [option] The option name
         * @return {String|Object}
         */
        getOptions: function(field, validator, option) {
            var ns = this._namespace;
            if (!field) {
                return option ? this.options[option] : this.options;
            }
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (!this.options.fields[field]) {
                return null;
            }

            var options = this.options.fields[field];
            if (!validator) {
                return option ? options[option] : options;
            }
            if (!options.validators || !options.validators[validator]) {
                return null;
            }

            return option ? options.validators[validator][option] : options.validators[validator];
        },

        /**
         * Get the validating result of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validatorName The validator name
         * @returns {String} The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         */
        getStatus: function(field, validatorName) {
            var ns = this._namespace;
            switch (typeof field) {
                case 'object':
                    return field.data(ns + '.result.' + validatorName);
                case 'string':
                /* falls through */
                default:
                    return this.getFieldElements(field).eq(0).data(ns + '.result.' + validatorName);
            }
        },

        /**
         * Check whether or not a field option is enabled
         *
         * @param {String} field The field name
         * @param {String} option The option name, "verbose", "autoFocus", for example
         * @returns {Boolean}
         */
        isOptionEnabled: function(field, option) {
            if (this.options.fields[field] && (this.options.fields[field][option] === 'true' || this.options.fields[field][option] === true)) {
                return true;
            }
            if (this.options.fields[field] && (this.options.fields[field][option] === 'false' || this.options.fields[field][option] === false)) {
                return false;
            }
            return this.options[option] === 'true' || this.options[option] === true;
        },

        /**
         * Check the form validity
         *
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields are valid
         * - false, if there is one invalid field
         * - null, if there is at least one field which is not validated yet or being validated
         */
        isValid: function() {
            for (var field in this.options.fields) {
                var isValidField = this.isValidField(field);
                if (isValidField === null) {
                    return null;
                }
                if (isValidField === false) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Check if all fields inside a given container are valid.
         * It's useful when working with a wizard-like such as tab, collapse
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {Boolean|null} Returns one of three values
         * - true, if all fields inside the container are valid
         * - false, if there is one invalid field inside the container
         * - null, if the container consists of at least one field which is not validated yet or being validated
         */
        isValidContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return true;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length,
                clazz = this.options.err.clazz.split(' ').join('.');
            for (var i = 0; i < total; i++) {
                var $f      = fields[i],
                    field   = $f.attr('data-' + ns + '-field'),
                    $errors = $f.data(ns + '.messages')
                                .find('.' + clazz + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]');

                if (this.options.fields && this.options.fields[field]
                    && (this.options.fields[field].enabled === 'false' || this.options.fields[field].enabled === false))
                {
                    continue;
                }

                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_INVALID + '"]').length > 0) {
                    return false;
                }

                // If the field is not validated
                if ($errors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0
                    || $errors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING + '"]').length > 0)
                {
                    return null;
                }
            }

            return true;
        },

        /**
         * Check if the field is valid or not
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {Boolean|null} Returns one of three values
         * - true, if the field passes all validators
         * - false, if the field doesn't pass any validator
         * - null, if there is at least one validator which isn't validated yet or being validated
         */
        isValidField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }
            if (fields.length === 0 || !this.options.fields[field]
                || this.options.fields[field].enabled === 'false' || this.options.fields[field].enabled === false)
            {
                return true;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                $field, validatorName, status;
            for (var i = 0; i < total; i++) {
                $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                for (validatorName in this.options.fields[field].validators) {
                    if (this.options.fields[field].validators[validatorName].enabled === false) {
                        continue;
                    }

                    status = $field.data(ns + '.result.' + validatorName);
                    if (status === this.STATUS_VALIDATING || status === this.STATUS_NOT_VALIDATED) {
                        return null;
                    } else if (status === this.STATUS_INVALID) {
                        return false;
                    }
                }
            }

            return true;
        },

        /**
         * Detach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @returns {FormValidation.Base}
         */
        offLiveChange: function($fields, namespace) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            $fields.off(events);
            return this;
        },

        /**
         * Attach a handler function for a field live change event
         *
         * @param {jQuery[]} $fields The field elements
         * @param {String} namespace The event namespace
         * @param {Function} handler The handler function
         * @returns {FormValidation.Base}
         */
        onLiveChange: function($fields, namespace, handler) {
            if ($fields === null || $fields.length === 0) {
                return this;
            }

            var ns      = this._namespace,
                trigger = this._getFieldTrigger($fields.eq(0)),
                events  = $.map(trigger, function(item) {
                    return item + '.' + namespace + '.' + ns;
                }).join(' ');

            switch (this.options.live) {
                case 'submitted':
                    break;
                case 'disabled':
                    $fields.off(events);
                    break;
                case 'enabled':
                /* falls through */
                default:
                    $fields.off(events).on(events, function(e) {
                        handler.apply(this, arguments);
                    });
                    break;
            }

            return this;
        },

        /**
         * Update the error message
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} message The message
         * @returns {FormValidation.Base}
         */
        updateMessage: function(field, validator, message) {
            var ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            var clazz = this.options.err.clazz.split(' ').join('.');
            $fields.each(function() {
                $(this)
                    .data(ns + '.messages')
                    .find('.' + clazz + '[data-' + ns + '-validator="' + validator + '"][data-' + ns + '-for="' + field + '"]').html(message);
            });

            return this;
        },

        /**
         * Update all validating results of field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} status The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID', 'VALID' or 'IGNORED'
         * @param {String} [validatorName] The validator name. If null, the method updates validity result for all validators
         * @returns {FormValidation.Base}
         */
        updateStatus: function(field, status, validatorName) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (!field || !this.options.fields[field]) {
                return this;
            }

            if (status === this.STATUS_NOT_VALIDATED) {
                // Reset the flag
                // To prevent the form from doing submit when a deferred validator returns true while typing
                this._submitIfValid = false;
            }

            var that  = this,
                type  = fields.attr('type'),
                row   = this.options.fields[field].row || this.options.row.selector,
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
                clazz = this.options.err.clazz.split(' ').join('.');

            for (var i = 0; i < total; i++) {
                var $field       = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var $parent      = $field.closest(row),
                    $message     = $field.data(ns + '.messages'),
                    $allErrors   = $message.find('.' + clazz + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]'),
                    $errors      = validatorName ? $allErrors.filter('[data-' + ns + '-validator="' + validatorName + '"]') : $allErrors,
                    $icon        = $field.data(ns + '.icon'),
                    // Support backward
                    container    = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container),
                    isValidField = null,
                    isValidating,
                    isNotValidated;

                // Update status
                if (validatorName) {
                    $field.data(ns + '.result.' + validatorName, status);
                } else {
                    for (var v in this.options.fields[field].validators) {
                        $field.data(ns + '.result.' + v, status);
                    }
                }

                // Show/hide error elements and feedback icons
                $errors.attr('data-' + ns + '-result', status);

                switch (status) {
                    case this.STATUS_VALIDATING:
                        isValidField = null;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();
                        }
                        break;

                    case this.STATUS_INVALID:
                        isValidField = false;
                        this.disableSubmitButtons(true);
                        $field.removeClass(this.options.control.valid).addClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).addClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();
                        }
                        break;

                    case this.STATUS_IGNORED:       // Treat ignored fields like they are valid with some specialties
                    case this.STATUS_VALID:
                        isValidating   = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALIDATING +'"]').length > 0);
                        isNotValidated = ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_NOT_VALIDATED +'"]').length > 0);

                        var numIgnored = $allErrors.filter('[data-' + ns + '-result="' + this.STATUS_IGNORED +'"]').length;

                        // If the field is valid (passes all validators)
                        isValidField   = (isValidating || isNotValidated)     // There are some validators that have not done
                                        ? null
                                        // All validators are completed
                                        : ($allErrors.filter('[data-' + ns + '-result="' + this.STATUS_VALID +'"]').length + numIgnored === $allErrors.length);

                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);

                        if (isValidField === true) {
                            this.disableSubmitButtons(this.isValid() === false);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.valid);
                            }
                        } else if (isValidField === false) {
                            this.disableSubmitButtons(true);
                            if (status === this.STATUS_VALID) {
                                $field.addClass(this.options.control.invalid);
                            }
                        }

                        if ($icon) {
                            $icon.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid);
                            if (status === this.STATUS_VALID || numIgnored !== $allErrors.length) {
                                $icon.addClass(isValidating
                                                ? this.options.icon.validating
                                                : (isValidField === null ? '' : (isValidField ? this.options.icon.valid : this.options.icon.invalid)))
                                     .show();
                            }
                        }

                        var isValidContainer = this.isValidContainer($parent);
                        if (isValidContainer !== null) {
                            $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                            if (status === this.STATUS_VALID || numIgnored !== $allErrors.length) {
                                $parent.addClass(isValidContainer ? this.options.row.valid : this.options.row.invalid);
                            }
                        }
                        break;

                    case this.STATUS_NOT_VALIDATED:
                    /* falls through */
                    default:
                        isValidField = null;
                        this.disableSubmitButtons(false);
                        $field.removeClass(this.options.control.valid).removeClass(this.options.control.invalid);
                        $parent.removeClass(this.options.row.valid).removeClass(this.options.row.invalid);
                        if ($icon) {
                            $icon.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide();
                        }
                        break;
                }

                if ($icon && ('tooltip' === container || 'popover' === container)) {
                    (isValidField === false)
                        // Only show the first error message
                        ? this._createTooltip($field, $allErrors.filter('[data-' + ns + '-result="' + that.STATUS_INVALID + '"]').eq(0).html(), container)
                        : this._destroyTooltip($field, container);
                } else {
                    (status === this.STATUS_INVALID) ? $errors.show() : $errors.hide();
                }

                // Trigger an event
                $field.trigger($.Event(this.options.events.fieldStatus), {
                    bv: this,   // Support backward
                    fv: this,
                    field: field,
                    element: $field,
                    status: status,
                    validator: validatorName
                });
                this._onFieldValidated($field, validatorName);
            }

            return this;
        },

        /**
         * Validate the form
         *
         * @returns {FormValidation.Base}
         */
        validate: function() {
            if ($.isEmptyObject(this.options.fields)) {
                this._submit();
                return this;
            }
            this.$form.trigger($.Event(this.options.events.formPreValidate));

            this.disableSubmitButtons(true);
            this._submitIfValid = false;
            for (var field in this.options.fields) {
                this.validateField(field);
            }

            this._submit();
            this._submitIfValid = true;

            return this;
        },

        /**
         * Validate given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        validateField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0 || !this.options.fields[field]
                || this.options.fields[field].enabled === 'false' || this.options.fields[field].enabled === false)
            {
                return this;
            }

            var that       = this,
                type       = fields.attr('type'),
                total      = (('radio' === type || 'checkbox' === type) && this.options.live !== 'disabled') ? 1 : fields.length,
                updateAll  = ('radio' === type || 'checkbox' === type),
                validators = this.options.fields[field].validators,
                verbose    = this.isOptionEnabled(field, 'verbose'),
                validatorName,
                alias,
                validateResult;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);
                if (this._isExcluded($field)) {
                    continue;
                }

                var stop             = false,
                    sortedByPriority = $field.data(ns + '.validators'),
                    numValidators    = sortedByPriority.length;

                for (var j = 0; j < numValidators; j++) {
                    validatorName = sortedByPriority[j].validator;
                    if ($field.data(ns + '.dfs.' + validatorName)) {
                        $field.data(ns + '.dfs.' + validatorName).reject();
                    }
                    if (stop) {
                        break;
                    }

                    // Don't validate field if it is already done
                    var result = $field.data(ns + '.result.' + validatorName);
                    if (result === this.STATUS_VALID || result === this.STATUS_INVALID) {
                        this._onFieldValidated($field, validatorName);
                        continue;
                    } else if (validators[validatorName].enabled === false) {
                        // Changed in v0.6.2:
                        // When the field validator is disabled, it should be treated as STATUS_IGNORED instead of STATUS_VALID
                        // By doing that, the field with only disabled and ignored validators will not have success/error class
                        this.updateStatus(updateAll ? field : $field, this.STATUS_IGNORED, validatorName);
                        continue;
                    }

                    $field.data(ns + '.result.' + validatorName, this.STATUS_VALIDATING);

                    // Check whether or not the validator is just an alias of another
                    alias          = validators[validatorName].alias || validatorName;
                    validateResult = FormValidation.Validator[alias].validate(this, $field, validators[validatorName], validatorName);

                    // validateResult can be a $.Deferred object ...
                    if ('object' === typeof validateResult && validateResult.resolve) {
                        this.updateStatus(updateAll ? field : $field, this.STATUS_VALIDATING, validatorName);
                        $field.data(ns + '.dfs.' + validatorName, validateResult);

                        validateResult.done(function($f, v, response) {
                            // v is validator name
                            $f.removeData(ns + '.dfs.' + v).data(ns + '.response.' + v, response);
                            if (response.message) {
                                that.updateMessage($f, v, response.message);
                            }

                            that.updateStatus(updateAll ? $f.attr('data-' + ns + '-field') : $f,
                                              response.valid === true ? that.STATUS_VALID : (response.valid === false ? that.STATUS_INVALID : that.STATUS_IGNORED),
                                              v);

                            if (response.valid && that._submitIfValid === true) {
                                // If a remote validator returns true and the form is ready to submit, then do it
                                that._submit();
                            } else if (response.valid === false && !verbose) {
                                stop = true;
                            }
                        });
                    }
                    // ... or object { valid: true/false/null, message: 'dynamic message', otherKey: value, ... }
                    else if ('object' === typeof validateResult && validateResult.valid !== undefined) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        if (validateResult.message) {
                            this.updateMessage(updateAll ? field : $field, validatorName, validateResult.message);
                        }
                        this.updateStatus(updateAll ? field : $field,
                                          validateResult.valid === true ? this.STATUS_VALID : (validateResult.valid === false ? this.STATUS_INVALID : this.STATUS_IGNORED),
                                          validatorName);
                        if (validateResult.valid === false && !verbose) {
                            break;
                        }
                    }
                    // ... or a boolean value
                    else if ('boolean' === typeof validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, validateResult ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
                        if (!validateResult && !verbose) {
                            break;
                        }
                    }
                    // ... or null
                    // to indicate that the field should be ignored for current validator
                    else if (null === validateResult) {
                        $field.data(ns + '.response.' + validatorName, validateResult);
                        this.updateStatus(updateAll ? field : $field, this.STATUS_IGNORED, validatorName);
                    }
                }
            }

            return this;
        },

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Useful APIs which aren't used internally
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        /**
         * Add a new field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Object} [options] The validator rules
         * @returns {FormValidation.Base}
         */
        addField: function(field, options) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    break;
                case 'string':
                    delete this._cacheFields[field];
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            fields.attr('data-' + ns + '-field', field);

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Try to parse the options from HTML attributes
                var opts = this._parseOptions($field);
                opts = (opts === null) ? options : $.extend(true, opts, options);

                this.options.fields[field] = $.extend(true, this.options.fields[field], opts);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field] ? this._cacheFields[field].add($field) : $field;

                // Init the element
                this._initField(('checkbox' === type || 'radio' === type) ? field : $field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldAdded), {
                field: field,
                element: fields,
                options: this.options.fields[field]
            });

            return this;
        },

        /**
         * Destroy the plugin
         * It will remove all error messages, feedback icons and turn off the events
         */
        destroy: function() {
            var ns = this._namespace, i, field, fields, $field, validator, $icon, row, alias;

            // Destroy the validators first
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    for (validator in this.options.fields[field].validators) {
                        if ($field.data(ns + '.dfs.' + validator)) {
                            $field.data(ns + '.dfs.' + validator).reject();
                        }
                        $field.removeData(ns + '.result.' + validator)
                              .removeData(ns + '.response.' + validator)
                              .removeData(ns + '.dfs.' + validator);

                        // Destroy the validator
                        alias = this.options.fields[field].validators[validator].alias || validator;
                        if ('function' === typeof FormValidation.Validator[alias].destroy) {
                            FormValidation.Validator[alias].destroy(this, $field, this.options.fields[field].validators[validator], validator);
                        }
                    }
                }
            }

            // Remove messages and icons
            var clazz = this.options.err.clazz.split(' ').join('.');
            for (field in this.options.fields) {
                fields = this.getFieldElements(field);
                row    = this.options.fields[field].row || this.options.row.selector;
                for (i = 0; i < fields.length; i++) {
                    $field = fields.eq(i);
                    // Remove all error messages
                    var $messages = $field.data(ns + '.messages');
                    if ($messages) {
                        $messages.find('.' + clazz + '[data-' + ns + '-validator][data-' + ns + '-for="' + field + '"]').remove();
                    }
                    $field
                        .removeData(ns + '.messages')
                        .removeData(ns + '.validators')
                        // Remove feedback classes
                        .closest(row)
                            .removeClass(this.options.row.valid)
                            .removeClass(this.options.row.invalid)
                            .removeClass(this.options.row.feedback)
                            .end()
                        // Turn off events
                        .off('.' + ns)
                        .removeAttr('data-' + ns + '-field');

                    // Remove feedback icons, tooltip/popover container
                    // Support backward
                    var container = ('function' === typeof (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container))
                                    ? (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container).call(this, $field, this)
                                    : (this.options.fields[field].container || this.options.fields[field].err || this.options.err.container);
                    if ('tooltip' === container || 'popover' === container) {
                        this._destroyTooltip($field, container);
                    }

                    $icon = $field.data(ns + '.icon');
                    if ($icon) {
                        $icon.remove();
                    }
                    $field.removeData(ns + '.icon')
                          // It's safe to remove trigger data here, because it might be used when destroying the validator
                          .removeData(ns + '.trigger');
                }
            }

            // Destroy the add-ons
            for (var addOn in this.options.addOns) {
                if ('function' === typeof FormValidation.AddOn[addOn].destroy) {
                    FormValidation.AddOn[addOn].destroy(this, this.options.addOns[addOn]);
                }
            }

            this.disableSubmitButtons(false);   // Enable submit buttons
            this.$hiddenButton.remove();        // Remove the hidden button

            this.$form
                .removeClass(this.options.elementClass)
                .off('.' + ns)
                .removeData('bootstrapValidator')   // Support backward
                .removeData('formValidation')
                // Remove generated hidden elements
                .find('[data-' + ns + '-submit-hidden]').remove().end()
                .find('[type="submit"]')
                    .off('click.' + ns);
        },

        /**
         * Enable/Disable all validators to given field
         *
         * @param {String} field The field name
         * @param {Boolean} enabled Enable/Disable field validators
         * @param {String} [validatorName] The validator name. If null, all validators will be enabled/disabled
         * @returns {FormValidation.Base}
         */
        enableFieldValidators: function(field, enabled, validatorName) {
            var validators = this.options.fields[field].validators;

            // Enable/disable particular validator
            if (validatorName
                && validators
                && validators[validatorName] && validators[validatorName].enabled !== enabled)
            {
                this.options.fields[field].validators[validatorName].enabled = enabled;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validatorName);
            }
            // Enable/disable all validators
            else if (!validatorName && this.options.fields[field].enabled !== enabled) {
                this.options.fields[field].enabled = enabled;
                for (var v in validators) {
                    this.enableFieldValidators(field, enabled, v);
                }
            }

            return this;
        },

        /**
         * Some validators have option which its value is dynamic.
         * For example, the zipCode validator has the country option which might be changed dynamically by a select element.
         *
         * @param {jQuery|String} field The field name or element
         * @param {String|Function} option The option which can be determined by:
         * - a string
         * - name of field which defines the value
         * - name of function which returns the value
         * - a function returns the value
         *
         * The callback function has the format of
         *      callback: function(value, validator, $field) {
         *          // value is the value of field
         *          // validator is the BootstrapValidator instance
         *          // $field is the field element
         *      }
         *
         * @returns {String}
         */
        getDynamicOption: function(field, option) {
            var $field = ('string' === typeof field) ? this.getFieldElements(field) : field,
                value  = $field.val();

            // Option can be determined by
            // ... a function
            if ('function' === typeof option) {
                return FormValidation.Helper.call(option, [value, this, $field]);
            }
            // ... value of other field
            else if ('string' === typeof option) {
                var $f = this.getFieldElements(option);
                if ($f.length) {
                    return $f.val();
                }
                // ... return value of callback
                else {
                    return FormValidation.Helper.call(option, [value, this, $field]) || option;
                }
            }

            return null;
        },

        /**
         * Get the form element
         *
         * @returns {jQuery}
         */
        getForm: function() {
            return this.$form;
        },

        /**
         * Get the list of invalid fields
         *
         * @returns {jQuery[]}
         */
        getInvalidFields: function() {
            return this.$invalidFields;
        },

        /**
         * Get the current locale
         *
         * @return {String}
         */
        getLocale: function() {
            return this.options.locale;
        },

        /**
         * Get the error messages
         *
         * @param {String|jQuery} [field] The field name or field element
         * If the field is not defined, the method returns all error messages of all fields
         * @param {String} [validator] The name of validator
         * If the validator is not defined, the method returns error messages of all validators
         * @returns {String[]}
         */
        getMessages: function(field, validator) {
            var that     = this,
                ns       = this._namespace,
                messages = [],
                $fields  = $([]);

            switch (true) {
                case (field && 'object' === typeof field):
                    $fields = field;
                    break;
                case (field && 'string' === typeof field):
                    var f = this.getFieldElements(field);
                    if (f.length > 0) {
                        var type = f.attr('type');
                        $fields = ('radio' === type || 'checkbox' === type) ? f.eq(0) : f;
                    }
                    break;
                default:
                    $fields = this.$invalidFields;
                    break;
            }

            var filter = validator ? '[data-' + ns + '-validator="' + validator + '"]' : '',
                clazz  = this.options.err.clazz.split(' ').join('.');
            $fields.each(function() {
                messages = messages.concat(
                    $(this)
                        .data(ns + '.messages')
                        .find('.' + clazz + '[data-' + ns + '-for="' + $(this).attr('data-' + ns + '-field') + '"][data-' + ns + '-result="' + that.STATUS_INVALID + '"]' + filter)
                        .map(function() {
                            var v = $(this).attr('data-' + ns + '-validator'),
                                f = $(this).attr('data-' + ns + '-for');
                            return (that.options.fields[f].validators[v].enabled === false) ? '' : $(this).html();
                        })
                        .get()
                );
            });

            return messages;
        },

        /**
         * Returns the clicked submit button
         *
         * @returns {jQuery}
         */
        getSubmitButton: function() {
            return this.$submitButton;
        },

        /**
         * Remove a given field
         *
         * @param {String|jQuery} field The field name or field element
         * @returns {FormValidation.Base}
         */
        removeField: function(field) {
            var ns     = this._namespace,
                fields = $([]);
            switch (typeof field) {
                case 'object':
                    fields = field;
                    field  = field.attr('data-' + ns + '-field') || field.attr('name');
                    fields.attr('data-' + ns + '-field', field);
                    break;
                case 'string':
                    fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            if (fields.length === 0) {
                return this;
            }

            var type  = fields.attr('type'),
                total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

            for (var i = 0; i < total; i++) {
                var $field = fields.eq(i);

                // Remove from the list of invalid fields
                this.$invalidFields = this.$invalidFields.not($field);

                // Update the cache
                this._cacheFields[field] = this._cacheFields[field].not($field);
            }

            if (!this._cacheFields[field] || this._cacheFields[field].length === 0) {
                delete this.options.fields[field];
            }
            if ('checkbox' === type || 'radio' === type) {
                this._initField(field);
            }

            this.disableSubmitButtons(false);
            // Trigger an event
            this.$form.trigger($.Event(this.options.events.fieldRemoved), {
                field: field,
                element: fields
            });

            return this;
        },

        /**
         * Reset given field
         *
         * @param {String|jQuery} field The field name or field element
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetField: function(field, resetValue) {
            var ns      = this._namespace,
                $fields = $([]);
            switch (typeof field) {
                case 'object':
                    $fields = field;
                    field   = field.attr('data-' + ns + '-field');
                    break;
                case 'string':
                    $fields = this.getFieldElements(field);
                    break;
                default:
                    break;
            }

            var i     = 0,
                total = $fields.length;
            if (this.options.fields[field]) {
                for (i = 0; i < total; i++) {
                    for (var validator in this.options.fields[field].validators) {
                        $fields.eq(i).removeData(ns + '.dfs.' + validator);
                    }
                }
            }

            if (resetValue) {
                var type = $fields.attr('type');
                ('radio' === type || 'checkbox' === type) ? $fields.prop('checked', false).removeAttr('selected') : $fields.val('');
            }

            // Mark field as not validated yet
            this.updateStatus(field, this.STATUS_NOT_VALIDATED);

            for (i = 0; i < total; i++) {
                $fields.eq(i).trigger($.Event(this.options.events.fieldReset), {
                    fv: this,
                    field: field,
                    element: $fields.eq(i),
                    resetValue: resetValue
                });
            }

            return this;
        },

        /**
         * Reset the form
         *
         * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
         * @returns {FormValidation.Base}
         */
        resetForm: function(resetValue) {
            for (var field in this.options.fields) {
                this.resetField(field, resetValue);
            }

            this.$invalidFields = $([]);
            this.$submitButton  = null;

            // Enable submit buttons
            this.disableSubmitButtons(false);

            this.$form.trigger($.Event(this.options.events.formReset), {
                fv: this,
                resetValue: resetValue
            });

            return this;
        },

        /**
         * Revalidate given field
         * It's used when you need to revalidate the field which its value is updated by other plugin
         *
         * @param {String|jQuery} field The field name of field element
         * @returns {FormValidation.Base}
         */
        revalidateField: function(field) {
            this.updateStatus(field, this.STATUS_NOT_VALIDATED)
                .validateField(field);

            return this;
        },

        /**
         * Set the locale
         *
         * @param {String} locale The locale in format of countrycode_LANGUAGECODE
         * @returns {FormValidation.Base}
         */
        setLocale: function(locale) {
            this.options.locale = locale;
            this.$form.trigger($.Event(this.options.events.localeChanged), {
                locale: locale,
                bv: this,   // Support backward
                fv: this
            });

            return this;
        },

        /**
         * Update the option of a specific validator
         *
         * @param {String|jQuery} field The field name or field element
         * @param {String} validator The validator name
         * @param {String} option The option name
         * @param {String} value The value to set
         * @returns {FormValidation.Base}
         */
        updateOption: function(field, validator, option, value) {
            var ns = this._namespace;
            if ('object' === typeof field) {
                field = field.attr('data-' + ns + '-field');
            }
            if (this.options.fields[field] && this.options.fields[field].validators[validator]) {
                this.options.fields[field].validators[validator][option] = value;
                this.updateStatus(field, this.STATUS_NOT_VALIDATED, validator);
            }

            return this;
        },

        /**
         * Validate given container
         * It can be used with isValidContainer() when you want to work with wizard form
         *
         * @param {String|jQuery} container The container selector or element
         * @returns {FormValidation.Base}
         */
        validateContainer: function(container) {
            var that       = this,
                ns         = this._namespace,
                fields     = [],
                $container = ('string' === typeof container) ? $(container) : container;
            if ($container.length === 0) {
                return this;
            }

            $container.find('[data-' + ns + '-field]').each(function() {
                var $field = $(this);
                if (!that._isExcluded($field)) {
                    fields.push($field);
                }
            });

            var total = fields.length;
            for (var i = 0; i < total; i++) {
                this.validateField(fields[i]);
            }

            return this;
        }
    };

    // Plugin definition
    $.fn.formValidation = function(option) {
        var params = arguments;
        return this.each(function() {
            var $this   = $(this),
                data    = $this.data('formValidation'),
                options = 'object' === typeof option && option;
            if (!data) {
                var framework = (options.framework || $this.attr('data-fv-framework') || 'bootstrap').toLowerCase(),
                    clazz     = framework.substr(0, 1).toUpperCase() + framework.substr(1);

                if (typeof FormValidation.Framework[clazz] === 'undefined') {
                    throw new Error('The class FormValidation.Framework.' + clazz + ' is not implemented');
                }

                data = new FormValidation.Framework[clazz](this, options);
                $this.addClass('fv-form-' + framework)
                     .data('formValidation', data);
            }

            // Allow to call plugin method
            if ('string' === typeof option) {
                data[option].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };

    $.fn.formValidation.Constructor = FormValidation.Base;

    // Default message
    $.fn.formValidation.DEFAULT_MESSAGE = 'This value is not valid';

    // The default options sorted in alphabetical order
    $.fn.formValidation.DEFAULT_OPTIONS = {
        // The first invalid field will be focused automatically
        autoFocus: true,

        // Support declarative usage (setting options via HTML 5 attributes)
        // Setting to false can improve the performance
        declarative: true,

        // The form CSS class
        elementClass: 'fv-form',

        // Use custom event name to avoid window.onerror being invoked by jQuery
        // See #630
        events: {
            // Support backward
            formInit: 'init.form.fv',
            formPreValidate: 'prevalidate.form.fv',
            formError: 'err.form.fv',
            formReset: 'rst.form.fv',
            formSuccess: 'success.form.fv',
            fieldAdded: 'added.field.fv',
            fieldRemoved: 'removed.field.fv',
            fieldInit: 'init.field.fv',
            fieldError: 'err.field.fv',
            fieldReset: 'rst.field.fv',
            fieldSuccess: 'success.field.fv',
            fieldStatus: 'status.field.fv',
            localeChanged: 'changed.locale.fv',
            validatorError: 'err.validator.fv',
            validatorSuccess: 'success.validator.fv',
            validatorIgnored: 'ignored.validator.fv'
        },

        // Indicate fields which won't be validated
        // By default, the plugin will not validate the following kind of fields:
        // - disabled
        // - hidden
        // - invisible
        //
        // The setting consists of jQuery filters. Accept 3 formats:
        // - A string. Use a comma to separate filter
        // - An array. Each element is a filter
        // - An array. Each element can be a callback function
        //      function($field, validator) {
        //          $field is jQuery object representing the field element
        //          validator is the BootstrapValidator instance
        //          return true or false;
        //      }
        //
        // The 3 following settings are equivalent:
        //
        // 1) ':disabled, :hidden, :not(:visible)'
        // 2) [':disabled', ':hidden', ':not(:visible)']
        // 3) [':disabled', ':hidden', function($field) {
        //        return !$field.is(':visible');
        //    }]
        excluded: [':disabled', ':hidden', ':not(:visible)'],

        // Map the field name with validator rules
        fields: null,

        // Live validating option
        // Can be one of 3 values:
        // - enabled: The plugin validates fields as soon as they are changed
        // - disabled: Disable the live validating. The error messages are only shown after the form is submitted
        // - submitted: The live validating is enabled after the form is submitted
        live: 'enabled',

        // Locale in the format of languagecode_COUNTRYCODE
        locale: 'en_US',

        // Default invalid message
        message: null,

        // The field will not be live validated if its length is less than this number of characters
        threshold: null,

        // Whether to be verbose when validating a field or not.
        // Possible values:
        // - true:  when a field has multiple validators, all of them will be checked, and respectively - if errors occur in
        //          multiple validators, all of them will be displayed to the user
        // - false: when a field has multiple validators, validation for this field will be terminated upon the first encountered error.
        //          Thus, only the very first error message related to this field will be displayed to the user
        verbose: true,

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // These options mostly are overridden by specific framework
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        button: {
            // The submit buttons selector
            // These buttons will be disabled to prevent the valid form from multiple submissions
            // Don't perform validation when clicking on the submit button/input which have formnovalidate attribute
            selector: '[type="submit"]:not([formnovalidate])',

            // The disabled class
            disabled: ''
        },

        control: {
            // The CSS class for valid control
            valid: '',

            // The CSS class for invalid control
            invalid: ''
        },

        err: {
            // The CSS class of each message element
            clazz: '',

            // The error messages container. It can be:
            // - 'tooltip' if you want to use Bootstrap tooltip to show error messages
            // - 'popover' if you want to use Bootstrap popover to show error messages
            // - a CSS selector indicating the container
            // In the first two cases, since the tooltip/popover should be small enough, the plugin only shows only one error message
            // You also can define the message container for particular field
            container: null,

            // Used to determine where the messages are placed
            parent: null
        },

        // Shows ok/error/loading icons based on the field validity.
        icon: {
            valid: null,
            invalid: null,
            validating: null,
            feedback: ''
        },

        row: {
            // The CSS selector for indicating the element consists of the field
            // You should adjust this option if your form group consists of many fields which not all of them need to be validated
            selector: null,
            valid: '',
            invalid: '',
            feedback: ''
        }
    };
}(jQuery));
;(function($) {
    // Helper methods, which can be used in validator class
    FormValidation.Helper = {
        /**
         * Execute a callback function
         *
         * @param {String|Function} functionName Can be
         * - name of global function
         * - name of namespace function (such as A.B.C)
         * - a function
         * @param {Array} args The callback arguments
         */
        call: function(functionName, args) {
            if ('function' === typeof functionName) {
                return functionName.apply(this, args);
            } else if ('string' === typeof functionName) {
                if ('()' === functionName.substring(functionName.length - 2)) {
                    functionName = functionName.substring(0, functionName.length - 2);
                }
                var ns      = functionName.split('.'),
                    func    = ns.pop(),
                    context = window;
                for (var i = 0; i < ns.length; i++) {
                    context = context[ns[i]];
                }

                return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
            }
        },

        /**
         * Validate a date
         *
         * @param {Number} year The full year in 4 digits
         * @param {Number} month The month number
         * @param {Number} day The day number
         * @param {Boolean} [notInFuture] If true, the date must not be in the future
         * @returns {Boolean}
         */
        date: function(year, month, day, notInFuture) {
            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                return false;
            }
            if (day.length > 2 || month.length > 2 || year.length > 4) {
                return false;
            }

            day   = parseInt(day, 10);
            month = parseInt(month, 10);
            year  = parseInt(year, 10);

            if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
                return false;
            }
            var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // Update the number of days in Feb of leap year
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                numDays[1] = 29;
            }

            // Check the day
            if (day <= 0 || day > numDays[month - 1]) {
                return false;
            }

            if (notInFuture === true) {
                var currentDate  = new Date(),
                    currentYear  = currentDate.getFullYear(),
                    currentMonth = currentDate.getMonth(),
                    currentDay   = currentDate.getDate();
                return (year < currentYear
                || (year === currentYear && month - 1 < currentMonth)
                || (year === currentYear && month - 1 === currentMonth && day < currentDay));
            }

            return true;
        },

        /**
         * Format a string
         * It's used to format the error message
         * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
         *
         * @param {String} message
         * @param {Array} parameters
         * @returns {String}
         */
        format: function(message, parameters) {
            if (!$.isArray(parameters)) {
                parameters = [parameters];
            }

            for (var i in parameters) {
                message = message.replace('%s', parameters[i]);
            }

            return message;
        },

        /**
         * Implement Luhn validation algorithm
         * Credit to https://gist.github.com/ShirtlessKirk/2134376
         *
         * @see http://en.wikipedia.org/wiki/Luhn
         * @param {String} value
         * @returns {Boolean}
         */
        luhn: function(value) {
            var length  = value.length,
                mul     = 0,
                prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
                sum     = 0;

            while (length--) {
                sum += prodArr[mul][parseInt(value.charAt(length), 10)];
                mul ^= 1;
            }

            return (sum % 10 === 0 && sum > 0);
        },

        /**
         * Implement modulus 11, 10 (ISO 7064) algorithm
         *
         * @param {String} value
         * @returns {Boolean}
         */
        mod11And10: function(value) {
            var check  = 5,
                length = value.length;
            for (var i = 0; i < length; i++) {
                check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
            }
            return (check === 1);
        },

        /**
         * Implements Mod 37, 36 (ISO 7064) algorithm
         * Usages:
         * mod37And36('A12425GABC1234002M')
         * mod37And36('002006673085', '0123456789')
         *
         * @param {String} value
         * @param {String} [alphabet]
         * @returns {Boolean}
         */
        mod37And36: function(value, alphabet) {
            alphabet = alphabet || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var modulus = alphabet.length,
                length  = value.length,
                check   = Math.floor(modulus / 2);
            for (var i = 0; i < length; i++) {
                check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
            }
            return (check === 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            base64: {
                'default': 'Please enter a valid base 64 encoded'
            }
        }
    });

    FormValidation.Validator.base64 = {
        /**
         * Return true if the input value is a base 64 encoded string.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            between: {
                'default': 'Please enter a value between %s and %s',
                notInclusive: 'Please enter a value between %s and %s strictly'
            }
        }
    });

    FormValidation.Validator.between = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            if ('range' === $field.attr('type')) {
                return {
                    min: $field.attr('min'),
                    max: $field.attr('max')
                };
            }

            return false;
        },

        /**
         * Return true if the input value is between (strictly or not) two given numbers
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - min
         * - max
         *
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

			value = this._format(value);

            var locale   = validator.getLocale(),
                min      = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max      = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                minValue = this._format(min),
                maxValue = this._format(max);

			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: $.isNumeric(value) && parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between['default'], [min, max])
                    }
                    : {
                        valid: $.isNumeric(value) && parseFloat(value) > minValue && parseFloat(value) < maxValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].between.notInclusive, [min, max])
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            bic: {
                'default': 'Please enter a valid BIC number'
            }
        }
    });

    FormValidation.Validator.bic = {
        /**
         * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
         *
         * For more information see http://en.wikipedia.org/wiki/ISO_9362
         *
         * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }
            return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.Validator.blank = {
        /**
         * Placeholder validator that can be used to display a custom validation message
         * returned from the server
         * Example:
         *
         * (1) a "blank" validator is applied to an input field.
         * (2) data is entered via the UI that is unable to be validated client-side.
         * (3) server returns a 400 with JSON data that contains the field that failed
         *     validation and an associated message.
         * (4) ajax 400 call handler does the following:
         *
         *      fv.updateMessage(field, 'blank', errorMessage);
         *      fv.updateStatus(field, 'INVALID', 'blank');
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            callback: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.callback = {
        priority: 999,

        html5Attributes: {
            message: 'message',
            callback: 'callback'
        },

        /**
         * Return result from the callback method
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - callback: The callback method that passes parameters:
         *      callback: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of FormValidation.Base
         *          // $field is the field element
         *      }
         * - message: The invalid message
         * @returns {Deferred}
         */
        validate: function(validator, $field, options, validatorName) {
            var value  = validator.getFieldValue($field, validatorName),
                dfd    = new $.Deferred(),
                result = { valid: true };

            if (options.callback) {
                var response = FormValidation.Helper.call(options.callback, [value, validator, $field]);
                result = ('boolean' === typeof response || null === response) ? { valid: response } : response;
            }

            dfd.resolve($field, validatorName, result);
            return dfd;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            choice: {
                'default': 'Please enter a valid value',
                less: 'Please choose %s options at minimum',
                more: 'Please choose %s options at maximum',
                between: 'Please choose %s - %s options'
            }
        }
    });

    FormValidation.Validator.choice = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max'
        },

        /**
         * Check if the number of checked boxes are less or more than a given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         *
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var locale     = validator.getLocale(),
                ns         = validator.getNamespace(),
                numChoices = $field.is('select')
                            ? validator.getFieldElements($field.attr('data-' + ns + '-field')).find('option').filter(':selected').length
                            : validator.getFieldElements($field.attr('data-' + ns + '-field')).filter(':checked').length,
                min        = options.min ? ($.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min)) : null,
                max        = options.max ? ($.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max)) : null,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].choice['default'];

            if ((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.less, parseInt(min, 10));
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].choice.more, parseInt(max, 10));
                    break;

                default:
                    break;
            }

            return { valid: isValid, message: message };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            color: {
                'default': 'Please enter a valid color'
            }
        }
    });

    FormValidation.Validator.color = {
        html5Attributes: {
            message: 'message',
            type: 'type'
        },

        enableByHtml5: function($field) {
            return ('color' === $field.attr('type'));
        },

        SUPPORTED_TYPES: [
            'hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'
        ],

        KEYWORD_COLORS: [
            // Colors start with A
            'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
            // B
            'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
            // C
            'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
            // D
            'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
            'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
            'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
            'dimgrey', 'dodgerblue',
            // F
            'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
            // G
            'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey',
            // H
            'honeydew', 'hotpink',
            // I
            'indianred', 'indigo', 'ivory',
            // K
            'khaki',
            // L
            'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
            'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
            'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
            'linen',
            // M
            'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
            'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
            'mistyrose', 'moccasin',
            // N
            'navajowhite', 'navy',
            // O
            'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
            // P
            'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
            'plum', 'powderblue', 'purple',
            // R
            'red', 'rosybrown', 'royalblue',
            // S
            'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue',
            'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
            // T
            'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise',
            // V
            'violet',
            // W
            'wheat', 'white', 'whitesmoke',
            // Y
            'yellow', 'yellowgreen'
        ],

        /**
         * Return true if the input value is a valid color
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - type: The array of valid color types
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Only accept 6 hex character values due to the HTML 5 spec
            // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
            if (this.enableByHtml5($field)) {
                return /^#[0-9A-F]{6}$/i.test(value);
            }

            var types = options.type || this.SUPPORTED_TYPES;
            if (!$.isArray(types)) {
                types = types.replace(/s/g, '').split(',');
            }

            var method,
                type,
                isValid = false;

            for (var i = 0; i < types.length; i++) {
                type    = types[i];
                method  = '_' + type.toLowerCase();
                isValid = isValid || this[method](value);
                if (isValid) {
                    return true;
                }
            }

            return false;
        },

        _hex: function(value) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        },

        _hsl: function(value) {
            return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
        },

        _hsla: function(value) {
            return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
        },

        _keyword: function(value) {
            return $.inArray(value, this.KEYWORD_COLORS) >= 0;
        },

        _rgb: function(value) {
            var regexInteger = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
                regexPercent = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        },

        _rgba: function(value) {
            var regexInteger = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
                regexPercent = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
            return regexInteger.test(value) || regexPercent.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            creditCard: {
                'default': 'Please enter a valid credit card number'
            }
        }
    });

    FormValidation.Validator.creditCard = {
        /**
         * Return true if the input value is valid credit card number
         * Based on https://gist.github.com/DiegoSalazar/4075533
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following key:
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');

            if (!FormValidation.Helper.luhn(value)) {
                return false;
            }

            // Validate the card number based on prefix (IIN ranges) and length
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DANKORT: {
                    length: [16],
                    prefix: ['5019']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                ELO: {
                    length: [16],
                    prefix: ['4011', '4312', '4389', '4514', '4573', '4576',
                             '5041', '5066', '5067', '509',
                             '6277', '6362', '6363', '650', '6516', '6550']
                },
                FORBRUGSFORENINGEN: {
                    length: [16],
                    prefix: ['600722']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA_ELECTRON: {
                    length: [16],
                    prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };

            var type, i;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (value.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]     // Check the prefix
                        && $.inArray(value.length, cards[type].length) !== -1)                      // and length
                    {
                        return {
                            valid: true,
                            type: type
                        };
                    }
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cusip: {
                'default': 'Please enter a valid CUSIP number'
            }
        }
    });

    FormValidation.Validator.cusip = {
        /**
         * Validate a CUSIP number
         *
         * @see http://en.wikipedia.org/wiki/CUSIP
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{9}$/.test(value)) {
                return false;
            }

            var converted = $.map(value.split(''), function(item) {
                                var code = item.charCodeAt(0);
                                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                                            // Replace A, B, C, ..., Z with 10, 11, ..., 35
                                            ? (code - 'A'.charCodeAt(0) + 10)
                                            : item;
                            }),
                length    = converted.length,
                sum       = 0;
            for (var i = 0; i < length - 1; i++) {
                var num = parseInt(converted[i], 10);
                if (i % 2 !== 0) {
                    num *= 2;
                }
                if (num > 9) {
                    num -= 9;
                }
                sum += num;
            }

            sum = (10 - (sum % 10)) % 10;
            return sum === parseInt(converted[length - 1], 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            cvv: {
                'default': 'Please enter a valid CVV number'
            }
        }
    });

    FormValidation.Validator.cvv = {
        html5Attributes: {
            message: 'message',
            ccfield: 'creditCardField'
        },

        /**
         * Bind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        init: function(validator, $field, options, validatorName) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.onLiveChange(creditCardField, 'live_' + validatorName, function() {
                    var status = validator.getStatus($field, validatorName);
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the credit card field
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - creditCardField: The credit card number field
         */
        destroy: function(validator, $field, options, validatorName) {
            if (options.creditCardField) {
                var creditCardField = validator.getFieldElements(options.creditCardField);
                validator.offLiveChange(creditCardField, 'live_' + validatorName);
            }
        },

        /**
         * Return true if the input value is a valid CVV number.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - creditCardField: The credit card number field. It can be null
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{3,4}$/.test(value)) {
                return false;
            }

            if (!options.creditCardField) {
                return true;
            }

            // Get the credit card number
            var creditCard = validator.getFieldValue(options.creditCardField, 'creditCard');
            if (creditCard === null || creditCard === '') {
                return true;
            }
            
            creditCard = creditCard.replace(/\D/g, '');

            // Supported credit card types
            var cards = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ['34', '37']
                },
                DANKORT: {
                    length: [16],
                    prefix: ['5019']
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: ['300', '301', '302', '303', '304', '305', '36']
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ['54', '55']
                },
                DISCOVER: {
                    length: [16],
                    prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
                             '62214', '62215', '62216', '62217', '62218', '62219',
                             '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                             '62290', '62291', '622920', '622921', '622922', '622923',
                             '622924', '622925', '644', '645', '646', '647', '648',
                             '649', '65']
                },
                ELO: {
                    length: [16],
                    prefix: ['4011', '4312', '4389', '4514', '4573', '4576',
                             '5041', '5066', '5067', '509',
                             '6277', '6362', '6363', '650', '6516', '6550']
                },
                FORBRUGSFORENINGEN: {
                    length: [16],
                    prefix: ['600722']
                },
                JCB: {
                    length: [16],
                    prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ['6304', '6706', '6771', '6709']
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ['51', '52', '53', '54', '55']
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ['6334', '6767']
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
                             '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                             '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                             '622920', '622921', '622922', '622923', '622924', '622925']
                },
                VISA_ELECTRON: {
                    length: [16],
                    prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917']
                },
                VISA: {
                    length: [16],
                    prefix: ['4']
                }
            };
            var type, i, creditCardType = null;
            for (type in cards) {
                for (i in cards[type].prefix) {
                    if (creditCard.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]    // Check the prefix
                        && $.inArray(creditCard.length, cards[type].length) !== -1)                     // and length
                    {
                        creditCardType = type;
                        break;
                    }
                }
            }

            return (creditCardType === null)
                        ? false
                        : (('AMERICAN_EXPRESS' === creditCardType) ? (value.length === 4) : (value.length === 3));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            date: {
                'default': 'Please enter a valid date',
                min: 'Please enter a date after %s',
                max: 'Please enter a date before %s',
                range: 'Please enter a date in the range %s - %s'
            }
        }
    });

    FormValidation.Validator.date = {
        html5Attributes: {
            message: 'message',
            format: 'format',
            min: 'min',
            max: 'max',
            separator: 'separator'
        },

        /**
         * Return true if the input value is valid date
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - min: the minimum date
         * - max: the maximum date
         * - separator: Use to separate the date, month, and year.
         * By default, it is /
         * - format: The date format. Default is MM/DD/YYYY
         * The format can be:
         *
         * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
         * ii) date and time:
         * The time can consist of h, m, s parts which are separated by :
         * ii) date, time and A (indicating AM or PM)
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            options.format = options.format || 'MM/DD/YYYY';

            // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
            if ($field.attr('type') === 'date') {
                options.format = 'YYYY-MM-DD';
            }

            var locale     = validator.getLocale(),
                message    = options.message || FormValidation.I18n[locale].date['default'],
                formats    = options.format.split(' '),
                dateFormat = formats[0],
                timeFormat = (formats.length > 1) ? formats[1] : null,
                amOrPm     = (formats.length > 2) ? formats[2] : null,
                sections   = value.split(' '),
                date       = sections[0],
                time       = (sections.length > 1) ? sections[1] : null;

            if (formats.length !== sections.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the separator
            var separator = options.separator;
            if (!separator) {
                separator = (date.indexOf('/') !== -1)
                            ? '/'
                            : ((date.indexOf('-') !== -1) ? '-' : ((date.indexOf('.') !== -1) ? '.' : null));
            }
            if (separator === null || date.indexOf(separator) === -1) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the date
            date       = date.split(separator);
            dateFormat = dateFormat.split(separator);
            if (date.length !== dateFormat.length) {
                return {
                    valid: false,
                    message: message
                };
            }

            var year  = date[$.inArray('YYYY', dateFormat)],
                month = date[$.inArray('MM', dateFormat)],
                day   = date[$.inArray('DD', dateFormat)];

            if (!year || !month || !day || year.length !== 4) {
                return {
                    valid: false,
                    message: message
                };
            }

            // Determine the time
            var minutes = null, hours = null, seconds = null;
            if (timeFormat) {
                timeFormat = timeFormat.split(':');
                time       = time.split(':');

                if (timeFormat.length !== time.length) {
                    return {
                        valid: false,
                        message: message
                    };
                }

                hours   = time.length > 0 ? time[0] : null;
                minutes = time.length > 1 ? time[1] : null;
                seconds = time.length > 2 ? time[2] : null;

                if (hours === '' || minutes === '' || seconds === '') {
                    return {
                        valid: false,
                        message: message
                    };
                }

                // Validate seconds
                if (seconds) {
                    if (isNaN(seconds) || seconds.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    seconds = parseInt(seconds, 10);
                    if (seconds < 0 || seconds > 60) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate hours
                if (hours) {
                    if (isNaN(hours) || hours.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    hours = parseInt(hours, 10);
                    if (hours < 0 || hours >= 24 || (amOrPm && hours > 12)) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }

                // Validate minutes
                if (minutes) {
                    if (isNaN(minutes) || minutes.length > 2) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                    minutes = parseInt(minutes, 10);
                    if (minutes < 0 || minutes > 59) {
                        return {
                            valid: false,
                            message: message
                        };
                    }
                }
            }

            // Validate day, month, and year
            var valid     = FormValidation.Helper.date(year, month, day),
                min       = null,
                max       = null,
                minOption = options.min,
                maxOption = options.max;

            if (minOption) {
                min = (minOption instanceof Date)
                    ? minOption
                    : (this._parseDate(minOption, dateFormat, separator) ||
                       this._parseDate(validator.getDynamicOption($field, minOption), dateFormat, separator));

                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                minOption = this._formatDate(min, options.format);
            }

            if (maxOption) {
                max = (maxOption instanceof Date)
                    ? maxOption
                    : (this._parseDate(maxOption, dateFormat, separator) ||
                       this._parseDate(validator.getDynamicOption($field, maxOption), dateFormat, separator));

                // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
                maxOption = this._formatDate(max, options.format);
            }

            date = new Date(year, month -1, day, hours, minutes, seconds);

            switch (true) {
                case (minOption && !maxOption && valid):
                    valid   = date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.min, minOption);
                    break;

                case (maxOption && !minOption && valid):
                    valid   = date.getTime() <= max.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.max, maxOption);
                    break;

                case (maxOption && minOption && valid):
                    valid   = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();
                    message = options.message || FormValidation.Helper.format(FormValidation.I18n[locale].date.range, [minOption, maxOption]);
                    break;

                default:
                    break;
            }

            return {
                valid: valid,
                date: date,
                message: message
            };
        },

        /**
         * Return a date object after parsing the date string
         *
         * @param {Date|String} date   The date string to parse
         * @param {String} format The date format
         * The format can be:
         *   - date: Consist of DD, MM, YYYY parts which are separated by the separator option
         *   - date and time:
         *     The time can consist of h, m, s parts which are separated by :
         * @param {String} separator The separator used to separate the date, month, and year
         * @returns {Date}
         */
        _parseDate: function(date, format, separator) {
            if (date instanceof Date) {
                return date;
            }
            if (typeof date !== 'string') {
                return null;
            }

            // Ensure that the format must consist of year, month and day patterns
            var yearIndex   = $.inArray('YYYY', format),
                monthIndex  = $.inArray('MM', format),
                dayIndex    = $.inArray('DD', format);
            if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
                return null;
            }

            var minutes     = 0, hours = 0, seconds = 0,
                sections    = date.split(' '),
                dateSection = sections[0].split(separator);
            if (dateSection.length < 3) {
                return null;
            }

            if (sections.length > 1) {
                var timeSection = sections[1].split(':');
                hours   = timeSection.length > 0 ? timeSection[0] : null;
                minutes = timeSection.length > 1 ? timeSection[1] : null;
                seconds = timeSection.length > 2 ? timeSection[2] : null;
            }

            return new Date(dateSection[yearIndex], dateSection[monthIndex] - 1, dateSection[dayIndex],
                            hours, minutes, seconds);
        },

        /**
         * Format date
         *
         * @param {Date} date The date object to format
         * @param {String} format The date format
         * The format can consist of the following tokens:
         *      d       Day of the month without leading zeros (1 through 31)
         *      dd      Day of the month with leading zeros (01 through 31)
         *      m       Month without leading zeros (1 through 12)
         *      mm      Month with leading zeros (01 through 12)
         *      yy      Last two digits of year (for example: 14)
         *      yyyy    Full four digits of year (for example: 2014)
         *      h       Hours without leading zeros (1 through 12)
         *      hh      Hours with leading zeros (01 through 12)
         *      H       Hours without leading zeros (0 through 23)
         *      HH      Hours with leading zeros (00 through 23)
         *      M       Minutes without leading zeros (0 through 59)
         *      MM      Minutes with leading zeros (00 through 59)
         *      s       Seconds without leading zeros (0 through 59)
         *      ss      Seconds with leading zeros (00 through 59)
         * @returns {String}
         */
        _formatDate: function(date, format) {
            format = format
                        .replace(/Y/g, 'y')
                        .replace(/M/g, 'm')
                        .replace(/D/g, 'd')
                        .replace(/:m/g, ':M')
                        .replace(/:mm/g, ':MM')
                        .replace(/:S/, ':s')
                        .replace(/:SS/, ':ss');

            var replacer = {
                d: function(date) {
                    return date.getDate();
                },
                dd: function(date) {
                    var d = date.getDate();
                    return (d < 10) ? '0' + d : d;
                },
                m: function(date) {
                    return date.getMonth() + 1;
                },
                mm: function(date) {
                    var m = date.getMonth() + 1;
                    return m < 10 ? '0' + m : m;
                },
                yy: function(date) {
                    return ('' + date.getFullYear()).substr(2);
                },
                yyyy: function(date) {
                    return date.getFullYear();
                },
                h: function(date) {
                    return date.getHours() % 12 || 12;
                },
                hh: function(date) {
                    var h = date.getHours() % 12 || 12;
                    return h < 10 ? '0' + h : h;
                },
                H: function(date) {
                    return date.getHours();
                },
                HH: function(date) {
                    var H = date.getHours();
                    return H < 10 ? '0' + H : H;
                },
                M: function(date) {
                    return date.getMinutes();
                },
                MM: function(date) {
                    var M = date.getMinutes();
                    return M < 10 ? '0' + M : M;
                },
                s: function(date) {
                    return date.getSeconds();
                },
                ss: function(date) {
                    var s = date.getSeconds();
                    return s < 10 ? '0' + s : s;
                }
            };

            return format.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(match) {
                return replacer[match] ? replacer[match](date) : match.slice(1, match.length - 1);
            });
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            different: {
                'default': 'Please enter a different value'
            }
        }
    });

    FormValidation.Validator.different = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options, validatorName) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements($.trim(fields[i]));
                validator.onLiveChange(compareWith, 'live_' + validatorName, function() {
                    var status = validator.getStatus($field, validatorName);
                    if (status !== validator.STATUS_NOT_VALIDATED) {
                        validator.revalidateField($field);
                    }
                });
            }
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options, validatorName) {
            var fields = options.field.split(',');
            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements($.trim(fields[i]));
                validator.offLiveChange(compareWith, 'live_' + validatorName);
            }
        },

        /**
         * Return true if the input value is different with given field's value
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var fields  = options.field.split(','),
                isValid = true;

            for (var i = 0; i < fields.length; i++) {
                var compareWith = validator.getFieldElements($.trim(fields[i]));
                if (compareWith == null || compareWith.length === 0) {
                    continue;
                }

                var compareValue = validator.getFieldValue(compareWith, validatorName);
                if (value === compareValue) {
                    isValid = false;
                } else if (compareValue !== '') {
                    validator.updateStatus(compareWith, validator.STATUS_VALID, validatorName);
                }
            }

            return isValid;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            digits: {
                'default': 'Please enter only digits'
            }
        }
    });

    FormValidation.Validator.digits = {
        /**
         * Return true if the input value contains digits only
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            return /^\d+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ean: {
                'default': 'Please enter a valid EAN number'
            }
        }
    });

    FormValidation.Validator.ean = {
        /**
         * Validate EAN (International Article Number)
         *
         * @see http://en.wikipedia.org/wiki/European_Article_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            if (!/^(\d{8}|\d{12}|\d{13})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = (10 - sum % 10) % 10;
            return (sum + '' === value.charAt(length - 1));
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ein: {
                'default': 'Please enter a valid EIN number'
            }
        }
    });

    FormValidation.Validator.ein = {
        // The first two digits are called campus
        // See http://en.wikipedia.org/wiki/Employer_Identification_Number
        // http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes
        CAMPUS: {
            ANDOVER: ['10', '12'],
            ATLANTA: ['60', '67'],
            AUSTIN: ['50', '53'],
            BROOKHAVEN: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
            CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
            FRESNO: ['15', '24'],
            KANSAS_CITY: ['40', '44'],
            MEMPHIS: ['94', '95'],
            OGDEN: ['80', '90'],
            PHILADELPHIA: ['33', '39', '41', '42', '43', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
            INTERNET: ['20', '26', '27', '45', '46', '47'],
            SMALL_BUSINESS_ADMINISTRATION: ['31']
        },

        /**
         * Validate EIN (Employer Identification Number) which is also known as
         * Federal Employer Identification Number (FEIN) or Federal Tax Identification Number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Object|Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            if (!/^[0-9]{2}-?[0-9]{7}$/.test(value)) {
                return false;
            }
            // Check the first two digits
            var campus = value.substr(0, 2) + '';
            for (var key in this.CAMPUS) {
                if ($.inArray(campus, this.CAMPUS[key]) !== -1) {
                    return {
                        valid: true,
                        campus: key
                    };
                }
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            emailAddress: {
                'default': 'Please enter a valid email address'
            }
        }
    });

    FormValidation.Validator.emailAddress = {
        html5Attributes: {
            message: 'message',
            multiple: 'multiple',
            separator: 'separator'
        },

        enableByHtml5: function($field) {
            return ('email' === $field.attr('type'));
        },

        /**
         * Return true if and only if the input value is a valid email address
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options]
         * - multiple: Allow multiple email addresses, separated by a comma or semicolon; default is false.
         * - separator: Regex for character or characters expected as separator between addresses; default is comma /[,;]/, i.e. comma or semicolon.
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Email address regular expression
            // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            var emailRegExp   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                allowMultiple = options.multiple === true || options.multiple === 'true';

            if (allowMultiple) {
                var separator = options.separator || /[,;]/,
                    addresses = this._splitEmailAddresses(value, separator);

                for (var i = 0; i < addresses.length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return false;
                    }
                }

                return true;
            } else {
                return emailRegExp.test(value);
            }
        },

        _splitEmailAddresses: function(emailAddresses, separator) {
            var quotedFragments     = emailAddresses.split(/"/),
                quotedFragmentCount = quotedFragments.length,
                emailAddressArray   = [],
                nextEmailAddress    = '';

            for (var i = 0; i < quotedFragmentCount; i++) {
                if (i % 2 === 0) {
                    var splitEmailAddressFragments     = quotedFragments[i].split(separator),
                        splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

                    if (splitEmailAddressFragmentCount === 1) {
                        nextEmailAddress += splitEmailAddressFragments[0];
                    } else {
                        emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

                        for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                            emailAddressArray.push(splitEmailAddressFragments[j]);
                        }
                        nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                    }
                } else {
                    nextEmailAddress += '"' + quotedFragments[i];
                    if (i < quotedFragmentCount - 1) {
                        nextEmailAddress += '"';
                    }
                }
            }

            emailAddressArray.push(nextEmailAddress);
            return emailAddressArray;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            file: {
                'default': 'Please choose a valid file'
            }
        }
    });

    FormValidation.Validator.file = {
        Error: {
            EXTENSION: 'EXTENSION',
            MAX_FILES: 'MAX_FILES',
            MAX_SIZE: 'MAX_SIZE',
            MAX_TOTAL_SIZE: 'MAX_TOTAL_SIZE',
            MIN_FILES: 'MIN_FILES',
            MIN_SIZE: 'MIN_SIZE',
            MIN_TOTAL_SIZE: 'MIN_TOTAL_SIZE',
            TYPE: 'TYPE'
        },

        html5Attributes: {
            extension: 'extension',
            maxfiles: 'maxFiles',
            minfiles: 'minFiles',
            maxsize: 'maxSize',
            minsize: 'minSize',
            maxtotalsize: 'maxTotalSize',
            mintotalsize: 'minTotalSize',
            message: 'message',
            type: 'type'
        },

        /**
         * Validate upload file. Use HTML 5 API if the browser supports
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - extension: The allowed extensions, separated by a comma
         * - maxFiles: The maximum number of files
         * - minFiles: The minimum number of files
         * - maxSize: The maximum size in bytes
         * - minSize: The minimum size in bytes
         * - maxTotalSize: The maximum size in bytes for all files
         * - minTotalSize: The minimum size in bytes for all files
         * - message: The invalid message
         * - type: The allowed MIME type, separated by a comma
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var ext,
                extensions = options.extension ? options.extension.toLowerCase().split(',') : null,
                types      = options.type      ? options.type.toLowerCase().split(',')      : null,
                html5      = (window.File && window.FileList && window.FileReader);

            if (html5) {
                // Get FileList instance
                var files     = $field.get(0).files,
                    total     = files.length,
                    totalSize = 0;

                // Check the maxFiles
                if (options.maxFiles && total > parseInt(options.maxFiles, 10)) {
                    return {
                        valid: false,
                        error: this.Error.MAX_FILES
                    };
                }

                // Check the minFiles
                if (options.minFiles && total < parseInt(options.minFiles, 10)) {
                    return {
                        valid: false,
                        error: this.Error.MIN_FILES
                    };
                }

                var metaData = {};
                for (var i = 0; i < total; i++) {
                    totalSize += files[i].size;
                    ext        = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
                    metaData   = {
                        file: files[i],
                        size: files[i].size,
                        ext: ext,
                        type: files[i].type
                    };

                    // Check the minSize
                    if (options.minSize && files[i].size < parseInt(options.minSize, 10)) {
                       return {
                           valid: false,
                           error: this.Error.MIN_SIZE,
                           metaData: metaData
                       };
                    }

                    // Check the maxSize
                    if (options.maxSize && files[i].size > parseInt(options.maxSize, 10)) {
                        return {
                            valid: false,
                            error: this.Error.MAX_SIZE,
                            metaData: metaData
                        };
                    }

                    // Check file extension
                    if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
                        return {
                            valid: false,
                            error: this.Error.EXTENSION,
                            metaData: metaData
                        };
                    }

                    // Check file type
                    if (files[i].type && types && $.inArray(files[i].type.toLowerCase(), types) === -1) {
                        return {
                            valid: false,
                            error: this.Error.TYPE,
                            metaData: metaData
                        };
                    }
                }

                // Check the maxTotalSize
                if (options.maxTotalSize && totalSize > parseInt(options.maxTotalSize, 10)) {
                    return {
                        valid: false,
                        error: this.Error.MAX_TOTAL_SIZE,
                        metaData: {
                            totalSize: totalSize
                        }
                    };
                }

                // Check the minTotalSize
                if (options.minTotalSize && totalSize < parseInt(options.minTotalSize, 10)) {
                    return {
                        valid: false,
                        error: this.Error.MIN_TOTAL_SIZE,
                        metaData: {
                            totalSize: totalSize
                        }
                    };
                }
            } else {
                // Check file extension
                ext = value.substr(value.lastIndexOf('.') + 1);
                if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
                    return {
                        valid: false,
                        error: this.Error.EXTENSION,
                        metaData: {
                            ext: ext
                        }
                    };
                }
            }

            return true;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            greaterThan: {
                'default': 'Please enter a value greater than or equal to %s',
                notInclusive: 'Please enter a value greater than %s'
            }
        }
    });

    FormValidation.Validator.greaterThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                min  = $field.attr('min');
            if (min && type !== 'date') {
                return {
                    value: min
                };
            }

            return false;
        },

        /**
         * Return true if the input value is greater than or equals to given number
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: Define the number to compare with. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }
            
            value = this._format(value);

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

			return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: $.isNumeric(value) && parseFloat(value) >= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan['default'], compareTo)
                    }
                    : {
                        valid: $.isNumeric(value) && parseFloat(value) > compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].greaterThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            grid: {
                'default': 'Please enter a valid GRId number'
            }
        }
    });

    FormValidation.Validator.grid = {
        /**
         * Validate GRId (Global Release Identifier)
         *
         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === value.substr(0, 5)) {
                value = value.substr(5);
            }
            return FormValidation.Helper.mod37And36(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            hex: {
                'default': 'Please enter a valid hexadecimal number'
            }
        }
    });

    FormValidation.Validator.hex = {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            return /^[0-9a-fA-F]+$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            iban: {
                'default': 'Please enter a valid IBAN number',
                country: 'Please enter a valid IBAN number in %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'United Arab Emirates',
                    AL: 'Albania',
                    AO: 'Angola',
                    AT: 'Austria',
                    AZ: 'Azerbaijan',
                    BA: 'Bosnia and Herzegovina',
                    BE: 'Belgium',
                    BF: 'Burkina Faso',
                    BG: 'Bulgaria',
                    BH: 'Bahrain',
                    BI: 'Burundi',
                    BJ: 'Benin',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CI: 'Ivory Coast',
                    CM: 'Cameroon',
                    CR: 'Costa Rica',
                    CV: 'Cape Verde',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    DO: 'Dominican Republic',
                    DZ: 'Algeria',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FO: 'Faroe Islands',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GE: 'Georgia',
                    GI: 'Gibraltar',
                    GL: 'Greenland',
                    GR: 'Greece',
                    GT: 'Guatemala',
                    HR: 'Croatia',
                    HU: 'Hungary',
                    IE: 'Ireland',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'Iceland',
                    IT: 'Italy',
                    JO: 'Jordan',
                    KW: 'Kuwait',
                    KZ: 'Kazakhstan',
                    LB: 'Lebanon',
                    LI: 'Liechtenstein',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MC: 'Monaco',
                    MD: 'Moldova',
                    ME: 'Montenegro',
                    MG: 'Madagascar',
                    MK: 'Macedonia',
                    ML: 'Mali',
                    MR: 'Mauritania',
                    MT: 'Malta',
                    MU: 'Mauritius',
                    MZ: 'Mozambique',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PK: 'Pakistan',
                    PL: 'Poland',
                    PS: 'Palestine',
                    PT: 'Portugal',
                    QA: 'Qatar',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SA: 'Saudi Arabia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TL: 'East Timor',
                    TN: 'Tunisia',
                    TR: 'Turkey',
                    VG: 'Virgin Islands, British',
                    XK: 'Republic of Kosovo'
                }
            }
        }
    });

    FormValidation.Validator.iban = {
        html5Attributes: {
            message: 'message',
            country: 'country',
            sepa: 'sepa'
        },

        // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
        // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
        REGEX: {
            AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',                       // Andorra
            AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',                                  // United Arab Emirates
            AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',                               // Albania
            AO: 'AO[0-9]{2}[0-9]{21}',                                          // Angola
            AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Austria
            AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',                               // Azerbaijan
            BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',                   // Bosnia and Herzegovina
            BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',                           // Belgium
            BF: 'BF[0-9]{2}[0-9]{23}',                                          // Burkina Faso
            BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',                // Bulgaria
            BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',                               // Bahrain
            BI: 'BI[0-9]{2}[0-9]{12}',                                          // Burundi
            BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Benin
            BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',             // Brazil
            CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Switzerland
            CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Ivory Coast
            CM: 'CM[0-9]{2}[0-9]{23}',                                          // Cameroon
            CR: 'CR[0-9]{2}[0-9]{3}[0-9]{14}',                                  // Costa Rica
            CV: 'CV[0-9]{2}[0-9]{21}',                                          // Cape Verde
            CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',                       // Cyprus
            CZ: 'CZ[0-9]{2}[0-9]{20}',                                          // Czech Republic
            DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',                                  // Germany
            DK: 'DK[0-9]{2}[0-9]{14}',                                          // Denmark
            DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',                               // Dominican Republic
            DZ: 'DZ[0-9]{2}[0-9]{20}',                                          // Algeria
            EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',                  // Estonia
            ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',          // Spain
            FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',                           // Finland
            FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Faroe Islands
            FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // France
            GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // United Kingdom
            GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',                                  // Georgia
            GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',                               // Gibraltar
            GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Greenland
            GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',                       // Greece
            GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',                            // Guatemala
            HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',                                  // Croatia
            HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',          // Hungary
            IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // Ireland
            IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',                          // Israel
            IR: 'IR[0-9]{2}[0-9]{22}',                                          // Iran
            IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',                  // Iceland
            IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // Italy
            JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',                 // Jordan
            KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',                                  // Kuwait
            KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Kazakhstan
            LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',                               // Lebanon
            LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Liechtenstein
            LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Lithuania
            LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Luxembourg
            LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',                               // Latvia
            MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // Monaco
            MD: 'MD[0-9]{2}[A-Z0-9]{20}',                                       // Moldova
            ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Montenegro
            MG: 'MG[0-9]{2}[0-9]{23}',                                          // Madagascar
            MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',                       // Macedonia
            ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Mali
            MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',                        // Mauritania
            MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',                       // Malta
            MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',  // Mauritius
            MZ: 'MZ[0-9]{2}[0-9]{21}',                                          // Mozambique
            NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',                                  // Netherlands
            NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',                           // Norway
            PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Pakistan
            PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',                                  // Poland
            PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Palestinian
            PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',                  // Portugal
            QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Qatar
            RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Romania
            RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Serbia
            SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',                               // Saudi Arabia
            SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',                          // Sweden
            SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',                           // Slovenia
            SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',                          // Slovakia
            SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // San Marino
            SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Senegal
            TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',                                // East Timor
            TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                        // Tunisia
            TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',                    // Turkey
            VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',                                  // Virgin Islands, British
            XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}'                           // Republic of Kosovo
        },

        // List of SEPA country codes
        SEPA_COUNTRIES: [
            'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES',
            'FI', 'FR', 'GB', 'GI', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT',
            'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'NL', 'NO', 'PL', 'PT',
            'RO', 'SE', 'SI', 'SK', 'SM'
        ],

        /**
         * Validate an International Bank Account Number (IBAN)
         * To test it, take the sample IBAN from
         * http://www.nordea.com/Our+services/International+products+and+services/Cash+Management/IBAN+countries/908462.html
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * - sepa: Set it to true (false) to indicate that the IBAN number must be (not be) from SEPA countries
         * By default, this option is not defined
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            var country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || !this.REGEX[country]) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            var locale = validator.getLocale();
            if (!this.REGEX[country]) {
                return false;
            }

            // Check whether or not the sepa option is enabled
            if (typeof options.sepa !== undefined) {
                var isSepaCountry = $.inArray(country, this.SEPA_COUNTRIES) !== -1;
                if (((options.sepa === 'true' || options.sepa === true) && !isSepaCountry)
                    || ((options.sepa === 'false' || options.sepa === false) && isSepaCountry))
                {
                    return false;
                }
            }

            if (!(new RegExp('^' + this.REGEX[country] + '$')).test(value)) {
                return {
                    valid: false,
                    message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
                };
            }

            value = value.substr(4) + value.substr(0, 4);
            value = $.map(value.split(''), function(n) {
                var code = n.charCodeAt(0);
                return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
                        // Replace A, B, C, ..., Z with 10, 11, ..., 35
                        ? (code - 'A'.charCodeAt(0) + 10)
                        : n;
            });
            value = value.join('');

            var temp   = parseInt(value.substr(0, 1), 10),
                length = value.length;
            for (var i = 1; i < length; ++i) {
                temp = (temp * 10 + parseInt(value.substr(i, 1), 10)) % 97;
            }

            return {
                valid: (temp === 1),
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].iban.country, FormValidation.I18n[locale].iban.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            id: {
                'default': 'Please enter a valid identification number',
                country: 'Please enter a valid identification number in %s',
                countries: {
                    BA: 'Bosnia and Herzegovina',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CL: 'Chile',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    LT: 'Lithuania',
                    LV: 'Latvia',
                    ME: 'Montenegro',
                    MK: 'Macedonia',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    SM: 'San Marino',
                    TH: 'Thailand',
                    TR: 'Turkey',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.id = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CZ', 'DK', 'EE', 'ES', 'FI', 'HR', 'IE', 'IS', 'LT', 'LV', 'ME', 'MK', 'NL',
            'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'TR', 'ZA'
        ],

        /**
         * Validate identification number in different countries
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method = ['_', country.toLowerCase()].join(''),
                result = this[method](value);
            result         = (result === true || result === false) ? { valid: result } : result;
            result.message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].id.country, FormValidation.I18n[locale].id.countries[country.toUpperCase()]);

            return result;
        },

        /**
         * Validate Unique Master Citizen Number which uses in
         * - Bosnia and Herzegovina (country code: BA)
         * - Macedonia (MK)
         * - Montenegro (ME)
         * - Serbia (RS)
         * - Slovenia (SI)
         *
         * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
         * @param {String} value The ID
         * @param {String} countryCode The ISO country code, can be BA, MK, ME, RS, SI
         * @returns {Boolean}
         */
        _validateJMBG: function(value, countryCode) {
            if (!/^\d{13}$/.test(value)) {
                return false;
            }
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 3), 10),
                rr    = parseInt(value.substr(7, 2), 10),
                k     = parseInt(value.substr(12, 1), 10);

            // Validate date of birth
            // FIXME: Validate the year of birth
            if (day > 31 || month > 12) {
                return false;
            }

            // Validate checksum
            var sum = 0;
            for (var i = 0; i < 6; i++) {
                sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
            }
            sum = 11 - sum % 11;
            if (sum === 10 || sum === 11) {
                sum = 0;
            }
            if (sum !== k) {
                return false;
            }

            // Validate political region
            // rr is the political region of birth, which can be in ranges:
            // 10-19: Bosnia and Herzegovina
            // 20-29: Montenegro
            // 30-39: Croatia (not used anymore)
            // 41-49: Macedonia
            // 50-59: Slovenia (only 50 is used)
            // 70-79: Central Serbia
            // 80-89: Serbian province of Vojvodina
            // 90-99: Kosovo
            switch (countryCode.toUpperCase()) {
                case 'BA':
                    return (10 <= rr && rr <= 19);
                case 'MK':
                    return (41 <= rr && rr <= 49);
                case 'ME':
                    return (20 <= rr && rr <= 29);
                case 'RS':
                    return (70 <= rr && rr <= 99);
                case 'SI':
                    return (50 <= rr && rr <= 59);
                default:
                    return true;
            }
        },

        _ba: function(value) {
            return this._validateJMBG(value, 'BA');
        },
        _mk: function(value) {
            return this._validateJMBG(value, 'MK');
        },
        _me: function(value) {
            return this._validateJMBG(value, 'ME');
        },
        _rs: function(value) {
            return this._validateJMBG(value, 'RS');
        },

        /**
         * Examples: 0101006500006
         */
        _si: function(value) {
            return this._validateJMBG(value, 'SI');
        },

        /**
         * Validate Bulgarian national identification number (EGN)
         *
         * @see http://en.wikipedia.org/wiki/Uniform_civil_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
                return false;
            }
            value = value.replace(/\s/g, '');
            // Check the birth date
            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            } else if (month > 20) {
                year -= 100;
                month -= 20;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate Brazilian national identification number (CPF)
         *
         * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _br: function(value) {
            value = value.replace(/\D/g, '');

            if (!/^\d{11}$/.test(value) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)) {
                return false;
            }

            var d1 = 0;
            for (var i = 0; i < 9; i++) {
                d1 += (10 - i) * parseInt(value.charAt(i), 10);
            }
            d1 = 11 - d1 % 11;
            if (d1 === 10 || d1 === 11) {
                d1 = 0;
            }
            if (d1 + '' !== value.charAt(9)) {
                return false;
            }

            var d2 = 0;
            for (i = 0; i < 10; i++) {
                d2 += (11 - i) * parseInt(value.charAt(i), 10);
            }
            d2 = 11 - d2 % 11;
            if (d2 === 10 || d2 === 11) {
                d2 = 0;
            }

            return (d2 + '' === value.charAt(10));
        },

        /**
         * Validate Swiss Social Security Number (AHV-Nr/No AVS)
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
         * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '').substr(3);
            var length = value.length,
                sum    = 0,
                weight = (length === 8) ? [3, 1] : [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Chilean national identification number (RUN/RUT)
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
         * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cl: function(value) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
                return false;
            }
            value = value.replace(/\-/g, '');
            while (value.length < 9) {
                value = '0' + value;
            }
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            } else if (sum === 10) {
                sum = 'K';
            }
            return sum + '' === value.charAt(8).toUpperCase();
        },

        /**
         * Validate Chinese citizen identification number
         *
         * Rules:
         * - For current 18-digit system (since 1st Oct 1999, defined by GB11643—1999 national standard):
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
         *     - Digit 14-16: Order code, any integer.
         *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
         *       Both upper/lower case of X are tolerated.
         * - For deprecated 15-digit system:
         *     - Digit 0-5: Must be a valid administrative division code of China PR.
         *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
         *     - Digit 12-14: Order code, any integer.
         * Lists of valid administrative division codes of China PR can be seen here:
         * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
         * Published and maintained by National Bureau of Statistics of China PR.
         * NOTE: Current and deprecated codes MUST BOTH be considered valid.
         * Many Chinese citizens born in once existed administrative divisions!
         *
         * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cn: function(value) {
            // Basic format check (18 or 15 digits, considering X in checksum)
            value = value.trim();
            if (!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)) {
                return false;
            }
            
            // Check China PR Administrative division code
            var adminDivisionCodes = {
                11: {
                    0: [0],
                    1: [[0, 9], [11, 17]],
                    2: [0, 28, 29]
                },
                12: {
                    0: [0],
                    1: [[0, 16]],
                    2: [0, 21, 23, 25]
                },
                13: {
                    0: [0],
                    1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                    2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                    3: [[0, 4], [21, 24]],
                    4: [[0, 4], 6, 21, [23, 35], 81],
                    5: [[0, 3], [21, 35], 81, 82],
                    6: [[0, 4], [21, 38], [81, 84]],
                    7: [[0, 3], 5, 6, [21, 33]],
                    8: [[0, 4], [21, 28]],
                    9: [[0, 3], [21, 30], [81, 84]],
                    10: [[0, 3], [22, 26], 28, 81, 82],
                    11: [[0, 2], [21, 28], 81, 82]
                },
                14: {
                    0: [0],
                    1: [0, 1, [5, 10], [21, 23], 81],
                    2: [[0, 3], 11, 12, [21, 27]],
                    3: [[0, 3], 11, 21, 22],
                    4: [[0, 2], 11, 21, [23, 31], 81],
                    5: [[0, 2], 21, 22, 24, 25, 81],
                    6: [[0, 3], [21, 24]],
                    7: [[0, 2], [21, 29], 81],
                    8: [[0, 2], [21, 30], 81, 82],
                    9: [[0, 2], [21, 32], 81],
                    10: [[0, 2], [21, 34], 81, 82],
                    11: [[0, 2], [21, 30], 81, 82],
                    23: [[0, 3], 22, 23, [25, 30], 32, 33]
                },
                15: {
                    0: [0],
                    1: [[0, 5], [21, 25]],
                    2: [[0, 7], [21, 23]],
                    3: [[0, 4]],
                    4: [[0, 4], [21, 26], [28, 30]],
                    5: [[0, 2], [21, 26], 81],
                    6: [[0, 2], [21, 27]],
                    7: [[0, 3], [21, 27], [81, 85]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 29], 81],
                    22: [[0, 2], [21, 24]],
                    25: [[0, 2], [22, 31]],
                    26: [[0, 2], [24, 27], [29, 32], 34],
                    28: [0, 1, [22, 27]],
                    29: [0, [21, 23]]
                },
                21: {
                    0: [0],
                    1: [[0, 6], [11, 14], [22, 24], 81],
                    2: [[0, 4], [11, 13], 24, [81, 83]],
                    3: [[0, 4], 11, 21, 23, 81],
                    4: [[0, 4], 11, [21, 23]],
                    5: [[0, 5], 21, 22],
                    6: [[0, 4], 24, 81, 82],
                    7: [[0, 3], 11, 26, 27, 81, 82],
                    8: [[0, 4], 11, 81, 82],
                    9: [[0, 5], 11, 21, 22],
                    10: [[0, 5], 11, 21, 81],
                    11: [[0, 3], 21, 22],
                    12: [[0, 2], 4, 21, 23, 24, 81, 82],
                    13: [[0, 3], 21, 22, 24, 81, 82],
                    14: [[0, 4], 21, 22, 81]
                },
                22: {
                    0: [0],
                    1: [[0, 6], 12, 22, [81, 83]],
                    2: [[0, 4], 11, 21, [81, 84]],
                    3: [[0, 3], 22, 23, 81, 82],
                    4: [[0, 3], 21, 22],
                    5: [[0, 3], 21, 23, 24, 81, 82],
                    6: [[0, 2], 4, 5, [21, 23], 25, 81],
                    7: [[0, 2], [21, 24], 81],
                    8: [[0, 2], 21, 22, 81, 82],
                    24: [[0, 6], 24, 26]
                },
                23: {
                    0: [0],
                    1: [[0, 12], 21, [23, 29], [81, 84]],
                    2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                    3: [[0, 7], 21, 81, 82],
                    4: [[0, 7], 21, 22],
                    5: [[0, 3], 5, 6, [21, 24]],
                    6: [[0, 6], [21, 24]],
                    7: [[0, 16], 22, 81],
                    8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                    9: [[0, 4], 21],
                    10: [[0, 5], 24, 25, 81, [83, 85]],
                    11: [[0, 2], 21, 23, 24, 81, 82],
                    12: [[0, 2], [21, 26], [81, 83]],
                    27: [[0, 4], [21, 23]]
                },
                31: {
                    0: [0],
                    1: [0, 1, [3, 10], [12, 20]],
                    2: [0, 30]
                },
                32: {
                    0: [0],
                    1: [[0, 7], 11, [13, 18], 24, 25],
                    2: [[0, 6], 11, 81, 82],
                    3: [[0, 5], 11, 12, [21, 24], 81, 82],
                    4: [[0, 2], 4, 5, 11, 12, 81, 82],
                    5: [[0, 9], [81, 85]],
                    6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                    7: [0, 1, 3, 5, 6, [21, 24]],
                    8: [[0, 4], 11, 26, [29, 31]],
                    9: [[0, 3], [21, 25], 28, 81, 82],
                    10: [[0, 3], 11, 12, 23, 81, 84, 88],
                    11: [[0, 2], 11, 12, [81, 83]],
                    12: [[0, 4], [81, 84]],
                    13: [[0, 2], 11, [21, 24]]
                },
                33: {
                    0: [0],
                    1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                    2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                    3: [[0, 4], 22, 24, [26, 29], 81, 82],
                    4: [[0, 2], 11, 21, 24, [81, 83]],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], 21, 24, [81, 83]],
                    7: [[0, 3], 23, 26, 27, [81, 84]],
                    8: [[0, 3], 22, 24, 25, 81],
                    9: [[0, 3], 21, 22],
                    10: [[0, 4], [21, 24], 81, 82],
                    11: [[0, 2], [21, 27], 81]
                },
                34: {
                    0: [0],
                    1: [[0, 4], 11, [21, 24], 81],
                    2: [[0, 4], 7, 8, [21, 23], 25],
                    3: [[0, 4], 11, [21, 23]],
                    4: [[0, 6], 21],
                    5: [[0, 4], 6, [21, 23]],
                    6: [[0, 4], 21],
                    7: [[0, 3], 11, 21],
                    8: [[0, 3], 11, [22, 28], 81],
                    10: [[0, 4], [21, 24]],
                    11: [[0, 3], 22, [24, 26], 81, 82],
                    12: [[0, 4], 21, 22, 25, 26, 82],
                    13: [[0, 2], [21, 24]],
                    14: [[0, 2], [21, 24]],
                    15: [[0, 3], [21, 25]],
                    16: [[0, 2], [21, 23]],
                    17: [[0, 2], [21, 23]],
                    18: [[0, 2], [21, 25], 81]
                },
                35: {
                    0: [0],
                    1: [[0, 5], 11, [21, 25], 28, 81, 82],
                    2: [[0, 6], [11, 13]],
                    3: [[0, 5], 22],
                    4: [[0, 3], 21, [23, 30], 81],
                    5: [[0, 5], 21, [24, 27], [81, 83]],
                    6: [[0, 3], [22, 29], 81],
                    7: [[0, 2], [21, 25], [81, 84]],
                    8: [[0, 2], [21, 25], 81],
                    9: [[0, 2], [21, 26], 81, 82]
                },
                36: {
                    0: [0],
                    1: [[0, 5], 11, [21, 24]],
                    2: [[0, 3], 22, 81],
                    3: [[0, 2], 13, [21, 23]],
                    4: [[0, 3], 21, [23, 30], 81, 82],
                    5: [[0, 2], 21],
                    6: [[0, 2], 22, 81],
                    7: [[0, 2], [21, 35], 81, 82],
                    8: [[0, 3], [21, 30], 81],
                    9: [[0, 2], [21, 26], [81, 83]],
                    10: [[0, 2], [21, 30]],
                    11: [[0, 2], [21, 30], 81]
                },
                37: {
                    0: [0],
                    1: [[0, 5], 12, 13, [24, 26], 81],
                    2: [[0, 3], 5, [11, 14], [81, 85]],
                    3: [[0, 6], [21, 23]],
                    4: [[0, 6], 81],
                    5: [[0, 3], [21, 23]],
                    6: [[0, 2], [11, 13], 34, [81, 87]],
                    7: [[0, 5], 24, 25, [81, 86]],
                    8: [[0, 2], 11, [26, 32], [81, 83]],
                    9: [[0, 3], 11, 21, 23, 82, 83],
                    10: [[0, 2], [81, 83]],
                    11: [[0, 3], 21, 22],
                    12: [[0, 3]],
                    13: [[0, 2], 11, 12, [21, 29]],
                    14: [[0, 2], [21, 28], 81, 82],
                    15: [[0, 2], [21, 26], 81],
                    16: [[0, 2], [21, 26]],
                    17: [[0, 2], [21, 28]]
                },
                41: {
                    0: [0],
                    1: [[0, 6], 8, 22, [81, 85]],
                    2: [[0, 5], 11, [21, 25]],
                    3: [[0, 7], 11, [22, 29], 81],
                    4: [[0, 4], 11, [21, 23], 25, 81, 82],
                    5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                    6: [[0, 3], 11, 21, 22],
                    7: [[0, 4], 11, 21, [24, 28], 81, 82],
                    8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                    9: [[0, 2], 22, 23, [26, 28]],
                    10: [[0, 2], [23, 25], 81, 82],
                    11: [[0, 4], [21, 23]],
                    12: [[0, 2], 21, 22, 24, 81, 82],
                    13: [[0, 3], [21, 30], 81],
                    14: [[0, 3], [21, 26], 81],
                    15: [[0, 3], [21, 28]],
                    16: [[0, 2], [21, 28], 81],
                    17: [[0, 2], [21, 29]],
                    90: [0, 1]
                },
                42: {
                    0: [0],
                    1: [[0, 7], [11, 17]],
                    2: [[0, 5], 22, 81],
                    3: [[0, 3], [21, 25], 81],
                    5: [[0, 6], [25, 29], [81, 83]],
                    6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                    7: [[0, 4]],
                    8: [[0, 2], 4, 21, 22, 81],
                    9: [[0, 2], [21, 23], 81, 82, 84],
                    10: [[0, 3], [22, 24], 81, 83, 87],
                    11: [[0, 2], [21, 27], 81, 82],
                    12: [[0, 2], [21, 24], 81],
                    13: [[0, 3], 21, 81],
                    28: [[0, 2], 22, 23, [25, 28]],
                    90: [0, [4, 6], 21]
                },
                43: {
                    0: [0],
                    1: [[0, 5], 11, 12, 21, 22, 24, 81],
                    2: [[0, 4], 11, 21, [23, 25], 81],
                    3: [[0, 2], 4, 21, 81, 82],
                    4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                    5: [[0, 3], 11, [21, 25], [27, 29], 81],
                    6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                    7: [[0, 3], [21, 26], 81],
                    8: [[0, 2], 11, 21, 22],
                    9: [[0, 3], [21, 23], 81],
                    10: [[0, 3], [21, 28], 81],
                    11: [[0, 3], [21, 29]],
                    12: [[0, 2], [21, 30], 81],
                    13: [[0, 2], 21, 22, 81, 82],
                    31: [0, 1, [22, 27], 30]
                },
                44: {
                    0: [0],
                    1: [[0, 7], [11, 16], 83, 84],
                    2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                    3: [0, 1, [3, 8]],
                    4: [[0, 4]],
                    5: [0, 1, [6, 15], 23, 82, 83],
                    6: [0, 1, [4, 8]],
                    7: [0, 1, [3, 5], 81, [83, 85]],
                    8: [[0, 4], 11, 23, 25, [81, 83]],
                    9: [[0, 3], 23, [81, 83]],
                    12: [[0, 3], [23, 26], 83, 84],
                    13: [[0, 3], [22, 24], 81],
                    14: [[0, 2], [21, 24], 26, 27, 81],
                    15: [[0, 2], 21, 23, 81],
                    16: [[0, 2], [21, 25]],
                    17: [[0, 2], 21, 23, 81],
                    18: [[0, 3], 21, 23, [25, 27], 81, 82],
                    19: [0],
                    20: [0],
                    51: [[0, 3], 21, 22],
                    52: [[0, 3], 21, 22, 24, 81],
                    53: [[0, 2], [21, 23], 81]
                },
                45: {
                    0: [0],
                    1: [[0, 9], [21, 27]],
                    2: [[0, 5], [21, 26]],
                    3: [[0, 5], 11, 12, [21, 32]],
                    4: [0, 1, [3, 6], 11, [21, 23], 81],
                    5: [[0, 3], 12, 21],
                    6: [[0, 3], 21, 81],
                    7: [[0, 3], 21, 22],
                    8: [[0, 4], 21, 81],
                    9: [[0, 3], [21, 24], 81],
                    10: [[0, 2], [21, 31]],
                    11: [[0, 2], [21, 23]],
                    12: [[0, 2], [21, 29], 81],
                    13: [[0, 2], [21, 24], 81],
                    14: [[0, 2], [21, 25], 81]
                },
                46: {
                    0: [0],
                    1: [0, 1, [5, 8]],
                    2: [0, 1],
                    3: [0, [21, 23]],
                    90: [[0, 3], [5, 7], [21, 39]]
                },
                50: {
                    0: [0],
                    1: [[0, 19]],
                    2: [0, [22, 38], [40, 43]],
                    3: [0, [81, 84]]
                },
                51: {
                    0: [0],
                    1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                    3: [[0, 4], 11, 21, 22],
                    4: [[0, 3], 11, 21, 22],
                    5: [[0, 4], 21, 22, 24, 25],
                    6: [0, 1, 3, 23, 26, [81, 83]],
                    7: [0, 1, 3, 4, [22, 27], 81],
                    8: [[0, 2], 11, 12, [21, 24]],
                    9: [[0, 4], [21, 23]],
                    10: [[0, 2], 11, 24, 25, 28],
                    11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                    13: [[0, 4], [21, 25], 81],
                    14: [[0, 2], [21, 25]],
                    15: [[0, 3], [21, 29]],
                    16: [[0, 3], [21, 23], 81],
                    17: [[0, 3], [21, 25], 81],
                    18: [[0, 3], [21, 27]],
                    19: [[0, 3], [21, 23]],
                    20: [[0, 2], 21, 22, 81],
                    32: [0, [21, 33]],
                    33: [0, [21, 38]],
                    34: [0, 1, [22, 37]]
                },
                52: {
                    0: [0],
                    1: [[0, 3], [11, 15], [21, 23], 81],
                    2: [0, 1, 3, 21, 22],
                    3: [[0, 3], [21, 30], 81, 82],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], [21, 27]],
                    6: [[0, 3], [21, 28]],
                    22: [0, 1, [22, 30]],
                    23: [0, 1, [22, 28]],
                    24: [0, 1, [22, 28]],
                    26: [0, 1, [22, 36]],
                    27: [[0, 2], 22, 23, [25, 32]]
                },
                53: {
                    0: [0],
                    1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                    3: [[0, 2], [21, 26], 28, 81],
                    4: [[0, 2], [21, 28]],
                    5: [[0, 2], [21, 24]],
                    6: [[0, 2], [21, 30]],
                    7: [[0, 2], [21, 24]],
                    8: [[0, 2], [21, 29]],
                    9: [[0, 2], [21, 27]],
                    23: [0, 1, [22, 29], 31],
                    25: [[0, 4], [22, 32]],
                    26: [0, 1, [21, 28]],
                    27: [0, 1, [22, 30]], 28: [0, 1, 22, 23],
                    29: [0, 1, [22, 32]],
                    31: [0, 2, 3, [22, 24]],
                    34: [0, [21, 23]],
                    33: [0, 21, [23, 25]],
                    35: [0, [21, 28]]
                },
                54: {
                    0: [0],
                    1: [[0, 2], [21, 27]],
                    21: [0, [21, 29], 32, 33],
                    22: [0, [21, 29], [31, 33]],
                    23: [0, 1, [22, 38]],
                    24: [0, [21, 31]],
                    25: [0, [21, 27]],
                    26: [0, [21, 27]]
                },
                61: {
                    0: [0],
                    1: [[0, 4], [11, 16], 22, [24, 26]],
                    2: [[0, 4], 22],
                    3: [[0, 4], [21, 24], [26, 31]],
                    4: [[0, 4], [22, 31], 81],
                    5: [[0, 2], [21, 28], 81, 82],
                    6: [[0, 2], [21, 32]],
                    7: [[0, 2], [21, 30]],
                    8: [[0, 2], [21, 31]],
                    9: [[0, 2], [21, 29]],
                    10: [[0, 2], [21, 26]]
                },
                62: {
                    0: [0],
                    1: [[0, 5], 11, [21, 23]],
                    2: [0, 1],
                    3: [[0, 2], 21],
                    4: [[0, 3], [21, 23]],
                    5: [[0, 3], [21, 25]],
                    6: [[0, 2], [21, 23]],
                    7: [[0, 2], [21, 25]],
                    8: [[0, 2], [21, 26]],
                    9: [[0, 2], [21, 24], 81, 82],
                    10: [[0, 2], [21, 27]],
                    11: [[0, 2], [21, 26]],
                    12: [[0, 2], [21, 28]],
                    24: [0, 21, [24, 29]],
                    26: [0, 21, [23, 30]],
                    29: [0, 1, [21, 27]],
                    30: [0, 1, [21, 27]]
                },
                63: {
                    0: [0],
                    1: [[0, 5], [21, 23]],
                    2: [0, 2, [21, 25]],
                    21: [0, [21, 23], [26, 28]],
                    22: [0, [21, 24]],
                    23: [0, [21, 24]],
                    25: [0, [21, 25]],
                    26: [0, [21, 26]],
                    27: [0, 1, [21, 26]],
                    28: [[0, 2], [21, 23]]
                },
                64: {
                    0: [0],
                    1: [0, 1, [4, 6], 21, 22, 81],
                    2: [[0, 3], 5, [21, 23]],
                    3: [[0, 3], [21, 24], 81],
                    4: [[0, 2], [21, 25]],
                    5: [[0, 2], 21, 22]
                },
                65: {
                    0: [0],
                    1: [[0, 9], 21],
                    2: [[0, 5]],
                    21: [0, 1, 22, 23],
                    22: [0, 1, 22, 23],
                    23: [[0, 3], [23, 25], 27, 28],
                    28: [0, 1, [22, 29]],
                    29: [0, 1, [22, 29]],
                    30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]],
                    32: [0, 1, [21, 27]],
                    40: [0, 2, 3, [21, 28]],
                    42: [[0, 2], 21, [23, 26]],
                    43: [0, 1, [21, 26]],
                    90: [[0, 4]], 27: [[0, 2], 22, 23]
                },
                71: { 0: [0] },
                81: { 0: [0] },
                82: { 0: [0] }
            };
            
            var provincial  = parseInt(value.substr(0, 2), 10),
                prefectural = parseInt(value.substr(2, 2), 10),
                county      = parseInt(value.substr(4, 2), 10);
            
            if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
                return false;
            }
            var inRange  = false,
                rangeDef = adminDivisionCodes[provincial][prefectural];
            for (var i = 0; i < rangeDef.length; i++) {
                if (($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1])
                    || (!$.isArray(rangeDef[i]) && county === rangeDef[i]))
                {
                    inRange = true;
                    break;
                }
            }

            if (!inRange) {
                return false;
            }
            
            // Check date of birth
            var dob;
            if (value.length === 18) {
                dob = value.substr(6, 8);
            } else /* length == 15 */ { 
                dob = '19' + value.substr(6, 6);
            }
            var year  = parseInt(dob.substr(0, 4), 10),
                month = parseInt(dob.substr(4, 2), 10),
                day   = parseInt(dob.substr(6, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }
            
            // Check checksum (18-digit system only)
            if (value.length === 18) {
                var sum    = 0,
                    weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                for (i = 0; i < 17; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (12 - (sum % 11)) % 11;
                var checksum = (value.charAt(17).toUpperCase() !== 'X') ? parseInt(value.charAt(17), 10) : 10;
                return checksum === sum;
            }
            
            return true;
        },
        
        /**
         * Validate Czech national identification number (RC)
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (!/^\d{9,10}$/.test(value)) {
                return false;
            }
            var year  = 1900 + parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                day   = parseInt(value.substr(4, 2), 10);
            if (value.length === 9) {
                if (year >= 1980) {
                    year -= 100;
                }
                if (year > 1953) {
                    return false;
                }
            } else if (year < 1954) {
                year += 100;
            }

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Check that the birth date is not in the future
            if (value.length === 10) {
                var check = parseInt(value.substr(0, 9), 10) % 11;
                if (year < 1985) {
                    check = check % 10;
                }
                return (check + '' === value.substr(9, 1));
            }

            return true;
        },

        /**
         * Validate Danish Personal Identification number (CPR)
         *
         * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);

            switch (true) {
                case ('5678'.indexOf(value.charAt(6)) !== -1 && year >= 58):
                    year += 1800;
                    break;
                case ('0123'.indexOf(value.charAt(6)) !== -1):
                case ('49'.indexOf(value.charAt(6)) !== -1 && year >= 37):
                    year += 1900;
                    break;
                default:
                    year += 2000;
                    break;
            }

            return FormValidation.Helper.date(year, month, day);
        },

        /**
         * Validate Estonian Personal Identification Code (isikukood)
         *
         * @see http://et.wikipedia.org/wiki/Isikukood
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ee: function(value) {
            // Use the same format as Lithuanian Personal Code
            return this._lt(value);
        },

        /**
         * Validate Spanish personal identity code (DNI)
         * Support DNI (for Spanish citizens), NIE (for foreign people) and CIF (for legal entities)
         *
         * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
         * @param {String} value The ID
         * @returns {Boolean|Object}
         */
        _es: function(value) {
            var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value),
                isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
            if (!isDNI && !isNIE && !isCIF) {
                return false;
            }

            value = value.replace(/-/g, '');
            var check, type, isValid = true;
            if (isDNI || isNIE) {
                type = 'DNI';
                var index = 'XYZ'.indexOf(value.charAt(0));
                if (index !== -1) {
                    // It is NIE number
                    value = index + value.substr(1) + '';
                    type  = 'NIE';
                }

                check = parseInt(value.substr(0, 8), 10);
                check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                return {
                    valid: (check === value.substr(8, 1)),
                    type: type
                };
            } else {
                check = value.substr(1, 7);
                type  = 'CIF';
                var letter  = value[0],
                    control = value.substr(-1),
                    sum     = 0;

                // The digits in the even positions are added to the sum directly.
                // The ones in the odd positions are multiplied by 2 and then added to the sum.
                // If the result of multiplying by 2 is 10 or higher, add the two digits
                // together and add that to the sum instead
                for (var i = 0; i < check.length; i++) {
                    if (i % 2 !== 0) {
                        sum += parseInt(check[i], 10);
                    } else {
                        var tmp = '' + (parseInt(check[i], 10) * 2);
                        sum += parseInt(tmp[0], 10);
                        if (tmp.length === 2) {
                            sum += parseInt(tmp[1], 10);
                        }
                    }
                }

                // The control digit is calculated from the last digit of the sum.
                // If that last digit is not 0, subtract it from 10
                var lastDigit = sum - (Math.floor(sum / 10) * 10);
                if (lastDigit !== 0) {
                    lastDigit = 10 - lastDigit;
                }
                
                if ('KQS'.indexOf(letter) !== -1) {
                    // If the CIF starts with a K, Q or S, the control digit must be a letter
                    isValid = (control === 'JABCDEFGHI'[lastDigit]);
                } else if ('ABEH'.indexOf(letter) !== -1) {
                    // If it starts with A, B, E or H, it has to be a number
                    isValid = (control === ('' + lastDigit));
                } else {
                    // In any other case, it doesn't matter
                    isValid = (control === ('' + lastDigit) || control === 'JABCDEFGHI'[lastDigit]);
                }

                return {
                    valid: isValid,
                    type: type
                };
            }
        },

        /**
         * Validate Finnish Personal Identity Code (HETU)
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
                return false;
            }
            var day       = parseInt(value.substr(0, 2), 10),
                month     = parseInt(value.substr(2, 2), 10),
                year      = parseInt(value.substr(4, 2), 10),
                centuries = {
                    '+': 1800,
                    '-': 1900,
                    'A': 2000
                };
            year = centuries[value.charAt(6)] + year;

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            var individual = parseInt(value.substr(7, 3), 10);
            if (individual < 2) {
                return false;
            }
            var n = value.substr(0, 6) + value.substr(7, 3) + '';
            n = parseInt(n, 10);
            return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);
        },

        /**
         * Validate Croatian personal identification number (OIB)
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish Personal Public Service Number (PPS)
         *
         * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // 2013 format
            if (value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))) {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            }
            // The old format
            else {
                return value.charAt(7) === getCheckDigit(value.substr(0, 7));
            }
        },

        /**
         * Validate Iceland national identification number (Kennitala)
         *
         *  @see http://en.wikipedia.org/wiki/Kennitala
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _is: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/-/g, '');
            var day     = parseInt(value.substr(0, 2), 10),
                month   = parseInt(value.substr(2, 2), 10),
                year    = parseInt(value.substr(4, 2), 10),
                century = parseInt(value.charAt(9), 10);

            year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }
            // Validate the check digit
            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            return (sum + '' === value.charAt(8));
        },

        /**
         * Validate Lithuanian Personal Code (Asmens kodas)
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
         * @see http://www.adomas.org/midi2007/pcode.html
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }
            var gender  = parseInt(value.charAt(0), 10),
                year    = parseInt(value.substr(1, 2), 10),
                month   = parseInt(value.substr(3, 2), 10),
                day     = parseInt(value.substr(5, 2), 10),
                century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
            year = century * 100 + year;
            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Validate the check digit
            var sum    = 0,
                weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum !== 10) {
                return sum + '' === value.charAt(10);
            }

            // Re-calculate the check digit
            sum    = 0;
            weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            for (i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Latvian Personal Code (Personas kods)
         *
         * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
                return false;
            }
            value = value.replace(/\D/g, '');
            // Check birth date
            var day   = parseInt(value.substr(0, 2), 10),
                month = parseInt(value.substr(2, 2), 10),
                year  = parseInt(value.substr(4, 2), 10);
            year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

            if (!FormValidation.Helper.date(year, month, day, true)) {
                return false;
            }

            // Check personal code
            var sum    = 0,
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum + 1) % 11 % 10;
            return (sum + '' === value.charAt(10));
        },

        /**
         * Validate Dutch national identification number (BSN)
         *
         * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _nl: function(value) {
            if (value.length < 8) {
                return false;
            }

            if (value.length === 8) {
                value = '0' + value;
            }
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)) {
                return false;
            }
            value = value.replace(/\./g, '');
            if (parseInt(value, 10) === 0) {
                return false;
            }
            var sum    = 0,
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += (9 - i) * parseInt(value.charAt(i), 10);
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.charAt(length - 1));
        },
        
        /**
         * Validate Poland citizen number (PESEL)
         * 
         * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
         * @see http://en.wikipedia.org/wiki/PESEL
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                length = value.length,
                weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(value.charAt(i), 10);
            }
            sum = sum % 10;
            if (sum === 0) {
                sum = 10;
            }
            sum = 10 - sum;

            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Romanian numerical personal code (CNP)
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (!/^[0-9]{13}$/.test(value)) {
                return false;
            }
            var gender = parseInt(value.charAt(0), 10);
            if (gender === 0 || gender === 7 || gender === 8) {
                return false;
            }

            // Determine the date of birth
            var year      = parseInt(value.substr(1, 2), 10),
                month     = parseInt(value.substr(3, 2), 10),
                day       = parseInt(value.substr(5, 2), 10),
                // The year of date is determined base on the gender
                centuries = {
                    '1': 1900,  // Male born between 1900 and 1999
                    '2': 1900,  // Female born between 1900 and 1999
                    '3': 1800,  // Male born between 1800 and 1899
                    '4': 1800,  // Female born between 1800 and 1899
                    '5': 2000,  // Male born after 2000
                    '6': 2000   // Female born after 2000
                };
            if (day > 31 && month > 12) {
                return false;
            }
            if (gender !== 9) {
                year = centuries[gender + ''] + year;
                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }
            }

            // Validate the check digit
            var sum    = 0,
                weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum === 10) {
                sum = 1;
            }
            return (sum + '' === value.charAt(length - 1));
        },

        /**
         * Validate Swedish personal identity number (personnummer)
         *
         * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _se: function(value) {
            if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
                return false;
            }
            value = value.replace(/[^0-9]/g, '');

            var year  = parseInt(value.substr(0, 2), 10) + 1900,
                month = parseInt(value.substr(2, 2), 10),
                day   = parseInt(value.substr(4, 2), 10);
            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovak national identifier number (RC)
         *
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sk: function(value) {
            // Slovakia uses the same format as Czech Republic
            return this._cz(value);
        },

        /**
         * Validate San Marino citizen number
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _sm: function(value) {
            return /^\d{5}$/.test(value);
        },

        /**
         * Validate Thailand citizen number
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _th: function(value) {
            if (value.length !== 13) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < 12; i++) {
                sum += parseInt(value.charAt(i), 10) * (13 - i);
            }

            return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
        },

        /**
         * Validate Turkish Identification Number
         *
         * @see https://en.wikipedia.org/wiki/Turkish_Identification_Number
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _tr: function(value) {
            if (value.length !== 11) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10);
            }

            return (sum % 10) === parseInt(value.charAt(10), 10);
        },

        /**
         * Validate South African ID
         *
         * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
         * @param {String} value The ID
         * @returns {Boolean}
         */
        _za: function(value) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
                return false;
            }
            var year        = parseInt(value.substr(0, 2), 10),
                currentYear = new Date().getFullYear() % 100,
                month       = parseInt(value.substr(2, 2), 10),
                day         = parseInt(value.substr(4, 2), 10);
            year = (year >= currentYear) ? (year + 1900) : (year + 2000);

            if (!FormValidation.Helper.date(year, month, day)) {
                return false;
            }

            // Validate the last check digit
            return FormValidation.Helper.luhn(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            identical: {
                'default': 'Please enter the same value'
            }
        }
    });

    FormValidation.Validator.identical = {
        html5Attributes: {
            message: 'message',
            field: 'field'
        },

        /**
         * Bind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        init: function(validator, $field, options, validatorName) {
            var compareWith = validator.getFieldElements(options.field);
            validator.onLiveChange(compareWith, 'live_' + validatorName, function() {
                var status = validator.getStatus($field, validatorName);
                if (status !== validator.STATUS_NOT_VALIDATED) {
                    validator.revalidateField($field);
                }
            });
        },

        /**
         * Unbind the validator on the live change of the field to compare with current one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         */
        destroy: function(validator, $field, options, validatorName) {
            var compareWith = validator.getFieldElements(options.field);
            validator.offLiveChange(compareWith, 'live_' + validatorName);
        },

        /**
         * Check if input value equals to value of particular one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - field: The name of field that will be used to compare with current one
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value       = validator.getFieldValue($field, validatorName),
                compareWith = validator.getFieldElements(options.field);
            if (compareWith === null || compareWith.length === 0) {
                return true;
            }

            var compareValue = validator.getFieldValue(compareWith, validatorName);
            if (value === compareValue) {
                validator.updateStatus(compareWith, validator.STATUS_VALID, validatorName);
                return true;
            }

            return false;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imei: {
                'default': 'Please enter a valid IMEI number'
            }
        }
    });

    FormValidation.Validator.imei = {
        /**
         * Validate IMEI (International Mobile Station Equipment Identity)
         *
         * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            switch (true) {
                case /^\d{15}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):
                    value = value.replace(/[^0-9]/g, '');
                    return FormValidation.Helper.luhn(value);

                case /^\d{14}$/.test(value):
                case /^\d{16}$/.test(value):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            imo: {
                'default': 'Please enter a valid IMO number'
            }
        }
    });

    FormValidation.Validator.imo = {
        /**
         * Validate IMO (International Maritime Organization)
         *
         * @see http://en.wikipedia.org/wiki/IMO_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            if (!/^IMO \d{7}$/i.test(value)) {
                return false;
            }
            
            // Grab just the digits
            var sum    = 0,
                digits = value.replace(/^.*(\d{7})$/, '$1');
            for (var i = 6; i >= 1; i--) {
                sum += (digits.slice((6 - i), -i) * (i + 1));
            }

            return sum % 10 === parseInt(digits.charAt(6), 10);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            integer: {
                'default': 'Please enter a valid number'
            }
        }
    });

    FormValidation.Validator.integer = {
        html5Attributes: {
            message: 'message',
            thousandsseparator: 'thousandsSeparator',
            decimalseparator: 'decimalSeparator'
        },

        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') === undefined || $field.attr('step') % 1 === 0);
        },

        /**
         * Return true if the input value is an integer
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following key:
         * - message: The invalid message
         * - thousandsSeparator: The thousands separator. It's empty by default
         * - decimalSeparator: The decimal separator. It's '.' by default
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var decimalSeparator   = options.decimalSeparator   || '.',
                thousandsSeparator = options.thousandsSeparator || '';
            decimalSeparator       = (decimalSeparator   === '.') ? '\\.' : decimalSeparator;
            thousandsSeparator     = (thousandsSeparator === '.') ? '\\.' : thousandsSeparator;

            var testRegexp         = new RegExp('^-?[0-9]{1,3}(' + thousandsSeparator + '[0-9]{3})*(' + decimalSeparator + '[0-9]+)?$'),
                thousandsReplacer  = new RegExp(thousandsSeparator, 'g');

            if (!testRegexp.test(value)) {
                return false;
            }

            // Replace thousands separator with blank
            if (thousandsSeparator) {
                value = value.replace(thousandsReplacer, '');
            }
            // Replace decimal separator with a dot
            if (decimalSeparator) {
                value = value.replace(decimalSeparator, '.');
            }

            if (isNaN(value) || !isFinite(value)) {
                return false;
            }
            // TODO: Use Number.isInteger() if available
            value = parseFloat(value);
            return Math.floor(value) === value;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ip: {
                'default': 'Please enter a valid IP address',
                ipv4: 'Please enter a valid IPv4 address',
                ipv6: 'Please enter a valid IPv6 address'
            }
        }
    });

    FormValidation.Validator.ip = {
        html5Attributes: {
            message: 'message',
            ipv4: 'ipv4',
            ipv6: 'ipv6'
        },

        /**
         * Return true if the input value is a IP address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - ipv4: Enable IPv4 validator, default to true
         * - ipv6: Enable IPv6 validator, default to true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }
            options = $.extend({}, { ipv4: true, ipv6: true }, options);

            var locale    = validator.getLocale(),
                ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
                ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/,
                valid     = false,
                message;

            switch (true) {
                case (options.ipv4 && !options.ipv6):
                    valid   = ipv4Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv4;
                    break;

                case (!options.ipv4 && options.ipv6):
                    valid   = ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip.ipv6;
                    break;

                case (options.ipv4 && options.ipv6):
                /* falls through */
                default:
                    valid   = ipv4Regex.test(value) || ipv6Regex.test(value);
                    message = options.message || FormValidation.I18n[locale].ip['default'];
                    break;
            }

            return {
                valid: valid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isbn: {
                'default': 'Please enter a valid ISBN number'
            }
        }
    });

    FormValidation.Validator.isbn = {
        /**
         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} [options] Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^\d{9}[\dX]$/.test(value):
                case (value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN10';
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(value):
                case (value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
                case (value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
                    type = 'ISBN13';
                    break;
                default:
                    return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0,
                i,
                checksum;

            switch (type) {
                case 'ISBN10':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(chars[i], 10) * (10 - i);
                    }
                    checksum = 11 - (sum % 11);
                    if (checksum === 11) {
                        checksum = 0;
                    } else if (checksum === 10) {
                        checksum = 'X';
                    }
                    return {
                        type: type,
                        valid: (checksum + '' === chars[length - 1])
                    };

                case 'ISBN13':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += ((i % 2 === 0) ? parseInt(chars[i], 10) : (parseInt(chars[i], 10) * 3));
                    }
                    checksum = 10 - (sum % 10);
                    if (checksum === 10) {
                        checksum = '0';
                    }
                    return {
                        type: type,
                        valid: (checksum + '' === chars[length - 1])
                    };

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            isin: {
                'default': 'Please enter a valid ISIN number'
            }
        }
    });

    FormValidation.Validator.isin = {
        // Available country codes
        // See http://isin.net/country-codes/
        COUNTRY_CODES: 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW',

        /**
         * Validate an ISIN (International Securities Identification Number)
         *
         * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            var regex = new RegExp('^(' + this.COUNTRY_CODES + ')[0-9A-Z]{10}$');
            if (!regex.test(value)) {
                return false;
            }

            var converted = '',
                length    = value.length;
            // Convert letters to number
            for (var i = 0; i < length - 1; i++) {
                var c = value.charCodeAt(i);
                converted += ((c > 57) ? (c - 55).toString() : value.charAt(i));
            }

            var digits = '',
                n      = converted.length,
                group  = (n % 2 !== 0) ? 0 : 1;
            for (i = 0; i < n; i++) {
                digits += (parseInt(converted[i], 10) * ((i % 2) === group ? 2 : 1) + '');
            }

            var sum = 0;
            for (i = 0; i < digits.length; i++) {
                sum += parseInt(digits.charAt(i), 10);
            }
            sum = (10 - (sum % 10)) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            ismn: {
                'default': 'Please enter a valid ISMN number'
            }
        }
    });

    FormValidation.Validator.ismn = {
        /**
         * Validate ISMN (International Standard Music Number)
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            var type;
            switch (true) {
                case /^M\d{9}$/.test(value):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN10';
                    break;
                case /^9790\d{9}$/.test(value):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):
                    type = 'ISMN13';
                    break;
                default:
                    return false;
            }

            if ('ISMN10' === type) {
                value = '9790' + value.substr(1);
            }

            // Replace all special characters except digits
            value = value.replace(/[^0-9]/gi, '');
            var length = value.length,
                sum    = 0,
                weight = [1, 3];
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i % 2];
            }
            sum = 10 - sum % 10;
            return {
                type: type,
                valid: (sum + '' === value.charAt(length - 1))
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            issn: {
                'default': 'Please enter a valid ISSN number'
            }
        }
    });

    FormValidation.Validator.issn = {
        /**
         * Validate ISSN (International Standard Serial Number)
         *
         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Groups are separated by a hyphen or a space
            if (!/^\d{4}\-\d{3}[\dX]$/.test(value)) {
                return false;
            }

            // Replace all special characters except digits and X
            value = value.replace(/[^0-9X]/gi, '');
            var chars  = value.split(''),
                length = chars.length,
                sum    = 0;

            if (chars[7] === 'X') {
                chars[7] = 10;
            }
            for (var i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return (sum % 11 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            lessThan: {
                'default': 'Please enter a value less than or equal to %s',
                notInclusive: 'Please enter a value less than %s'
            }
        }
    });

    FormValidation.Validator.lessThan = {
        html5Attributes: {
            message: 'message',
            value: 'value',
            inclusive: 'inclusive'
        },

        enableByHtml5: function($field) {
            var type = $field.attr('type'),
                max  = $field.attr('max');
            if (max && type !== 'date') {
                return {
                    value: max
                };
            }

            return false;
        },

        /**
         * Return true if the input value is less than or equal to given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - value: The number used to compare to. It can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - inclusive [optional]: Can be true or false. Default is true
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }
            
			value = this._format(value);

            var locale         = validator.getLocale(),
                compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
                compareToValue = this._format(compareTo);

            return (options.inclusive === true || options.inclusive === undefined)
                    ? {
                        valid: $.isNumeric(value) && parseFloat(value) <= compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan['default'], compareTo)
                    }
                    : {
                        valid: $.isNumeric(value) && parseFloat(value) < compareToValue,
                        message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].lessThan.notInclusive, compareTo)
                    };
        },

        _format: function(value) {
            return (value + '').replace(',', '.');
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            mac: {
                'default': 'Please enter a valid MAC address'
            }
        }
    });

    FormValidation.Validator.mac = {
        /**
         * Return true if the input value is a MAC address.
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            meid: {
                'default': 'Please enter a valid MEID number'
            }
        }
    });

    FormValidation.Validator.meid = {
        /**
         * Validate MEID (Mobile Equipment Identifier)
         *
         * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            switch (true) {
                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{15}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{19}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value):
                    // Grab the check digit
                    var cd = value.charAt(value.length - 1);

                    // Strip any non-hex chars
                    value = value.replace(/[- ]/g, '');

                    // If it's all digits, luhn base 10 is used
                    if (value.match(/^\d*$/i)) {
                        return FormValidation.Helper.luhn(value);
                    }

                    // Strip the check digit
                    value = value.slice(0, -1);

                    // Get every other char, and double it
                    var cdCalc = '';
                    for (var i = 1; i <= 13; i += 2) {
                        cdCalc += (parseInt(value.charAt(i), 16) * 2).toString(16);
                    }

                    // Get the sum of each char in the string
                    var sum = 0;
                    for (i = 0; i < cdCalc.length; i++) {
                        sum += parseInt(cdCalc.charAt(i), 16);
                    }

                    // If the last digit of the calc is 0, the check digit is 0
                    return (sum % 10 === 0)
                            ? (cd === '0')
                            // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
                            // Double it and turn it into a hex char
                            : (cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16));

                // 14 digit hex representation (no check digit)
                case /^[0-9A-F]{14}$/i.test(value):
                // 14 digit hex representation + dashes or spaces (no check digit)
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value):
                // 18 digit decimal representation (no check digit)
                case /^\d{18}$/.test(value):
                // 18 digit decimal representation + dashes or spaces (no check digit)
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):
                    return true;

                default:
                    return false;
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            notEmpty: {
                'default': 'Please enter a value'
            }
        }
    });

    FormValidation.Validator.notEmpty = {
        enableByHtml5: function($field) {
            var required = $field.attr('required') + '';
            return ('required' === required || 'true' === required);
        },

        /**
         * Check if input value is empty or not
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var type = $field.attr('type');
            if ('radio' === type || 'checkbox' === type) {
                var ns = validator.getNamespace();
                return validator
                            .getFieldElements($field.attr('data-' + ns + '-field'))
                            .filter(':checked')
                            .length > 0;
            }

            if ('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return true;
            }

            var value = validator.getFieldValue($field, validatorName);
            return $.trim(value) !== '';
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            numeric: {
                'default': 'Please enter a valid float number'
            }
        }
    });

    FormValidation.Validator.numeric = {
        html5Attributes: {
            message: 'message',
            separator: 'separator',     // deprecated
            thousandsseparator: 'thousandsSeparator',
            decimalseparator: 'decimalSeparator'
        },

        enableByHtml5: function($field) {
            return ('number' === $field.attr('type')) && ($field.attr('step') !== undefined) && ($field.attr('step') % 1 !== 0);
        },

        /**
         * Validate decimal number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - thousandsSeparator: The thousands separator. It's empty by default
         * - separator, decimalSeparator: The decimal separator. It's '.' by default
         * The separator option is deprecated and should be replaced with decimalSeparator
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
                return false;
            }

            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var decimalSeparator   = options.separator || options.decimalSeparator || '.',
                thousandsSeparator = options.thousandsSeparator || '';

            // Support preceding zero numbers such as .5, -.5
            if (value.substr(0, 1) === decimalSeparator) {
                value = '0' + decimalSeparator + value.substr(1);
            } else if (value.substr(0, 2) === '-' + decimalSeparator) {
                value = '-0' + decimalSeparator + value.substr(2);
            }

            decimalSeparator   = (decimalSeparator   === '.') ? '\\.' : decimalSeparator;
            thousandsSeparator = (thousandsSeparator === '.') ? '\\.' : thousandsSeparator;

            var testRegexp         = new RegExp('^-?[0-9]{1,3}(' + thousandsSeparator + '[0-9]{3})*(' + decimalSeparator + '[0-9]+)?$'),
                thousandsReplacer  = new RegExp(thousandsSeparator, 'g');

            if (!testRegexp.test(value)) {
                return false;
            }

            // Replace thousands separator with blank
            if (thousandsSeparator) {
                value = value.replace(thousandsReplacer, '');
            }
            // Replace decimal separator with a dot
            if (decimalSeparator) {
                value = value.replace(decimalSeparator, '.');
            }

            return !isNaN(parseFloat(value)) && isFinite(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            phone: {
                'default': 'Please enter a valid phone number',
                country: 'Please enter a valid phone number in %s',
                countries: {
                    AE: 'United Arab Emirates',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CN: 'China',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IN: 'India',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PK: 'Pakistan',
                    RO: 'Romania',
                    RU: 'Russia',
                    SK: 'Slovakia',
                    TH: 'Thailand',
                    US: 'USA',
                    VE: 'Venezuela'
                }
            }
        }
    });

    FormValidation.Validator.phone = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // The supported countries
        COUNTRY_CODES: ['AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'],

        /**
         * Return true if the input value contains a valid phone number for the country
         * selected in the options
         *
         * @param {FormValidation.Base} validator Validate plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO-3166 country code. It can be
         *      - A country code
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = true;
            switch (country.toUpperCase()) {
                case 'AE':
                    // http://regexr.com/39tak
                    value   = $.trim(value);
                    isValid = (/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/).test(value);
                    break;
                    
                case 'BG':
                    // https://regex101.com/r/yE6vN4/1
                    // See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
                    value   = value.replace(/\+|\s|-|\/|\(|\)/gi,'');
                    isValid = (/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/).test(value);
                    break;

                case 'BR':
                    // http://regexr.com/399m1
                    value   = $.trim(value);
                    isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(value);
                    break;

                case 'CN':
                    // http://regexr.com/39dq4
                    value   = $.trim(value);
                    isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(value);
                    break;

                case 'CZ':
                    // http://regexr.com/39hhl
                    isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'DE':
                    // http://regexr.com/39pkg
                    value   = $.trim(value);
                    isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(value);
                    break;

                case 'DK':
                    // Mathing DK phone numbers with country code in 1 of 3 formats and an
                    // 8 digit phone number not starting with a 0 or 1. Can have 1 space
                    // between each character except inside the country code.
                    // http://regex101.com/r/sS8fO4/1
                    value   = $.trim(value);
                    isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(value);
                    break;

                case 'ES':
                    // http://regex101.com/r/rB9mA9/1
                    // Telephone numbers in Spain go like this:
                    //     9: Landline phones and special prefixes.
                    //     6, 7: Mobile phones.
                    //     5: VoIP lines.
                    //     8: Premium-rate services.
                    // There are also special 5-digit and 3-digit numbers, but
                    // maybe it would be overkill to include them all.
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/).test(value);
                    break;

                case 'FR':
                    // http://regexr.com/39a2p
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value);
                    break;

            	case 'GB':
                    // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
                    // http://regexr.com/38uhv
                    value   = $.trim(value);
                    isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(value);
                    break;
            
                case 'IN':
                    // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
                    // http://regex101.com/r/qL6eZ5/1
                    // May begin with +91. Supports mobile and land line numbers
                    value   = $.trim(value);
                    isValid = (/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/).test(value);
                    break;
                    
                case 'MA':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
                    // http://regexr.com/399n8
                    value   = $.trim(value);
                    isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(value);
                    break;
                
                case 'NL':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
                    // http://regexr.com/3aevr
                    value   = $.trim(value);
                    isValid = (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm).test(value);
                    break;
                
                case 'PK':
                    // http://regex101.com/r/yH8aV9/2
                    value   = $.trim(value);
                    isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(value);
                    break;

                case 'RO':
                    // All mobile network and land line
                    // http://regexr.com/39fv1
                    isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(value);
                    break;

                case 'RU':
                    // http://regex101.com/r/gW7yT5/5
                    isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(value);
                    break;

                case 'SK':
                    // http://regexr.com/3a95f
                    isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
                    break;

                case 'TH':
                    // http://regex101.com/r/vM5mZ4/2
                    isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(value);
                    break;

                case 'VE':
                    // http://regex101.com/r/eM2yY0/6
                    value   = $.trim(value);
                    isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(value);
                    break;
  
                case 'US':
                /* falls through */
                default:
                    // Make sure US phone numbers have 10 digits
                    // May start with 1, +1, or 1-; should discard
                    // Area code may be delimited with (), & sections may be delimited with . or -
                    // http://regexr.com/38mqi
                    isValid = (/^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/).test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].phone.country, FormValidation.I18n[locale].phone.countries[country])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            promise: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.promise = {
        priority: 999,

        html5Attributes: {
            message: 'message',
            promise: 'promise'
        },

        /**
         * Return result from a jQuery's Deferred object
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - promise: The method that passes parameters:
         *      promise: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of FormValidation.Base
         *          // $field is the field element
         *
         *          var dfd = new $.Deferred();
         *
         *          // Do something ...
         *
         *          // Resolve when particular task is done
         *          dfd.resolve({
         *              valid: true or false,       // Required
         *              message: 'Other message',   // Optional
         *              key: value                  // You can attach more data to reuse later
         *          });
         *
         *          // You can reject if there's error
         *          dfd.reject({
         *              message: 'Other message',   // Optional
         *              key: value                  // You can attach more data to reuse later
         *          });
         *
         *          return dfd.promise();
         *      }
         * - message: The invalid message
         * @returns {Deferred}
         */
        validate: function(validator, $field, options, validatorName) {
            var value   = validator.getFieldValue($field, validatorName),
                dfd     = new $.Deferred(),
                promise = FormValidation.Helper.call(options.promise, [value, validator, $field]);

            promise
                .done(function(result) {
                    dfd.resolve($field, validatorName, result);
                })
                .fail(function(result) {
                    result = result || {};
                    result.valid = false;
                    dfd.resolve($field, validatorName, result);
                });

            return dfd;
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            regexp: {
                'default': 'Please enter a value matching the pattern'
            }
        }
    });

    FormValidation.Validator.regexp = {
        html5Attributes: {
            message: 'message',
            flags: 'flags',
            regexp: 'regexp'
        },

        enableByHtml5: function($field) {
            var pattern = $field.attr('pattern');
            if (pattern) {
                return {
                    regexp: pattern
                };
            }

            return false;
        },

        /**
         * Check if the element value matches given regular expression
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of the following key:
         * - regexp: The regular expression you need to check
         * - flags: If specified, flags can have any combination of Javascript regular expression flags such as:
         *      g: global match
         *      i: ignore case
         *      m: multiple line
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var regexp = ('string' === typeof options.regexp)
                        ? (options.flags ? new RegExp(options.regexp, options.flags) : new RegExp(options.regexp))
                        : options.regexp;
            return regexp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            remote: {
                'default': 'Please enter a valid value'
            }
        }
    });

    FormValidation.Validator.remote = {
        priority: 1000,

        html5Attributes: {
            async: 'async',
            crossdomain: 'crossDomain',
            data: 'data',
            datatype: 'dataType',
            delay: 'delay',
            message: 'message',
            name: 'name',
            type: 'type',
            url: 'url',
            validkey: 'validKey'
        },

        /**
         * Destroy the timer when destroying the FormValidation (using validator.destroy() method)
         */
        destroy: function(validator, $field, options, validatorName) {
            var ns    = validator.getNamespace(),
                timer = $field.data(ns + '.' + validatorName + '.timer');
            if (timer) {
                clearTimeout(timer);
                $field.removeData(ns + '.' + validatorName + '.timer');
            }
        },

        /**
         * Request a remote server to check the input value
         *
         * @param {FormValidation.Base} validator Plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - async {Boolean} [optional] Indicate the Ajax request will be asynchronous or not. It's true by default
         * - crossDomain {Boolean} [optional]
         * - data {Object|Function} [optional]: By default, it will take the value
         *  {
         *      <fieldName>: <fieldValue>
         *  }
         * - dataType {String} [optional]: The type of data which is returned by remote server.
         * It can be json (default), text, script
         * - delay {Number} [optional]
         * - headers {String[]} [optional]: Additional headers
         * - message {String} [optional]: The invalid message
         * - name {String} [optional]: Override the field name for the request.
         * - type {String} [optional] Can be GET or POST (default)
         * - url {String|Function}
         * - validKey {String} [optional]: The valid key. It's "valid" by default
         * This is useful when connecting to external remote server or APIs provided by 3rd parties
         * @returns {Deferred}
         */
        validate: function(validator, $field, options, validatorName) {
            var ns    = validator.getNamespace(),
                value = validator.getFieldValue($field, validatorName),
                dfd   = new $.Deferred();
            if (value === '') {
                dfd.resolve($field, validatorName, { valid: true });
                return dfd;
            }
            var name     = $field.attr('data-' + ns + '-field'),
                data     = options.data || {},
                url      = options.url,
                validKey = options.validKey || 'valid';

            // Support dynamic data
            if ('function' === typeof data) {
                data = data.call(this, validator, $field, value);
            }

            // Parse string data from HTML5 attribute
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }

            // Support dynamic url
            if ('function' === typeof url) {
                url = url.call(this, validator, $field, value);
            }

            data[options.name || name] = value;

            var ajaxOptions = {
                async: options.async === null || options.async === true || options.async === 'true',
                data: data,
                dataType: options.dataType || 'json',
                headers: options.headers || {},
                type: options.type || 'GET',
                url: url
            };
            if (options.crossDomain !== null) {
                ajaxOptions.crossDomain = (options.crossDomain === true || options.crossDomain === 'true');
            }

            function runCallback() {
                var xhr = $.ajax(ajaxOptions);

                xhr
                    .success(function(response) {
                        response.valid = (response[validKey] === true || response[validKey] === 'true')
                                        ? true
                                        : (response[validKey] === false || response[validKey] === 'false' ? false : null);
                        dfd.resolve($field, validatorName, response);
                    })
                    .error(function(response) {
                        dfd.resolve($field, validatorName, {
                            valid: false
                        });
                    });

                dfd.fail(function() {
                    xhr.abort();
                });

                return dfd;
            }
            
            if (options.delay) {
                // Since the form might have multiple fields with the same name
                // I have to attach the timer to the field element
                if ($field.data(ns + '.' + validatorName + '.timer')) {
                    clearTimeout($field.data(ns + '.' + validatorName + '.timer'));
                }

                $field.data(ns + '.' + validatorName + '.timer', setTimeout(runCallback, options.delay));
                return dfd;
            } else {
                return runCallback();
            }
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            rtn: {
                'default': 'Please enter a valid RTN number'
            }
        }
    });

    FormValidation.Validator.rtn = {
        /**
         * Validate a RTN (Routing transit number)
         *
         * @see http://en.wikipedia.org/wiki/Routing_transit_number
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            if (!/^\d{9}$/.test(value)) {
                return false;
            }

            var sum = 0;
            for (var i = 0; i < value.length; i += 3) {
                sum += parseInt(value.charAt(i),     10) * 3
                    +  parseInt(value.charAt(i + 1), 10) * 7
                    +  parseInt(value.charAt(i + 2), 10);
            }
            return (sum !== 0 && sum % 10 === 0);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            sedol: {
                'default': 'Please enter a valid SEDOL number'
            }
        }
    });

    FormValidation.Validator.sedol = {
        /**
         * Validate a SEDOL (Stock Exchange Daily Official List)
         *
         * @see http://en.wikipedia.org/wiki/SEDOL
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            value = value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [1, 3, 1, 7, 3, 9, 1],
                length = value.length;
            for (var i = 0; i < length - 1; i++) {
	            sum += weight[i] * parseInt(value.charAt(i), 36);
	        }
	        sum = (10 - sum % 10) % 10;
            return sum + '' === value.charAt(length - 1);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siren: {
				'default': 'Please enter a valid SIREN number'
			}
		}
    });

	FormValidation.Validator.siren = {
		/**
		 * Check if a string is a siren number
		 *
		 * @param {FormValidation.Base} validator The validator plugin instance
		 * @param {jQuery} $field Field element
		 * @param {Object} options Consist of key:
         * - message: The invalid message
		 * @returns {Boolean}
		 */
		validate: function(validator, $field, options, validatorName) {
			var value = validator.getFieldValue($field, validatorName);
			if (value === '') {
				return true;
			}

            if (!/^\d{9}$/.test(value)) {
                return false;
            }
            return FormValidation.Helper.luhn(value);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
		'en_US': {
			siret: {
				'default': 'Please enter a valid SIRET number'
			}
		}
    });

	FormValidation.Validator.siret = {
        /**
         * Check if a string is a siret number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
		validate: function(validator, $field, options, validatorName) {
			var value = validator.getFieldValue($field, validatorName);
			if (value === '') {
				return true;
			}

			var sum    = 0,
                length = value.length,
                tmp;
			for (var i = 0; i < length; i++) {
                tmp = parseInt(value.charAt(i), 10);
				if ((i % 2) === 0) {
					tmp = tmp * 2;
					if (tmp > 9) {
						tmp -= 9;
					}
				}
				sum += tmp;
			}
			return (sum % 10 === 0);
		}
	};
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            step: {
                'default': 'Please enter a valid step of %s'
            }
        }
    });

    FormValidation.Validator.step = {
        html5Attributes: {
            message: 'message',
            base: 'baseValue',
            step: 'step'
        },

        /**
         * Return true if the input value is valid step one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Can consist of the following keys:
         * - baseValue: The base value
         * - step: The step
         * - message: The invalid message
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            options = $.extend({}, { baseValue: 0, step: 1 }, options);
            value   = parseFloat(value);
            if (!$.isNumeric(value)) {
                return false;
            }

            var round = function(x, precision) {
                    var m = Math.pow(10, precision);
                    x = x * m;
                    var sign   = (x > 0) | -(x < 0),
                        isHalf = (x % 1 === 0.5 * sign);
                    if (isHalf) {
                        return (Math.floor(x) + (sign > 0)) / m;
                    } else {
                        return Math.round(x) / m;
                    }
                },
                floatMod = function(x, y) {
                    if (y === 0.0) {
                        return 1.0;
                    }
                    var dotX      = (x + '').split('.'),
                        dotY      = (y + '').split('.'),
                        precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
                    return round(x - y * Math.floor(x / y), precision);
                };

            var locale = validator.getLocale(),
                mod    = floatMod(value - options.baseValue, options.step);
            return {
                valid: mod === 0.0 || mod === options.step,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].step['default'], [options.step])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringCase: {
                'default': 'Please enter only lowercase characters',
                upper: 'Please enter only uppercase characters'
            }
        }
    });

    FormValidation.Validator.stringCase = {
        html5Attributes: {
            message: 'message',
            'case': 'case'
        },

        /**
         * Check if a string is a lower or upper case one
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - case: Can be 'lower' (default) or 'upper'
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                stringCase = (options['case'] || 'lower').toLowerCase();
            return {
                valid: ('upper' === stringCase) ? value === value.toUpperCase() : value === value.toLowerCase(),
                message: options.message || (('upper' === stringCase) ? FormValidation.I18n[locale].stringCase.upper : FormValidation.I18n[locale].stringCase['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            stringLength: {
                'default': 'Please enter a value with valid length',
                less: 'Please enter less than %s characters',
                more: 'Please enter more than %s characters',
                between: 'Please enter value between %s and %s characters long'
            }
        }
    });

    FormValidation.Validator.stringLength = {
        html5Attributes: {
            message: 'message',
            min: 'min',
            max: 'max',
            trim: 'trim',
            utf8bytes: 'utf8Bytes'
        },

        enableByHtml5: function($field) {
            var options   = {},
                maxLength = $field.attr('maxlength'),
                minLength = $field.attr('minlength');
            if (maxLength) {
                options.max = parseInt(maxLength, 10);
            }
            if (minLength) {
                options.min = parseInt(minLength, 10);
            }

            return $.isEmptyObject(options) ? false : options;
        },

        /**
         * Check if the length of element value is less or more than given number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consists of following keys:
         * - min
         * - max
         * At least one of two keys is required
         * The min, max keys define the number which the field value compares to. min, max can be
         *      - A number
         *      - Name of field which its value defines the number
         *      - Name of callback function that returns the number
         *      - A callback function that returns the number
         *
         * - message: The invalid message
         * - trim: Indicate the length will be calculated after trimming the value or not. It is false, by default
         * - utf8bytes: Evaluate string length in UTF-8 bytes, default to false
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (options.trim === true || options.trim === 'true') {
                value = $.trim(value);
            }

            if (value === '') {
                return true;
            }

            var locale     = validator.getLocale(),
                min        = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
                max        = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
                // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
                utf8Length = function(str) {
                                 var s = str.length;
                                 for (var i = str.length - 1; i >= 0; i--) {
                                     var code = str.charCodeAt(i);
                                     if (code > 0x7f && code <= 0x7ff) {
                                         s++;
                                     } else if (code > 0x7ff && code <= 0xffff) {
                                         s += 2;
                                     }
                                     if (code >= 0xDC00 && code <= 0xDFFF) {
                                         i--;
                                     }
                                 }
                                 return s;
                             },
                length     = options.utf8Bytes ? utf8Length(value) : value.length,
                isValid    = true,
                message    = options.message || FormValidation.I18n[locale].stringLength['default'];

            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                isValid = false;
            }

            switch (true) {
                case (!!min && !!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.between, [parseInt(min, 10), parseInt(max, 10)]);
                    break;

                case (!!min):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.more, parseInt(min, 10) - 1);
                    break;

                case (!!max):
                    message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].stringLength.less, parseInt(max, 10) + 1);
                    break;

                default:
                    break;
            }

            return {
                valid: isValid,
                message: message
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uri: {
                'default': 'Please enter a valid URI'
            }
        }
    });

    FormValidation.Validator.uri = {
        html5Attributes: {
            message: 'message',
            allowlocal: 'allowLocal',
            allowemptyprotocol: 'allowEmptyProtocol',
            protocol: 'protocol'
        },

        enableByHtml5: function($field) {
            return ('url' === $field.attr('type'));
        },

        /**
         * Return true if the input value is a valid URL
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options
         * - message: The error message
         * - allowLocal: Allow the private and local network IP. Default to false
         * - allowEmptyProtocol: Allow the URI without protocol. Default to false
         * - protocol: The protocols, separated by a comma. Default to "http, https, ftp"
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Credit to https://gist.github.com/dperini/729294
            //
            // Regular Expression for URL validation
            //
            // Author: Diego Perini
            // Updated: 2010/12/05
            //
            // the regular expression composed & commented
            // could be easily tweaked for RFC compliance,
            // it was expressly modified to fit & satisfy
            // these test for an URL shortener:
            //
            //   http://mathiasbynens.be/demo/url-regex
            //
            // Notes on possible differences from a standard/generic validation:
            //
            // - utf-8 char class take in consideration the full Unicode range
            // - TLDs are mandatory unless `allowLocal` is true
            // - protocols have been restricted to ftp, http and https only as requested
            //
            // Changes:
            //
            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
            //   first and last IP address of each class is considered invalid
            //   (since they are broadcast/network addresses)
            //
            // - Added exclusion of private, reserved and/or local networks ranges
            //   unless `allowLocal` is true
            //
            // - Added possibility of choosing a custom protocol
            //
            // - Add option to validate without protocol
            //
            var allowLocal         = options.allowLocal === true || options.allowLocal === 'true',
                allowEmptyProtocol = options.allowEmptyProtocol === true || options.allowEmptyProtocol === 'true',
                protocol           = (options.protocol || 'http, https, ftp').split(',').join('|').replace(/\s/g, ''),
                urlExp             = new RegExp(
                    "^" +
                    // protocol identifier
                    "(?:(?:" + protocol + ")://)" +
                    // allow empty protocol
                    (allowEmptyProtocol ? '?' : '') +
                    // user:pass authentication
                    "(?:\\S+(?::\\S*)?@)?" +
                    "(?:" +
                    // IP address exclusion
                    // private & local networks
                    (allowLocal
                        ? ''
                        : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                           "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                           "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broadcast addresses
                    // (first & last IP address of each class)
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                    "|" +
                    // host name
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                    // domain name
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                    // TLD identifier
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    // Allow intranet sites (no TLD) if `allowLocal` is true
                    (allowLocal ? '?' : '') +
                    ")" +
                    // port number
                    "(?::\\d{2,5})?" +
                    // resource path
                    "(?:/[^\\s]*)?" +
                    "$", "i"
                );

            return urlExp.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            uuid: {
                'default': 'Please enter a valid UUID number',
                version: 'Please enter a valid UUID version %s number'
            }
        }
    });

    FormValidation.Validator.uuid = {
        html5Attributes: {
            message: 'message',
            version: 'version'
        },

        /**
         * Return true if and only if the input value is a valid UUID string
         *
         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - version: Can be 3, 4, 5, null
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
            var locale   = validator.getLocale(),
                patterns = {
                    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                },
                version = options.version ? (options.version + '') : 'all';
            return {
                valid: (null === patterns[version]) ? true : patterns[version].test(value),
                message: options.version
                            ? FormValidation.Helper.format(options.message || FormValidation.I18n[locale].uuid.version, options.version)
                            : (options.message || FormValidation.I18n[locale].uuid['default'])
            };
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vat: {
                'default': 'Please enter a valid VAT number',
                country: 'Please enter a valid VAT number in %s',
                countries: {
                    AT: 'Austria',
                    BE: 'Belgium',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CH: 'Switzerland',
                    CY: 'Cyprus',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    EE: 'Estonia',
                    ES: 'Spain',
                    FI: 'Finland',
                    FR: 'France',
                    GB: 'United Kingdom',
                    GR: 'Greek',
                    EL: 'Greek',
                    HU: 'Hungary',
                    HR: 'Croatia',
                    IE: 'Ireland',
                    IS: 'Iceland',
                    IT: 'Italy',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MT: 'Malta',
                    NL: 'Netherlands',
                    NO: 'Norway',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    RS: 'Serbia',
                    SE: 'Sweden',
                    SI: 'Slovenia',
                    SK: 'Slovakia',
                    VE: 'Venezuela',
                    ZA: 'South Africa'
                }
            }
        }
    });

    FormValidation.Validator.vat = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        // Supported country codes
        COUNTRY_CODES: [
            'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU',
            'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE',
            'ZA'
        ],

        /**
         * Validate an European VAT number
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The ISO 3166-1 country code. It can be
         *      - One of country code defined in COUNTRY_CODES
         *      - Name of field which its value defines the country code
         *      - Name of callback function that returns the country code
         *      - A callback function that returns the country code
         * @returns {Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (!country) {
                country = value.substr(0, 2);
            } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                // Determine the country code
                country = validator.getDynamicOption($field, country);
            }

            if ($.inArray(country, this.COUNTRY_CODES) === -1) {
                return true;
            }

            var method  = ['_', country.toLowerCase()].join(''),
                result = this[method](value);
            result         = (result === true || result === false) ? { valid: result } : result;
            result.message = FormValidation.Helper.format(options.message || FormValidation.I18n[locale].vat.country, FormValidation.I18n[locale].vat.countries[country.toUpperCase()]);

            return result;
        },

        // VAT validators

        /**
         * Validate Austrian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _at: function(value) {
            if (/^ATU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^U[0-9]{8}$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [1, 2, 1, 2, 1, 2, 1],
                temp   = 0;
            for (var i = 0; i < 7; i++) {
                temp = parseInt(value.charAt(i), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
            }

            sum = 10 - (sum + 4) % 10;
            if (sum === 10) {
                sum = 0;
            }

            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Belgian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _be: function(value) {
            if (/^BE[0]{0,1}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0]{0,1}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 9) {
                value = '0' + value;
            }
            if (value.substr(1, 1) === '0') {
                return false;
            }

            var sum = parseInt(value.substr(0, 8), 10) + parseInt(value.substr(8, 2), 10);
            return (sum % 97 === 0);
        },

        /**
         * Validate Bulgarian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _bg: function(value) {
            if (/^BG[0-9]{9,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9,10}$/.test(value)) {
                return false;
            }

            var sum = 0, i = 0;

            // Legal entities
            if (value.length === 9) {
                for (i = 0; i < 8; i++) {
                    sum += parseInt(value.charAt(i), 10) * (i + 1);
                }
                sum = sum % 11;
                if (sum === 10) {
                    sum = 0;
                    for (i = 0; i < 8; i++) {
                        sum += parseInt(value.charAt(i), 10) * (i + 3);
                    }
                }
                sum = sum % 10;
                return (sum + '' === value.substr(8));
            }
            // Physical persons, foreigners and others
            else if (value.length === 10) {
                // Validate Bulgarian national identification numbers
                var egn = function(value) {
                        // Check the birth date
                        var year  = parseInt(value.substr(0, 2), 10) + 1900,
                            month = parseInt(value.substr(2, 2), 10),
                            day   = parseInt(value.substr(4, 2), 10);
                        if (month > 40) {
                            year += 100;
                            month -= 40;
                        } else if (month > 20) {
                            year -= 100;
                            month -= 20;
                        }

                        if (!FormValidation.Helper.date(year, month, day)) {
                            return false;
                        }

                        var sum    = 0,
                            weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = (sum % 11) % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Validate Bulgarian personal number of a foreigner
                    pnf = function(value) {
                        var sum    = 0,
                            weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = sum % 10;
                        return (sum + '' === value.substr(9, 1));
                    },
                    // Finally, consider it as a VAT number
                    vat = function(value) {
                        var sum    = 0,
                            weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
                        for (var i = 0; i < 9; i++) {
                            sum += parseInt(value.charAt(i), 10) * weight[i];
                        }
                        sum = 11 - sum % 11;
                        if (sum === 10) {
                            return false;
                        }
                        if (sum === 11) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(9, 1));
                    };
                return (egn(value) || pnf(value) || vat(value));
            }

            return false;
        },
        
        /**
         * Validate Brazilian VAT number (CNPJ)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _br: function(value) {
            if (value === '') {
                return true;
            }
            var cnpj = value.replace(/[^\d]+/g, '');
            if (cnpj === '' || cnpj.length !== 14) {
                return false;
            }

            // Remove invalids CNPJs
            if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
                cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
                cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
                cnpj === '99999999999999')
            {
                return false;
            }

            // Validate verification digits
            var length  = cnpj.length - 2,
                numbers = cnpj.substring(0, length),
                digits  = cnpj.substring(length),
                sum     = 0,
                pos     = length - 7;

            for (var i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result !== parseInt(digits.charAt(0), 10)) {
                return false;
            }

            length  = length + 1;
            numbers = cnpj.substring(0, length);
            sum     = 0;
            pos     = length - 7;
            for (i = length; i >= 1; i--) {
                sum += parseInt(numbers.charAt(length - i), 10) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            return (result === parseInt(digits.charAt(1), 10));
        },

        /**
         * Validate Swiss VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ch: function(value) {
            if (/^CHE[0-9]{9}(MWST)?$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^E[0-9]{9}(MWST)?$/.test(value)) {
                return false;
            }

            value = value.substr(1);
            var sum    = 0,
                weight = [5, 4, 3, 2, 7, 6, 5, 4];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 10) {
                return false;
            }
            if (sum === 11) {
                sum = 0;
            }

            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Cypriot VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cy: function(value) {
            if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
                return false;
            }

            // Do not allow to start with "12"
            if (value.substr(0, 2) === '12') {
                return false;
            }

            // Extract the next digit and multiply by the counter.
            var sum         = 0,
                translation = {
                    '0': 1,  '1': 0,  '2': 5,  '3': 7,  '4': 9,
                    '5': 13, '6': 15, '7': 17, '8': 19, '9': 21
                };
            for (var i = 0; i < 8; i++) {
                var temp = parseInt(value.charAt(i), 10);
                if (i % 2 === 0) {
                    temp = translation[temp + ''];
                }
                sum += temp;
            }

            sum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26];
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Czech Republic VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _cz: function(value) {
            if (/^CZ[0-9]{8,10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8,10}$/.test(value)) {
                return false;
            }

            var sum = 0,
                i   = 0;
            if (value.length === 8) {
                // Do not allow to start with '9'
                if (value.charAt(0) + '' === '9') {
                    return false;
                }

                sum = 0;
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }

                return (sum + '' === value.substr(7, 1));
            } else if (value.length === 9 && (value.charAt(0) + '' === '6')) {
                sum = 0;
                // Skip the first (which is 6)
                for (i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i + 1), 10) * (8 - i);
                }
                sum = 11 - sum % 11;
                if (sum === 10) {
                    sum = 0;
                }
                if (sum === 11) {
                    sum = 1;
                }
                sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
                return (sum + '' === value.substr(8, 1));
            } else if (value.length === 9 || value.length === 10) {
                // Validate Czech birth number (Rodné číslo), which is also national identifier
                var year  = 1900 + parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10) % 50 % 20,
                    day   = parseInt(value.substr(4, 2), 10);
                if (value.length === 9) {
                    if (year >= 1980) {
                        year -= 100;
                    }
                    if (year > 1953) {
                        return false;
                    }
                } else if (year < 1954) {
                    year += 100;
                }

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check that the birth date is not in the future
                if (value.length === 10) {
                    var check = parseInt(value.substr(0, 9), 10) % 11;
                    if (year < 1985) {
                        check = check % 10;
                    }
                    return (check + '' === value.substr(9, 1));
                }

                return true;
            }

            return false;
        },

        /**
         * Validate German VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _de: function(value) {
            if (/^DE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Danish VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _dk: function(value) {
            if (/^DK[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [2, 7, 6, 5, 4, 3, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Estonian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ee: function(value) {
            if (/^EE[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Spanish VAT number (NIF - Número de Identificación Fiscal)
         * Can be:
         * i) DNI (Documento nacional de identidad), for Spaniards
         * ii) NIE (Número de Identificación de Extranjeros), for foreigners
         * iii) CIF (Certificado de Identificación Fiscal), for legal entities and others
         *
         * @param {String} value VAT number
         * @returns {Boolean|Object}
         */
        _es: function(value) {
            if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
                return false;
            }

            var dni = function(value) {
                    var check = parseInt(value.substr(0, 8), 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                nie = function(value) {
                    var check = ['XYZ'.indexOf(value.charAt(0)), value.substr(1)].join('');
                    check = parseInt(check, 10);
                    check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                    return (check + '' === value.substr(8, 1));
                },
                cif = function(value) {
                    var first = value.charAt(0), check;
                    if ('KLM'.indexOf(first) !== -1) {
                        // K: Spanish younger than 14 year old
                        // L: Spanish living outside Spain without DNI
                        // M: Granted the tax to foreigners who have no NIE
                        check = parseInt(value.substr(1, 8), 10);
                        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                        return (check + '' === value.substr(8, 1));
                    } else if ('ABCDEFGHJNPQRSUVW'.indexOf(first) !== -1) {
                        var sum    = 0,
                            weight = [2, 1, 2, 1, 2, 1, 2],
                            temp   = 0;

                        for (var i = 0; i < 7; i++) {
                            temp = parseInt(value.charAt(i + 1), 10) * weight[i];
                            if (temp > 9) {
                                temp = Math.floor(temp / 10) + temp % 10;
                            }
                            sum += temp;
                        }
                        sum = 10 - sum % 10;
                        if (sum === 10) {
                            sum = 0;
                        }
                        return (sum + '' === value.substr(8, 1) || 'JABCDEFGHI'[sum] === value.substr(8, 1));
                    }

                    return false;
                };

            var first = value.charAt(0);
            if (/^[0-9]$/.test(first)) {
                return {
                    valid: dni(value),
                    type: 'DNI'
                };
            } else if (/^[XYZ]$/.test(first)) {
                return {
                    valid: nie(value),
                    type: 'NIE'
                };
            } else {
                return {
                    valid: cif(value),
                    type: 'CIF'
                };
            }
        },

        /**
         * Validate Finnish VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fi: function(value) {
            if (/^FI[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [7, 9, 10, 5, 8, 4, 2, 1];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate French VAT number (TVA - taxe sur la valeur ajoutée)
         * It's constructed by a SIREN number, prefixed by two characters.
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _fr: function(value) {
            if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
                return false;
            }

            if (!FormValidation.Helper.luhn(value.substr(2))) {
                return false;
            }

            if (/^[0-9]{2}$/.test(value.substr(0, 2))) {
                // First two characters are digits
                return value.substr(0, 2) === (parseInt(value.substr(2) + '12', 10) % 97 + '');
            } else {
                // The first characters cann't be O and I
                var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
                    check;
                // First one is digit
                if (/^[0-9]{1}$/.test(value.charAt(0))) {
                    check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;
                } else {
                    check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;
                }
                return ((parseInt(value.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11);
            }
        },

        /**
         * Validate United Kingdom VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gb: function(value) {
            if (/^GB[0-9]{9}$/.test(value)             /* Standard */
                || /^GB[0-9]{12}$/.test(value)         /* Branches */
                || /^GBGD[0-9]{3}$/.test(value)        /* Government department */
                || /^GBHA[0-9]{3}$/.test(value)        /* Health authority */
                || /^GB(GD|HA)8888[0-9]{5}$/.test(value))
            {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)
                && !/^[0-9]{12}$/.test(value)
                && !/^GD[0-9]{3}$/.test(value)
                && !/^HA[0-9]{3}$/.test(value)
                && !/^(GD|HA)8888[0-9]{5}$/.test(value))
            {
                return false;
            }

            var length = value.length;
            if (length === 5) {
                var firstTwo  = value.substr(0, 2),
                    lastThree = parseInt(value.substr(2), 10);
                return ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500);
            } else if (length === 11 && ('GD8888' === value.substr(0, 6) || 'HA8888' === value.substr(0, 6))) {
                if (('GD' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) >= 500)
                    || ('HA' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) < 500))
                {
                    return false;
                }
                return (parseInt(value.substr(6, 3), 10) % 97 === parseInt(value.substr(9, 2), 10));
            } else if (length === 9 || length === 12) {
                var sum    = 0,
                    weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 97;

                if (parseInt(value.substr(0, 3), 10) >= 100) {
                    return (sum === 0 || sum === 42 || sum === 55);
                } else {
                    return (sum === 0);
                }
            }

            return true;
        },

        /**
         * Validate Greek VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _gr: function(value) {
            if (/^(GR|EL)[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            if (value.length === 8) {
                value = '0' + value;
            }

            var sum    = 0,
                weight = [256, 128, 64, 32, 16, 8, 4, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = (sum % 11) % 10;

            return (sum + '' === value.substr(8, 1));
        },

        // EL is traditionally prefix of Greek VAT numbers
        _el: function(value) {
            return this._gr(value);
        },

        /**
         * Validate Hungarian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hu: function(value) {
            if (/^HU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 7, 3, 1, 9, 7, 3, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 10 === 0);
        },

        /**
         * Validate Croatian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _hr: function(value) {
            if (/^HR[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            return FormValidation.Helper.mod11And10(value);
        },

        /**
         * Validate Irish VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ie: function(value) {
            if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
                return false;
            }

            var getCheckDigit = function(value) {
                while (value.length < 7) {
                    value = '0' + value;
                }
                var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
                    sum      = 0;
                for (var i = 0; i < 7; i++) {
                    sum += parseInt(value.charAt(i), 10) * (8 - i);
                }
                sum += 9 * alphabet.indexOf(value.substr(7));
                return alphabet[sum % 23];
            };

            // The first 7 characters are digits
            if (/^[0-9]+$/.test(value.substr(0, 7))) {
                // New system
                return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
            } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(value.charAt(1)) !== -1) {
                // Old system
                return value.charAt(7) === getCheckDigit(value.substr(2, 5) + value.substr(0, 1) + '');
            }

            return true;
        },

        /**
         * Validate Icelandic VAT (VSK) number
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
        _is: function(value) {
            if (/^IS[0-9]{5,6}$/.test(value)) {
                value = value.substr(2);
            }
            return /^[0-9]{5,6}$/.test(value);
        },

        /**
         * Validate Italian VAT number, which consists of 11 digits.
         * - First 7 digits are a company identifier
         * - Next 3 are the province of residence
         * - The last one is a check digit
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _it: function(value) {
            if (/^IT[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            if (parseInt(value.substr(0, 7), 10) === 0) {
                return false;
            }

            var lastThree = parseInt(value.substr(7, 3), 10);
            if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
                return false;
            }

            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Lithuanian VAT number
         * It can be:
         * - 9 digits, for legal entities
         * - 12 digits, for temporarily registered taxpayers
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lt: function(value) {
            if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
                return false;
            }

            var length = value.length,
                sum    = 0,
                i;
            for (i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * (1 + i % 9);
            }
            var check = sum % 11;
            if (check === 10) {
                sum = 0;
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * (1 + (i + 2) % 9);
                }
            }
            check = check % 11 % 10;
            return (check + '' === value.charAt(length - 1));
        },

        /**
         * Validate Luxembourg VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lu: function(value) {
            if (/^LU[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            return ((parseInt(value.substr(0, 6), 10) % 89) + '' === value.substr(6, 2));
        },

        /**
         * Validate Latvian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _lv: function(value) {
            if (/^LV[0-9]{11}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{11}$/.test(value)) {
                return false;
            }

            var first  = parseInt(value.charAt(0), 10),
                sum    = 0,
                weight = [],
                i,
                length = value.length;
            if (first > 3) {
                // Legal entity
                sum    = 0;
                weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                for (i = 0; i < length; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                return (sum === 3);
            } else {
                // Check birth date
                var day   = parseInt(value.substr(0, 2), 10),
                    month = parseInt(value.substr(2, 2), 10),
                    year  = parseInt(value.substr(4, 2), 10);
                year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

                if (!FormValidation.Helper.date(year, month, day)) {
                    return false;
                }

                // Check personal code
                sum    = 0;
                weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
                for (i = 0; i < length - 1; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = (sum + 1) % 11 % 10;
                return (sum + '' === value.charAt(length - 1));
            }
        },

        /**
         * Validate Maltese VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _mt: function(value) {
            if (/^MT[0-9]{8}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{8}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [3, 4, 6, 7, 8, 9, 10, 1];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 37 === 0);
        },

        /**
         * Validate Dutch VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _nl: function(value) {
            if (/^NL[0-9]{9}B[0-9]{2}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}B[0-9]{2}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Norwegian VAT number
         *
         * @see http://www.brreg.no/english/coordination/number.html
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _no: function(value) {
            if (/^NO[0-9]{9}$/.test(value)) {
               value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
               return false;
            }

            var sum    = 0,
                weight = [3, 2, 7, 6, 5, 4, 3, 2];
            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Polish VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pl: function(value) {
            if (/^PL[0-9]{10}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];

            for (var i = 0; i < 10; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            return (sum % 11 === 0);
        },

        /**
         * Validate Portuguese VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _pt: function(value) {
            if (/^PT[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum    = 0,
                weight = [9, 8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum > 9) {
                sum = 0;
            }
            return (sum + '' === value.substr(8, 1));
        },

        /**
         * Validate Romanian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ro: function(value) {
            if (/^RO[1-9][0-9]{1,9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9]{1,9}$/.test(value)) {
                return false;
            }

            var length = value.length,
                weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length),
                sum    = 0;
            for (var i = 0; i < length - 1; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }

            sum = (10 * sum) % 11 % 10;
            return (sum + '' === value.substr(length - 1, 1));
        },

        /**
         * Validate Russian VAT number (Taxpayer Identification Number - INN)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ru: function(value) {
            if (/^RU([0-9]{10}|[0-9]{12})$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^([0-9]{10}|[0-9]{12})$/.test(value)) {
                return false;
            }

            var i = 0;
            if (value.length === 10) {
                var sum    = 0,
                    weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (i = 0; i < 10; i++) {
                    sum += parseInt(value.charAt(i), 10) * weight[i];
                }
                sum = sum % 11;
                if (sum > 9) {
                    sum = sum % 10;
                }

                return (sum + '' === value.substr(9, 1));
            } else if (value.length === 12) {
                var sum1    = 0,
                    weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    sum2    = 0,
                    weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

                for (i = 0; i < 11; i++) {
                    sum1 += parseInt(value.charAt(i), 10) * weight1[i];
                    sum2 += parseInt(value.charAt(i), 10) * weight2[i];
                }
                sum1 = sum1 % 11;
                if (sum1 > 9) {
                    sum1 = sum1 % 10;
                }
                sum2 = sum2 % 11;
                if (sum2 > 9) {
                    sum2 = sum2 % 10;
                }

                return (sum1 + '' === value.substr(10, 1) && sum2 + '' === value.substr(11, 1));
            }

            return false;
        },

        /**
         * Validate Serbian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _rs: function(value) {
            if (/^RS[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{9}$/.test(value)) {
                return false;
            }

            var sum  = 10,
                temp = 0;
            for (var i = 0; i < 8; i++) {
                temp = (parseInt(value.charAt(i), 10) + sum) % 10;
                if (temp === 0) {
                    temp = 10;
                }
                sum = (2 * temp) % 11;
            }

            return ((sum + parseInt(value.substr(8, 1), 10)) % 10 === 1);
        },

        /**
         * Validate Swedish VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _se: function(value) {
            if (/^SE[0-9]{10}01$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[0-9]{10}01$/.test(value)) {
                return false;
            }

            value = value.substr(0, 10);
            return FormValidation.Helper.luhn(value);
        },

        /**
         * Validate Slovenian VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _si: function(value) {
            // The Slovenian VAT numbers don't start with zero
            var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
            if (!res) {
                return false;
            }
            if (res[1]) {
                value = value.substr(2);
            }

            var sum    = 0,
                weight = [8, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 7; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(7, 1));
        },

        /**
         * Validate Slovak VAT number
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _sk: function(value) {
            if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
                return false;
            }

            return (parseInt(value, 10) % 11 === 0);
        },

        /**
         * Validate Venezuelan VAT number (RIF)
         *
         * @param {String} value VAT number
         * @returns {Boolean}
         */
        _ve: function(value) {
            if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }
            if (!/^[VEJPG][0-9]{9}$/.test(value)) {
                return false;
            }

            var types  = {
                    'V': 4,
                    'E': 8,
                    'J': 12,
                    'P': 16,
                    'G': 20
                },
                sum    = types[value.charAt(0)],
                weight = [3, 2, 7, 6, 5, 4, 3, 2];

            for (var i = 0; i < 8; i++) {
                sum += parseInt(value.charAt(i + 1), 10) * weight[i];
            }

            sum = 11 - sum % 11;
            if (sum === 11 || sum === 10) {
                sum = 0;
            }
            return (sum + '' === value.substr(9, 1));
        },

        /**
         * Validate South African VAT number
         *
         * @params {String} value VAT number
         * @returns {Boolean}
         */
         _za: function(value) {
            if (/^ZA4[0-9]{9}$/.test(value)) {
                value = value.substr(2);
            }

            return /^4[0-9]{9}$/.test(value);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            vin: {
                'default': 'Please enter a valid VIN number'
            }
        }
    });

    FormValidation.Validator.vin = {
        /**
         * Validate an US VIN (Vehicle Identification Number)
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * @returns {Boolean}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '') {
                return true;
            }

            // Don't accept I, O, Q characters
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)) {
                return false;
            }

            value = value.toUpperCase();
            var chars   = {
                    A: 1,   B: 2,   C: 3,   D: 4,   E: 5,   F: 6,   G: 7,   H: 8,
                    J: 1,   K: 2,   L: 3,   M: 4,   N: 5,           P: 7,           R: 9,
                            S: 2,   T: 3,   U: 4,   V: 5,   W: 6,   X: 7,   Y: 8,   Z: 9,
                    '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0
                },
                weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                sum     = 0,
                length  = value.length;
            for (var i = 0; i < length; i++) {
                sum += chars[value.charAt(i) + ''] * weights[i];
            }

            var reminder = sum % 11;
            if (reminder === 10) {
                reminder = 'X';
            }

            return (reminder + '') === value.charAt(8);
        }
    };
}(jQuery));
;(function($) {
    FormValidation.I18n = $.extend(true, FormValidation.I18n || {}, {
        'en_US': {
            zipCode: {
                'default': 'Please enter a valid postal code',
                country: 'Please enter a valid postal code in %s',
                countries: {
                    AT: 'Austria',
                    BG: 'Bulgaria',
                    BR: 'Brazil',
                    CA: 'Canada',
                    CH: 'Switzerland',
                    CZ: 'Czech Republic',
                    DE: 'Germany',
                    DK: 'Denmark',
                    ES: 'Spain',
                    FR: 'France',
                    GB: 'United Kingdom',
                    IE: 'Ireland',
                    IN: 'India',
                    IT: 'Italy',
                    MA: 'Morocco',
                    NL: 'Netherlands',
                    PL: 'Poland',
                    PT: 'Portugal',
                    RO: 'Romania',
                    RU: 'Russia',
                    SE: 'Sweden',
                    SG: 'Singapore',
                    SK: 'Slovakia',
                    US: 'USA'
                }
            }
        }
    });

    FormValidation.Validator.zipCode = {
        html5Attributes: {
            message: 'message',
            country: 'country'
        },

        COUNTRY_CODES: ['AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],

        /**
         * Return true if and only if the input value is a valid country zip code
         *
         * @param {FormValidation.Base} validator The validator plugin instance
         * @param {jQuery} $field Field element
         * @param {Object} options Consist of key:
         * - message: The invalid message
         * - country: The country
         *
         * The country can be defined by:
         * - An ISO 3166 country code
         * - Name of field which its value defines the country code
         * - Name of callback function that returns the country code
         * - A callback function that returns the country code
         *
         *  callback: function(value, validator, $field) {
         *      // value is the value of field
         *      // validator is the FormValidation.Base instance
         *      // $field is jQuery element representing the field
         *  }
         *
         * @returns {Boolean|Object}
         */
        validate: function(validator, $field, options, validatorName) {
            var value = validator.getFieldValue($field, validatorName);
            if (value === '' || !options.country) {
                return true;
            }

            var locale  = validator.getLocale(),
                country = options.country;
            if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
                // Try to determine the country
                country = validator.getDynamicOption($field, country);
            }

            if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
                return true;
            }

            var isValid = false;
            country = country.toUpperCase();
            switch (country) {
                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
                case 'AT':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'BG':
                    isValid = /^([1-9]{1}[0-9]{3})$/.test($.trim(value));
                    break;

                case 'BR':
                    isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
                    break;

                case 'CA':
                    isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
                    break;

                case 'CH':
                    isValid = /^([1-9]{1})(\d{3})$/.test(value);
                    break;

                case 'CZ':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
                case 'DE':
                    isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);
                    break;

                case 'DK':
                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
                    break;

                // Zip codes in Spain go from 01XXX to 52XXX.
                // Test: http://refiddle.com/1ufo
                case 'ES':
                    isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_France
                case 'FR':
                    isValid = /^[0-9]{5}$/i.test(value);
                    break;

                case 'GB':
                    isValid = this._gb(value);
                    break;

                // Indian PIN (Postal Index Number) validation
                // http://en.wikipedia.org/wiki/Postal_Index_Number
                // Test: http://regex101.com/r/kV0vH3/1
                case 'IN':
                    isValid = /^\d{3}\s?\d{3}$/.test(value);
                    break;

                // http://www.eircode.ie/docs/default-source/Common/prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
                // Test: http://refiddle.com/1kpl
                case 'IE':
                    isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
                case 'IT':
                    isValid = /^(I-|IT-)?\d{5}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
                case 'MA':
                    isValid = /^[1-9][0-9]{4}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
                case 'NL':
                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
                case 'PL':
                    isValid = /^[0-9]{2}\-[0-9]{3}$/.test(value);
                    break;

                // Test: http://refiddle.com/1l2t
                case 'PT':
                    isValid = /^[1-9]\d{3}-\d{3}$/.test(value);
                    break;

                case 'RO':
                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
                    break;

                case 'RU':
                    isValid = /^[0-9]{6}$/i.test(value);
                    break;

                case 'SE':
                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
                    break;

                case 'SG':
                    isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
                    break;

                case 'SK':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
                    break;

                case 'US':
                /* falls through */
                default:
                    isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
                    break;
            }

            return {
                valid: isValid,
                message: FormValidation.Helper.format(options.message || FormValidation.I18n[locale].zipCode.country, FormValidation.I18n[locale].zipCode.countries[country])
            };
        },

        /**
         * Validate United Kingdom postcode
         *
         * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
         * @param {String} value The postcode
         * @returns {Boolean}
         */
        _gb: function(value) {
            var firstChar  = '[ABCDEFGHIJKLMNOPRSTUWYZ]',     // Does not accept QVX
                secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]',     // Does not accept IJZ
                thirdChar  = '[ABCDEFGHJKPMNRSTUVWXY]',
                fourthChar = '[ABEHMNPRVWXY]',
                fifthChar  = '[ABDEFGHJLNPQRSTUWXYZ]',
                regexps    = [
                    // AN NAA, ANN NAA, AAN NAA, AANN NAA format
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // ANA NAA
                    new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
                    // AANA NAA
                    new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),

                    new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),        // BFPO postcodes
                    /^(GIR)(\s*)(0AA)$/i,                       // Special postcode GIR 0AA
                    /^(BFPO)(\s*)([0-9]{1,4})$/i,               // Standard BFPO numbers
                    /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,        // c/o BFPO numbers
                    /^([A-Z]{4})(\s*)(1ZZ)$/i,                  // Overseas Territories
                    /^(AI-2640)$/i                              // Anguilla
                ];
            for (var i = 0; i < regexps.length; i++) {
                if (regexps[i].test(value)) {
                    return true;
                }
            }

            return false;
        }
    };
}(jQuery));

/**
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2016 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */

/**
 * This class supports validating Bootstrap 4 alpha form (http://v4-alpha.getbootstrap.com/)
 */
(function($) {
    FormValidation.Framework.Bootstrap4 = function(element, options, namespace) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]:not([formnovalidate])',
                // The class of disabled button
                disabled: 'disabled'
            },
            err: {
                // http://v4-alpha.getbootstrap.com/components/forms/#validation
                clazz: 'form-control-feedback',
                parent: '^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$'
            },
            // - Use FontAwesome icons:
            //  icon: {
            //      valid: 'fa fa-check',
            //      invalid: 'fa fa-times',
            //      validating: 'fa fa-refresh',
            //      feedback: 'form-control-feedback'
            //  }
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'fv-control-feedback'
            },
            row: {
                // By default, each field is placed inside the <div class="form-group"></div>
                // http://v4-alpha.getbootstrap.com/components/forms/#form-groups
                selector: '.form-group',
                valid: 'has-success',
                invalid: 'has-warning',
                feedback: 'fv-has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options, namespace]);
    };

    FormValidation.Framework.Bootstrap4.prototype = $.extend({}, FormValidation.Base.prototype, {
        /**
         * Specific framework might need to adjust the icon position
         *
         * @param {jQuery} $field The field element
         * @param {jQuery} $icon The icon element
         */
        _fixIcon: function($field, $icon) {
            var ns      = this._namespace,
                type    = $field.attr('type'),
                field   = $field.attr('data-' + ns + '-field'),
                row     = this.options.fields[field].row || this.options.row.selector,
                $parent = $field.closest(row);

            // Place it after the container of checkbox/radio
            // so when clicking the icon, it doesn't effect to the checkbox/radio element
            if ('checkbox' === type || 'radio' === type) {
                var $fieldParent = $field.parent();
                if ($fieldParent.hasClass('form-check')) {
                    $icon.insertAfter($fieldParent);
                } else if ($fieldParent.parent().hasClass('form-check')) {
                    $icon.insertAfter($fieldParent.parent());
                }
            }

            // Fix feedback icons in input-group
            if ($parent.find('.input-group').length !== 0) {
                $icon.addClass('fv-bootstrap-icon-input-group')
                     .insertAfter($parent.find('.input-group').eq(0));
            }
        },

        /**
         * Create a tooltip or popover
         * It will be shown when focusing on the field
         *
         * @param {jQuery} $field The field element
         * @param {String} message The message
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _createTooltip: function($field, message, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .popover('destroy')
                            .popover({
                                container: 'body',
                                content: message,
                                html: true,
                                placement: 'top',
                                trigger: 'hover click'
                            });
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': 'pointer',
                                'pointer-events': 'auto'
                            })
                            .tooltip('dispose')
                            .tooltip({
                                container: 'body',
                                html: true,
                                placement: 'top',
                                title: message
                            });
                        break;
                }
            }
        },

        /**
         * Destroy the tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _destroyTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .popover('destroy');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon
                            .css({
                                'cursor': '',
                                'pointer-events': 'none'
                            })
                            .tooltip('dispose');
                        break;
                }
            }
        },

        /**
         * Hide a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _hideTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('hide');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('hide');
                        break;
                }
            }
        },

        /**
         * Show a tooltip or popover
         *
         * @param {jQuery} $field The field element
         * @param {String} type Can be 'tooltip' or 'popover'
         */
        _showTooltip: function($field, type) {
            var ns    = this._namespace,
                $icon = $field.data(ns + '.icon');
            if ($icon) {
                switch (type) {
                    case 'popover':
                        $icon.popover('show');
                        break;

                    case 'tooltip':
                    /* falls through */
                    default:
                        $icon.tooltip('show');
                        break;
                }
            }
        }
    });
}(jQuery));

(function($, window, document, undefined) {
	'use strict';

	// Create the defaults once
	var pluginName = 'addClear',
		defaults = {
			closeSymbol: '&#10006;',
			color: '#CCC',
			top: 1,
			right: 4,
			returnFocus: true,
			showOnLoad: false,
			onClear: null,
			hideOnBlur: false,
			tabbable: true,
			paddingRight: '20px',
			lineHeight: '1',
			display: 'block'
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;

		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			var $this = $(this.element),
					$clearButton,
					me = this,
					options = this.options;

			var tabIndex = options.tabbable ? '' : ' tabindex="-1"';
			$clearButton = $('<a href="#clear" style="display: none;"' + tabIndex + '>' + options.closeSymbol + '</a>');
			$this.before($clearButton);

			$clearButton.css({
				color: options.color,
				textDecoration: 'none',
				display: 'none',
				overflow: 'hidden',
				position: 'absolute',
				right: options.right,
				top: options.top,
				lineHeight: options.lineHeight
			}, this);

			if (options.paddingRight) {
				$this.css({
					'padding-right': options.paddingRight
				});
			}

			if ($this.val().length >= 1 && options.showOnLoad === true) {
				$clearButton.css({display: options.display});
			}

			$this.focus(function() {
				if ($(this).val().length >= 1) {
					$clearButton.css({display: options.display});
				}
			});

			$this.blur(function(e) {
				if (options.hideOnBlur) {
					setTimeout(function() {
						var relatedTarget = e.relatedTarget || e.explicitOriginalTarget || document.activeElement;
						if (relatedTarget !== $clearButton[0]) {
							$clearButton.css({display: 'none'});
						}
					}, 0);
				}
			});

			var handleUserInput = function() {
				if ($(this).val().length >= 1) {
					$clearButton.css({display: options.display});
				} else {
					$clearButton.css({display: 'none'});
				}
			};

			var handleInput = function () {
			    $this.off('keyup', handleUserInput);
				$this.off('cut', handleUserInput);
				handleInput = handleUserInput;
				handleUserInput.call(this);
			};

			$this.on('keyup', handleUserInput);

			$this.on('cut', function () {
				var self = this;
				setTimeout(function () {
					handleUserInput.call(self);
				}, 0);
			});

			$this.on('input', function () {
				handleInput.call(this);
			});

			if (options.hideOnBlur) {
				$clearButton.blur(function () {
					$clearButton.css({display: 'none'});
				});
			}

			$clearButton.click(function(e) {
				var $input = $(me.element);
				$input.val('');
				$(this).css({display: 'none'});
				if (options.returnFocus === true) {
					$input.focus();
				}
				if (options.onClear) {
					options.onClear($input);
				}
				e.preventDefault();
			});
		}

	};

	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
					new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
(function() {
  var $,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.extend({
    detectCard: function(options) {
      var Card, log, settings;
      settings = {
        debug: false,
        supported: ['visa', 'mastercard', 'maestro', 'american-express', 'discover', 'jcb', 'diners-club']
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      Card = (function() {
        function Card() {}

        Card.prototype.type = '';

        Card.prototype.detected_type = '';

        Card.prototype.number = '';

        Card.prototype.type_has_changed = function() {
          return this.type !== this.detected_type;
        };

        Card.prototype.detect_type = function() {
          this.detected_type = this.get_detected_type();
          if (this.detected_type == null) {
            this.detected_type = '';
          }
          return log("Card type detected was: " + this.detected_type);
        };

        Card.prototype.get_detected_type = function() {
          if (this.is_a_valid_number()) {
            log("Card number '" + this.number + "' is valid");
            return this.get_type();
          }
        };

        Card.prototype.get_type = function() {
          if (this.number.match(/^4/)) {
            return 'visa';
          } else if (this.number.match(/^5[1-5]/)) {
            return 'mastercard';
          } else if (this.number.match(/^3[47]/)) {
            return 'american-express';
          } else if (this.number.match(/^6(?:011|5)/)) {
            return 'discover';
          } else if (this.number.match(/^(?:2131|1800|35)/)) {
            return 'jcb';
          } else if (this.number.match(/^3(?:0[0-5]|[68])/)) {
            return 'diners-club';
          } else if (this.number.match(/^5018|5020|5038|5893|6304|67(59|61|62|63)|0604/)) {
            return 'maestro';
          } else {
            return '';
          }
        };

        Card.prototype.is_a_valid_number = function() {
          return this.number !== "" && !isNaN(this.number);
        };

        Card.prototype.update_type = function() {
          log("Changed card type from '" + this.type + "' to '" + this.detected_type + "'");
          return this.type = this.detected_type;
        };

        return Card;

      })();
      return this.each(function() {
        var card, get_card_number_from, remove_spaces_from;
        card = new Card;
        $(this).on('keyup', function(e) {
          var is_supported, _ref;
          card.number = get_card_number_from($(this).val());
          card.detect_type();
          if (card.type_has_changed()) {
            card.update_type();
            is_supported = (_ref = card.type, __indexOf.call(settings.supported, _ref) >= 0);
            return $(this).trigger('cardChange', {
              type: card.type,
              supported: is_supported
            });
          }
        });
        get_card_number_from = function(card_input) {
          return remove_spaces_from(card_input);
        };
        return remove_spaces_from = function(value) {
          return value.replace(/\s/g, '');
        };
      });
    }
  });

}).call(this);
/* jshint strict: false */

(function(window) {
  var $ = window.jQuery || window.angular.element;
  var rootElement = window.document.documentElement,
    $rootElement = $(rootElement);

  addGlobalEventListener('change', markValue);
  addValueChangeByJsListener(markValue);

  $.prototype.checkAndTriggerAutoFillEvent = jqCheckAndTriggerAutoFillEvent;

  // Need to use blur and not change event
  // as Chrome does not fire change events in all cases an input is changed
  // (e.g. when starting to type and then finish the input by auto filling a username)
  addGlobalEventListener('blur', function(target) {
    // setTimeout needed for Chrome as it fills other
    // form fields a little later...
    window.setTimeout(function() {
      findParentForm(target).find('input').checkAndTriggerAutoFillEvent();
    }, 20);
  });

  function DOMContentLoadedListener() {
    // mark all values that are present when the DOM is ready.
    // We don't need to trigger a change event here,
    // as js libs start with those values already being set!
    forEach(document.getElementsByTagName('input'), markValue);

    // The timeout is needed for Chrome as it auto fills
    // login forms some time after DOMContentLoaded!
    window.setTimeout(function() {
      $rootElement.find('input').checkAndTriggerAutoFillEvent();
    }, 200);
  }

  // IE8 compatibility issue
  if(!window.document.addEventListener){
    window.document.attachEvent('DOMContentLoaded', DOMContentLoadedListener);
  }else{
    window.document.addEventListener('DOMContentLoaded', DOMContentLoadedListener, false);
  }

  return;

  // ----------

  function jqCheckAndTriggerAutoFillEvent() {
    var i, el;
    for (i=0; i<this.length; i++) {
      el = this[i];
      if (!valueMarked(el)) {
        markValue(el);
        triggerChangeEvent(el);
      }
    }
  }

  function valueMarked(el) {
    if (! ("$$currentValue" in el) ) {
      // First time we see an element we take it's value attribute
      // as real value. This might have been filled in the backend,
      // ...
      // Note: it's important to not use the value property here!
      el.$$currentValue = el.getAttribute('value');
    }

    var val = el.value,
         $$currentValue = el.$$currentValue;
    if (!val && !$$currentValue) {
      return true;
    }
    return val === $$currentValue;
  }

  function markValue(el) {
    el.$$currentValue = el.value;
  }

  function addValueChangeByJsListener(listener) {
    var jq = window.jQuery || window.angular.element,
        jqProto = jq.prototype;
    var _val = jqProto.val;
    jqProto.val = function(newValue) {
      var res = _val.apply(this, arguments);
      if (arguments.length > 0) {
        forEach(this, function(el) {
          listener(el, newValue);
        });
      }
      return res;
    };
  }

  function addGlobalEventListener(eventName, listener) {
    // Use a capturing event listener so that
    // we also get the event when it's stopped!
    // Also, the blur event does not bubble.
    if(!rootElement.addEventListener){
      rootElement.attachEvent(eventName, onEvent);
    }else{
      rootElement.addEventListener(eventName, onEvent, true);
    }

    function onEvent(event) {
      var target = event.target;
      listener(target);
    }
  }

  function findParentForm(el) {
    while (el) {
      if (el.nodeName === 'FORM') {
        return $(el);
      }
      el = el.parentNode;
    }
    return $();
  }

  function forEach(arr, listener) {
    if (arr.forEach) {
      return arr.forEach(listener);
    }
    var i;
    for (i=0; i<arr.length; i++) {
      listener(arr[i]);
    }
  }

  function triggerChangeEvent(element) {
    var doc = window.document;
    var event = doc.createEvent("HTMLEvents");
    event.initEvent("change", true, true);
    element.dispatchEvent(event);
  }



})(window);

/*
 * Config.js AppCodeStarted
 * remove duplicate slashes from url
 */
var SanitizedLocName = window.location.pathname.replace(/\/+/g, "/");

/*
 * used for api calls
 */
var GlobalConfig = {
	ApiBaseUrl: "https://api.tacticalmastery.com/api/v1.0/",
	BasePagePath: ""
};

/*
 * segment installation
 */
/* jshint ignore:start */
var segmentKey = "zAyuPfFTeYXOjWYibuvey68wf6PrPnnB";
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
analytics.load(segmentKey);
analytics.page()
}}();
/* jshint ignore:end */

var phoneNumberOptions = {
	"translation": {
		0: {pattern: /[0-9*]/}
	}
};

// List of test credit card numbers that you want it to be passed although they can be invalid one
var TEST_CARD_NUMBERS = ["0000000000000000"];

// We will transform those test card numbers into a valid one as below
var VALID_CARD_NUMBER = "4444111144441111";

// check whether the browser is mobile device or not
/* jshint maxlen: 205 */

function isMobileDevice() {
	"use strict";

	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function getJson(e) {
	"use strict";

	var json = {};
	if (isJsonObj(e)) {
		json = e;
	} else if (isValidJson(e)) {
		json = JSON.parse(e);
	}
	return json;
}

function isJsonObj(obj) {
	"use strict";

	return (typeof obj === "object");
}

// check if a string is a valid json data
function isValidJson(str) {
    "use strict";

    if (str === "") {
        return false;
    }

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }

    return true;
}

// call API
function callAPI(endpoint, data, method, callback) {
	"use strict";

	/* global GlobalConfig:true */
    var ApiUrl = GlobalConfig.ApiBaseUrl + endpoint + "/";
    method = method || "POST";

    // if data is an array pass as post, otherwise the string is a simple get and needs to append to the end of the uri
    if (data && data.constructor !== Object) {
        ApiUrl += data;
        data = null;
    }

    jQuery.ajax({
        method: method,
        url: ApiUrl,
        data: data
    }).done(function(msg) {
        if (typeof callback === "function") {
            callback(msg);
        }
    }).fail(function() {
        console.log( "error occured on api - " + endpoint );
    });
}

// load state from zipcode
function loadStateFromZip() {
    "use strict";

    var fZip = $("#zipcode");
    var fZipVal = fZip.val();
    var params = [];

    if (fZipVal.length === 5) {
        fZip.addClass("processed");

        $("#state, #city").prop("disabled", true);
        $("#state + small + i, #city + small + i").show();
        if (!$("#state + small + i").hasClass("fa-spin")) {
            $("#state + small + i, #city + small + i").addClass("fa fa-spin fa-refresh");
        }

        callAPI("state/" + fZipVal, params, "GET", function (resp) {
            //var json = {};
            // if (isValidJson(e)) {
            //     json = JSON.parse(e);
            // } else {
            //     return "";
            // }

            var jData = resp.data;

            if (resp.success) {
                /* jshint ignore:start */
                if (jData.primary_city !== undefined && jData.primary_city !== "" && jData.primary_city !== null) {
                    $("#city").val(jData.primary_city);
                }
                /* jshint ignore:end */

                if (jData.state !== undefined && jData.state !== "" && jData.state !== null) {
                    $("#state").val(jData.state).trigger("change");
                }

                $("input[name=address1]").focus();
            }

            //remove fa spin icons and do formvalidation
            $("#state + small + i, #city + small + i")
                .hide()
                .removeClass("fa").removeClass("fa-spin").removeClass("fa-refresh");
            $("#state, #city").prop("disabled", false);

            var frm;
            if ($("#form-address").length > 0) {
                frm = $("#form-address");
            } else {
                frm = $("#checkoutForm");
            }

            frm.formValidation("revalidateField", "city");
            frm.formValidation("revalidateField", "state");
        });
    }
}

// Detects safari with Applewebkit only
function isMobileSafari() {
    "use strict";

    return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
}

function bootstrapModal(content, title) {
    "use strict";

    var modal = $("#tm-modal");

    // set content
    modal.find(".modal-body").html(content);

    if (title !== null) {
        modal.find(".modal-title").text(title);
    }
    else {
        modal.find(".modal-title").text("");
    }

    // open modal
    modal.modal("show");
}

function popPage(pageURL, title) {
    "use strict";

    jQuery.ajax({
        method: "GET",
        url: pageURL
    }).done(function(msg) {
        bootstrapModal(msg, title);
    });
}

//Terms and privacy popups
function termsModal(e) {
    "use strict";

    popPage("terms.html", "Terms & Conditions");
}
function partnerModal(e) {
    "use strict";

    popPage("partner.html", "Partner");
}

function privacyModal(e) {
    "use strict";

    popPage("privacy.html", "Privacy Policy");
}

function pressModal(e) {
    "use strict";

    popPage("press.html");
}

function custcareModal(e) {
    "use strict";

    popPage("customercare.html", "Customer Care");
}

function getQueryVariable(variable) {
    "use strict";

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");

        if(pair[0] === variable){
            console.log("url check-------->" , pair);
            return pair[1];
        }

        // if (decodeURIComponent(pair[0]) === variable) {
        //     return decodeURIComponent(pair[1]);
        // }
    }

    return "";
}

function afGet(field, qsField) {
    "use strict";

    qsField = qsField || false;

    var returnThis;
    if (qsField) {
        var qParam = getQueryVariable(qsField);
        if (qParam !== "") {
            returnThis = qParam;
        }
    }

    if (returnThis) {
        return returnThis.replace(/[+]/g, " ");
    }

    return returnThis;
}

// function getParamObject() {
//     "use strict";

//     var obj = {};
//     var urlParam = window.location.search.substring(1);
//     urlParam.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
//         obj[decodeURIComponent(key)] = decodeURIComponent(value);
//     });

//     return obj;
// }

function getOrderData() {
	"use strict";

	var keys = [
		'orderId', 'firstName', 'lastName', 'emailAddress', 'phoneNumber',
		'address1', 'city', 'state', 'postalCode', 'cardNumber', 'cardSecurityCode',
		'cardMonth', 'cardYear', 'productId'
	];

	var obj = {};
	for (var k in keys) {
		if (keys.hasOwnProperty(k)) {
			obj[keys[k]] = getStorageItem(keys[k]) || "";
		}
	}

	return obj;
}

function getStorageItem(k) {
	"use strict";
	return localStorage.getItem(k);
}

function clearStorageItem(k) {
	"use strict";
	localStorage.removeItem(k);
}

/* jshint browser: true, node: false */
/* global getJson:true, afGet:true, GlobalConfig:true, SanitizedLocName:true */

(function() {
	"use strict";

	var upsellID = null;
	if (SanitizedLocName.indexOf("us_batteryoffer") >= 0) {
		upsellID = "battery";
		window.myProductId = afGet("pId", "pId");
	} else if (SanitizedLocName.indexOf("us_headlampoffer") >= 0) {
		upsellID = "headlamp";
	}

	if (upsellID === null) {
		// Not an upsell page
		return;
	}

	/* global getOrderData: true */
	var MediaStorage = getOrderData();
	if (typeof MediaStorage.orderId === "undefined") {
		// window.location = GlobalConfig.BasePagePath + "index.html";
		window.location = "index.html";
	}

	/* global callAPI:true */
	/* global bootstrapModal:true, isValidJson:true */
	// Upsell functions
	function doUpsellYes(upsellID, productId) {
	    $("div#js-div-loading-bar").show();

	    var usParams = {};
	    if (MediaStorage.orderId) {
	        usParams.orderId = MediaStorage.orderId;
	        usParams.productQty = 1;

	        switch (upsellID) {
	            case "headlamp":
	                productId = productId || "31";
	                break;
	            case "battery":
	            	productId = productId || "11";
	                break;
	            default:
	                break;
	        }

	        if (productId) {
	            usParams.productId = productId;

	            // var nextPage = GlobalConfig.BasePagePath + "receipt.html?orderId=" + MediaStorage.orderId;
				var nextPage = "receipt.html?orderId=" + MediaStorage.orderId;
	            if (upsellID === "battery") {
	            	// nextPage = GlobalConfig.BasePagePath + "us_headlampoffer.html?orderId=" + MediaStorage.orderId;
					nextPage = "us_headlampoffer.html?orderId=" + MediaStorage.orderId;
	            }

	            callAPI("upsell", usParams, "POST", function (e) {
							var json = getJson(e);

	                if (json.success) {
						window.location = nextPage;
	                } else {
	                    if (json.message) {
	                        var messageOut = "";
	                        if (typeof(json.message) === "string") {
	                            messageOut = json.message;
	                            if (messageOut === "This upsale was already taken.") {
	                                // continue down the funnel if the upsell is done
	                                window.location = nextPage;
	                                return;
	                            }
	                        } else {
	                            for (var k in json.message) {
	                                if (json.message.hasOwnProperty(k)) {
	                                    messageOut += k + ":" + json.message[k] + "<br>";
	                                }
	                            }
	                        }

	                        bootstrapModal(messageOut, "Problem with your Addon");
	                    }
	                }

	                $("div#js-div-loading-bar").hide();
	            });
	        }
	    } else {
	        bootstrapModal("There was an error finding your order, please refresh the page and try again.", "Error");
	        $("div#js-div-loading-bar").hide();
	    }
	}

	function doUpsellNo(upsellID) {
	    $("div#js-div-loading-bar").show();

	    // var nextPage = GlobalConfig.BasePagePath + "receipt.html?orderId=" + MediaStorage.orderId;
		var nextPage = "receipt.html?orderId=" + MediaStorage.orderId;
	    if (upsellID === "battery") {
	    	// nextPage = GlobalConfig.BasePagePath + "us_headlampoffer.html?orderId=" + MediaStorage.orderId;
			nextPage = "us_headlampoffer.html?orderId=" + MediaStorage.orderId;
	    }

	    window.location = nextPage;
	}

    $("#upsellNo").click(function (e) {
		doUpsellNo(upsellID);
    });

	$(".doupsellyes").click(function(e) {
		doUpsellYes(upsellID, $(this).data("productid"));
	});
}());


/* jshint browser: true */
/* jshint node: false */
/* jshint maxlen: 1000 */
/* global getJson:true, GlobalConfig:true, isMobileDevice:true */

(function() {
    "use strict";

    if (isMobileDevice()) {
        $("#checkout-wrapper").addClass("mobile-mode");
        $("#step-4 .step-title span").html("Step #2 :");
    }

    $("input[name=phoneNumber]").mask("000-000-0000", phoneNumberOptions);

    /* global getOrderData: true */
    var MediaStorage = getOrderData();

    function submitOrderForm(orderForm) {
        /* global callAPI:true, isValidJson:true */
        $("div#js-div-loading-bar").show();

        var year = $("select[name=year]").val(),
            month = $("select[name=month]").val();
        var d = new Date();
        var currentYear = d.getFullYear().toString().substr(2, 2),
            currentMonth = ("0" + (d.getMonth() + 1)).slice(-2);

        if (!((currentYear < year) || (currentYear === year) && (currentMonth <= month))) {
            $("div#js-div-loading-bar").hide();
            bootstrapModal("Invalid Expiration Date", "Problem with your order");
            return;
        }

        var apiFields = [
            "firstName",
            "lastName",
            "emailAddress",
            "phoneNumber",
            "address1",
            "city",
            "state",
            "postalCode",
            "cardNumber",
            "cardSecurityCode",
            "cardMonth",
            "cardYear",
            "campaignId",
            "productId"
        ];
        var orderDetails = {};

        $.each(apiFields, function(index, key) {
            var uVal;
            if (key !== "productId") {
                uVal = $("[name=" + key + "]").val();
            } else {
                uVal = $("input[name='productId']:checked", "#checkoutForm").val();
            }

            orderDetails[key] = uVal;
        });

        orderDetails.cardMonth = $("[name=month]").val();
        orderDetails.cardYear = $("[name=year]").val();
        orderDetails.lastName = "NA";
        orderDetails.orderId = MediaStorage.orderId;

        var contactInfo = {};
        contactInfo.firstName = orderDetails.firstName;
        contactInfo.lastName = orderDetails.lastName;
        contactInfo.emailAddress = orderDetails.emailAddress;
        contactInfo.phoneNumber = orderDetails.phoneNumber;
        contactInfo.address1 = orderDetails.address1;
        contactInfo.city = orderDetails.city;
        contactInfo.state = orderDetails.state;
        contactInfo.postalCode = orderDetails.postalCode;

        callAPI("update-contact", contactInfo, "POST", function(resp) {
            console.log(resp);
        });

        callAPI("create-order", orderDetails, "POST", function(resp) {
            //var json = getJson(e);

            if (resp.success) {
                $("#checkoutForm .btn-complete").removeClass("pulse");

                if (resp.orderId) {
                    localStorage.setItem('orderId', resp.orderId);
                }

                // window.location = GlobalConfig.BasePagePath + "us_batteryoffer.html?orderId=" + MediaStorage.orderId + "&pId=" + orderDetails.productId;
                window.location = "us_batteryoffer.html?orderId=" + MediaStorage.orderId + "&pId=" + orderDetails.productId;
            } else {
                $("#checkoutForm .btn-complete").removeClass("pulse");
                if (resp.message) {
                    var errHead = "Problem with your order";
                    var errBody;
                    if (resp.message !== "Invalid Credit Card Number") {
                        errHead = "Payment validation failed:  Processor Declined.";
                        resp.message += "<br><br>For security reasons, you must re-enter a new card number.<br><br>" + "Tip: you may try another card or call <a href='tel:+18558807233'>(855) 880-7233</a>.";
                    }
                    errBody = "<span style='font-size:20px'>" + resp.message + "</span>";
                    bootstrapModal(errBody, errHead);
                }
            }

            $("div#js-div-loading-bar").hide();
        });

        return false;
    }

    /* global TEST_CARD_NUMBERS:true */
    /* global VALID_CARD_NUMBER:true */
    /* global phoneNumberOptions:true */
    /* global bootstrapModal:true */
    // Checkout Form Validator
    var CheckoutFieldsReq;
    if (!isMobileDevice()) {
        CheckoutFieldsReq = [
            "firstName",
            "lastName",
            "emailAddress",
            "phoneNumber",
            "address1",
            "city",
            "state",
            "postalCode",
            "cardNumber",
            "month",
            "year"
        ];
    } else {
        CheckoutFieldsReq = ["cardNumber", "month", "year"];
    }

    function checkoutButtonPulse(CheckoutFieldsReq, invalidFieldsCount) {
        var cfCount = CheckoutFieldsReq.length,
            icfCount = 1;

        if (isMobileDevice()) {
            icfCount = 0;
        }

        for (var i = 0; i < CheckoutFieldsReq.length; i++) {
            if ($("[name='" + CheckoutFieldsReq[i] + "'].required").parents(".form-group").hasClass("has-success")) {
                icfCount++;
            }
        }

        if (invalidFieldsCount === 0) {
            if ($("#checkoutForm .fv-has-feedback.has-warning").length > 0) {
                $("#checkoutForm .btn-complete").removeClass("pulse");
            } else {
                if (cfCount === icfCount) {
                    $("#checkoutForm .btn-complete").addClass("pulse");
                } else {
                    $("#checkoutForm .btn-complete").removeClass("pulse");
                }
            }
        } else {
            $("#checkoutForm .btn-complete").removeClass("pulse");
        }
    }

    if ($("#checkoutForm").length > 0) {
        $("#checkoutForm").on("init.field.fv", function(e, data) {
            var field = data.field, // Get the field name
                $field = data.element, // Get the field element
                bv = data.fv; // FormValidation instance

            // Create a span element to show valid message
            // and place it right before the field
            var $span = $("<small/>").addClass("help-block validMessage text-success").attr("data-field", field).insertAfter($field).hide();

            // Retrieve the valid message via getOptions()
            var message = bv.getOptions(field).validMessage;
            if (message) {
                $span.html(message);
            }
        }).formValidation({
            // excluded: [":disabled", ":hidden", ":not(:visible)"],
            //live: "submitted",
            framework: "bootstrap4",
            icon: {
                valid: "ss-check",
                invalid: "ss-delete",
                validating: "ss-refresh"
            },
            autoFocus: true,
            fields: {
                // firstName
                firstName: {
                    validMessage: "Nice to meet you!",
                    validators: {
                        notEmpty: {
                            message: "Please enter your name."
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: "The name must be more than 1 and less than 50 characters long."
                        },
                        // regexp: {
                        //     regexp: /^[a-zA-Z" \.]+$/,
                        //     message: "The name can only consist of alphabetical"
                        // }
                    }
                },
                //Email Address
                emailAddress: {
                    validMessage: "Great! We will send you a confirmation e-mail with tracking # after purchasing.",
                    validators: {
                        notEmpty: {
                            message: "The email address is required."
                        },
                        stringLength: {
                            min: 1,
                            max: 100,
                            message: "The email address must be more than 6 and less than 30 characters long."
                        },
                        emailAddress: {
                            message: "The email address is not valid."
                        }
                    }
                },
                // phoneNumber
                phoneNumber: {
                    validMessage: "Success! We will only call if there’s a problem shipping to your location.",
                    validators: {
                        notEmpty: {
                            message: "Please supply a phone number so we can call if there are any problems shipping your flashlight."
                        },
                        stringLength: {
                            min: 12, // real that is "10" but that include 2 symbols "-"
                            message: "Not a valid 10-digit US phone number (must not include spaces or special characters)."
                        }
                    }
                },
                // address1
                address1: {
                    validMessage: "Success! Free shipping confirmed.",
                    validators: {
                        stringLength: {
                            min: 1,
                            max: 100,
                            message: "The address must be less than 100 characters long."
                        },
                        notEmpty: {
                            message: "The address is required."
                        }
                    }
                },
                // state
                state: {
                    validators: {
                        notEmpty: {
                            message: "The State is required."
                        }
                    }
                },
                // city
                city: {
                    validMessage: "That was easy!",
                    validators: {
                        stringLength: {
                            max: 50,
                            message: "The city must be less than 50 characters long."
                        },
                        notEmpty: {
                            message: "The city is required."
                        }
                    }
                },
                // postalCode
                postalCode: {
                    validators: {
                        stringLength: {
                            min: 5,
                            message: "The zip code must be 5 number long."
                        },
                        notEmpty: {
                            message: "The zip code is required."
                        }
                    }
                },
                // cardNumber
                cardNumber: {
                    validMessage: "",
                    validators: {
                        creditCard: {
                            message: "Enter a valid card number.",
                            transformer: function($field, validatorName, validator) {
                                // Get the number pr by user
                                var value = $field.val();
                                var CountOfChars = parseInt($field.val().length);
                                if (CountOfChars === 17) {
                                    value = value.substr(0, CountOfChars - 1);
                                }

                                // Check if it"s one of test card numbers
                                if (value !== "" && $.inArray(value, TEST_CARD_NUMBERS) !== -1) {
                                    // then turn it to be a valid one defined by VALID_CARD_NUMBER
                                    return VALID_CARD_NUMBER;
                                } else {
                                    // Otherwise, just return the initial value
                                    return value;
                                }
                            }
                        },
                        notEmpty: {
                            message: "Enter the card number."
                        },
                        stringLength: {
                            min: 15,
                            message: "The credit card can be 15 or 16 digits."
                        }
                    }
                },
                // CSC
                cardSecurityCode: {
                    validators: {
                        notEmpty: {
                            message: "The Security Code is required."
                        }
                    }
                },
                // Month
                month: {
                    validators: {
                        notEmpty: {
                            message: "The Month is required."
                        },
                        callback: {
                            message: "Please set month more or equal current.",
                            callback: function(value, validator, $field) {
                                var form = $field.parents("form");
                                var currentDate = new Date();
                                var year = parseInt(currentDate.getYear());
                                var yearVal = parseInt(form.find("[name=year]").val());

                                if (isNaN(yearVal) || yearVal === null || yearVal === undefined) {
                                    return true;
                                } else {
                                    var selectedYear = 100 + (parseInt(form.find("[name=year]").val()) || 0);
                                    var currentMonth = (parseInt(value) - 1 >= parseInt(currentDate.getMonth()));
                                    if (selectedYear === year) {
                                        if (currentMonth) {
                                            form.find("[name=year]").parents(".form-group").removeClass("has-warning").addClass("has-success");
                                            form.find("[name=year]").parents(".form-group").find(".fv-control-feedback").removeClass("fa-remove").addClass("fa-check");
                                            form.find("[name=year]").parents(".form-group").find(".form-control-feedback").hide();
                                        } else {
                                            form.find("[name=year]").parents(".form-group").removeClass("has-success").addClass("has-warning");
                                            form.find("[name=year]").parents(".form-group").find(".fv-control-feedback").removeClass("fa-check").addClass("fa-remove");
                                            form.find("[name=year]").parents(".form-group").find("[data-fv-validator='callback']").show();
                                        }
                                        return currentMonth;
                                    } else {
                                        form.find("[name=year]").parents(".form-group").removeClass("has-warning").addClass("has-success");
                                        form.find("[name=year]").parents(".form-group").find(".fv-control-feedback").removeClass("fa-remove").addClass("fa-check");
                                        form.find("[name=year]").parents(".form-group").find(".form-control-feedback").hide();
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                },
                // Year
                year: {
                    validators: {
                        notEmpty: {
                            message: "The Year is required."
                        },
                        callback: {
                            message: "Please set year more or equal current.",
                            callback: function(value, validator, $field) {
                                var form = $field.parents("form");
                                var currentDate = new Date();
                                var yearCondition = 100 + parseInt(value) >= parseInt(currentDate.getYear());

                                $("#checkoutForm").formValidation("revalidateField", "month");
                                if ($("#checkoutForm").find("[name=month]").parents(".form-group").hasClass("has-warning")) {
                                    return false;
                                } else {
                                    return yearCondition;
                                }
                            }
                        }
                    }
                }
            }
        }).on("success.validator.fv", function(e, data) {
            if (data.field === "cardNumber" && data.validator === "creditCard") {
                var $icon = data.element.data("fv.icon");

                $(".cc-logos ul>li img").removeClass("active");
                $(".cc-logos ul>li img[data-value='" + data.result.type + "']").addClass("active");

            }
        }).on("err.field.fv", function(e, data) {
            var field = data.field, // Get the field name
                $field = data.element; // Get the field element

            // Show the valid message element
            $field.next(".validMessage[data-field='" + field + "']").hide();

            var invalidFieldsCount = data.fv.getInvalidFields().length;
            checkoutButtonPulse(CheckoutFieldsReq, invalidFieldsCount);
        }).on("status.field.fv", function(e, data) {
            data.fv.disableSubmitButtons(false);
        }).on("success.field.fv", function(e, data) {
            var field = data.field, // Get the field name
                $field = data.element; // Get the field element

            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
            // Show the valid message element
            $field.next(".validMessage[data-field='" + field + "']").show();

            var invalidFieldsCount = data.fv.getInvalidFields().length;
            checkoutButtonPulse(CheckoutFieldsReq, invalidFieldsCount);
        }).on("err.form.fv", function(e) {}).on("success.form.fv", function(e) {
            submitOrderForm("#checkoutForm");
            e.preventDefault();
        });

        // Credit Card Behavior BEGIN
        $("input#creditcard").detectCard({
            supported: ["american-express", "visa", "mastercard", "discover"]
        });
        $("input#creditcard").on("keyup", function() {
            if ($(this).val() === "" || $(this).val() === undefined) {
                $(this).parents(".form-group").prev(".payment-icon").find(".cc-icon").removeClass("inactive active");
            }
        }).on("cardChange", function(e, card) {
            if (card.supported) {
                $(".payment-icon .cc-icon.cc-" + card.type).parents("a").siblings().find(".cc-icon").removeClass("active").addClass("inactive");
                $(".payment-icon .cc-icon.cc-" + card.type).removeClass("inactive").addClass("active");
            } else {
                $(".payment-icon .cc-icon").removeClass("inactive active");
            }
        });
        // END Credit Card Behavior

        $("#checkoutForm").submit(function(e) {
            // submitOrderForm("#checkoutForm");
            e.preventDefault();
        });

        //  Apply mask for checkout fields
        $("input[name=cardNumber]").mask("0000000000000000", {
            "translation": {
                0: {
                    pattern: /[0-9]/
                }
            }
        });
        $("input[name=postalCode]").mask("00000", {
            "translation": {
                0: {
                    pattern: /[0-9]/
                }
            }
        });

        var checkoutFields = [
            "firstName",
            "lastName",
            "emailAddress",
            "phoneNumber",
            "address1",
            "city",
            "state",
            "postalCode",
            "cardNumber",
            "month",
            "year"
        ];

        // Load cached values
        $.each(checkoutFields, function(index, value) {
            if ($("[name=" + value + "]").length === 0) {
                return;
            }
            var uVal = MediaStorage[value];
            if (uVal && uVal !== null && uVal !== "null") {
                $("[name=" + value + "]").val(uVal);
                $("[name=" + value + "]").data("previousValue", uVal);
                $("#checkoutForm").formValidation("revalidateField", value);
            }
        });

        // Save Checkout Page details to DB engine
        var saveToMediaStorage = function() {
            $.each(checkoutFields, function(index, value) {
                if (value !== "cardNumber" && value !== "year" && value !== "month") {
                    if ($("[name=" + value + "]").length > 0) {
                        var uVal = $("[name=" + value + "]").val();
                        localStorage.setItem(value, uVal);
                    }
                }
            });
        };

        $("form").on("change", saveToMediaStorage);
        window.onbeforeunload = saveToMediaStorage;
    }
}());

/* jshint browser: true */
/* jshint node: false */
/* jshint maxlen: 200 */
function numfield_keydown(e) {
    "use strict";

	e = (e) ? e : window.event;
	var charCode = (e.which) ? e.which : e.keyCode;
	var availableChar = [8, 18, 33, 34, 35, 36, 37, 38, 39, 40, 46, 190];

	if ((e.ctrlKey && (e.keyCode === 86 || e.keyCode === 67)) || (e.shiftKey && availableChar.indexOf(charCode) !== -1)) {
		return true;
	}
	if (availableChar.indexOf(charCode) !== -1) {
		return true;
	}
	if (charCode >= 96 && charCode <= 105 ) {
		return true;
	}
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}

	return true;
}

function name_keydown(e) {
    "use strict";

	e = (e) ? e : window.event;
	var charCode = (e.which) ? e.which : e.keyCode;
	var availableChar = [8, 9, 18, 32, 33, 34, 35, 36, 37, 38, 39, 40, 46, 190];

	if ((e.ctrlKey && (e.keyCode === 86 || e.keyCode === 67)) || (e.shiftKey && availableChar.indexOf(charCode) !== -1)) {
		return true;
	}
	if (availableChar.indexOf(charCode) !== -1) {
		return true;
	}
	// Uppercase
	if (charCode >= 65 && charCode <= 90) {
		return true;
	}
	// Lowercase
	if (charCode >= 97 && charCode <= 122) {
		return true;
	}
	// Number
	if (charCode >= 48 && charCode <= 57) {
		return true;
	}

	return false;
}

function validate() {
    "use strict";
    
    if ($("input.numfield").length > 0)
    {
        $("input.numfield").on("keydown", numfield_keydown);
    }

    if ($("input#name").length > 0) {
        $("input#name").on("keydown", name_keydown);
    }

    if ($("input[type=tel]").length > 0)
    {
        $("input[type=tel]").on("keydown", function (e) {
            e = (e) ? e : window.event;
            var charCode = (e.which) ? e.which : e.keyCode;
            
            if (charCode === 189)  {
                return false;
            }
            return true;
        });
    }

    /* global isMobileSafari:true */
    // Look for ios devices and safari
    if (isMobileSafari()) {
        // Search for credit card input and change it to text field
        if ($("input#creditcard").length > 0)
        {
            $("input#creditcard").attr("type", "text");
        }
    }

    /* global isMobileDevice:true */
    if (!isMobileDevice()) {
        $("input[type=number]").attr("type", "text");
    }
        
    // Image lazyload
    /* jshint ignore:start */
    $("img.lazy").lazyload({
        skip_invisible : true
    });
    /* jshint ignore:end */

    // X symbol for input fields
    if ($(".clearable").length > 0) {
        $(".clearable").addClear({
            closeSymbol: "&#10006;",
            color: "#CCC",
            top: "35px",
            right: "38px",
            returnFocus: true,
            showOnLoad: true,
            onClear: function($input) {
                var formValidation = $input.closest("form").data("formValidation");

                if (formValidation) {
                    formValidation.revalidateField($input.attr("name"));
                }
            },
            paddingRight: "55px",
            lineHeight: "1",
            display: "block"
        });
    }

    // Mailcheck Plugin Code here
    if ($("#email").length > 0) {
        var domains = ["hotmail.com", "gmail.com", "aol.com"];

        $("#email").on("blur", function() {
            $(this).mailcheck({
                domains: domains,
                suggested: function(element, suggestion) {
                    $("#email + small").show();
                    $("#email + small").html("Did you mean <a href='javascript:void(0)''>" + suggestion.full + "</a>");
                },
                empty: function(element) {
                    //jshint unused:false
                }
            });
        });

        // If user click on the suggested email, it will replace that email with suggested one.
        $("body").on("click", "#email + small a", function() {
            $("#email").val($(this).html());
            $("#email + small").hide();
            $("#email + small").html("Great! We will send you a confirmation e-mail with tracking # after purchasing.");

            if ($("form").length > 0) {
                $("form").formValidation("revalidateField", "email");
            }
        });
    }
}

validate();
/* jshint browser: true */
/* jshint node: false */
/* jshint maxlen: 1000 */

function init_field_fv(e, data) {
	"use strict";

	var field = data.field,        // Get the field name
		$field = data.element,      // Get the field element
		bv = data.fv;           // FormValidation instance

	// Create a span element to show valid message
	// and place it right before the field
	var $span = $("<small/>")
		.addClass("help-block validMessage text-success")
		.attr("data-field", field)
		.insertAfter($field)
		.hide();

	// Retrieve the valid message via getOptions()
	var message = bv.getOptions(field).validMessage;
	if (message) {
		$span.html(message);
	}
}

function success_field_fv(e, data) {
	"use strict";

	var field = data.field, // Get the field name
		$field = data.element; // Get the field element

	// Show the valid message element
	$field.next(".validMessage[data-field='" + field + "']").show();
}

function err_field_fv(e, data) {
	"use strict";

	var field = data.field, // Get the field name
		$field = data.element; // Get the field element

	// Show the valid message element
	$field.next(".validMessage[data-field='" + field + "']").hide();
}

(function() {
	"use strict";
	/* global phoneNumberOptions:true, isMobileDevice:true */
	/* global callAPI:true, bootstrapModal:true, GlobalConfig:true */
	$("input[name=phoneNumber]").mask("000-000-0000", phoneNumberOptions);
    var MediaStorage = {};

    // Lead create/update
    function createLead(data, callback) {
        /* global callAPI:true, isValidJson:true */
        var crmLead = {};

        crmLead.firstName = data.FirstName;
        crmLead.lastName = data.LastName;
        crmLead.phoneNumber = data.MobilePhone;
        crmLead.emailAddress = data.Email;

        MediaStorage.firstName = data.FirstName;
        MediaStorage.lastName = data.LastName;
        MediaStorage.phoneNumber = data.MobilePhone;
        MediaStorage.emailAddress = data.Email;

        callAPI("create-lead", crmLead, "POST", function (resp) {

            if(resp.success){
                if (resp.orderId) {
                    MediaStorage.orderId = resp.orderId;
					localStorage.setItem('orderId', resp.orderId);
                }
                callback(true);
            }else{
                callback(false);
            }

        });
    }

    function updateLead(data, cb) {
        /* global callAPI:true */
        var crmLead = data;
        crmLead.orderId = MediaStorage.orderId;
        crmLead.firstName = MediaStorage.firstName;
        crmLead.lastName = MediaStorage.lastName;
        crmLead.phoneNumber = MediaStorage.phoneNumber;
        crmLead.emailAddress = MediaStorage.emailAddress;

        callAPI("create-lead", crmLead, "POST", function (e) {
            console.log(e);
            cb();
        });
    }

    // Forms submit
	var submittedContactForm = false; // This switches between contact modal & address modal

    function submitContactForm() {
	    var data = {};
	    data.Email = $("[name=email]").val();
	    data.FirstName = $("[name=name]").val();
	    data.MobilePhone = $("[name=phoneNumber]").val();
        data.LastName = "NA";

        localStorage.setItem('firstName', data.FirstName);
        localStorage.setItem('lastName', data.LastName);
        localStorage.setItem('emailAddress', data.Email);
        localStorage.setItem('phoneNumber', data.MobilePhone);

        console.log("sbmtCntFrm---------->");

	    $("div#js-div-loading-bar").show();
	    callAPI("add-contact", data, "POST", function(response) {
	        var json = {};

            if(response.success){
                createLead(data, function(createLeadSuccess){
                    if(createLeadSuccess){
                        submittedContactForm = true;

                        // In case of Mobile devices, show address modal and go to checkout page.
                        if (isMobileDevice()) {
                            $("div#js-div-loading-bar").hide();
                            $("#modal-contact .close-modal").click();
                            $(".btn-address-modal").click();
                        } else {
                            // window.location = "checkout.html?" + $.param(MediaStorage);
                            window.location = "checkout.html";
                        }
                    }
                    else{
                        $("div#js-div-loading-bar").hide();
                    }
                }); // Create lead in 1st modal close
            }else{
                $("div#js-div-loading-bar").hide();
            }

	    });
	}

    // submit address form
    function submitAddressForm() {
        var addressFormFields = ["address1", "city", "state", "postalCode"];
        var tmp = {};

        $.each(addressFormFields, function(index, value) {
            if ($("[name=" + value + "]").length > 0) {
                var uVal = $("[name=" + value + "]").val();
                localStorage.setItem(value, uVal);
                tmp[value] = uVal;
            }
        });

        updateLead(tmp, function() {
            //window.location = GlobalConfig.BasePagePath + "checkout.html";
            window.location = "checkout.html";
        });
    }

	/*
     * Contact Form Validator
     */
	if ($("#form-contact").length > 0) {
		$("#form-contact")
        .on("init.field.fv", init_field_fv)
        .formValidation({
            framework: "bootstrap4",
            icon: {
                valid: "ss-check",
                invalid: "ss-delete",
                validating: "ss-refresh"
            },
            autoFocus: true,
            fields: {
                // Name field
                name: {
                    validMessage: "Nice to meet you!",
                    validators: {
                        notEmpty: {
                            message: "Please enter your name."
                        },
                        stringLength: {
                            max: 100,
                            message: "The name must be more than 1 and less than 50 characters long."
                        }
                    }
                },
                // Email field
                email: {
                    validMessage: "Great! We will send you a confirmation e-mail with tracking # after purchasing.",
                    validators: {
                        notEmpty: {
                            message: "The email address is required."
                        },
                        stringLength: {
                            min: 1,
                            max: 100,
                            message: "The email address must be more than 6 and less than 30 characters long."
                        },
                        emailAddress: {
                            message: "The email address is not valid."
                        }
                    }
                },
                // phone number field
                phoneNumber: {
                    validMessage: "Success! We will only call if there’s a problem shipping to your location.",
                    validators: {
                        notEmpty: {
                            message: "Please supply a phone number so we can call if there are any problems shipping your flashlight."
                        },
                        stringLength: {
                            min: 12, // real that is "10" but that include 2 symbols "-"
                            message: "Not a valid 10-digit US phone number (must not include spaces or special characters)."
                        }
                    }
                }
            }
        })
        .on("err.field.fv", function(e, data) {})
        .on("success.validator.fv", function(e, data) {})
        .on("err.form.fv", function(e, data) {})
        .on("success.form.fv", function(e, data) {
            submitContactForm();
            e.preventDefault();
        })
        .on("success.field.fv", success_field_fv)
        .on("err.field.fv", err_field_fv);

        $("#form-contact").submit(function(e) {
            // submitContactForm();
            e.preventDefault();
        });
	}

    // Address Form Validator
    if ($("#form-address").length > 0) {
        $("#form-address")
        .on("init.field.fv", init_field_fv)
        .formValidation({
            // excluded: [":disabled", ":hidden", ":not(:visible)"],
            framework: "bootstrap4",
            icon: {
                valid: "ss-check",
                invalid: "ss-delete",
                validating: "ss-refresh"
            },
            autoFocus: true,
            fields: {
                // address1
                address1: {
                    validMessage: "Success! Free shipping confirmed.",
                    validators: {
                        stringLength: {
                            min: 1,
                            max: 100,
                            message: "The address must be less than 100 characters long."
                        },
                        notEmpty: {
                            message: "The address is required."
                        }
                    }
                },
                // state
                state: {
                    validators: {
                        notEmpty: {
                            message: "The State is required."
                        }
                    }
                },
                // city
                city: {
                    validMessage: "That was easy!",
                    validators: {
                        stringLength: {
                            max: 50,
                            message: "The city must be less than 50 characters long."
                        },
                        notEmpty: {
                            message: "The city is required."
                        }
                    }
                },
                // postalCode
                postalCode: {
                    validators: {
                        stringLength: {
                            min: 5,
                            message: "The zip code must be 5 number long."
                        },
                        notEmpty: {
                            message: "The zip code is required."
                        },
                    }
                },
            }
        })
        .on("err.field.fv", function(e, data) {})
        .on("success.validator.fv", function(e, data) {})
        .on("err.form.fv", function(e, data) {})
        .on("success.form.fv", function(e, data) {
            submitAddressForm();
            e.preventDefault();
        })
        .on("success.field.fv", success_field_fv)
        .on("err.field.fv", err_field_fv);

        $("#form-address").submit(function(e) {
            e.preventDefault();
        });
        $("input[name=postalCode]").mask("00000", {"translation": {0: {pattern: /[0-9]/}}});
    }

    $(".footer-image").click(function() {
        $(".btn-buy-modal").click();
    });

    // Hash detect BEGINS
    /*window.onhashchange = function() {
        if (window.location.hash === "#showcontactmodal") {
            $(".btn-buy-modal").click();
            window.location.hash = "";
        }
    };
    window.onhashchange();
    // Hash detect ENDS
		*/
    if ($("#modal-contact").length > 0) {
        $("#modal-contact").on("shown.bs.modal", function(event) {
            window.scrollTo(0, 1);

            // For showing keyboard on mobile device
            setTimeout(function(){
                $("#name").focus();
            }, 1000);
        });
    }

    // Once submitted contact form and click on the green button again show address modal
    $(".btn-buy-modal").click(function(e) {
        if (submittedContactForm) {
            $(".btn-address-modal").click();
            e.stopPropagation();
        }
    });
}());

/* jshint browser: true, node: false */
/* global getStorageItem:true, afGet:true, callAPI:true, GlobalConfig:true, SanitizedLocName:true, isValidJson:true */

(function() {
	"use strict";

	var pageType = null;
	if (SanitizedLocName.indexOf("receipt") >= 0)
	{
		pageType = "receipt";
	} else if (SanitizedLocName.indexOf("us_batteryoffer") >= 0 || SanitizedLocName.indexOf("us_headlampoffer") >= 0) {
		pageType = "upsell";
	}

	if (pageType === null) {
		// Not "upsell" or "receipt" page
		return;
	}

	var myOrderID = getStorageItem("orderId");
	if (typeof myOrderID === "undefined") {
		//window.location = GlobalConfig.BasePagePath + "index.html";
		window.location = "index.html";
	}
	if (myOrderID === null) {
		// window.location = GlobalConfig.BasePagePath + "checkout.html";
		window.location = "checkout.html";
		return;
	}

	function populateThanksPage(orderInfos) {
		if ($.type(orderInfos) === "array") {
		    orderInfos = orderInfos[0];
		}

		$("#orderNumber").html(orderInfos.orderId);
		callAPI("get-trans", orderInfos.orderId, "GET", function (resp) {
		    if (resp.success) {
		        if (resp.data) {
		            var firstRow = resp.data[0];
		            if (firstRow && firstRow.merchant) {
		                $("#ccIdentity").html("<br>" + firstRow.merchant);
		            } else {
		                $("#ccIdentity").html("<br>Tactical Mastery");
		            }
		        }
		    }

		});
	}

	callAPI("get-lead", myOrderID, "GET", function (resp) {
        if (pageType === "receipt") {
            if (resp.success) {
                populateThanksPage(resp.data);
            } else if (resp.message) {
                console.log("Error: " + resp.message);
                // window.location = GlobalConfig.BasePagePath + "index.html";
				window.location = "index.html";
            }
        } else {
            if (resp.message && resp.message.data && resp.message.data[0]) {
                if (resp.message.data[0].orderStatus === "COMPLETE") {
                    // the order is complete and they are not on the success page
                    // they can be on an upsell page up to an hour after the initial sale
                    var doThatPop = true;
                    if (pageType === "upsell") {
                        var gmtStr = resp.message.data[0].dateUpdated + " GMT-0400";
                        var orderDate = new Date(gmtStr);
                        var nowDate = new Date();
                        var minutesSince = ((nowDate - orderDate) / 1000 / 60);
                        doThatPop = (minutesSince > 55);
                    }

                    if (doThatPop) {
						// window.location = GlobalConfig.BasePagePath + "receipt.html";
						window.location = "receipt.html";
                    }
                }
            }
        }
    });
}());

/* jshint browser: true, node: false */
/* global loadStateFromZip:true */

(function() {
    "use strict";

    var tmpZipCode = "";
    function validateFields(frm, fields) {
        if (frm.length > 0) {
            $.each(fields, function(index, key) {
                if ($("input[name=" + key + "]").length > 0 && $("input[name=" + key + "]").val() !== "") {
                    switch (key) {
                        case "postalCode":
                            if ($("input[name=" + key + "]").val() !== tmpZipCode) {
                                tmpZipCode = $("input[name=" + key + "]").val();
                                loadStateFromZip();
                            }
                            break;
                        case "phoneNumber":
                            var phoneNumber = $("input[name=phoneNumber]").val();
                            if (phoneNumber.length === 10 && phoneNumber.indexOf("-") < 0) {
                                phoneNumber = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6);
                                $("input[name=phoneNumber]").val(phoneNumber);
                                frm.formValidation("revalidateField", "phoneNumber");
                            }
                            break;
                        default:
                            frm.formValidation("revalidateField", key);
                    }
                }
            });
        }
    }

    function autoFillCheck() {
        validateFields($("#form-contact"), ["name", "email", "phoneNumber"]);
        validateFields($("#form-address"), ["address1", "postalCode", "city"]);
        validateFields($("#checkoutForm"), ["firstName", "emailAddress", "phoneNumber", "address1", "postalCode", "city", "cardNumber"]);

        setTimeout(function() { autoFillCheck(); }, 300);
    }
    setTimeout(function() { autoFillCheck(); }, 300);
}());