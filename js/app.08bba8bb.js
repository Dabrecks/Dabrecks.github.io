(function(t){function e(e){for(var n,s,i=e[0],o=e[1],u=e[2],f=0,h=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(h.length)h.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},c=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"193a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("AjoutTache",{on:{"ajout-tache":t.ajouterTache}}),t._v(" "),a("Taches",{attrs:{taches:t.taches},on:{"sup-tache":t.suprimerTache}})],1)},c=[],s=a("2909"),i=(a("4de4"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.taches,(function(e){return a("div",{key:e.id},[a("Tache",{attrs:{tache:e},on:{"sup-tache":function(a){return t.$emit("sup-tache",e.id)}}})],1)})),0)}),o=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"tacheLigne"},[a("b-col",{staticClass:"sectionCentre",attrs:{cols:"10",lg:"8","order-lg":"3"}},[a("div",{staticClass:"infoTache"},[a("div",{staticClass:"tache"},[a("p",{staticClass:"pTache m-0 pr-4"},[a("span",{class:{complete:t.tache.termine}},[t._v(t._s(t.tache.tache))])])])]),a("div",{staticClass:"date"},[a("p",{staticClass:"pDate"},[a("span",[t._v(t._s(t.tache.dateFin))])])])]),a("b-col",{staticClass:"btnUrgent p-0",attrs:{cols:"2",lg:"1","order-lg":"2"}},[t.tache.urgent?a("font-awesome-icon",{staticClass:"fa-2x",attrs:{id:"urgent",icon:"fire"}}):t._e()],1),a("b-col",{staticClass:"checkbox",attrs:{cols:"10",lg:"2","order-lg":"1"}},[a("div",{staticClass:"checkboxTermine m-1"},[a("b-form-checkbox",{attrs:{type:"checkbox",name:"termine"},on:{change:t.marqueTermine}},[a("label",{attrs:{for:"termine"}},[a("p",{staticClass:"mb-0"},[t._v("Terminé")])])])],1),a("div",{staticClass:"checkboxUrgent m-1"},[a("b-form-checkbox",{attrs:{type:"checkbox",name:"urgent"},on:{change:t.marqueUrgent}},[a("label",{attrs:{for:"urgent"}},[a("p",{staticClass:"mb-0"},[t._v("Urgent")])])])],1)]),a("b-col",{staticClass:"btnSuprimer",attrs:{cols:"2",lg:"1","order-lg":"4"}},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{id:"suprimer",icon:"trash"},on:{click:function(e){return t.$emit("sup-tache",t.tache.id)}}})],1)],1)},l=[],f={name:"Tache",props:["tache"],methods:{marqueTermine:function(){this.tache.termine=!this.tache.termine},marqueUrgent:function(){this.tache.urgent=!this.tache.urgent}}},h=f,p=(a("f632"),a("2877")),d=Object(p["a"])(h,u,l,!1,null,"7633c1c6",null),m=d.exports,b={name:"Taches",components:{Tache:m},props:["taches"]},v=b,g=Object(p["a"])(v,i,o,!1,null,"6ace4bd6",null),x=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"header"},[a("b-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"title m-0"},[t._v("TâchesMaker")])])],1)},T=[],_={name:"Header"},j=_,y=(a("7628"),Object(p["a"])(j,C,T,!1,null,"2a9ca94a",null)),O=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"ajout"},[a("form",{on:{submit:t.ajoutTache}},[a("b-col",{staticClass:"pl-0"},[a("label",{staticClass:"inputText",attrs:{for:"texte-tache"}},[t._v("Votre tâche: ")]),a("b-form-input",{staticClass:"inputText mb-2 pl-0",attrs:{id:"texte-tache",name:"titre",type:"text",placeholder:"Ajouter une tâche"},model:{value:t.titre,callback:function(e){t.titre=e},expression:"titre"}})],1),a("b-col",{staticClass:"pl-0"},[a("label",{staticClass:"inputText",attrs:{for:"date-de-fin"}},[t._v("À compléter pour le: ")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"date-de-fin"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("b-col",{staticClass:"pl-0"},[a("input",{staticClass:"btnSoumettre",attrs:{type:"submit",value:"Soumettre"}})])],1)])},k=[],P=a("ec26"),$={name:"AjoutTache",data:function(){return{titre:"",date:""}},methods:{ajoutTache:function(t){t.preventDefault();var e={id:Object(P["a"])(),tache:this.titre,termine:!1,urgent:!1,dateFin:this.date};this.$emit("ajout-tache",e),this.titre=""}}},S=$,A=(a("72a9"),Object(p["a"])(S,w,k,!1,null,"7ebfa7dc",null)),F=A.exports,q={name:"App",components:{Taches:x,Header:O,AjoutTache:F},data:function(){return{taches:[{id:1,tache:"Aspirateur",termine:!1,urgent:!1,dateFin:"21-04-2021"},{id:2,tache:"Dentiste",termine:!1,urgent:!1,dateFin:"18-04-2021"},{id:3,tache:"Pratique baseball",termine:!1,urgent:!1,dateFin:"21-04-2021"},{id:4,tache:"Payer factures cell",termine:!1,urgent:!1,dateFin:"21-04-2021"}]}},methods:{suprimerTache:function(t){this.taches=this.taches.filter((function(e){return e.id!==t}))},ajouterTache:function(t){this.taches=[].concat(Object(s["a"])(this.taches),[t])}}},E=q,M=(a("034f"),Object(p["a"])(E,r,c,!1,null,null,null)),U=M.exports,D=a("5f5b"),H=a("b1e0"),J=(a("f9e3"),a("2dd8"),a("ecee")),L=a("c074"),V=a("ad3d");J["c"].add(L["a"],L["c"],L["b"]),n["default"].use(D["a"]),n["default"].use(H["a"]),n["default"].component("font-awesome-icon",V["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(U)}}).$mount("#app")},"67f0":function(t,e,a){},"72a9":function(t,e,a){"use strict";a("67f0")},7628:function(t,e,a){"use strict";a("93f9")},"85ec":function(t,e,a){},"93f9":function(t,e,a){},f632:function(t,e,a){"use strict";a("193a")}});
//# sourceMappingURL=app.08bba8bb.js.map