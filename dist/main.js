!function(){var t={2972:function(t){t.exports=[["Charmander","./src/images/charmander.webp",360,[["Ember","fire",50,.95],["Outrage","dragon",40,.95],["Gust","fly",35,.85],["Slash","normal",30,.85]]],["Squirtle","./src/images/squirtle_back.gif",362,[["Surf","water",50,.95],["Tackle","normal",45,.95],["Blizzard","ice",40,.95],["Splash","water",48,.95]]],["Bulbasaur","./src/images/bulbasaur_back.webp",364,[["Spore","grass",50,.95],["Sludge","poison",50,.95],["Fissure","ground",55,.95],["Tackle","normal",48,.95]]]]},3609:function(t){t.exports=[["Venusaur","./src/images/venusaur.gif",360,[["Flame Blast","fire",50,.95],["Dragon Claw","dragon",40,.95],["Air slash","fly",35,.85],["Slash","normal",30,.85]]],["Blastoise","./src/images/blastoise.gif",362,[["Aqua Tail","water",50,.95],["Crunch","normal",45,.95],["Bubble punch","ice",40,.95],["Flash cannon","steel",48,.95]]],["Gyarados","./src/images/gyarados.gif",364,[["Blizzard","ice",50,.95],["Surf","water",50,.95],["Hydro Pump","water",55,.95],["Tackle","normal",48,.95]]]]},9500:function(t){t.exports={Gyarados:[[""],["grass"],["fire","water"]],Blastoise:[[""],["grass"],["fire","water"]],Venusaur:[["poison"],["fire","fly","ice","steel"],["grass","water"]],Charmander:[["ground"],["water","rock"],["fire","grass","steel"]],Squirtle:[[""],["grass"],["fire","water"]],Bulbasaur:[["poison"],["fire","fly","ice","steel"],["grass","water"]]}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,n){var r=n(5656),o=n(7466),i=n(1400),a=function(t){return function(e,n,a){var u,c=r(e),f=o(c.length),s=i(a,f);if(t&&n!=n){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,n){var r=n(6656),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),u=a.f,c=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,c(e,s))}}},4964:function(t,e,n){var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),u=i.process,c=i.Deno,f=u&&u.versions||c&&c.version,s=f&&f.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),u=n(3505),c=n(9920),f=n(4705);t.exports=function(t,e){var n,s,l,p,m,h=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(m=o(n,s))&&m.value:n[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,e,n){var r=n(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t,e,n){var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var r,o,i,a=n(8536),u=n(7854),c=n(111),f=n(8880),s=n(6656),l=n(5465),p=n(6200),m=n(3501),h="Object already initialized",d=u.WeakMap;if(a||l.state){var y=l.state||(l.state=new d),v=y.get,g=y.has,b=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError(h);return e.facade=t,b.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var M=p("state");m[M]=!0,r=function(t,e){if(s(t,M))throw new TypeError(h);return e.facade=t,f(t,M,e),e},o=function(t){return s(t,M)?t[M]:{}},i=function(t){return s(t,M)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},4705:function(t,e,n){var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==f||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(5005),o=n(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3929:function(t,e,n){var r=n(7850);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),u=n(3501),c=n(490),f=n(317),s=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},m=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;h="undefined"!=typeof document?document.domain&&r?m(r):((e=f("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):m(r);for(var n=a.length;n--;)delete h.prototype[a[n]];return h()};u[s]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[s]=t):n=h(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),a=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),u=r.length,c=0;u>c;)o.f(t,n=r[c++],e[n]);return t}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),a=n(4948),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),a=n(5656),u=n(4948),c=n(6656),f=n(4664),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=a(t),e=u(e),f)try{return s(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(6656),o=n(5656),i=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,u=o(t),c=0,f=[];for(n in u)!r(a,n)&&r(u,n)&&f.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(f,n)||f.push(n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(111);t.exports=function(t,e){var n,o;if("string"===e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),a=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(8880),i=n(6656),a=n(3505),u=n(2788),c=n(9909),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,m=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(c=s(n)).source||(c.source=l.join("string"==typeof e?e:""))),t!==r?(f?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854);t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,e,n){var r=n(111),o=n(2190),i=n(2140),a=n(5112)("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,u=t[a];if(void 0!==u){if(void 0===e&&(e="default"),n=u.call(t,e),!r(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:String(e)}},1340:function(t,e,n){var r=n(2190);t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(6656),a=n(9711),u=n(133),c=n(3307),f=o("wks"),s=r.Symbol,l=c?s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},6699:function(t,e,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(1223);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},8309:function(t,e,n){var r=n(9781),o=n(3070).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},2023:function(t,e,n){"use strict";var r=n(2109),o=n(3929),i=n(4488),a=n(1340);r({target:"String",proto:!0,forced:!n(4964)("includes")},{includes:function(t){return!!~a(i(this)).indexOf(a(o(t)),arguments.length>1?arguments[1]:void 0)}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(8309),n(6699),n(2023);var e=function(){function e(t,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.sprite=n,this.hp=r,this.fullhp=r,this.moves=o}var n,r;return n=e,(r=[{key:"generate",value:function(t){var n,r=new e((n=t?playerPokemon[Math.floor(Math.random()*playerPokemon.length)]:opponentList[Math.floor(Math.random()*opponentList.length)])[0],n[1],n[2],n[3]);if(t)for(var o=0;o<4;o++)document.getElementById("m"+o).value=r.moves[o][0];return r}},{key:"attack",value:function(t,e,n,r,o){if(document.getElementById("commentary").innerHTML="<p>"+o+e.name+" used "+t[0]+"!</p>",Math.random()<t[3]){for(var i=t[2]+=Math.floor(10*Math.random()),a=typeMatch[n.name],u=t[1],c=1,f=0;f<a.length;f++)if(a[f].includes(u)){switch(f){case 0:c=0,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It had no effect!</p>"}),1e3);break;case 1:c=2,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It was super effective!</p>"}),1e3);break;case 2:c=.5,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It was not very effective!</p>"}),1e3)}break}i*=c,n.hp-=Math.floor(i),document.getElementById(r).innerHTML="<p>"+n.hp+" "+n.fullhp+"</p>",(n===this.playerMonster?document.getElementById("health1"):document.getElementById("health2")).value=Math.floor(n.hp/n.fullhp*100)}else setTimeout((function(){document.getElementById("commentary").innerHTML="<p>Attack missed!</p>"}));this.gameOver(r)}}])&&t(n.prototype,r),e}(),r=n(3609),o=n.n(r),i=n(2972),a=n.n(i),u=n(9500),c=n.n(u);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playerMonster=null,this.opponentMonster=null}var n,r;return n=t,(r=[{key:"start",value:function(){var t=this,e=Math.floor(58*Math.random()+12);this.playerMonster=this.generate(!0);var n=document.createElement("img");n.src=this.playerMonster.sprite,document.getElementById("player-mon").appendChild(n),document.getElementById("player-health").innerHTML="<p>"+this.playerMonster.hp+"  "+this.playerMonster.fullhp+"</p>",document.getElementById("player-name").innerHTML=this.playerMonster.name,document.getElementById("player-level").innerHTML=e,document.getElementById("health1").value=this.playerMonster.hp,this.opponentMonster=this.generate(!1);var r=Math.floor(58*Math.random()+12),o=document.createElement("img");o.src=this.opponentMonster.sprite,document.getElementById("opponent-mon").appendChild(o),document.getElementById("opponent-health").innerHTML="<p>"+this.opponentMonster.hp+" "+this.opponentMonster.fullhp+"</p>",document.getElementById("opponent-name").innerHTML=this.opponentMonster.name,document.getElementById("opponent-level").innerHTML=r,document.getElementById("health2").value=this.opponentMonster.hp;for(var i=0;i<4;i++){function e(e,n,r,o){e.addEventListener("click",(function(e){t.attack(n,r,o,"opponent-health",""),document.getElementById("player-slash");var i=t.attack.bind(t);setTimeout(i,2500,o.moves[Math.floor(3*Math.random())],o,r,"player-health","Opponent ")}))}e(document.getElementById("m"+i),(document.getElementById("item"),this.playerMonster.moves[i]),this.playerMonster,this.opponentMonster)}}},{key:"generate",value:function(t){var n;n=t?a()[Math.floor(Math.random()*a().length)]:o()[Math.floor(Math.random()*o().length)];var r=new e(n[0],n[1],n[2],n[3]);if(t)for(var i=0;i<4;i++)document.getElementById("m"+i).value=r.moves[i][0];return r}},{key:"gameOver",value:function(t){var e=this.playerMonster.hp<=0?this.playerMonster:this.opponentMonster.hp<=0&&this.opponentMonster;0!=e&&(alert("Game Over: "+e.name+" fainted!\n\nPress Okay to Play Again!"),document.getElementById(t).innerHTML="<p>0/"+e.fullhp+"</p>",setTimeout((function(){location.reload()}),500))}},{key:"attack",value:function(t,e,n,r,o){if(document.getElementById("commentary").innerHTML="<p>"+o+e.name+" used "+t[0]+"!</p>",Math.random()<t[3]){for(var i=t[2]+=Math.floor(10*Math.random()),a=c()[n.name],u=t[1],f=1,s=0;s<a.length;s++)if(a[s].includes(u)){switch(s){case 0:f=0,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It had no effect!</p>"}),1e3);break;case 1:f=2,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It was super effective!</p>"}),1e3);break;case 2:f=.5,setTimeout((function(){document.getElementById("commentary").innerHTML="<p>It was not very effective!</p>"}),1e3)}break}i*=f,n.hp-=Math.floor(i),document.getElementById(r).innerHTML="<p>"+n.hp+"  "+n.fullhp+"</p>",(n===this.playerMonster?document.getElementById("health1"):document.getElementById("health2")).value=Math.floor(n.hp/n.fullhp*100)}else setTimeout((function(){document.getElementById("commentary").innerHTML="<p>Attack missed!</p>"}));this.gameOver(r)}}])&&f(n.prototype,r),t}();document.addEventListener("DOMContentLoaded",(function(){(new s).start()}))}()}();
//# sourceMappingURL=main.js.map