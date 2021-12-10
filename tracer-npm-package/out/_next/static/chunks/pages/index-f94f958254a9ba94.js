(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2695:function(r,e,t){"use strict";var n=t(8527),o=t(7294),i=t(949),a=t(5893);e.Z=function(r){var e,t,s=r.size,l=r.text,c=(0,i.If)(),u=c.colorMode,d=(c.toggleColorMode,(0,o.useState)("blue.100")),f=d[0],h=d[1];switch((0,o.useEffect)((function(){h("light"===u?"blue.900":"blue.100")}),[u]),s){case"lg":e="2.5em",t="400px";break;case"md":e="2em",t="300px";break;case"sm":e="1.5em",t="500px"}return(0,a.jsxs)(n.kC,{fontSize:e,w:t,mb:"1rem",alignItems:"center",children:[(0,a.jsx)(n.xv,{fontFamily:"serif",fontSize:"3rem",mr:".8rem",children:"trace "}),(0,a.jsx)(n.xv,{fontWeight:"thin",fontSize:"2rem",children:"|"}),(0,a.jsx)(n.xv,{fontWeight:"thin",color:f,ml:".8rem",pt:".6rem",children:l})]})}},3564:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var n=t(8527),o=t(9613),i=t(2024),a=t(9042),s=t(1440),l=t(7294),c=t(5893);function u(r,e){var t="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"===typeof r)return d(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(r,e)}(r))||e&&r&&"number"===typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return a=r.done,r},e:function(r){s=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function d(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var f=function(r){var e=r.data,t=r.id,o=100,i=(0,l.useState)(1),a=i[0],d=i[1],f=(0,l.useState)(!1),h=f[0],m=f[1],b=[];(0,l.useEffect)((function(){if(e){(e.errors||e.response.errors)&&m(!0);var r=Object.keys(e).reduce((function(r,t){return"errors"!==t&&"dateAndTime"!==t&&"totalDuration"!==t&&"trace_id"!==t&&"response"!==t?(o=Math.max(o,e[t]),r+e[t]):r}),0);d(r)}}),[e]);var x,p=["orange.300","orange.400","orange.500","orange.600","orange.700"],g=["red.500","red.600","red.700","red.800","red.900"],j=0,v=Object.keys(e).filter((function(r){return"dateAndTime"!==r&&"totalDuration"!==r&&"trace_id"!==r&&"errors"!==r&&"response"!==r})),y=u(v);try{for(y.s();!(x=y.n()).done;){var k=x.value;5===j&&(j=0),o=Math.max(o,e[k]),b.push((0,c.jsx)(s.u,{hasArrow:!0,label:"".concat(k,": ").concat(e[k],"ms"),bg:"gray.300",color:"black",children:(0,c.jsx)(n.xu,{id:j.toString(),w:e[k]/a,minWidth:"100px",backgroundColor:!0===h?g[j]:p[j],p:1,fontSize:".6rem",color:"white",fontWeight:"bold",h:"1.5rem",_hover:{backgroundColor:"blue.800"},ml:0===j?"1rem":"0",borderTopLeftRadius:0===j?"1rem":0,borderBottomLeftRadius:0===j?"1rem":0,borderTopRightRadius:j===v.length-1?"1rem":0,borderBottomRightRadius:j===v.length-1?"1rem":0,children:k},j.toString())},j.toString())),j++}}catch(w){y.e(w)}finally{y.f()}return(0,c.jsxs)(n.kC,{alignItems:"center",children:[(0,c.jsx)(n.kC,{id:t,justifyContent:"center",fontSize:".5rem",fontWeight:"700",borderRadius:"1rem",minWidth:"160px",maxWidth:"160px",textAlign:"center",color:"white",children:e.trace_id}),b]})},h=function(r){for(var e,t=r.data,o=[],i="",a=0,s=Object.keys(t);a<s.length;a++){var l=s[a];if("trace_id"!==l)if("errors"===l)i+=JSON.stringify(t[l]);else if("response"===l)t[l].data&&(e=JSON.stringify(t[l].data)),t[l].errors&&(i+=JSON.stringify(t[l].errors));else if("dateAndTime"===l){var u=o[0];o[0]=(0,c.jsx)(n.kC,{children:(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"TIMESTAMP:"})," ",t[l]]})}),o.push(u)}else if("totalDuration"===l){var d=o[1];o[1]=(0,c.jsx)(n.kC,{children:(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"TOTAL DURATION:"})," ",t[l],"ms"]})}),o.push(d)}else o.push((0,c.jsx)(n.kC,{children:(0,c.jsxs)("p",{children:[(0,c.jsxs)("b",{children:[l,":"]})," ",t[l],"ms"]})}))}return o.push((0,c.jsxs)(n.kC,{direction:"column",children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"RESULT:"})," ",e]}),i?(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"ERRORS:"})," ",(0,c.jsx)("span",{style:{backgroundColor:"#63171B"},children:i})]}):null]})),(0,c.jsx)(n.kC,{direction:"column",backgroundColor:"rgb(255,255,255,.1)",p:"1rem",fontSize:".8rem",color:"white",mt:"1rem",children:o})},m=function(){var r=(0,o.C)((function(r){return r})).data.rawdata.map((function(r,e){return(0,c.jsxs)(i.Qd,{w:"100%",border:"none",children:[(0,c.jsx)("h1",{children:(0,c.jsx)(i.KF,{children:(0,c.jsx)(n.xu,{width:"100%",children:(0,c.jsx)(f,{id:e.toString(),data:r})})})}),(0,c.jsx)(i.Hk,{pb:4,children:(0,c.jsx)(h,{data:r})})]},e.toString())}));return(0,c.jsxs)(n.kC,{p:"3rem",w:"100%",borderRadius:"1rem",backgroundColor:"blue.500",direction:"column",mb:"3rem",children:[(0,c.jsx)(a.iA,{mb:"1rem",children:(0,c.jsx)(a.hr,{children:(0,c.jsxs)(a.Tr,{children:[(0,c.jsx)(a.Th,{textAlign:"center",width:"200px",color:"blue.800",children:"Trace ID"}),(0,c.jsx)(a.Th,{textAlign:"center",color:"blue.800",children:"Duration Metrics"})]})})}),(0,c.jsx)(n.kC,{direction:"column",alignItems:"flex-start",children:(0,c.jsx)(i.UQ,{w:"100%",allowMultiple:!0,allowToggle:!0,children:r})})]})},b=t(1163),x=t(8598),p=t(3328);function g(r,e){var t="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(!r)return;if("string"===typeof r)return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(r,e)}(r))||e&&r&&"number"===typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return a=r.done,r},e:function(r){s=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function j(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}p.kL.register(p.ZL,p.vn,p.De,p.Dx,p.u);var v=function(){var r=(0,l.useRef)(null),e=(0,b.useRouter)(),t={labels:[],datasets:[{id:1,label:"Traces",data:[],backgroundColor:[]}]},i={onClick:function(r,t){!function(r){var t="/#"+r;e.push(t)}(t[0]?t[0].index:null)},barThickness:10,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgb(178, 190, 219)",titleColor:"#1A365D",bodyColor:"#1A365D",callbacks:{label:function(r){return"Total Duration: "+r.parsed.y+"ms"}}}},maintainAspectRatio:!1,onResize:function(r,e){r.update()},scales:{x:{grid:{display:!1},position:"bottom",stacked:!0,ticks:{callback:function(r){return""},color:"#8e94ab"}},y:{grid:{display:!1},ticks:{callback:function(r,e,t){return r+"ms"},color:"white"}}}},a=(0,l.useState)(t),s=a[0],u=a[1],d=(0,o.C)((function(r){return r}));return(0,l.useEffect)((function(){if(d){var e,n=g(d.data.rawdata);try{for(n.s();!(e=n.n()).done;){var o=e.value;o&&(t.labels.push(o.trace_id),t.datasets[0].data.push(o.totalDuration),o.errors||o.response.errors?t.datasets[0].backgroundColor.push("#63171B"):t.datasets[0].backgroundColor.push("white"))}}catch(i){n.e(i)}finally{n.f()}u(t),r.current.update()}}),[d]),(0,c.jsx)(n.kC,{w:"100%",h:"350px",margin:"0",mb:"1rem",borderRadius:"1rem",padding:"2rem",pt:"3rem",backgroundColor:"blue.700",justifyContent:"center",alignItems:"center",children:(0,c.jsx)(x.$Q,{data:s,options:i,ref:r},e.route)},e.route)},y=function(){return(0,c.jsxs)(n.kC,{w:"100%",flexFlow:"row wrap",justifyContent:"space-between",children:[(0,c.jsx)(v,{}),(0,c.jsx)(m,{})]})},k=t(5193);p.kL.register(p.vn,p.ZL,p.f$,p.Dx,p.uw);var w=function(){var r=(0,l.useState)("live"),e=r[0],t=r[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(k.hE,{mt:".4rem",mb:"2rem",isAttached:!0,pos:"-webkit-sticky",children:[(0,c.jsx)(k.zx,{colorScheme:"blue",onClick:function(){return t("live")},isActive:"live"===e,children:"Live Tracing Feed"}),(0,c.jsx)(k.zx,{colorScheme:"blue",onClick:function(){return t("res")},isActive:"res"===e,children:"Resolver Average View"})]}),(0,c.jsx)(n.kC,{direction:"column",children:"live"===e?(0,c.jsx)(y,{}):"root"===e?(0,c.jsx)("p",{children:"Sort By Root Operation"}):(0,c.jsx)("p",{children:"Sort by Resolver"})})]})},C=t(2695),S=function(){return(0,c.jsxs)(n.kC,{direction:"column",w:"90%",h:"100vh",p:"1.5rem",m:"1rem",overflowY:"scroll",children:[(0,c.jsx)(C.Z,{size:"sm",text:"Dashboard"}),(0,c.jsx)(w,{})]})}},5301:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3564)}])}},function(r){r.O(0,[570,365,774,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);