(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7695:function(e,t,n){Promise.resolve().then(n.bind(n,3656))},3656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(7437),i=n(2265),r=n(9842),o=n(8503),l=n(339),s=n(9999),c=n(3889),d=n(9157),h=n(2232),x=n(8451),p=n(8280),u=n(2646);let f=(0,n(5236).ZF)({apiKey:"AIzaSyA7_unPbvDUHhIbEc21CKIkvBEFjPga5i8",authDomain:"pantry-manage-e4d7c.firebaseapp.com",projectId:"pantry-manage-e4d7c",storageBucket:"pantry-manage-e4d7c.appspot.com",messagingSenderId:"89900916098",appId:"1:89900916098:web:279bfeebac8e2242ef439b",measurementId:"G-LPXC8544TV"}),g=(0,r.ad)(f),m=(0,o.Z)({palette:{primary:{main:"#32DAC3"},secondary:{main:"#90E1D6"}},typography:{h1:{fontSize:"3rem",fontWeight:600},h2:{fontSize:"1.75rem",fontWeight:600},h3:{fontSize:"1.5rem",fontWeight:600}}});function y(){let[e,t]=(0,i.useState)([]),[n,o]=(0,i.useState)(!1),[f,y]=(0,i.useState)(""),[w,j]=(0,i.useState)(""),[v,b]=(0,i.useState)([]),Z=async()=>{let e=(0,r.hJ)(g,"inventory");(await (0,r.PL)(e)).forEach(e=>{A(e)}),await C()},C=async()=>{let e=(0,r.IO)((0,r.hJ)(g,"inventory")),n=await (0,r.PL)(e),a=[];n.forEach(e=>{a.push({name:e.id,...e.data()})}),t(a)},I=async e=>{let t=(0,r.JU)((0,r.hJ)(g,"inventory"),e.toLowerCase()),n=await (0,r.QT)(t);if(n.exists()){let{quantity:e}=n.data();await (0,r.pl)(t,{quantity:e+1})}else await (0,r.pl)(t,{quantity:1});await C()},A=async e=>{let t=(0,r.JU)((0,r.hJ)(g,"inventory"),e),n=await (0,r.QT)(t);if(n.exists()){let{quantity:e}=n.data();1===e?await (0,r.oe)(t):await (0,r.pl)(t,{quantity:e-1})}await C()};(0,i.useEffect)(()=>{C()},[]),(0,i.useEffect)(()=>{w?b(e.filter(e=>e.name.toLowerCase().includes(w.toLowerCase()))):b(e)},[w]),console.log(e);let D=()=>o(!0),S=()=>o(!1);return(0,a.jsxs)(l.Z,{theme:m,children:[(0,a.jsxs)(s.Z,{justifyContent:"center",display:"flex",alignItems:"center",height:"20vh",width:"100vw",sx:{mt:2},flexDirection:"column",children:[(0,a.jsx)(c.Z,{variant:"h2",padding:2,children:" Welcome to your Pantry Manager"}),(0,a.jsx)(c.Z,{variant:"h",padding:3,children:" You can add and subtract items easily from your inventory."})]}),(0,a.jsxs)(s.Z,{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[(0,a.jsx)(d.Z,{open:n,onClose:S,children:(0,a.jsx)(s.Z,{position:"absolute",top:"50%",left:"50%",sx:{transform:"tranlate(-50%, -50%)"},width:400,bgcolor:"#f0f0f0",boxShadow:24,p:4,display:"flex",flexDirection:"column",gap:3,children:(0,a.jsxs)(h.Z,{width:"100%",direction:"row",spacing:1,children:[(0,a.jsx)(x.Z,{variant:"outlined",label:"Enter New Item",fullwidth:!0,value:f,onChange:e=>{y(e.target.value)}}),(0,a.jsx)(p.Z,{variant:"contained",onClick:()=>{I(f),y(""),S()},children:"Add It"})]})})}),(0,a.jsxs)(s.Z,{border:"1px solid #333",children:[(0,a.jsx)(s.Z,{width:"800px",height:"100px",alignItems:"space-between",justifyContent:"center",display:"flex",sx:{bgcolor:"secondary.main"},children:(0,a.jsx)(c.Z,{variant:"h2",color:"#333",sx:{my:3,textAlign:"center"},children:"Your Inventory"})}),(0,a.jsx)(s.Z,{sx:{bgcolor:"secondary.main",textAlign:"center",borderBottom:"1px solid #333"},justifyContent:"center",children:(0,a.jsx)(x.Z,{variant:"outlined",label:"Search the Inventory",fullwidth:!0,sx:{my:.5,color:"white",bgcolor:"#DDDCD7",width:"500px"},value:w,onChange:e=>{j(e.target.value)}})}),(0,a.jsx)(h.Z,{width:"800px",height:"300px",spacing:2,overflow:"auto",children:v.map(e=>{let{name:t,quantity:n}=e;return(0,a.jsxs)(s.Z,{width:"100%",minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:5,bgcolor:"#AFDADF",children:[(0,a.jsx)(c.Z,{variant:"h3",color:"#333",textAlign:"center",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,a.jsx)(c.Z,{variant:"h3",color:"#333",textAlign:"center",children:n}),(0,a.jsx)(p.Z,{variant:"contained",onClick:()=>{A(t)},children:"Remove"}),(0,a.jsx)(p.Z,{variant:"contained",onClick:()=>{I(t)},children:"Add"})]},t)})})]}),(0,a.jsxs)(u.Z,{variant:"contained","aria-label":"Basic button group",justifyContent:"space-between",display:"flex",sx:{bgcolor:"secondary.main"},children:[(0,a.jsx)(p.Z,{alignItems:"center",sx:{width:"400px"},onClick:()=>{D()},children:" Add new Item "}),(0,a.jsx)(p.Z,{sx:{width:"400px"},onClick:()=>{Z()},children:" Delete All Items"})]})]})]})}}},function(e){e.O(0,[358,344,971,23,744],function(){return e(e.s=7695)}),_N_E=e.O()}]);