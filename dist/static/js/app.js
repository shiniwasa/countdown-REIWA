webpackJsonp([1],{"4kSi":function(t,s){},Gqy1:function(t,s){},JfAg:function(t,s){t.exports="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPy0tPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Il94MzJfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJ3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBvcGFjaXR5OiAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRCNEI0Qjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4Ny45MzIsMjQzLjc2OEwyNTUuOTk5LDBMMjQuMDc2LDI0My43NjhjLTIxLjc4NywyMi44ODYtMjAuODc0LDU5LjA4OCwyLjAxMyw4MC44NjUKCQljMjIuODg3LDIxLjc4Nyw1OS4wOTksMjAuODk2LDgwLjg4Ni0yLjAxM2w5MS44MTgtOTYuNTA2djIyOC42OTFjMCwzMS41OSwyNS42MTcsNTcuMTk1LDU3LjIwNSw1Ny4xOTUKCQljMzEuNiwwLDU3LjIxNy0yNS42MDYsNTcuMjE3LTU3LjE5NVYyMjYuMTE0bDkxLjgyOSw5Ni41MDZjMjEuNzc3LDIyLjkwOSw1Ny45NzgsMjMuOCw4MC44NzUsMi4wMTMKCQlDNTA4LjgwNiwzMDIuODU1LDUwOS42OTgsMjY2LjY1NCw0ODcuOTMyLDI0My43Njh6IiBzdHlsZT0iZmlsbDogcmdiKDc1LCA3NSwgNzUpOyI+PC9wYXRoPgo8L2c+Cjwvc3ZnPgo="},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",[s("router-view")],1)],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},n,!1,function(t){e("Gqy1")},null,null).exports,r=e("/ocq"),o=(e("QBpD"),e("PJh5")),c=e.n(o),d=e("SdwT"),u=e.n(d),h={name:"Counter",reiwaTime:[2019,4,1],data:function(){return{now:c()(),goal:c()([2019,4,1]),iKey:-1}},methods:{updateReal:function(){var t=this;this.iKey=setInterval(function(){t.now=c()()},500)},last10sec:function(){this.goal=c()().add(10,"s"),-1!==this.iKey&&this.updateReal()}},mounted:function(){u()(c.a),this.updateReal(),this.$route.query.leep&&(this.goal=c()().add(this.$route.query.leep,"s"))},computed:{diff:function(){return Math.max(this.goal.diff(this.now),0)},detail:function(){return c.a.duration(this.diff).format("D[日] HH : mm : ss",{trim:!1,trunc:!0})},strong:function(){return this.diff>=864e5?""+c.a.duration(this.diff).format("D",{trim:!1,trunc:!0}):this.diff>=36e5?""+c.a.duration(this.diff).format("h",{trim:!1,trunc:!0}):this.diff>=6e4?""+c.a.duration(this.diff).format("m",{trim:!1,trunc:!0}):this.diff>=0?""+c.a.duration(this.diff).format("s",{trim:!1,trunc:!0}):void 0},unit:function(){return this.diff>=864e5?" 日":this.diff>=36e5?" 時間":this.diff>=6e4?" 分":this.diff>=0?"":void 0}},watch:{diff:function(t){0===t&&(clearInterval(this.iKey),this.$router.push("/a"))}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrap"}},[e("div",[e("div",{attrs:{id:"head"}},[t._v("令和まで")]),t._v(" "),e("div",{attrs:{id:"strong-area"}},[e("span",{staticClass:"dgtl strong"},[t._v(t._s(t.strong))]),t._v(" "),e("span",{staticClass:"dgtl unit"},[t._v(t._s(t.unit))])]),t._v(" "),e("div",{staticClass:"dgtl",attrs:{id:"detail-area"}},[t._v(t._s(t.detail))])])])},staticRenderFns:[]};var j=e("VU/8")(h,l,!1,function(t){e("hIfh")},"data-v-5a9db9a2",null).exports,f={name:"Animation",data:function(){return{leepable:!1}},methods:{leep:function(){this.$router.push({path:"/",query:{leep:10}})},togame:function(){this.$router.push({path:"/reiwagame"})}},mounted:function(){var t=this;setTimeout(function(){t.leepable=!0},5e3)},computed:{}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrap"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.leepable,expression:"leepable"}],staticClass:"timeleep"},[e("button",{on:{click:t.leep}},[t._v("10秒前へ")]),t._v(" "),e("button",{staticStyle:{left:"0"},on:{click:t.togame}},[t._v("令和ゲームに挑戦")])]),t._v(" "),e("div",{attrs:{id:"gengo"}},[t._v("令和")])])},staticRenderFns:[]};var v=e("VU/8")(f,m,!1,function(t){e("4kSi")},"data-v-10a680a3",null).exports,g=e("e7x4"),p=e.n(g),w={name:"ReiwaGame",data:function(){return{leepable:!1,snake:[],count:0,movecount:30,isDead:!1,nowdir:2,nextdir:2,agent:null,dircode:{u:1,l:2,r:-2,d:-1}}},methods:{leep:function(){this.$router.push({path:"/",query:{leep:10}})},reset:function(){location.reload()},mainloop:function(){this.isDead||(this.countup(),requestAnimationFrame(this.mainloop))},init:function(){this.snake=[{x:14,y:0,div:document.createElement("div")},{x:15,y:0,div:document.createElement("div")}],this.agent={x:7,y:0,div:document.createElement("div")},this.agent.div.className="agent",this.movecount=30,this.nowdir=this.dircode.l,this.nextdir=this.dircode.l,this.addKeyAction(),this.draw(),this.mainloop()},addKeyAction:function(){var t=this;document.addEventListener("keydown",function(s){switch(s.key){case"ArrowUp":t.move(t.dircode.u);break;case"ArrowRight":t.move(t.dircode.r);break;case"ArrowLeft":t.move(t.dircode.l);break;case"ArrowDown":t.move(t.dircode.d)}})},draw:function(){var t=this;this.agent.div.style.gridArea="g"+this.agent.y+"-"+this.agent.x,this.agent.div.style.backgroundColor="red",this.$refs.snakebox.appendChild(this.agent.div),this.snake.forEach(function(s,e){var i=e%2==0?"令":"和";s.div.innerText=i,s.div.style.gridArea="g"+s.y+"-"+s.x,s.div.style.backgroundColor="black",t.$refs.snakebox.appendChild(s.div)})},countup:function(){this.count++,this.count>=this.movecount&&(this.update(),this.count=0)},move:function(t){-1*t!==this.nowdir&&(this.nextdir=t)},update:function(){this.nowdir=this.nextdir,this.updategrid(),this.checkDead(),this.isDead||this.draw()},updategrid:function(){var t={x:this.snake[0].x+(this.nowdir===this.dircode.r?1:this.nowdir===this.dircode.l?-1:0),y:this.snake[0].y+(this.nowdir===this.dircode.d?1:this.nowdir===this.dircode.u?-1:0),div:document.createElement("div")};this.agent.x===t.x&&this.agent.y===t.y&&(this.snake.push({x:0,y:0,div:document.createElement("div")}),this.updateAgent());for(var s=this.snake[this.snake.length-1].div,e=this.snake.length-1;e>0;e--)this.snake[e]=this.snake[e-1];t.div=s,this.snake[0]=t},updateAgent:function(){for(var t=this,s=[],e=function(e){for(var i=function(i){-1===t.snake.findIndex(function(t){return t.x===e&&t.y===i})&&s.push({x:e,y:i})},n=0;n<15;n++)i(n)},i=0;i<15;i++)e(i);var n=s[Math.floor(Math.random()*s.length)];this.agent.x=n.x,this.agent.y=n.y,this.movecount=Math.ceil(25-.08*this.snake.length)},checkDead:function(){var t=this.snake[0];(this.offside(t)||this.hitself(t))&&this.dead()},offside:function(t){return 0>t.x||t.x>15||0>t.y||t.y>15},hitself:function(t){return this.snake.filter(function(s){return s.x===t.x&&s.y===t.y}).length>1},dead:function(){this.isDead=!0;var t=this.snake.length,s="ほう",e="【令和PT】"+t+"PT【評価】"+(s=256===t?"You are Perfect 令和。令和はあなたにあげます。自慢していいです。あなたはすごいやつです。愛しています。":t>240?"ここまで到達する者を見るのは令和では久しぶりだ。到達するのか、その先へ。":t>220?"もはや何も言うまでもない令和ぶり。君はすでに人を越えた。":t>200?"令和な大台を突破。修羅の道を進む君にエールを送る。":t>180?"令和に愛され始めている。ほかの元号が嫉妬するレベルになってきている。":t>160?"令和に生きる人間としては最高峰のひとり。今ならワンフェイクで沢北をかわせます。":t>140?"相当な手練れの令和ぶり。相手がヤムチャならワンパン余裕です。":t>120?"かなり令和に近づいている。令和とともにあらんことを。":t>100?"意地でも令和をつなげたい気持ちが盛り上がる。ここを乗り越えると強くなれる。":t>80?"令和の心が少しづつ分かってくるころ。万葉集と古今和歌集の区別がつき始める。":t>60?"中の下の令和。心無いコメントをされると折れるレベル。":t>40?"脱・令和初心者。もう平成とは言わせない。":t>20?"令和がゲシュタルト崩壊してくるころ。しかしまだまだ先は長い。":t>10?"令和初心者。俺たちの戦いは始まったばかり。":"令和に満たない。でも僕は好きです。")+"【令和Game：<http://bit.ly/2vvAOaK>】";p.a.fire({allowOutsideClick:!1,type:t>200?"success":"error",title:"令和ポイント："+t,text:""+s,footer:'<a href="https://mixi.jp/simplepost/voice?status='+e+'【令和Game：<https://kobatakujp.github.io/countdown-REIWA/dist/#/reiwagame>】">mixi</a>／<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='+e+'" data-size="large">Tweet</a>'})}},mounted:function(){this.init()},computed:{}},y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"wrap"}},[i("div",{attrs:{id:"game-main"}},[i("div",{ref:"snakebox",staticClass:"snakegame-main-box"})]),t._v(" "),i("div",{staticClass:"controler"},[i("div",{staticClass:"contbtn up",on:{click:function(s){return t.move(1)}}},[i("img",{attrs:{src:e("JfAg")}})]),t._v(" "),i("div",{staticClass:"contbtn left",on:{click:function(s){return t.move(2)}}},[i("img",{attrs:{src:e("JfAg")}})]),t._v(" "),i("div",{staticClass:"contbtn right",on:{click:function(s){return t.move(-2)}}},[i("img",{attrs:{src:e("JfAg")}})]),t._v(" "),i("div",{staticClass:"contbtn down",on:{click:function(s){return t.move(-1)}}},[i("img",{attrs:{src:e("JfAg")}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isDead,expression:"isDead"}],staticClass:"buttonarea"},[i("button",{on:{click:t.leep}},[t._v("10秒カウントダウン")]),t._v(" "),i("button",{on:{click:t.reset}},[t._v("リセット")])])])},staticRenderFns:[]};var k=e("VU/8")(w,y,!1,function(t){e("OEdL")},"data-v-08e6c9d0",null).exports;i.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"Counter",component:j},{path:"/a",name:"Animation",component:v},{path:"/reiwagame",name:"ReiwaGame",component:k}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,components:{App:a},template:"<App/>"})},OEdL:function(t,s){},QBpD:function(t,s){},hIfh:function(t,s){},uslO:function(t,s,e){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(a(t))}function a(t){var s=i[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.js.map