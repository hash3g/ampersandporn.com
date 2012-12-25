;(function(window,document,undefined){
var i=void 0,k=!0,m=null,n=!1;function p(a){return function(){return this[a]}}var q;function r(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}};function aa(a,c){this.G=a;this.z=c||a;this.H=this.z.document;this.W=i}aa.prototype.createElement=function(a,c,b){a=this.H.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?s(this,a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.H.createTextNode(b));return a};function v(a,c,b){a=a.H.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function ba(a){function c(){document.body?a():setTimeout(c,0)}c()}
function w(a){a.parentNode&&a.parentNode.removeChild(a)}function x(a,c){return a.createElement("link",{rel:"stylesheet",href:c})}function ca(a,c){return a.createElement("script",{src:c})}function y(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}function z(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}
function da(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return k;return n}function s(a,c,b){if(a.W===i){var d=a.H.createElement("p");d.innerHTML='<a style="top:1px;">w</a>';a.W=/top/.test(d.getElementsByTagName("a")[0].getAttribute("style"))}a.W?c.setAttribute("style",b):c.style.cssText=b}function A(a){var c=a.z.location.protocol;"about:"==c&&(c=a.G.location.protocol);return"https:"==c?"https:":"http:"};function B(a,c,b,d,e,f,g,j){this.Ca=a;this.Ia=c;this.qa=b;this.pa=d;this.Fa=e;this.Ea=f;this.oa=g;this.Ja=j}q=B.prototype;q.getName=p("Ca");q.ya=p("Ia");q.Z=p("qa");q.va=p("pa");q.wa=p("Fa");q.xa=p("Ea");q.ua=p("oa");q.w=p("Ja");function C(a,c){this.a=a;this.o=c}var ea=new B("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",i,n);
C.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=D(this);var c=E(this),b=F(this.a,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1],e=G(d),f=G(c);a=new B(b,d,b,d,a,c,H(this.o),"Windows"==a&&6<=e||"Windows Phone"==a&&8<=f)}else a=new B("MSIE","Unknown","MSIE","Unknown",a,c,H(this.o),n)}else if(-1!=this.a.indexOf("Opera"))a:if(c=a="Unknown",b=F(this.a,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=F(this.a,
/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.a.indexOf("Opera Mini/"))b=F(this.a,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new B("OperaMini",b,a,c,D(this),E(this),H(this.o),n);else{if(-1!=this.a.indexOf("Version/")&&(b=F(this.a,/Version\/([\d\.]+)/,1),""!=b)){a=new B("Opera",b,a,c,D(this),E(this),H(this.o),10<=G(b));break a}b=F(this.a,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new B("Opera",b,a,c,D(this),E(this),H(this.o),10<=G(b)):new B("Opera","Unknown",a,c,D(this),E(this),H(this.o),n)}else-1!=this.a.indexOf("AppleWebKit")?
(a=D(this),c=E(this),b=F(this.a,/AppleWebKit\/([\d\.\+]+)/,1),""==b&&(b="Unknown"),d="Unknown",-1!=this.a.indexOf("Chrome")||-1!=this.a.indexOf("CrMo")||-1!=this.a.indexOf("CriOS")?d="Chrome":"BlackBerry"==a||"Android"==a?d="BuiltinBrowser":-1!=this.a.indexOf("Safari")?d="Safari":-1!=this.a.indexOf("AdobeAIR")&&(d="AdobeAIR"),e="Unknown","BuiltinBrowser"==d?e="Unknown":-1!=this.a.indexOf("Version/")?e=F(this.a,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=F(this.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==
d&&(e=F(this.a,/AdobeAIR\/([\d\.]+)/,1)),f=n,"AdobeAIR"==d?(f=F(e,/\d+\.(\d+)/,1),f=2<G(e)||2==G(e)&&5<=parseInt(f,10)):"BlackBerry"==a?f=10<=parseInt(c,10):"Android"==a?f=2.1<parseFloat(c):(f=F(b,/\d+\.(\d+)/,1),f=526<=G(b)||525<=G(b)&&13<=parseInt(f,10)),a=new B(d,e,"AppleWebKit",b,a,c,H(this.o),f)):-1!=this.a.indexOf("Gecko")?(c=a="Unknown",d=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=F(this.a,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=F(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=G(b)&&5<=parseInt(d,10))):
-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),b=F(this.a,/rv:([^\)]+)/,1),""==b?b="Unknown":d||(d=G(b),e=parseInt(F(b,/\d+\.(\d+)/,1),10),f=parseInt(F(b,/\d+\.\d+\.(\d+)/,1),10),d=1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=m||b.match(/1\.9\.1\.[\d\.]+/)!=m),a=new B(a,c,"Gecko",b,D(this),E(this),H(this.o),d)):a=ea;return a};
function D(a){var c=F(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=c)return/BB\d{2}/.test(c)&&(c="BlackBerry"),c;a=F(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function E(a){var c=F(a.a,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=F(a.a,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=F(a.a,/(iPhone )?OS ([\d_]+)/,2))return c;if(c=F(a.a,/Linux ([i\d]+)/,1))return c;return(a=F(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}function G(a){a=F(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function F(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function H(a){if(a.documentMode)return a.documentMode};function ga(a,c,b){this.c=a;this.h=c;this.X=b;this.j="wf";this.g=new ha("-")}function ia(a){y(a.h,a.g.e(a.j,"loading"));I(a,"loading")}function J(a){z(a.h,a.g.e(a.j,"loading"));da(a.h,a.g.e(a.j,"active"))||y(a.h,a.g.e(a.j,"inactive"));I(a,"inactive")}function I(a,c,b,d){if(a.X[c])a.X[c](b,d)};function ja(){this.ga={}}function ka(a,c,b){var d=[],e;for(e in c)if(c.hasOwnProperty(e)){var f=a.ga[e];f&&d.push(f(c[e],b))}return d};function K(a,c,b,d,e){this.c=a;this.B=c;this.k=b;this.u=d;this.F=e;this.N=0;this.ka=this.fa=n}K.prototype.watch=function(a,c,b,d,e){for(var f=a.length,g=0;g<f;g++){var j=a[g];c[j]||(c[j]=["n4"]);this.N+=c[j].length}e&&(this.fa=e);for(g=0;g<f;g++)for(var j=a[g],e=c[j],l=b[j],h=0,o=e.length;h<o;h++){var t=e[h],u=this.B,O=j,fa=t;y(u.h,u.g.e(u.j,O,fa,"loading"));I(u,"fontloading",O,fa);u=r(this,this.ra);O=r(this,this.sa);(new d(u,O,this.c,this.k,this.u,this.F,j,t,l)).start()}};
K.prototype.ra=function(a,c){var b=this.B;z(b.h,b.g.e(b.j,a,c,"loading"));z(b.h,b.g.e(b.j,a,c,"inactive"));y(b.h,b.g.e(b.j,a,c,"active"));I(b,"fontactive",a,c);this.ka=k;la(this)};K.prototype.sa=function(a,c){var b=this.B;z(b.h,b.g.e(b.j,a,c,"loading"));da(b.h,b.g.e(b.j,a,c,"active"))||y(b.h,b.g.e(b.j,a,c,"inactive"));I(b,"fontinactive",a,c);la(this)};
function la(a){0==--a.N&&a.fa&&(a.ka?(a=a.B,z(a.h,a.g.e(a.j,"loading")),z(a.h,a.g.e(a.j,"inactive")),y(a.h,a.g.e(a.j,"active")),I(a,"active")):J(a.B))};function L(a,c,b,d,e,f,g,j,l){this.K=a;this.aa=c;this.c=b;this.k=d;this.u=e;this.F=f;this.Ba=new ma;this.v=new M;this.O=g;this.C=j;this.ta=l||"BESbswy";this.R=na(this,"arial,'URW Gothic L',sans-serif");this.S=na(this,"Georgia,'Century Schoolbook L',serif");this.da=this.R;this.ea=this.S;this.T=N(this,"arial,'URW Gothic L',sans-serif");this.U=N(this,"Georgia,'Century Schoolbook L',serif")}L.prototype.start=function(){this.ja=this.F();this.M()};
L.prototype.M=function(){var a=this.k.p(this.T),c=this.k.p(this.U);(this.R!=a||this.S!=c)&&this.da==a&&this.ea==c?P(this,this.K):5E3<=this.F()-this.ja?P(this,this.aa):(this.da=a,this.ea=c,oa(this))};function oa(a){a.u(function(a,b){return function(){b.call(a)}}(a,a.M),25)}function P(a,c){w(a.T);w(a.U);c(a.O,a.C)}function na(a,c){var b=N(a,c,k),d=a.k.p(b);w(b);return d}function N(a,c,b){c=a.c.createElement("span",{style:Q(a,c,a.C,b)},a.ta);v(a.c,"body",c);return c}
function Q(a,c,b,d){b=a.v.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Ba.quote(a.O)+",")+c+";"+b};function R(a,c,b,d){this.G=a;this.Y=c;this.u=b;this.a=d;this.P=this.Q=0}R.prototype.q=function(a,c){this.Y.ga[a]=c};R.prototype.load=function(a){var c=a.context||this.G;this.c=new aa(this.G,c);c=new ga(this.c,c.document.documentElement,a);this.a.w()?pa(this,c,a):J(c)};R.prototype.za=function(a,c,b,d){var e=a.$?a.$():L;d?a.load(r(this,this.Da,c,b,e)):(a=0==--this.Q,this.P--,a&&(0==this.P?J(c):ia(c)),b.watch([],{},{},e,a))};
R.prototype.Da=function(a,c,b,d,e,f){var g=0==--this.Q;g&&ia(a);this.u(r(this,function(a,c,b,d,e,f){a.watch(c,b||{},d||{},e,f)},c,d,e,f,b,g))};function pa(a,c,b){b=ka(a.Y,b,a.c);a.P=a.Q=b.length;for(var d=new K(a.c,c,{p:function(a){return a.offsetWidth}},a.u,function(){return(new Date).getTime()}),e=0,f=b.length;e<f;e++){var g=b[e];g.A(a.a,r(a,a.za,g,c,d))}};function ha(a){this.Aa=a||"-"}ha.prototype.e=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Aa)};function ma(){this.ia="'"}ma.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.ia+d+this.ia)}return c.join(",")};function M(){this.J=qa;this.m=ra}var qa=["font-style","font-weight"],ra={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function S(a,c,b){this.ba=a;this.Ga=c;this.m=b}S.prototype.compact=function(a,c){for(var b=0;b<this.m.length;b++)if(c==this.m[b][1]){a[this.ba]=this.m[b][0];break}};
S.prototype.expand=function(a,c){for(var b=0;b<this.m.length;b++)if(c==this.m[b][0]){a[this.ba]=this.Ga+":"+this.m[b][1];break}};M.prototype.compact=function(a){for(var c=["n","4"],a=a.split(";"),b=0,d=a.length;b<d;b++){var e=a[b].replace(/\s+/g,"").split(":");if(2==e.length){var f=e[1];a:{for(var e=e[0],g=0;g<this.J.length;g++)if(e==this.J[g]){e=new S(g,e,this.m[e]);break a}e=m}e&&e.compact(c,f)}}return c.join("")};
M.prototype.expand=function(a){if(2!=a.length)return m;for(var c=[m,m],b=0,d=this.J.length;b<d;b++){var e=this.J[b];(new S(b,e,this.m[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":m};var T=window.WebFont=function(){var a=(new C(navigator.userAgent,document)).parse();return new R(window,new ja,function(a,b){setTimeout(a,b)},a)}();T.load=T.load;T.addModule=T.q;B.prototype.getName=B.prototype.getName;B.prototype.getVersion=B.prototype.ya;B.prototype.getEngine=B.prototype.Z;B.prototype.getEngineVersion=B.prototype.va;B.prototype.getPlatform=B.prototype.wa;B.prototype.getPlatformVersion=B.prototype.xa;B.prototype.getDocumentMode=B.prototype.ua;B.prototype.isSupportingWebFont=B.prototype.w;function U(a,c){this.c=a;this.d=c}U.prototype.load=function(a){for(var c=this.d.urls||[],b=this.d.families||[],d=0,e=c.length;d<e;d++)v(this.c,"head",x(this.c,c[d]));a(b)};U.prototype.A=function(a,c){return c(a.w())};T.q("custom",function(a,c){return new U(c,a)});function V(a,c){this.c=a;this.d=c;this.f=[];this.s={}}V.prototype.D=function(a){var c=A(this.c);return(this.d.api||c+"//use.typekit.com")+"/"+a+".js"};V.prototype.A=function(a,c){var b=this.d.id,d=this.d,e=this.c.z,f=this;b?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[b]=function(b){b(a,d,function(a,b,d){f.f=b;f.s=d;c(a)})},v(this.c,"head",ca(this.c,this.D(b)))):c(k)};V.prototype.load=function(a){a(this.f,this.s)};
T.q("typekit",function(a,c){return new V(c,a)});function W(a,c){this.c=a;this.d=c}var sa={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};W.prototype.A=function(a,c){return c(a.w())};
W.prototype.load=function(a){var c,b;v(this.c,"head",x(this.c,A(this.c)+"//webfonts.fontslive.com/css/"+this.d.key+".css"));var d=this.d.families,e,f;e=[];f={};for(var g=0,j=d.length;g<j;g++){b=b=c=i;b=d[g].split(":");c=b[0];if(b[1]){b=b[1].split(",");for(var l=[],h=0,o=b.length;h<o;h++){var t=b[h];if(t){var u=sa[t];l.push(u?u:t)}}b=l}else b=["n4"];e.push(c);f[c]=b}a(e,f)};T.q("ascender",function(a,c){return new W(c,a)});function X(a,c,b){this.a=a;this.c=c;this.d=b;this.f=[];this.s={}}
X.prototype.A=function(a,c){var b=this,d=b.d.projectId;if(d){var e=b.c.createElement("script");e.id="__MonotypeAPIScript__"+d;var f=this.c.z,g=n;e.onload=e.onreadystatechange=function(){if(!g&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)){g=k;if(f["__mti_fntLst"+d]){var j=f["__mti_fntLst"+d]();if(j&&j.length){var l;for(l=0;l<j.length;l++)b.f.push(j[l].fontfamily)}}c(a.w());e.onload=e.onreadystatechange=m}};e.src=b.D(d);v(this.c,"head",e)}else c(k)};
X.prototype.D=function(a){var c=A(this.c),b=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+b+"/"+a+".js"};X.prototype.load=function(a){a(this.f,this.s)};T.q("monotype",function(a,c){var b=(new C(navigator.userAgent,document)).parse();return new X(b,c,a)});function Y(a,c,b,d,e,f,g,j,l){Y.Ha.call(this,a,c,b,d,e,f,g,j,l);a=["Times New Roman","Arial","Times","Sans","Serif"];c=a.length;b={};d=N(this,a[0],k);b[this.k.p(d)]=k;for(e=1;e<c;e++)f=a[e],s(this.c,d,Q(this,f,this.C,k)),b[this.k.p(d)]=k,"4"!=this.C[1]&&(s(this.c,d,Q(this,f,this.C[0]+"4",k)),b[this.k.p(d)]=k);w(d);this.t=b;this.na=n}(function(a,c){function b(){}b.prototype=a.prototype;c.prototype=new b;c.Ha=a;c.Ka=a.prototype})(L,Y);var ta={Arimo:k,Cousine:k,Tinos:k};
Y.prototype.M=function(){var a=this.k.p(this.T),c=this.k.p(this.U);!this.na&&a==c&&this.t[a]&&(this.t={},this.na=this.t[a]=k);(this.R!=a||this.S!=c)&&!this.t[a]&&!this.t[c]?P(this,this.K):5E3<=this.F()-this.ja?this.t[a]&&this.t[c]&&ta[this.O]?P(this,this.K):P(this,this.aa):oa(this)};function ua(a,c,b){this.L=a?a:c+va;this.f=[];this.V=[];this.la=b||""}var va="//fonts.googleapis.com/css";ua.prototype.e=function(){if(0==this.f.length)throw Error("No fonts to load !");if(-1!=this.L.indexOf("kit="))return this.L;for(var a=this.f.length,c=[],b=0;b<a;b++)c.push(this.f[b].replace(/ /g,"+"));a=this.L+"?family="+c.join("%7C");0<this.V.length&&(a+="&subset="+this.V.join(","));0<this.la.length&&(a+="&text="+escape(this.la.replace(/ /g,"+")));return a};function wa(a){this.f=a;this.ha=[];this.ma={};this.I={};this.v=new M}
var xa={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},ya={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},za={i:"i",italic:"i",n:"n",normal:"n"},Aa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
wa.prototype.parse=function(){for(var a=this.f.length,c=0;c<a;c++){var b=this.f[c].split(":"),d=b[0].replace(/\+/g," "),e=["n4"];if(2<=b.length){var f;var g=b[1];f=[];if(g)for(var g=g.split(","),j=g.length,l=0;l<j;l++){var h;h=g[l];if(h.match(/^[\w]+$/))if(h=Aa.exec(h.toLowerCase()),h==m)h="";else{var o=i;o=h[1];if(o==m)o="4";else var t=ya[o],o=t?t:isNaN(o)?"4":o.substr(0,1);h=(h=this.v.expand([h[2]==m?"n":za[h[2]],o].join("")))?this.v.compact(h):m}else h="";h&&f.push(h)}0<f.length&&(e=f);3==b.length&&
(b=b[2],f=[],b=!b?f:b.split(","),0<b.length&&(b=xa[b[0]])&&(this.I[d]=b))}this.I[d]||(b=xa[d])&&(this.I[d]=b);this.ha.push(d);this.ma[d]=e}};function Z(a,c,b){this.a=a;this.c=c;this.d=b}Z.prototype.A=function(a,c){c(a.w())};Z.prototype.$=function(){return"AppleWebKit"==this.a.Z()?Y:L};Z.prototype.load=function(a){"MSIE"==this.a.getName()&&this.d.blocking!=k?ba(r(this,this.ca,a)):this.ca(a)};
Z.prototype.ca=function(a){for(var c=this.c,b=new ua(this.d.api,A(c),this.d.text),d=this.d.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&b.V.push(g.pop());var j="";2==g.length&&""!=g[1]&&(j=":");b.f.push(g.join(j))}d=new wa(d);d.parse();v(c,"head",x(c,b.e()));a(d.ha,d.ma,d.I)};T.q("google",function(a,c){var b=(new C(navigator.userAgent,document)).parse();return new Z(b,c,a)});function $(a,c){this.c=a;this.d=c;this.f=[];this.s={};this.v=new M}$.prototype.D=function(a){return A(this.c)+(this.d.api||"//f.fontdeck.com/s/css/js/")+(this.c.z.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};
$.prototype.A=function(a,c){var b=this.d.id,d=this.c.z,e=this;b?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[b]=function(a,b){for(var d=0,l=b.fonts.length;d<l;++d){var h=b.fonts[d];e.f.push(h.name);e.s[h.name]=[e.v.compact("font-weight:"+h.weight+";font-style:"+h.style)]}c(a)},v(this.c,"head",ca(this.c,this.D(b)))):c(k)};$.prototype.load=function(a){a(this.f,this.s)};T.q("fontdeck",function(a,c){return new $(c,a)});window.WebFontConfig&&T.load(window.WebFontConfig);
})(this,document);
