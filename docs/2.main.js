(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(t,n,e){"use strict";e.d(n,"g",(function(){return u})),e.d(n,"e",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return h})),e.d(n,"a",(function(){return p})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return v}));const i="https://raw.githubusercontent.com/",r="L3tum",s="CPU-Benchmark-Database",a="master",c="saves",o="aggregations";function u(t){return`${i}${r}/${s}/${a}/${c}/${t}.json`}function l(t){return`${i}${r}/${s}/${a}/${o}/pagination/${t}.json`}function f(){return`${i}${r}/${s}/${a}/${o}/byCPU/average.json`}function h(){return`${i}${r}/${s}/${a}/${o}/averageByCoreCount/1.json`}function p(t){return`${i}${r}/${s}/${a}/${o}/averageByCoreCount/${t}.json`}function d(){return`${i}${r}/${s}/${a}/${o}/byHighestFrequency/single-core.json`}function v(){return`${i}${r}/${s}/${a}/${o}/byHighestScore/overall-score.json`}},13:function(t,n,e){var i=e(14);i.Template=e(15).Template,i.template=i.Template,t.exports=i},14:function(t,n,e){!function(t){var n=/\S/,e=/\"/g,i=/\n/g,r=/\r/g,s=/\\/g,a=/\u2028/,c=/\u2029/;function o(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function u(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function l(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var i=1,r=t.length;i<r;i++)if(n.charAt(e+i)!=t.charAt(i))return!1;return!0}t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(e,i){var r=e.length,s=0,a=null,c=null,f="",h=[],p=!1,d=0,v=0,b="{{",g="}}";function m(){f.length>0&&(h.push({tag:"_t",text:new String(f)}),f="")}function y(e,i){if(m(),e&&function(){for(var e=!0,i=v;i<h.length;i++)if(!(e=t.tags[h[i].tag]<t.tags._v||"_t"==h[i].tag&&null===h[i].text.match(n)))return!1;return e}())for(var r,s=v;s<h.length;s++)h[s].text&&((r=h[s+1])&&">"==r.tag&&(r.indent=h[s].text.toString()),h.splice(s,1));else i||h.push({tag:"\n"});p=!1,v=h.length}function w(t,n){var e="="+g,i=t.indexOf(e,n),r=u(t.substring(t.indexOf("=",n)+1,i)).split(" ");return b=r[0],g=r[r.length-1],i+e.length-1}for(i&&(i=i.split(" "),b=i[0],g=i[1]),d=0;d<r;d++)0==s?l(b,e,d)?(--d,m(),s=1):"\n"==e.charAt(d)?y(p):f+=e.charAt(d):1==s?(d+=b.length-1,"="==(a=(c=t.tags[e.charAt(d+1)])?e.charAt(d+1):"_v")?(d=w(e,d),s=0):(c&&d++,s=2),p=d):l(g,e,d)?(h.push({tag:a,n:u(f),otag:b,ctag:g,i:"/"==a?p-b.length:d+g.length}),f="",d+=g.length-1,s=0,"{"==a&&("}}"==g?d++:o(h[h.length-1]))):f+=e.charAt(d);return y(p,!0),h};var f={_t:!0,"\n":!0,$:!0,"/":!0};function h(t,n){for(var e=0,i=n.length;e<i;e++)if(n[e].o==t.n)return t.tag="#",!0}function p(t,n,e){for(var i=0,r=e.length;i<r;i++)if(e[i].c==t&&e[i].o==n)return!0}function d(t){var n=[];for(var e in t.partials)n.push('"'+b(e)+'":{name:"'+b(t.partials[e].name)+'", '+d(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+function(t){var n=[];for(var e in t)n.push('"'+b(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}(t.subs)}t.stringify=function(n,e,i){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+d(n)+"}"};var v=0;function b(t){return t.replace(s,"\\\\").replace(e,'\\"').replace(i,"\\n").replace(r,"\\r").replace(a,"\\u2028").replace(c,"\\u2029")}function g(t){return~t.indexOf(".")?"d":"f"}function m(t,n){var e="<"+(n.prefix||"")+t.n+v++;return n.partials[e]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+b(e)+'",c,p,"'+(t.indent||"")+'"));',e}function y(t,n){n.code+="t.b(t.t(t."+g(t.n)+'("'+b(t.n)+'",c,p,0)));'}function w(t){return"t.b("+t+");"}t.generate=function(n,e,i){v=0;var r={code:"",subs:{},partials:{}};return t.walk(n,r),i.asString?this.stringify(r,e,i):this.makeTemplate(r,e,i)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var i=this.makePartials(t);return i.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(i,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+g(n.n)+'("'+b(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+g(n.n)+'("'+b(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":m,"<":function(n,e){var i={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,i);var r=e.partials[m(n,e)];r.subs=i.subs,r.partials=i.partials},$:function(n,e){var i={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,i),e.subs[n.n]=i.code,e.inPartial||(e.code+='t.sub("'+b(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=w('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+g(t.n)+'("'+b(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=w('"'+b(t.text)+'"')},"{":y,"&":y},t.walk=function(n,e){for(var i,r=0,s=n.length;r<s;r++)(i=t.codegen[n[r].tag])&&i(n[r],e);return e},t.parse=function(n,e,i){return function n(e,i,r,s){var a,c=[],o=null,u=null;for(a=r[r.length-1];e.length>0;){if(u=e.shift(),a&&"<"==a.tag&&!(u.tag in f))throw new Error("Illegal content in < super tag.");if(t.tags[u.tag]<=t.tags.$||h(u,s))r.push(u),u.nodes=n(e,u.tag,r,s);else{if("/"==u.tag){if(0===r.length)throw new Error("Closing tag without opener: /"+u.n);if(o=r.pop(),u.n!=o.n&&!p(u.n,o.n,s))throw new Error("Nesting error: "+o.n+" vs. "+u.n);return o.end=u.i,c}"\n"==u.tag&&(u.last=0==e.length||"\n"==e[0].tag)}c.push(u)}if(r.length>0)throw new Error("missing closing tag: "+r.pop().n);return c}(n,0,[],(i=i||{}).sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var i=t.cacheKey(n,e),r=this.cache[i];if(r){var s=r.partials;for(var a in s)delete s[a].instance;return r}return r=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[i]=r}}(n)},147:function(t,n,e){var i=e(13);t.exports=function(){var t=new i.Template({code:function(t,n,e){var i=this;return i.b(e=e||""),i.b('<div class="col-xl-6 col-12 pt-5"><h5>Highest Frequencies</h5> '),i.s(i.f("highestFrequencies",t,n,1),t,n,0,86,347,"{{ }}")&&(i.rs(t,n,(function(t,n,e){e.b(' <div class="col-12"><div class="card"><a class="detail-button '),e.b(e.v(e.f("vendor",t,n,0))),e.b('" href="'),e.b(e.v(e.f("filename",t,n,0))),e.b('"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> '),e.b(e.v(e.f("name",t,n,0))),e.b(' </h5><h5 class="cpu-entry"> '),e.b(e.v(e.f("frequency",t,n,0))),e.b(" GHz</h5></div></a></div></div> ")})),t.pop()),i.b(' </div><div class="col-xl-6 col-12 pt-5"><h5>Highest Scores</h5> '),i.s(i.f("highestScores",t,n,1),t,n,0,453,713,"{{ }}")&&(i.rs(t,n,(function(t,n,e){e.b(' <div class="col-12"><div class="card"><a class="detail-button '),e.b(e.v(e.f("vendor",t,n,0))),e.b('" href="'),e.b(e.v(e.f("filename",t,n,0))),e.b('"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> '),e.b(e.v(e.f("name",t,n,0))),e.b(' </h5><h5 class="cpu-entry"> '),e.b(e.v(e.f("score",t,n,0))),e.b(" Points</h5></div></a></div></div> ")})),t.pop()),i.b(' </div><div class="col-xl-6 col-12 pt-5"><h5>Random</h5> '),i.s(i.f("cpus",t,n,1),t,n,0,797,1057,"{{ }}")&&(i.rs(t,n,(function(t,n,e){e.b(' <div class="col-12"><div class="card"><a class="detail-button '),e.b(e.v(e.f("vendor",t,n,0))),e.b('" href="'),e.b(e.v(e.f("filename",t,n,0))),e.b('"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> '),e.b(e.v(e.f("name",t,n,0))),e.b(' </h5><h5 class="cpu-entry"> '),e.b(e.v(e.f("score",t,n,0))),e.b(" Points</h5></div></a></div></div> ")})),t.pop()),i.b(" </div>"),i.fl()},partials:{},subs:{}},'<div class="col-xl-6 col-12 pt-5"><h5>Highest Frequencies</h5> {{#highestFrequencies}} <div class="col-12"><div class="card"><a class="detail-button {{vendor}}" href="{{filename}}"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> {{name}} </h5><h5 class="cpu-entry"> {{frequency}} GHz</h5></div></a></div></div> {{/highestFrequencies}} </div><div class="col-xl-6 col-12 pt-5"><h5>Highest Scores</h5> {{#highestScores}} <div class="col-12"><div class="card"><a class="detail-button {{vendor}}" href="{{filename}}"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> {{name}} </h5><h5 class="cpu-entry"> {{score}} Points</h5></div></a></div></div> {{/highestScores}} </div><div class="col-xl-6 col-12 pt-5"><h5>Random</h5> {{#cpus}} <div class="col-12"><div class="card"><a class="detail-button {{vendor}}" href="{{filename}}"><div class="card-header d-flex justify-content-between"><h5 class="mb-0 cpu-entry"> {{name}} </h5><h5 class="cpu-entry"> {{score}} Points</h5></div></a></div></div> {{/cpus}} </div>',i);return t.render.apply(t,arguments)}},15:function(t,n,e){!function(t){function n(t,n,e){var i;return n&&"object"==typeof n&&(void 0!==n[t]?i=n[t]:e&&n.get&&"function"==typeof n.get&&(i=n.get(t))),i}t.Template=function(t,n,e,i){t=t||{},this.r=t.code||this.r,this.c=e,this.options=i||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(t,n,e){return""},v:function(t){return t=o(t),c.test(t)?t.replace(e,"&amp;").replace(i,"&lt;").replace(r,"&gt;").replace(s,"&#39;").replace(a,"&quot;"):t},t:o,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var e=this.partials[t],i=n[e.name];if(e.instance&&e.base==i)return e.instance;if("string"==typeof i){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}if(!i)return null;if(this.partials[t].base=i,e.subs){for(key in n.stackText||(n.stackText={}),e.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);i=function(t,n,e,i,r,s){function a(){}function c(){}var o;a.prototype=t,c.prototype=t.subs;var u=new a;for(o in u.subs=new c,u.subsText={},u.buf="",i=i||{},u.stackSubs=i,u.subsText=s,n)i[o]||(i[o]=n[o]);for(o in i)u.subs[o]=i[o];for(o in r=r||{},u.stackPartials=r,e)r[o]||(r[o]=e[o]);for(o in r)u.partials[o]=r[o];return u}(i,e.subs,e.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=i,i},rp:function(t,n,e,i){var r=this.ep(t,e);return r?r.ri(n,e,i):""},rs:function(t,n,e){var i=t[t.length-1];if(u(i))for(var r=0;r<i.length;r++)t.push(i[r]),e(t,n,this),t.pop();else e(t,n,this)},s:function(t,n,e,i,r,s,a){var c;return(!u(t)||0!==t.length)&&("function"==typeof t&&(t=this.ms(t,n,e,i,r,s,a)),c=!!t,!i&&c&&n&&n.push("object"==typeof t?t:n[n.length-1]),c)},d:function(t,e,i,r){var s,a=t.split("."),c=this.f(a[0],e,i,r),o=this.options.modelGet,l=null;if("."===t&&u(e[e.length-2]))c=e[e.length-1];else for(var f=1;f<a.length;f++)void 0!==(s=n(a[f],c,o))?(l=c,c=s):c="";return!(r&&!c)&&(r||"function"!=typeof c||(e.push(l),c=this.mv(c,e,i),e.pop()),c)},f:function(t,e,i,r){for(var s=!1,a=!1,c=this.options.modelGet,o=e.length-1;o>=0;o--)if(void 0!==(s=n(t,e[o],c))){a=!0;break}return a?(r||"function"!=typeof s||(s=this.mv(s,e,i)),s):!r&&""},ls:function(t,n,e,i,r){var s=this.options.delimiters;return this.options.delimiters=r,this.b(this.ct(o(t.call(n,i)),n,e)),this.options.delimiters=s,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,i,r,s,a){var c,o=n[n.length-1],u=t.call(o);return"function"==typeof u?!!i||(c=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(u,o,e,c.substring(r,s),a)):u},mv:function(t,n,e){var i=n[n.length-1],r=t.call(i);return"function"==typeof r?this.ct(o(r.call(i)),i,e):r},sub:function(t,n,e,i){var r=this.subs[t];r&&(this.activeSub=t,r(n,e,this,i),this.activeSub=!1)}};var e=/&/g,i=/</g,r=/>/g,s=/\'/g,a=/\"/g,c=/[&<>\"\']/;function o(t){return String(null==t?"":t)}var u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}(n)},9:function(t,n,e){"use strict";e.r(n),e.d(n,"render",(function(){return f}));var i=e(0),r=e.n(i),s=e(12),a=e(147),c=e.n(a);const o=[];let u=1;function l(t=u-1){return new Promise((n,e)=>{o.length>10*t?n(o.slice(10*t,10*t+10)):fetch(Object(s.e)(t+1)).then(e=>{e.ok&&404!==e.status?e.json().then(e=>{o.push(...e.Entries),o.length>10*t?n(o.slice(10*t,10*t+10)):n([])}):n([])})})}function f(){const t=r()("#prev"),n=r()("#next"),e=r()("#current");t.off("click"),t.prop("disabled",!0),n.off("click"),n.prop("disabled",!0),e.html(u),l().then(i=>{const a=function(t){const n=[];return t.forEach((function(t){const e=t.Value.split(" === ");n.push({name:e[0],vendor:e[1],score:e[2],filename:"?detail="+t.SaveFile})})),n}(i);new Promise((t,n)=>{fetch(Object(s.c)()).then(n=>{n.ok?n.json().then(n=>{const e=n.Entries.length>5?n.Entries.slice(0,5):n.Entries,i=[];for(const t of e){const n=t.Value.split(" === ");i.push({frequency:(parseInt(n[2])/1e3).toFixed(2),name:n[0],vendor:n[1],filename:"?detail="+t.SaveFile})}i.sort((function(t,n){return t.frequency>n.frequency?-1:t.frequency<n.frequency?1:0})),t(i)}):t([])})}).then(i=>{new Promise((t,n)=>{fetch(Object(s.d)()).then(n=>{n.ok?n.json().then(n=>{const e=n.Entries.length>5?n.Entries.slice(0,5):n.Entries,i=[];for(const t of e){const n=t.Value.split(" === ");i.push({score:parseInt(n[2]),name:n[0],vendor:n[1],filename:"?detail="+t.SaveFile})}i.sort((function(t,n){return t.score>n.score?-1:t.score<n.score?1:0})),t(i)}):t([])})}).then(s=>{r()("#accordion").html(c()({cpus:a,highestFrequencies:i,highestScores:s})),r()(".collapse").collapse(),e.html(u),l(u-2).then(n=>{0===n.length?(t.prop("disabled",!0),t.off("click")):(t.prop("disabled",!1),t.on("click",()=>{u--,f()}))}),l(u).then(t=>{0===t.length?(n.prop("disabled",!0),n.off("click")):(n.prop("disabled",!1),n.on("click",()=>{u++,f()}))})})})})}}}]);