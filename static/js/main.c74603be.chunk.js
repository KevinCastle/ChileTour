(this.webpackJsonpmychiletour=this.webpackJsonpmychiletour||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),c=t.n(r),i=t(22),o=t(7),m=t(115),s=t(116),u=t(114),E=t(43),d=t(65),p=t(66),g=function(){return n.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},n.a.createElement(m.a.Toggle,{className:"w-100 h-150","aria-controls":"basic-navbar-nav"},"MENU"),n.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(s.a,{className:"mr-auto"},n.a.createElement(u.a,{className:"mr-5",title:"Santiago",id:"collasible-nav-dropdown"},n.a.createElement(i.b,{className:"navlink-item",exact:!0,to:"/ChileTour"},"Encargos y Traslados"),n.a.createElement(i.b,{className:"navlink-item",to:"/ChileTour/SantiagoTours"},"Tours por Santiago")),n.a.createElement(u.a,{className:"mr-5",title:"Vi\xf1edos",id:"collasible-nav-dropdown"},n.a.createElement(i.b,{className:"navlink-item",to:"/ChileTour/ValleMaipo"},"Valle del Maipo"),n.a.createElement(i.b,{className:"navlink-item",to:"/ChileTour/ValleCasablanca"},"Valle de Casablanca"),n.a.createElement(i.b,{className:"navlink-item",to:"/ChileTour/ValleColchagua"},"Valle de Colchagua")),n.a.createElement(u.a,{className:"mr-5",title:"Centros de Ski",id:"collasible-nav-dropdown"},n.a.createElement("p",null,"Valle Nevado"),n.a.createElement("p",null,"Farellones"),n.a.createElement("p",null,"El Colorado"),n.a.createElement("p",null,"La Parva"),n.a.createElement("p",null,"Portillo")),n.a.createElement(u.a,{className:"mr-5",title:"Playas y Cruceros",id:"collasible-nav-dropdown"},n.a.createElement("p",null,"Vi\xf1a del Mar y Valparaiso"),n.a.createElement("p",null,"Isla Negra"),n.a.createElement("p",null,"Cruceros")),n.a.createElement(u.a,{className:"mr-5",title:"Entretenimientos",id:"collasible-nav-dropdown"},n.a.createElement("p",null,"Casino Sun Monticello"),n.a.createElement("p",null,"Casino Enjoy Santiago"),n.a.createElement("p",null,"Cena Show Bali Hai"),n.a.createElement("p",null,"Museo de Autos Antiguos"),n.a.createElement("p",null,"Parque Safari"))),n.a.createElement(s.a,null,n.a.createElement(s.a.Link,{className:"mr-5",id:"item--whatsapp",href:"#deets"},n.a.createElement(E.a,{icon:d.a})," WhatsApp"),n.a.createElement(s.a.Link,{className:"mr-auto",id:"item--email",href:"#memes"},n.a.createElement(E.a,{icon:p.a})," pedropabloopazo@gmail.com"))))},h=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header-background"},n.a.createElement("img",{className:"header-background__image",src:"/ChileTour/images/Header/background.jpg",alt:""}),n.a.createElement("div",{className:"header-background__container"},n.a.createElement("img",{className:"header-logo",src:"/ChileTour/images/Header/chiletour.png",alt:""}),n.a.createElement("p",null," MY CHILE TOUR"))),n.a.createElement(g,null))},b=t(67),v=t(68),N=t(72),k=t(74),C=t(69),f=t.n(C),y=t(28),T="/ChileTour/images/",w=function(e){return n.a.createElement("div",null,n.a.createElement(y.a,null,n.a.createElement(y.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:T+e.imageDir+"/1.jpg",alt:"First slide"})),n.a.createElement(y.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:T+e.imageDir+"/2.jpg",onError:function(a){a.target.onerror=null,a.target.src="".concat(T+e.imageDir+"/1.jpg")},alt:"Third slide"})),n.a.createElement(y.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:T+e.imageDir+"/3.jpg",onError:function(a){a.target.onerror=null,a.target.src="".concat(T+e.imageDir+"/1.jpg")},alt:"Third slide"}))))},S=t(14),V=t(70),j=function(e){return n.a.createElement("div",null,e.incluye&&n.a.createElement("div",{className:"card-container"},n.a.createElement(S.a,null,n.a.createElement(w,{imageDir:e.imageDir}),n.a.createElement(S.a.Body,null,n.a.createElement(S.a.Title,{className:"card-title"},e.nombre),n.a.createElement(S.a.Text,{className:"card-text"},e.descripcion),n.a.createElement(V.a,null,n.a.createElement(S.a,{className:"card-extra w-auto"},n.a.createElement(S.a.Header,null,"Incluye"),n.a.createElement(S.a.Body,null,n.a.createElement("ul",null,e.incluye.map((function(e,a){return n.a.createElement("li",{key:a},e)}))))),n.a.createElement(S.a,{className:"card-extra w-auto"},n.a.createElement(S.a.Header,null,"Opcional"),n.a.createElement(S.a.Body,null,n.a.createElement("ul",null,e.opcional.map((function(e,a){return n.a.createElement("li",{key:a},e)}))))))))))},M=function(e){Object(k.a)(t,e);var a=Object(N.a)(t);function t(e){var l;return Object(b.a)(this,t),(l=a.call(this,e)).state={services:[]},l}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get(this.props.url).then((function(a){var t=a.data;e.setState({services:t})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",null,this.state.services.map((function(e,a){return n.a.createElement(j,{key:a,nombre:e.nombre,descripcion:e.descripcion,incluye:e.incluye,opcional:e.opcional,imageDir:e.imageDir})}))))}}]),t}(n.a.Component),D=function(){return n.a.createElement(i.a,null,n.a.createElement(h,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/ChileTour",key:"Santiago"},n.a.createElement(M,{url:"https://api.npoint.io/cef0bf8341dd206787a2"})),n.a.createElement(o.a,{path:"/ChileTour/SantiagoTours",key:"SantiagoTours"},n.a.createElement(M,{url:"https://api.npoint.io/c1bd0d54cb63250a88db"})),n.a.createElement(o.a,{path:"/ChileTour/ValleMaipo",key:"ValleMaipo"},n.a.createElement(M,{url:"https://api.npoint.io/f5949de330819643a857"})),n.a.createElement(o.a,{path:"/ChileTour/ValleCasablanca",key:"ValleCasablanca"},n.a.createElement(M,{url:"https://api.npoint.io/0435b0b7acec2e2840ef"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(106),t(107);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t(108)}},[[76,1,2]]]);
//# sourceMappingURL=main.c74603be.chunk.js.map