!function(){function t(){var t=(new Date).getTime(),e=Math.ceil(1e10*Math.random());return"anon-"+t.toString()+"-"+e.toString()}function e(){var t=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)});return e}function i(t){function e(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];e.push(i(o))}return e.join("|")}function n(t){var e=[];for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"string"==typeof r&&(r=i(r)),e.push([o(n),r].join(":"))}return e.join(",")}function o(t){return t.replace(/[\|\,:]/g," ")}return"[object Array]"===Object.prototype.toString.call(t)?e(t):"object"==typeof t?n(t):"string"==typeof t?o(t):t}function n(t){var e=[];for(var n in t)if(t.hasOwnProperty(n)&&t[n]){var o=t[n];"string"!=typeof o&&(o=i(o));var r=[encodeURIComponent(n),encodeURIComponent(o)].join("=");e.push(r)}return e.join("&")}function o(t){return"string"==typeof t&&t.length<=64&&/^[\w\._-]+$/.test(t)}function r(t,e,i,n,o){var r=t+"="+e+"; expires="+new Date(i).toUTCString()+"; path="+n+";";o&&(r+=" domain="+o+";"),document.cookie=r}function a(t,e){r(t,"",0,"/",e),r(t,"",0,"/",null)}function s(t,e,i){void 0===i&&"string"==typeof e&&(i=e,e=void 0),e=e||(new Date).getTime();var n=e+P,o=[t,e].join(":");r(A.micpn,o,n,"/",i)}function c(t,e,i){s(["esp",encodeURIComponent(t)].join("::"),e,i)}function m(t,e,i){var n=(new Date).getTime()+R,o=[t,e].join("_");r(A.mibhv,o,n,"/",i)}function p(t){var e=(new Date).getTime()+R;r(A.optOut,"1",e,"/",t)}function u(t){return t&&E.test(t)}function h(t,e,i){return i&&t&&e&&t!==e}function f(t){return t.replace(/[^\w\.\-\@]/gi,"")}function l(t){var e=/^(\w+?):(\d+)$/,i=t&&t.match(e);return i&&{key:i[1],timestamp:new Date(parseInt(i[2],10))}}function d(t){var e=/^esp::([^;:,\s]+):(\d+)/,i=t&&t.match(e);return i&&{key:decodeURIComponent(i[1]),timestamp:new Date(parseInt(i[2],10))}}function v(t,e){var i=/^(.+)_(\d+)$/,n=t&&t.match(i);return n&&{user:n[1],companyId:n[2],anonymous:u(n[1]),hasCookie:e}}function g(t){var e={};for(var i in t)if(t.hasOwnProperty(i))if("function"==typeof t[i])try{e[i]=t[i]()}catch(t){e.jserror=t.toString(),M(t)}else e[i]=t[i];return e}function y(t,e){t.attachEvent?t.attachEvent("onclick",e):t.addEventListener&&t.addEventListener("click",e,!1)}function _(t){Q.elements[t]=null}function w(){var t=Q.elements,e=Q.handlers;for(var i in t)if(t.hasOwnProperty(i)){var n=t[i],o=Sizzle(i)[0];if(t[i]=o,o&&!n)for(var r in e[i])e[i].hasOwnProperty(r)&&y(o,e[i][r])}}function textContent(t){return t?t.textContent||t.innerText||"":""}function exists(t,e){1!=arguments.length&&"object"==typeof t||(e=t,t=document);var i=Sizzle(e,t)[0];return!!i}function attr(t,e,i){try{"object"!=typeof t&&(i=e,e=t,t=document);var n=Sizzle(e,t)[0];return n?i?n.getAttribute(i)||n[i]||"":textContent(n):""}catch(t){return L(t.message+" for "+e+" -- "+i),""}}function queryParam(t){return Y[t]}function addEventToElement(t,e,i){var n;if(n=e?function(){window[q](t,g(e))}:function(){window[q](t)},Q.handlers[i]||(Q.handlers[i]={}),!Q.handlers[i][t]){Q.handlers[i][t]=n;var o=Sizzle(i)[0];return o?(y(o,n),void 0):(_(i),void 0)}}function waitForElements(t,e,i){var n=0,o=!1;if(i||"function"!=typeof e||(i=e,e=G),e=e>H?H:e,i){setTimeout(function(){o=!0},e);for(var r=0;r<t.length;r++){var a=t[r];!function(e){var r=setInterval(function(){o&&clearInterval(r),Sizzle(e)[0]&&(n++,clearInterval(r),n>=t.length&&i&&(i(),i=null))},B)}(a)}}}function I(t,page,e,i,n){"object"!=typeof page&&(n=i,i=e,e=page,page=t.customData);var o={id:encodeURIComponent(e),url:encodeURIComponent(i)};n&&(o.title=encodeURIComponent(n)),page.categories=page.categories||[],page.categories.push(o)}function k(t,page,e,i){"object"!=typeof page&&(i=e,e=page,page=t.customData),page.meta=page.meta||{},normalizedValue=i.toString().toLowerCase(),page.meta[e]=encodeURIComponent(normalizedValue)}function regexRetrieve(t,e,i){var n=e.match(t),o=n?n[i]:"";return o||""}function x(t,e){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function D(t){for(var e=(t||"").split("&"),i={},n=0;n<e.length;n++){var o=e[n].split("="),r=o[0],a=(o[1]||"").replace(/\+/g,"%20");i[decodeURIComponent(r)]=decodeURIComponent(a)}return i}function C(){return Sizzle(".mi-web")}var Sizzle=(function(e){var t,n,r,i,o,u,l,a,c,s,f,d,p,h,g,m,y,w,v,b="sizzle"+1*new Date,N=e.document,x=0,C=0,E=lt(),D=lt(),A=lt(),T=function(e,t){return e===t&&(f=!0),0},S={}.hasOwnProperty,L=[],I=L.pop,q=L.push,B=L.push,R=L.slice,$=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},k="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+P+"*("+H+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+H+"))|)"+P+"*\\]",F=":("+H+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(P+"+","g"),j=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),z=new RegExp("^"+P+"*,"+P+"*"),G=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),U=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),V=new RegExp(F),X=new RegExp("^"+H+"$"),J={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),TAG:new RegExp("^("+H+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+k+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,W=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),et=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},tt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(e,t){return t?"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},rt=function(){d()},it=vt(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{B.apply(L=R.call(N.childNodes),N.childNodes),L[N.childNodes.length].nodeType}catch(ot){B={apply:L.length?function(e,t){q.apply(e,R.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ut(e,t,r,i){var o,l,c,s,f,h,y,w=t&&t.ownerDocument,x=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==x&&9!==x&&11!==x)return r;if(!i&&((t?t.ownerDocument||t:N)!==p&&d(t),t=t||p,g)){if(11!==x&&(f=Y.exec(e)))if(o=f[1]){if(9===x){if(!(c=t.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(w&&(c=w.getElementById(o))&&v(t,c)&&c.id===o)return r.push(c),r}else{if(f[2])return B.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return B.apply(r,t.getElementsByClassName(o)),r}if(!(!n.qsa||A[e+" "]||m&&m.test(e))){if(1!==x)w=t,y=e;else if("object"!==t.nodeName.toLowerCase()){(s=t.getAttribute("id"))?s=s.replace(tt,nt):t.setAttribute("id",s=b),h=u(e),l=h.length;while(l--)h[l]="#"+s+" "+wt(h[l]);y=h.join(","),w=Z.test(e)&&mt(t.parentNode)||t}if(y)try{return B.apply(r,w.querySelectorAll(y)),r}catch(C){}finally{s===b&&t.removeAttribute("id")}}}return a(e.replace(j,"$1"),t,r,i)}function lt(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function at(e){return e[b]=!0,e}function ct(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function st(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ft(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&it(t)===e:t.disabled===e:"label"in t?t.disabled===e:!1}}function gt(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),u=o.length;while(u--)n[i=o[u]]&&(n[i]=!(r[i]=n[i]))})})}function mt(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=ut.support={},o=ut.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},d=ut.setDocument=function(e){var t,i,u=e?e.ownerDocument||e:N;return u!==p&&9===u.nodeType&&u.documentElement?(p=u,h=p.documentElement,g=!o(p),N!==p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",rt,!1):i.attachEvent&&i.attachEvent("onunload",rt)),n.attributes=ct(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ct(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=W.test(p.getElementsByClassName),n.getById=ct(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(_,et);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(_,et);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if(n=o.getAttributeNode("id"),n&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&g?t.getElementsByClassName(e):void 0},y=[],m=[],(n.qsa=W.test(p.querySelectorAll))&&(ct(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+P+"*(?:value|"+k+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),ct(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=W.test(w=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ct(function(e){n.disconnectedMatch=w.call(e,"*"),w.call(e,"[s!='']:x"),y.push("!=",F)}),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=W.test(h.compareDocumentPosition),v=t||W.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},T=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===N&&v(N,e)?-1:t===p||t.ownerDocument===N&&v(N,t)?1:s?$(s,e)-$(s,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,u=[e],l=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:s?$(s,e)-$(s,t):0;if(i===o)return ft(e,t);n=e;while(n=n.parentNode)u.unshift(n);n=t;while(n=n.parentNode)l.unshift(n);while(u[r]===l[r])r++;return r?ft(u[r],l[r]):u[r]===N?-1:l[r]===N?1:0},p):p},ut.matches=function(e,t){return ut(e,null,null,t)},ut.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(U,"='$1']"),!(!n.matchesSelector||!g||A[t+" "]||y&&y.test(t)||m&&m.test(t)))try{var r=w.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ut(t,p,null,[e]).length>0},ut.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),v(e,t)},ut.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&S.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ut.escape=function(e){return(e+"").replace(tt,nt)},ut.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ut.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,s=!n.sortStable&&e.slice(0),e.sort(T),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return s=null,e},i=ut.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},r=ut.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(_,et),e[3]=(e[3]||e[4]||e[5]||"").replace(_,et),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ut.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ut.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return J.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=u(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(_,et).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ut.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(O," ")+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,d,p,h,g=o!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),w=!a&&!l,v=!1;if(m){if(o){while(g){d=t;while(d=d[g])if(l?d.nodeName.toLowerCase()===y:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&w){d=m,f=d[b]||(d[b]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),c=s[e]||[],p=c[0]===x&&c[1],v=p&&c[2],d=p&&m.childNodes[p];while(d=++p&&d&&d[g]||(v=p=0)||h.pop())if(1===d.nodeType&&++v&&d===t){s[e]=[x,p,v];break}}else if(w&&(d=t,f=d[b]||(d[b]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),c=s[e]||[],p=c[0]===x&&c[1],v=p),v===!1)while(d=++p&&d&&d[g]||(v=p=0)||h.pop())if((l?d.nodeName.toLowerCase()===y:1===d.nodeType)&&++v&&(w&&(f=d[b]||(d[b]={}),s=f[d.uniqueID]||(f[d.uniqueID]={}),s[e]=[x,v]),d===t))break;return v-=i,v===r||v%r===0&&v/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ut.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var r,o=i(e,t),u=o.length;while(u--)r=$(e,o[u]),e[r]=!(n[r]=o[u])}):function(e){return i(e,0,n)}):i}},pseudos:{not:at(function(e){var t=[],n=[],r=l(e.replace(j,"$1"));return r[b]?at(function(e,t,n,i){var o,u=r(e,null,i,[]),l=e.length;while(l--)(o=u[l])&&(e[l]=!(t[l]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:at(function(e){return function(t){return ut(e,t).length>0}}),contains:at(function(e){return e=e.replace(_,et),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:at(function(e){return X.test(e||"")||ut.error("unsupported lang: "+e),e=e.replace(_,et).toLowerCase(),function(t){var n;do if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ht(!1),disabled:ht(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:gt(function(){return[0]}),last:gt(function(e,t){return[t-1]}),eq:gt(function(e,t,n){return[0>n?n+t:n]}),even:gt(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:gt(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:gt(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:gt(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},r.pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=dt(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pt(t);function yt(){}yt.prototype=r.filters=r.pseudos,r.setFilters=new yt,u=ut.tokenize=function(e,t){var n,i,o,u,l,a,c,s=D[e+" "];if(s)return t?0:s.slice(0);l=e,a=[],c=r.preFilter;while(l){(!n||(i=z.exec(l)))&&(i&&(l=l.slice(i[0].length)||l),a.push(o=[])),n=!1,(i=G.exec(l))&&(n=i.shift(),o.push({value:n,type:i[0].replace(j," ")}),l=l.slice(n.length));for(u in r.filter)!(i=J[u].exec(l))||c[u]&&!(i=c[u](i))||(n=i.shift(),o.push({value:n,type:u,matches:i}),l=l.slice(n.length));if(!n)break}return t?l.length:l?ut.error(e):D(e,a).slice(0)};function wt(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,i=t.next,o=i||r,u=n&&"parentNode"===o,l=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||u)return e(t,n,i);return!1}:function(t,n,a){var c,s,f,d=[x,l];if(a){while(t=t[r])if((1===t.nodeType||u)&&e(t,n,a))return!0}else while(t=t[r])if(1===t.nodeType||u)if(f=t[b]||(t[b]={}),s=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=s[o])&&c[0]===x&&c[1]===l)return d[2]=c[2];if(s[o]=d,d[2]=e(t,n,a))return!0}return!1}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Nt(e,t,n){for(var r=0,i=t.length;i>r;r++)ut(e,t[r],n);return n}function xt(e,t,n,r,i){for(var o,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(o=e[l])&&(!n||n(o,r,i))&&(u.push(o),c&&t.push(l));return u}function Ct(e,t,n,r,i,o){return r&&!r[b]&&(r=Ct(r)),i&&!i[b]&&(i=Ct(i,o)),at(function(o,u,l,a){var c,s,f,d=[],p=[],h=u.length,g=o||Nt(t||"*",l.nodeType?[l]:l,[]),m=!e||!o&&t?g:xt(g,d,e,l,a),y=n?i||(o?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r){c=xt(y,p),r(c,[],l,a),s=c.length;while(s--)(f=c[s])&&(y[p[s]]=!(m[p[s]]=f))}if(o){if(i||e){if(i){c=[],s=y.length;while(s--)(f=y[s])&&c.push(m[s]=f);i(null,y=[],c,a)}s=y.length;while(s--)(f=y[s])&&(c=i?$(o,f):d[s])>-1&&(o[c]=!(u[c]=f))}}else y=xt(y===u?y.splice(h,y.length):y),i?i(null,u,y,a):B.apply(u,y)})}function Et(e){for(var t,n,i,o=e.length,u=r.relative[e[0].type],l=u||r.relative[" "],a=u?1:0,s=vt(function(e){return e===t},l,!0),f=vt(function(e){return $(t,e)>-1},l,!0),d=[function(e,n,r){var i=!u&&(r||n!==c)||((t=n).nodeType?s(e,n,r):f(e,n,r));return t=null,i}];o>a;a++)if(n=r.relative[e[a].type])d=[vt(bt(d),n)];else{if(n=r.filter[e[a].type].apply(null,e[a].matches),n[b]){for(i=++a;o>i;i++)if(r.relative[e[i].type])break;return Ct(a>1&&bt(d),a>1&&wt(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(j,"$1"),n,i>a&&Et(e.slice(a,i)),o>i&&Et(e=e.slice(i)),o>i&&wt(e))}d.push(n)}return bt(d)}function Dt(e,t){var n=t.length>0,i=e.length>0,o=function(o,u,l,a,s){var f,h,m,y=0,w="0",v=o&&[],b=[],N=c,C=o||i&&r.find.TAG("*",s),E=x+=null==N?1:Math.random()||.1,D=C.length;for(s&&(c=u===p||u||s);w!==D&&null!=(f=C[w]);w++){if(i&&f){h=0,u||f.ownerDocument===p||(d(f),l=!g);while(m=e[h++])if(m(f,u||p,l)){a.push(f);break}s&&(x=E)}n&&((f=!m&&f)&&y--,o&&v.push(f))}if(y+=w,n&&w!==y){h=0;while(m=t[h++])m(v,b,u,l);if(o){if(y>0)while(w--)v[w]||b[w]||(b[w]=I.call(a));b=xt(b)}B.apply(a,b),s&&!o&&b.length>0&&y+t.length>1&&ut.uniqueSort(a)}return s&&(x=E,c=N),v};return n?at(o):o}return l=ut.compile=function(e,t){var n,r=[],i=[],o=A[e+" "];if(!o){t||(t=u(e)),n=t.length;while(n--)o=Et(t[n]),o[b]?r.push(o):i.push(o);o=A(e,Dt(i,r)),o.selector=e}return o},a=ut.select=function(e,t,n,i){var o,a,c,s,f,d="function"==typeof e&&e,p=!i&&u(e=d.selector||e);if(n=n||[],1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(c=a[0]).type&&9===t.nodeType&&g&&r.relative[a[1].type]){if(t=(r.find.ID(c.matches[0].replace(_,et),t)||[])[0],!t)return n;d&&(t=t.parentNode),e=e.slice(a.shift().value.length)}o=J.needsContext.test(e)?0:a.length;while(o--){if(c=a[o],r.relative[s=c.type])break;if((f=r.find[s])&&(i=f(c.matches[0].replace(_,et),Z.test(a[0].type)&&mt(t.parentNode)||t))){if(a.splice(o,1),e=i.length&&wt(a),!e)return B.apply(n,i),n;break}}}return(d||l(e,p))(i,t,!g,n,!t||Z.test(e)&&mt(t.parentNode)||t),n},n.sortStable=b.split("").sort(T).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),ct(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||st("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ct(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||st("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),ct(function(e){return null==e.getAttribute("disabled")})||st(k,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ut})(window);
;for(var b="",U="",T="",O="4545",z="/p/cp/",j="https://ssl.micpn.com",S="MovableInkTrack",K=864e5,P=4*K,R=1095*K,E=/^anon-\d{13}-\d{1,11}$/,A={mibhv:"_mibhv",micpn:"_micpn",optOut:"_mioptout"},F=document.getElementsByTagName("script"),J=0;J<F.length;J++)if(F[J].src){var $=F[J].src.match(/(\/\/.+)\/p\/js\/\d+/);$&&(j=$[1])}var L=window.location.hash.match(/midebug/)?function(t){console.log(t)}:function(){},M=window.location.hash.match(/midebug/)?function(t){console.error(t)}:function(){},q=window[S]||"_miconv",N=window[q]||[],V=1e3,W=500,B=500,G=4*B,H=40*B;if(!N.initialized){var Q={handlers:{},elements:{}},X=N.q||window._miconv||[];X.length>0&&L("Loading "+X.length+" queued events.");var Y=D(window.location.search.substring(1)),Z={};if(""!==document.cookie)for(var tt=document.cookie.split(";"),J=0;J<tt.length;J++){var et=tt[J].replace(/^\s+|\s+$/g,"").split("=");Z[et[0]]=et[1]}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});var it=function(){};it.prototype.init=function(){var i=this;this.userIdentifier=t(),this.billingIdentifier=e(),this.companyId=O,this.campaignKey=-1,this.campaignTimestamp=new Date,this.previousUserIdentifier=null,this.cookieDomain=null,this.optOut=!1,this.hasCookie="false",this.products=[];var n={optOut:Z[A.optOut]||T,local:v(Z[A.mibhv],"host"),remote:v(U,"micpn"),campaign:l(Z[A.micpn]||b),espCampaign:d(Z[A.micpn]||b)};n.optOut&&(this.optOut=!0),n.campaign&&(this.campaignKey=n.campaign.key),n.espCampaign&&(this.espKey=n.espCampaign.key);var o=n.campaign&&n.campaign.timestamp||n.espCampaign&&n.espCampaign.timestamp;o&&(this.campaignTimestamp=o);var r;if(n.local&&!n.local.anonymous?r=n.local:n.remote&&!n.remote.anonymous?r=n.remote:n.local&&n.local.anonymous?r=n.local:n.remote&&n.remote.anonymous&&(r=n.remote),r&&(this.userIdentifier=r.user,this.hasCookie=r.hasCookie),n.local&&n.local.anonymous?this.previousUserIdentifier=n.local.user:n.remote&&n.remote.anonymous?this.previousUserIdentifier=n.remote.user:this.previousUserIdentifier=this.userIdentifier,this.customData={params:{}},this.executeCustomJs(),""!==Z[A.micpn]&&""!==b){var m=l(Z[A.micpn]),u=l(b);m&&u&&m.timestamp<u.timestamp&&(this.campaignKey=u.key,this.campaignTimestamp=u.timestamp,s(this.campaignKey,this.campaignTimestamp.getTime(),this.cookieDomain));var h=d(Z[A.micpn]),g=d(b);h&&g&&h.timestamp<g.timestamp&&(this.espKey=g.key,this.campaignTimestamp=g.timestamp,c(this.espKey,this.campaignTimestamp.getTime(),this.cookieDomain))}if(this.customData&&"object"==typeof this.customData.params){var y=this.customData.params;for(var _ in y)y.hasOwnProperty(_)&&y[_].length&&(Y[_]=y[_]);delete this.customData.params}if(Y.mi_u&&(this.userIdentifier=f(Y.mi_u)),Y.mi_cmp&&(this.campaignKey=f(Y.mi_cmp)),Y.mi_ecmp&&(this.espKey=Y.mi_ecmp),Y.mi_opt_out&&(this.optOut=!0),this.optOut)return a(A.mibhv,this.cookieDomain),a(A.micpn,this.cookieDomain),p(this.cookieDomain),void 0;this.populateWebImages(),this.sendPageEvents(),(Y.mi_cmp||Y.mi_ecmp)&&this.push("click"),this.currentUrl=document.location.toString(),setInterval(function(){i.currentUrl!=document.location.toString()&&(i.currentUrl=document.location.toString(),i.customData={params:{}},i.executeCustomJs(),i.sendPageEvents())},V),setInterval(w,W);for(var _=0;_<X.length;_++)this.push(X[_]);L("Initialized miconv.")},it.prototype.setCompanyId=function(t){this.companyId=t},it.prototype.setCookieDomain=function(t){this.cookieDomain="."+t},it.prototype.enableKnownUserJailbreak=function(){this.knownUserJailbreak=!0},it.prototype.sendPageEvents=function(){"conversion"==this.customData.type&&this.push("conversion",this.customData),this.push("pageview",this.customData)},it.prototype.executeCustomJs=function(){var t=this,sendEvent=function(e,i){t.push(e,i)},setCompanyId=function(e){t.setCompanyId(e)},setCookieDomain=function(e){t.setCookieDomain(e)},enableKnownUserJailbreak=function(){t.enableKnownUserJailbreak()},addCategory=function addCategory(page,e,i){I(t,page,e,i)},addMetaAttribute=function addMetaAttribute(page,e,i){k(t,page,e,i)};!function(page){try{}catch(t){page.jserror=t.toString(),M(t)}}(this.customData)},it.prototype.push=function(){if(!this.optOut){var t;if(t="string"==typeof arguments[0]?Array.prototype.slice.call(arguments,0):Array.prototype.slice.call(arguments[0],0),"send"===t[0])t.shift();else{if("addProduct"===t[0])return this.products.push(t[1]),void 0;if("addPromo"===t[0])return t[1]&&(t[1].promo=!0),this.products.push(t[1]),void 0}var e=t[0];if(o(e)){var i;i=void 0===t[1]?{amount:0}:"string"==typeof t[1]||"number"==typeof t[1]?{amount:t[1]}:t[1];var n=(i.amount||i.revenue||"").toString().replace(/[^0-9\.]/g,"");i.amount=parseFloat(n)||0;var r=t[2],p=this.campaignTimestamp.getTime(),f={t:(new Date).getTime(),mi_u:this.userIdentifier,mi_cid:this.companyId,page_title:document.title,referrer:document.referrer||document.referer,timezone_offset:(new Date).getTimezoneOffset(),event_type:e,conversion_id:r,cdate:p,ck:this.hasCookie,products:this.products.length?this.products:null};C().length&&(f.mi_open_id=this.billingIdentifier),this.espKey&&(f.mi_ecmp=this.espKey),(u(this.previousUserIdentifier)&&!u(this.userIdentifier)||h(this.previousUserIdentifier,this.userIdentifier,this.knownUserJailbreak))&&(f.link=this.previousUserIdentifier),f=x(i,f),this.sendData(f),this.previousUserIdentifier=null,this.hasCookie="host",m(this.userIdentifier,this.companyId,this.cookieDomain),e.match(/^conver(sion|t)/)?a(A.micpn,this.cookieDomain):Y.mi_cmp?s(Y.mi_cmp,this.cookieDomain):Y.mi_ecmp?c(Y.mi_ecmp,this.cookieDomain):Z[A.micpn]||""===b||(b.indexOf("esp::")>=0?c(this.espKey,this.campaignTimestamp.getTime(),this.cookieDomain):s(this.campaignKey,this.campaignTimestamp.getTime(),this.cookieDomain))}}},it.prototype.sendData=function(t){var e=[j,z,this.campaignKey,"/track.gif"].join("");e+="?"+n(t),L("Constructed URL: "+e),this.loadImage(e,function(){L("Pushed event: "+this.campaignKey+" : "+t.event_type+", "+e)},function(){L("Failed event: "+this.campaignKey+" : "+t.event_type+", "+e)})},it.prototype.loadImage=function(t,e,i){var n=new Image(1,1);n.onload=function(){e(),n.onload=null},n.onerror=function(){i(),n.onerror=null},n.src=t},it.prototype.populateWebImages=function(){var t=C(),e=this,i=function(t){var i=t.split("?");t=i[0];var o=x(Y,D(i[1]));return o.mi_u=e.userIdentifier,o.mi_open_id=e.billingIdentifier,t+"?"+n(o)};try{for(var o in t)if(t.hasOwnProperty(o)){var r=t[o],a=r.parentNode;a&&a.href&&(a.href=i(a.href));var s=r.getAttribute("mi-src");s&&(r.setAttribute("src",i(s)),r.style.display="")}}catch(t){this.push("error")}},it.setup=function(){var t=new it;window[q]=function(){t.push.apply(t,arguments)},window[q].push=window[q],window[q].initialized=!0,t.init()},it.setup()}}();