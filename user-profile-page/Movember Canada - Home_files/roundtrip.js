window.__adroll||(function(){function k(){this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._nad=0;this._lce=null;this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};for(var a=Array(4),b=0;b<a.length;b++)a[b]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""))};k.prototype.load_consent_banner=function(){this.add_script_element("s.adroll.com/j/consent.js")};k.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};k.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};k.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};k.prototype.handle_null_consent=function(a){a||((a=this.get_consent_params())?this.call_consent_write(a):this.load_consent_banner())};
k.prototype.show_post_consent_message=function(a){var b=this.get("__adroll_post_consent_html"),c=this.get("__adroll_post_consent_css");if(b&&"boolean"!==typeof a){a=window.document.createElement("style");a.setAttribute("type","text/css");a.textContent=c;window.document.head.appendChild(a);c=document.createElement("div");c.innerHTML=b;window.document.body.appendChild(c.firstChild);var d=window.document.getElementById("adroll_consent_banner");setTimeout(function(){try{d.classList.add("hidden")}catch(a){d.className+=
" hidden"}},100);window.document.getElementById("adroll_post_consent_message_close").addEventListener("click",function(){d.parentNode.removeChild(d)});window.document.getElementById("adroll_post_consent_text").addEventListener("click",function(){window.open("http://d.adroll.com/consent/choices","_blank")});this.del("__adroll_post_consent_css");this.del("__adroll_post_consent_html")}};
k.prototype.set_consent=function(a,b,c){this.show_post_consent_message(a);if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",c);null===a?this.handle_null_consent(b):(b||this.clear_consent_params(),!1!==a&&(this.set_first_party_cookie(),this.call_next_tpc()))};k.prototype.cookieEnabled=function(a){if(this._global("adroll_ext_network")||this._global("adroll_optout")||this._broken)return!1;if(2<=this._nad||a)return this._lce;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),0<this._nad&&!this.get(this.__adc)?this._lce=!1:this._lce=!0):this._lce=!1};
k.prototype.get=function(a){var b=window.document.cookie;if(null===b)return this._broken=!0,null;var c;0>b.indexOf(a+"=")?b=null:(a=b.indexOf(a+"=")+a.length+1,c=b.indexOf(";",a),-1===c&&(c=b.length),b=b.substring(a,c),b=""===b?null:window.unescape(b));return b};
k.prototype.set=function(a,b,c){var d;c&&"number"===typeof c?(d=new Date,d.setTime(d.getTime()+36E5*c),c=d.toGMTString(),c="; expires="+c):c="";d="; domain="+window.location.hostname;b=window.escape(b);window.document.cookie=a+"="+b+c+"; path=/"+d};k.prototype.del=function(a){this.set(a,"",-8760)};
k.prototype.check_cookie=function(a,b){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";for(var c=a.split("|"),d=c.length-1;0<=d;d--)if(c[d]){var g=c[d].split(":");b===g[0]&&(g[2]=""+(parseInt(g[2])+1),c[d]=g.join(":"))}return c.join("|")};k.prototype.handle=function(a){var b=this.get(this.__adc)||"";-1!==b.indexOf(a)?this.set(this.__adc,this.check_cookie(b,a),this.exp):(a=[b,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
k.prototype.expire_old=function(){if(!this._global("adroll_ext_network")&&!this._global("adroll_optout")){for(var a=this.get_date(!1),b=this.get(this.__adc),b=b?b.split("|"):[""],c=[],d=b.length-1;0<=d;d--)b[d]&&b[d].split(":")[1]>a&&c.push(b[d]);this.set(this.__adc,c.join("|"),this.exp)}};k.prototype.get_date=function(a){var b=new Date;a&&b.setTime(b.getTime()+36E5*a);a=""+b.getUTCFullYear();var c=b.getUTCMonth(),c=10<=c?c:"0"+c,b=b.getUTCDate();return[a,c,10<=b?b:"0"+b].join("")};
k.prototype.consent_allowed=function(a){var b=this._global("__adroll_consent");return"object"===typeof b?b[a]:b};k.prototype.generate_link=function(){return""};k.prototype.view=function(a){var b=new window.Image;b.src=this._srv("/view/"+a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)};k.prototype.set_cookie=function(){};
k.prototype.reset=function(){this._set_global("adroll_c_id",null);this._set_global("adroll_url_macro","");this._set_global("adroll_c_macro","");this._set_global("adroll_cpm_macro","");this._set_global("adroll_ext_network",null);this._set_global("adroll_subnetwork",null);this._set_global("adroll_ad_payload",null);this._set_global("adroll_win_notif",null)};k.prototype.set_pixel_cookie=function(a,b,c){this._global("adroll_optout")||(this.handle(a),this.handle(b),this.handle(c),this.pixel_loaded())};
k.prototype.add_pixel_load_callback=function(a){this._loaded?a():this._ensure_global("adroll_callbacks",[]).push(a)};k.prototype.pixel_loaded=function(){this._loaded=!0;for(var a=this._ensure_global("adroll_callbacks",[]),b=0;b<a.length;b++)a[b].called||(a[b](),a[b].called=!0)};k.prototype.addLoadEvent=function(a){if(this._has_global("__adroll_loaded")&&this._global("__adroll_loaded")||this._has_global("_adroll_ie")&&this._global("_adroll_ie")||/msie/i.test(window.navigator.userAgent))return a();if(/WebKit/i.test(window.navigator.userAgent)){var b=window.setInterval(function(){/loaded|complete/.test(window.document.readyState)&&window.clearInterval(b);a()},10);return null}var c=window.onload;window.onload=function(){a();c&&c()}};
k.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};k.prototype.is_under_experiment=function(){var a=this._global("adroll_adv_id");return 0<=["ADV_EID","3QOM4TKN4RD7TO3HCPYRKV","RR6VELGGEBBKZEEQ2FK34E","VIDRP27DERDLPD5BI427XM"].indexOf(a)};k.prototype.load_experiment_js=function(){var a=window.document.getElementById("adroll_scr_exp");return a?a:this.add_script_element("https://s.adroll.com/j/exp/"+window.adroll_adv_id+"/index.js",{id:"adroll_scr_exp",onError:"window.adroll_exp_list = [];"})};k.prototype.is_experiment_js_loaded=function(){return!!window.adroll_exp_list};
k.prototype.is_test_advertisable=function(){return"ADV_EID"===this._global("adroll_adv_id")};k.prototype.if_under_experiment_js=function(a,b,c,d){function g(){if(p.is_experiment_js_loaded()||p.is_test_advertisable())m=!0;m?window.adroll_exp_list&&0<=window.adroll_exp_list.indexOf(a)?b.call(p):c.call(p):window.setTimeout(g,10)}var m=!1,p=this;this.load_experiment_js();window.setTimeout(function(){m=!0},d||500);g()};k.prototype.external_data_to_qs=function(a){var b=[],c=this.get_external_data();if(!c)return null;for(var d in c)c.hasOwnProperty(d)&&this._is_defined(c[d])&&null!==c[d]&&b.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+c[d]),!1));b=b.join("&");a&&(b=window.escape(b));return"adroll_external_data="+b};
k.prototype.replace_external_data=function(a){var b=this.get_external_data(),c=this.get_conversion_value(),d=null,g;if(b)for(g in b)b.hasOwnProperty(g)&&(d=new RegExp("\\["+g+"\\]","gi"),a=a.replace(d,b[g]),d=new RegExp("\\["+g+"_ESC\\]","gi"),a=a.replace(d,window.escape(b[g])));if(c)for(g in c)c.hasOwnProperty(g)&&(d=new RegExp("\\["+g+"\\]","gi"),a=a.replace(d,c[g]),d=new RegExp("\\["+g+"_ESC\\]","gi"),a=a.replace(d,window.escape(c[g])));return a};
k.prototype.get_external_data=function(){if(this._has_global("adroll_custom_data")){var a=this._global("adroll_custom_data"),b={},c;for(c in a)a.hasOwnProperty(c)&&"undefined"!==a[c]&&(b[c.toLowerCase()]=a[c]);return b}return null};
k.prototype.get_conversion_value=function(){var a=this._ensure_global("adroll_currency",null),b=this._ensure_global("adroll_conversion_value",null),c=this._ensure_global("adroll_conversion_value_in_dollars",null);return b?{conv_value:""+b,currency:a}:c?{conv_value:""+parseInt(100*c),currency:"USC"}:null};k.prototype._has_global=function(a){return this._is_defined(this._global(a))};k.prototype._global=function(a){return window[a]};k.prototype._set_global=function(a,b){window[a]=b};k.prototype._unset_global=function(a){delete window[a]};k.prototype._ensure_global=function(a,b){this._has_global(a)||this._set_global(a,b);return this._global(a)};k.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};k.prototype.jsonParse=function(a){var b=this._global("JSON");return"function"===typeof b.parse?b.parse(a):eval("("+a+")")};
k.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a||a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(b){return g[b]||"\\u"+(b.charCodeAt(0)+65536).toString(16).substr(1)}var c=Object.prototype.toString,d=Array.isArray||function(a){return"[object Array]"===c.call(a)},g={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},m=/[\\"\u0000-\u001F\u2028\u2029]/g;return function q(l){if(null===l)return"null";
if("number"===typeof l)return isFinite(l)?l.toString():"null";if("boolean"===typeof l)return l.toString();if("object"===typeof l){if("function"===typeof l.toJSON)return q(l.toJSON());if(d(l)){for(var e="[",h=0;h<l.length;h++)e+=(h?", ":"")+q(l[h]);return e+"]"}if("[object Object]"===c.call(l)){e=[];for(h in l)l.hasOwnProperty(h)&&e.push(q(h)+": "+q(l[h]));return"{"+e.join(", ")+"}"}}return'"'+l.toString().replace(m,a)+'"'}}()};k.prototype.macro_values=function(){var a=this._ensure_global("adroll_cpm_macro",null),b=this._ensure_global("adroll_url_macro",null),c=this._ensure_global("adroll_c_macro",null),d=this._ensure_global("adroll_subnetwork",null),g=this._ensure_global("adroll_ad_payload",null),m=this._ensure_global("adroll_win_notif",null),p=this._ensure_global("adroll_rtb_dict",null),q={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i,t:/INSERTCLICKTRACKER/}[this._global("adroll_ext_network")],q=this._is_defined(q)?
q:/CANNOT_MATCH_THIS/,l={};a&&!q.test(a)&&(l.adroll_cpm_macro=a);b&&!q.test(b)&&(l.adroll_url_macro=b);c&&!q.test(c)&&(l.adroll_c_macro=c);d&&!q.test(d)&&(l.adroll_subnetwork=d);g&&!q.test(g)&&(l.adroll_ad_payload=g);m&&!/^[|$]/.test(m)&&(l.adroll_win_notif=m);if(p&&("string"!==typeof p||!/^[|$]/.test(p))){if("string"===typeof p)try{0===p.indexOf("b64:")&&(p=atob(p.substr(4))),p=this.jsonParse(p)}catch(e){this.log("failed to parse: "+e),p={}}"object"===typeof p&&(l.adroll_rtb_dict=p)}return l};
k.prototype.format_macros=function(a,b,c,d){return this.macro_url_params(this.macro_values(),a,b,c,d)};
k.prototype.macro_url_params=function(a,b,c,d,g){g=this._is_defined(g)?g:!1;var m=d?window.escape:function(a){return a},p=a.adroll_cpm_macro,q=a.adroll_url_macro,l=c?a.adroll_c_macro:null,e=[],h=b?this.parseUri(b):null,h=h?this.endswith(h.path,".tp"):!1;!h&&g&&e.push(["desturl",""]);l&&0===l.indexOf("http")?(g=m,"g"===this._global("adroll_ext_network")&&(g=d?function(a){return a}:window.unescape),e.push(["clickurl",g(l)])):h&&g&&e.push(["clickurl",""]);this._global("adroll_ext_network")&&e.push(["adroll_network",
this._global("adroll_ext_network")]);p&&e.push(["cpm",p]);a.adroll_subnetwork&&e.push(["adroll_subnetwork",a.adroll_subnetwork]);a.adroll_ad_payload&&e.push(["adroll_ad_payload",a.adroll_ad_payload]);q&&(a=this.parseUri(window.unescape(q)),e.push(["site_url",m("http://"+a.host)]),c&&(e.push(["adroll_width",m(this._global("adroll_width"))]),e.push(["adroll_height",m(this._global("adroll_height"))])));this.log("Macros found "+this.serialize(e));return b?this.buildurl(b,e):this.serialize(e)};
k.prototype.serialize=function(a){if(a.length){for(var b=[],c=a.length-1;0<=c;c--)b.push(a[c].join("="));return b.join("&")}return""};k.prototype.endswith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};k.prototype.buildurl=function(a,b){var c=this.serialize(b),d=a.indexOf("?");return c?d===a.length-1?a+c:-1!==d?"&"===a[a.length-1]?a+c:a+"&"+c:a+"?"+c:a};k.prototype.md5=function(){function a(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function b(b,c,d,h,f,g){c=a(a(c,b),a(h,g));return a(c<<f|c>>>32-f,d)}function c(a,c,d,h,f,g,m){return b(c&d|~c&h,a,c,f,g,m)}function d(a,c,d,h,f,g,m){return b(c&h|d&~h,a,c,f,g,m)}function g(a,c,d,h,f,g,m){return b(d^(c|~h),a,c,f,g,m)}function m(m,l){var e=m[0],h=m[1],f=m[2],n=m[3],e=c(e,h,f,n,l[0],7,-680876936),n=c(n,e,h,f,l[1],12,-389564586),f=c(f,n,e,h,l[2],17,606105819),h=c(h,f,n,e,l[3],
22,-1044525330),e=c(e,h,f,n,l[4],7,-176418897),n=c(n,e,h,f,l[5],12,1200080426),f=c(f,n,e,h,l[6],17,-1473231341),h=c(h,f,n,e,l[7],22,-45705983),e=c(e,h,f,n,l[8],7,1770035416),n=c(n,e,h,f,l[9],12,-1958414417),f=c(f,n,e,h,l[10],17,-42063),h=c(h,f,n,e,l[11],22,-1990404162),e=c(e,h,f,n,l[12],7,1804603682),n=c(n,e,h,f,l[13],12,-40341101),f=c(f,n,e,h,l[14],17,-1502002290),h=c(h,f,n,e,l[15],22,1236535329),e=d(e,h,f,n,l[1],5,-165796510),n=d(n,e,h,f,l[6],9,-1069501632),f=d(f,n,e,h,l[11],14,643717713),h=d(h,
f,n,e,l[0],20,-373897302),e=d(e,h,f,n,l[5],5,-701558691),n=d(n,e,h,f,l[10],9,38016083),f=d(f,n,e,h,l[15],14,-660478335),h=d(h,f,n,e,l[4],20,-405537848),e=d(e,h,f,n,l[9],5,568446438),n=d(n,e,h,f,l[14],9,-1019803690),f=d(f,n,e,h,l[3],14,-187363961),h=d(h,f,n,e,l[8],20,1163531501),e=d(e,h,f,n,l[13],5,-1444681467),n=d(n,e,h,f,l[2],9,-51403784),f=d(f,n,e,h,l[7],14,1735328473),h=d(h,f,n,e,l[12],20,-1926607734),e=b(h^f^n,e,h,l[5],4,-378558),n=b(e^h^f,n,e,l[8],11,-2022574463),f=b(n^e^h,f,n,l[11],16,1839030562),
h=b(f^n^e,h,f,l[14],23,-35309556),e=b(h^f^n,e,h,l[1],4,-1530992060),n=b(e^h^f,n,e,l[4],11,1272893353),f=b(n^e^h,f,n,l[7],16,-155497632),h=b(f^n^e,h,f,l[10],23,-1094730640),e=b(h^f^n,e,h,l[13],4,681279174),n=b(e^h^f,n,e,l[0],11,-358537222),f=b(n^e^h,f,n,l[3],16,-722521979),h=b(f^n^e,h,f,l[6],23,76029189),e=b(h^f^n,e,h,l[9],4,-640364487),n=b(e^h^f,n,e,l[12],11,-421815835),f=b(n^e^h,f,n,l[15],16,530742520),h=b(f^n^e,h,f,l[2],23,-995338651),e=g(e,h,f,n,l[0],6,-198630844),n=g(n,e,h,f,l[7],10,1126891415),
f=g(f,n,e,h,l[14],15,-1416354905),h=g(h,f,n,e,l[5],21,-57434055),e=g(e,h,f,n,l[12],6,1700485571),n=g(n,e,h,f,l[3],10,-1894986606),f=g(f,n,e,h,l[10],15,-1051523),h=g(h,f,n,e,l[1],21,-2054922799),e=g(e,h,f,n,l[8],6,1873313359),n=g(n,e,h,f,l[15],10,-30611744),f=g(f,n,e,h,l[6],15,-1560198380),h=g(h,f,n,e,l[13],21,1309151649),e=g(e,h,f,n,l[4],6,-145523070),n=g(n,e,h,f,l[11],10,-1120210379),f=g(f,n,e,h,l[2],15,718787259),h=g(h,f,n,e,l[9],21,-343485551);m[0]=a(e,m[0]);m[1]=a(h,m[1]);m[2]=a(f,m[2]);m[3]=
a(n,m[3])}var p="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=b.length;d+=64){for(var f=b.substring(d-64,d),g=[],r=void 0,r=0;64>r;r+=4)g[r>>2]=f.charCodeAt(r)+(f.charCodeAt(r+1)<<8)+(f.charCodeAt(r+2)<<16)+(f.charCodeAt(r+3)<<24);m(a,g)}b=b.substring(d-64);f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<b.length;d++)f[d>>2]|=b.charCodeAt(d)<<(d%4<<3);f[d>>2]|=
128<<(d%4<<3);if(55<d)for(m(a,f),d=0;16>d;d++)f[d]=0;f[14]=8*c;m(a,f);for(b=0;b<a.length;b++){c=a;d=b;f=a[b];g="";for(r=0;4>r;r++)g+=p[f>>8*r+4&15]+p[f>>8*r&15];c[d]=g}return a.join("")}}();k.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};k.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};k.prototype.facebook_dummy_product_enabled=function(){return!0};
k.prototype.extract_pid=function(a,b,c){function d(a){return a?(a=new RegExp(a,"gi"),!!a.exec(l)):null}a||(a={});var g=null,m=null,p=null,q=null,l=this._gurl(),e=this.get_external_data();e&&(m=e.product_id,g=e.product_group,p=e.product_action,q=e.adroll_product_category_id);if(!m&&a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(d(a.blacklist_regexp)||!0!==d(a.regexp))return"";m=this.get_product_id_from_dom(a.regexp_group)}else if(!m){if(d(a.blacklist_regexp))return"";
m=this.get_product_id_from_url(l,a.regexp,a.regexp_group)}g||!a.product_group_group||"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?g||a.product_group_regexp&&(g=this.get_product_id_from_url(l,a.product_group_regexp,a.product_group_group)):g=this.get_product_id_from_dom(a.product_group_group);if(m)a={product_id:m,product_group:g,product_action:p,product_category:q};else if(this.facebook_dummy_product_enabled()&&"facebook"===b)a=this.get_dummy_product_for_facebook(g);
else return null;c&&c(a);return a};
k.prototype.get_pid=function(a){this.extract_pid(a,"adroll",function(a){if(a){var c=a.product_id,d=a.product_group,g=a.product_action,m=a.product_category;a=[];var p;if(c instanceof Array)for(p=0;p<c.length;p++)a.push(["adroll_product_id",this.normalize_var((c[p]+"").toLowerCase(),!0)]);else a.push(["adroll_product_id",this.normalize_var((c+"").toLowerCase(),!0)]);if(m instanceof Array)for(p=0;p<m.length;p++)a.push(["adroll_product_category_id",this.normalize_var((m[p]+"").toLowerCase(),!0)]);else m&&
a.push(["adroll_product_category_id",this.normalize_var((m+"").toLowerCase(),!0)]);d&&a.push(["adroll_product_group",this.normalize_var((d+"").toLowerCase(),!0)]);g&&a.push(["adroll_product_action",this.normalize_var((g+"").toLowerCase(),!0)]);(c=this.external_data_to_qs(!0))&&a.push([c]);c=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",a));d=window.document.createElement("img");d.src=c;d.height=d.width=1;d.border=0;this._head().appendChild(d)}}.bind(this))};
k.prototype.get_product_id_from_dom=function(a){var b=null,c;a.path&&(window.jQuery?(c=window.jQuery(a.path),c.length&&(c=c.eq(0),b="text"===a.attribute?c.text():c.attr(a.attribute))):window.Prototype&&window.$$?(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.innerText&&!window.opera?c.innerText:c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):c.readAttribute(a.attribute))):window.YUI?(c=window.YUI().use("node"),c.one&&(c=c.one(a.path),b=null,c&&(b="text"===a.attribute?
c.get("text"):c.getAttribute(a.attribute)))):window.$$&&(c=window.$$(a.path),c.length&&(c=c[0],b="text"===a.attribute?c.get("text"):c.getProperty(a.attribute))));if(b&&(b=b.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(c=new RegExp(a.regular_expression,"gi"),b=c.exec(b),null!==b){a=a.regular_expression_replace;for(c=0;c<b.length;c++)a=a.replace(new RegExp("\\\\"+c,"gi"),b[c]||"");b=a}else b="";return b};
k.prototype.get_product_id_from_url=function(a,b,c){var d=null;try{d=parseInt(c)}catch(g){}return null!==d&&!isNaN(d)&&b&&(a=(new RegExp(b,"gi")).exec(a),null!==a&&d in a)?a[d]:null};k.prototype.render_pixel_code=function(a,b){var c=this;c._has_global("adroll_tpc")?c.render_pixel_code_exec(a,b):c.load_adroll_tpc(function(){c.render_pixel_code_exec(a,b)})};
k.prototype.render_pixel_code_exec=function(a,b){this.expire_old();var c=this._srv("/pixel"),d=window.document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";var g=this.get_keywords();this.addLoadEvent(function(m){return function(){var p=[];try{200>=window.document.referrer.length&&p.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(f){}try{p.push("keyw="+window.escape(g))}catch(f){}try{m._has_global("adroll_segments")&&p.push("name="+window.escape(m._global("adroll_segments").toLowerCase()))}catch(f){}try{m._has_global("adroll_p")&&
p.push("adroll_p="+window.escape(m._global("adroll_p")))}catch(f){}try{m._has_global("adroll_u")&&p.push("adroll_u="+window.escape(m._global("adroll_u")))}catch(f){}try{m._has_global("adroll_m")&&m._has_global("adroll_m_type")&&(p.push("adroll_m="+window.escape(m._global("adroll_m"))),p.push("adroll_m_type="+window.escape(m._global("adroll_m_type"))))}catch(f){}try{var q=m.get_conversion_value();q.conv_value&&p.push("conv_value="+q.conv_value);q.currency&&p.push("adroll_currency="+q.currency)}catch(f){}try{if(m._has_user_identifier()){var l=
m._global("adroll_user_identifier"),l=l.replace(/^\s\s*/,"").replace(/\s\s*$/,"");p.push("user_identifier="+m.md5(l))}}catch(f){}try{m._has_global("adroll_shop_id")&&(q={},m._has_global("adroll_custom_data")?q=m._global("adroll_custom_data"):m._set_global("adroll_custom_data",q),"undefined"===typeof q.adroll_shop_id&&(q.adroll_shop_id=m._global("adroll_shop_id")));var e=m.external_data_to_qs(!0);e&&p.push(e)}catch(f){}try{var h=window.location.href.split("#")[0];500>=h.length&&p.push("arrfrr="+window.encodeURIComponent(h))}catch(f){}p=
m.get_base_url(c,a,b,null,"",p);d.src=p;m._head().appendChild(d)}}(this));this.addLoadEvent(function(a){return function(){var b=a._global("adroll");if(b&&"object"===typeof b){b.identify=function(){return a.identify.apply(a,arguments)};b.track=function(){return a.track.apply(a,arguments)};for(var c,d,e=0;e<b.length;e++)c=b[e][0],d=b[e][1],"identify"===c?a.identify.apply(a,d):"track"===c&&a.track.apply(a,d)}}}(this))};
k.prototype.render_ad_code=function(a,b,c,d){d=this._is_defined(d)?d:null;if(!this._is_defined(this._r[b])||d){var g=["width="+this._global("adroll_width"),"height="+this._global("adroll_height"),"x=0","y=0"];if(c)this.log("Rendering test ad "+c+" in space "+b),g.push("test_ad="+c),a=this.get_url(a,b,null,"ad",g);else if(d){this.log("Rendering adgroup "+d);c=this.macro_values();var m=this.macro_url_params(c,!1,!1,!1,!1);g.push(m);this.render_win_notification(c);this.render_extra_script(c);a=this.get_url(a,
b,d,null,g)}else this.log("Rendering ad space "+b),a=this.get_url(a,b,null,"ad",g);this.expire_old();window.document.write('<script src="'+a+'">\x3c/script>');this._nad+=1;this._r[b]=1}};
k.prototype.render_win_notification=function(a){if(a.adroll_cpm_macro&&a.adroll_win_notif){var b=(this._secure()?"https://":"http://")+a.adroll_win_notif+a.adroll_cpm_macro;a.adroll_ad_payload&&(a.adroll_rtb_dict&&a.adroll_rtb_dict.waap||/waap=1&/.test(a.adroll_win_notif)&&!this._is_defined(a.adroll_rtb_dict))&&(b+="&ad_payload="+a.adroll_ad_payload);this.imgRequest(b)}};
k.prototype.render_extra_script=function(a){a.adroll_rtb_dict&&a.adroll_rtb_dict.extra_script_src&&this.add_script_element(a.adroll_rtb_dict.extra_script_src,{})};k.prototype.add_script_element=function(a,b){var c=window.document.createElement("script"),d=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(d="");for(var g in b)b.hasOwnProperty(g)&&"src"!==g&&c.setAttribute(g,b[g]);c.type="text/javascript";c.src=d+a;this._head().appendChild(c);return c};
k.prototype.get_base_url=function(a,b,c,d,g,m){var p=a.split("?");a=p[0]+"/"+b+"/"+c+(d?"/"+d:"")+(g?"/"+g:"");var q="?";p[1]&&(a+="?"+p[1],q="&");var p=q+"no-cookies=1&pv=",l="";this.cookieEnabled(!1)?(l=window.escape(this.get_eids()),a+=q+"pv="+this.pv+"&cookie="+l):a+=p+this.pv;m&&(a+="&"+m.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){this.del(this.__adc);if(a.length-l.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(b,c,d,g,m)}this.log("Generated url: "+
a);return a};k.prototype.get_url=function(a,b,c,d,g){var m=c?this._srv("/c"):this._srv("/r");return this.get_base_url(m,a,b,c,d,g)};k.prototype.get_eids=function(){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";try{for(var a=this.get(this.__adc),b=a?a.split("|"):"",a=[],c=b.length-1;0<=c;c--)if(b[c]){var d=b[c].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(g){return this.del(this.__adc),""}};k.prototype.record_user=function(a){var b="adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),c,d;a=a||{};var g={adroll_user_identifier:!0};for(c=0;c<b.length;c++){try{this._unset_global(b[c])}catch(m){}if(b[c]in a){b[c]in g?this._set_global(b[c],window.escape(a[b[c]])):"adroll_email"!==b[c]&&this._set_global(b[c],a[b[c]]);try{delete a[b[c]]}catch(m){}}}try{this._unset_global("adroll_custom_data")}catch(m){}for(d in a)if(a.hasOwnProperty(d)){this._set_global("adroll_custom_data",
a);break}this.render_pixel_code(this._global("adroll_adv_id"),this._global("adroll_pix_id"))};k.prototype.record_adroll_email=function(a){if(this._has_email()){var b=this._global("_adroll_email"),b=b.replace(/^\s+|\s+$/g,""),c,d=b.toLowerCase(),b=this.is_email_valid(b);this.is_already_hashed(d)?c=d:b&&(c=this.md5(d));c="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?hashed_email="+c;b&&(d=d.split("@")[1],c+="&email_domain="+window.encodeURIComponent(d));a&&(c+="&idsource="+a);this.imgRequest(c)}};
k.prototype._send_plain_text_identifiers=function(a,b,c){(a||b)&&c&&(c="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?idsource="+c,a&&(a=a.replace(/^\s+|\s+$/g,"").toLowerCase(),c+="&email="+window.encodeURIComponent(a)+"&hashed_email="+this.md5(a),a=a.split("@")[1],c+="&email_domain="+window.encodeURIComponent(a)),b&&(c+="&user_identifier="+window.encodeURIComponent(b)),this.imgRequest(c))};k.prototype._has_email=function(){return this._has_global("_adroll_email")};
k.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};k.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};k.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
k.prototype.identify=function(a,b){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,b||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var c=this.copyObj(a,["email","userId"]);c&&(c="https://d.adroll.com/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(c)),b&&(c+="&idsource="+b),this.imgRequest(c));this._queueAndCallback("identify",[a,b])};
k.prototype.track=function(a,b){if(a){var c="https://d.adroll.com/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a),d=this.copyObj(b);d&&(c+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(d)));this.imgRequest(c);this._queueAndCallback("track",[a,b])}};
k.prototype._registerCallback=function(a,b,c){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof b||-1<this.callbackNames.indexOf(c))&&(this.callbackNames.push(c),this.callbacks[a].push(b),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(c=0;c<this.callbackQueues[a].length;c++)b.apply(null,this.callbackQueues[a][c])};
k.prototype._queueAndCallback=function(a,b){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(b);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var c=0;c<this.callbacks[a].length;c++)this.callbacks[a][c].apply(null,b)};k.prototype.registerIdentifyCallback=function(a,b){this._registerCallback("identify",a,b)};k.prototype.registerTrackCallback=function(a,b){this._registerCallback("track",a,b)};k.prototype._is_defined=function(a){return"undefined"!==typeof a};k.prototype.normalize_var=function(a,b){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");b&&(a=window.escape(a));return a};k.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var b=this.parseUri(a);return-1!==b.host.indexOf("www.google.")?b.queryKey.q.substring(0,this._kwl):-1!==b.host.indexOf("bing.com")?b.queryKey.q.substring(0,this._kwl):""}catch(c){return""}};
k.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var b={queryKey:{}},c=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");c--;)b[d[c]]=a[c]||"";b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,c,d){c&&(b.queryKey[c]=d)});return b};
k.prototype._secure=function(){return!0};k.prototype._protocol=function(){return window.document.location.protocol};k.prototype._native=function(){try{return"http"!==this._protocol().slice(0,4)}catch(a){return!0}};k.prototype._srv=function(a){a=this._is_defined(a)?a:"";a=this.add_tpc_to_url("https://d.adroll.com"+a);return this.add_fpc_to_url(a)};k.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};k.prototype.log=function(a){this._logs.push(a)};
k.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};k.prototype.normalize_url=function(a){return a.toLowerCase()};k.prototype.imgRequest=function(a){var b=new window.Image;b.src=this.add_tpc_to_url(a);b.setAttribute("width","1");b.setAttribute("height","1");b.setAttribute("border","0");this._head().appendChild(b)};k.prototype.copyObj=function(a,b){if(!a)return null;var c={},d=0,g;for(g in a)!a.hasOwnProperty(g)||b&&-1!==b.indexOf(g)||(d++,c[g]=a[g]);return d?c:null};
k.prototype.add_tpc_to_url=function(a){var b=this._global("adroll_tpc");if(!a||!b)return a;var c=this.parseUri(a);if(c.queryKey.adroll_tpc||"d.adroll.com"!==c.host&&"d.adroll.com"!==c.host+":"+c.port)return a;var d=a.indexOf("?"),g=c="";-1!==d?(c=a.slice(0,d+1),g="&"+a.slice(d+1)):(d=a.indexOf("#",-1===d?0:d),-1===d?c=a+"?":(c=a.slice(0,d)+"?",g=a.slice(d)));return c+"adroll_tpc="+encodeURIComponent(b)+g};
k.prototype.add_fpc_to_url=function(a){var b=this.get_first_party_cookie();if(!a||!b)return a;var c=this.parseUri(a);if(c.queryKey.adroll_fpc||"d.adroll.com"!==c.host&&"d.adroll.com"!==c.host+":"+c.port)return a;c=-1===a.indexOf("?")?"?":"&";return a+c+"adroll_fpc="+encodeURIComponent(b)};k.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};
k.prototype.set_tpc=function(a,b){var c=this.tpc_callback();a&&b&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(b));c&&c.call(this)};k.prototype.tpc_callback=function(a){var b=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return a||window.adroll_bouncex_called?b:(window.adroll_bouncex_called=1,this.maybe_call_bouncex(b),null)};
k.prototype.maybe_call_bouncex=function(a){this.if_under_experiment_js("bouncex",function(){this.call_bouncex(a)},function(){a.call(this)},this.get_tpc_decode_timeout())};function t(a,b){window.adroll_tpc_timed_out||(window.clearTimeout(window.adroll_tpc_timeout),!a&&b&&b.deviceID?window.__adroll.set_tpc("bouncex",b.deviceID):window.__adroll.call_next_tpc())}k.prototype.call_next_tpc=function(a){(a=this.tpc_callback(a))&&a.call(this)};
k.prototype.call_bouncex=function(a){this._set_global("adroll_callback_adcb",t);window.adroll_tpc_timed_out=!1;this.tpc_callback(a);this.add_script_element("https://pixel.cdnwidget.com/cdn/c.min.js?data-gdis=1&data-apikey=afaa2674&id=c.js&data-adcb=adroll_callback_adcb");var b=this;window.adroll_tpc_timeout=window.setTimeout(function(){window.adroll_tpc_timed_out=!0;b.call_next_tpc()},b.get_tpc_decode_timeout())};
k.prototype.extract_query_param=function(a,b){for(var c=b.split("&"),d=0;d<c.length;d++){var g=c[d].split("=");if(decodeURIComponent(g[0])===a)return decodeURIComponent(g[1])}return null};k.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};k.prototype.call_consent_write=function(a){this.add_script_element(this._srv("/consent/write?"+a))};
k.prototype.call_consent_check=function(){var a=["_s="+this.get_adroll_sid()];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));a="/consent/check/"+this._global("adroll_adv_id")+"?"+a.join("&");this.add_script_element(this._srv(a))};k.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};k.prototype.get_tpc_decode_timeout=function(){return 1E3};
k.prototype.set_first_party_cookie=function(){if(!this.get_first_party_cookie()){var a=this.md5((new Date).getTime()+Math.round(1E11*Math.random())+window.navigator.userAgent.toLowerCase()+window.document.referrer);this.set("__adroll_fpc",a,43800)}};k.prototype.get_first_party_cookie=function(){return this.get("__adroll_fpc")};window.__adroll=window.__adroll||new k;}());
(function(a){a.adroll_optout=!1;a.adroll_ext_network=null;a.adroll_callbacks="undefined"===typeof a.adroll_callbacks?[]:a.adroll_callbacks;a.__adroll.render_pixel_code(a.adroll_adv_id,a.adroll_pix_id)})(window);
