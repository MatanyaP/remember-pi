(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3538:function(e,t,i){Promise.resolve().then(i.bind(i,2530))},2530:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var a=i(9268),l=i(943),s=i(6006),n=i(7743);let r=()=>{let[e,t]=(0,s.useState)(3),[i,r]=(0,s.useState)(""),[o,d]=(0,s.useState)(!1),[c,x]=(0,s.useState)(!1),[h,b]=(0,s.useState)(0),[u,g]=(0,s.useState)(!1),[m,f]=(0,s.useState)(!1),[p,w]=(0,s.useState)(""),[y,v]=(0,s.useState)(0),[j,N]=(0,s.useState)(!1);(0,s.useEffect)(()=>{fetch("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=1000&format=plain").then(e=>e.json()).then(e=>w(e.content)),localStorage.getItem("bestScore")?v(parseInt(localStorage.getItem("bestScore")||"0",10)):localStorage.setItem("bestScore","0")},[]);let S=()=>{h>y&&(v(h),N(!0),localStorage.setItem("bestScore",h.toString()))};function k(){t(3),r(""),d(!1),b(0),g(!1),x(!1),f(!1),N(!1)}let E=e=>{r(i+e)};function C(){f(!0),x(!1),S(),setTimeout(()=>{k()},3e3)}async function T(){i===p.slice(0,e)?(d(!0),0===h?b(3):b(h+1),t(e+1),r(""),g(!0),x(!0)):C()}return(0,s.useEffect)(()=>{i.length===e?T():i!==p.slice(0,i.length)&&C()},[i,e,T,C,p]),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full h-full",children:[(0,a.jsx)("div",{className:"flex flex-row justify-center text-4xl font-bold bg-green-500 border-2 border-white p-2 m-2",children:"Remember PI?"}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-1/2 border-2 border-white p-2",children:[j&&(0,a.jsx)(n.M,{initial:!1,mode:"wait",children:(0,a.jsx)(l.E.div,{className:"flex flex-row justify-center text-2xl font-bold bg-green-500 border-2 border-white p-2",animate:{scale:[1,1.5,1,1],rotate:[0,0,270,0],borderRadius:["0%","10%","20%","0%"]},transition:{duration:1,times:[0,.2,.8,1],loop:1,ease:"easeInOut"},children:"New Best Score!"},"bestScoreInner")},"bestScore"),(0,a.jsxs)("div",{className:"text-2xl font-bold",children:["Best Score: ",y]}),(0,a.jsxs)("div",{className:"text-2xl font-bold",children:[c&&o&&(0,a.jsx)(l.E.div,{className:"flex flex-row justify-center text-2xl font-bold bg-green-500 border-2 border-white p-2",variants:{hidden:{opacity:0,scale:0},middle:{opacity:1,scale:1.5},visible:{opacity:1,scale:1}},initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3,times:[0,.2,1],ease:"easeInOut"},children:"Correct!"}),u&&(0,a.jsxs)("div",{className:"text-2xl font-bold bg-amber-500 border-2 border-white p-2",children:[(0,a.jsxs)("h1",{children:["Now Memorize ",e," Digits:"]}),(0,a.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,a.jsx)("span",{className:"text-2xl font-bold",children:p.slice(0,e-1)}),(0,a.jsx)("span",{className:"text-2xl font-bold bg-green-300 text-black rounded",children:p.slice(e-1,e)})]}),(0,a.jsx)("div",{className:"flex flex-row justify-center",children:(0,a.jsx)("button",{onClick:function(){g(!1),x(!1)},className:"bg-green-500 hover:bg-gray-700 text-zinc-100 font-bold py-2 px-4 rounded my-2 text-base",children:"Next Level"})})]})]}),(0,a.jsxs)(l.E.div,{className:m||c?"text-4xl font-bold text-red-500":"text-2xl font-bold text-green-500",initial:{opacity:0,scale:1.2},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.1},children:[i,!m&&!c&&(0,a.jsx)(l.E.span,{initial:{opacity:0},animate:{opacity:1},transition:{repeat:1/0,duration:.5},children:"_"})]},i),(0,a.jsxs)("div",{className:"text-2xl font-bold",children:["You Remembered: ",h]}),m&&(0,a.jsx)("div",{className:"text-2xl font-bold bg-red-500 text-white p-2",children:"Game Over! Try Again"}),(0,a.jsx)("div",{className:"flex flex-row",children:(0,a.jsx)(l.E.button,{onClick:k,className:"bg-red-500 hover:bg-red-600 text-zinc-100 font-bold py-2 px-4 rounded my-2",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.9,transition:{duration:.1}},children:"Restart"})}),!u&&!m&&(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-center  p-2 rounded-sm border-2 border-white",children:[(0,a.jsx)(l.E.button,{onClick:()=>E(1),disabled:u,className:"h-16 px-8 m-1 bg-amber-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"1"}),(0,a.jsx)(l.E.button,{onClick:()=>E(2),disabled:u,className:"h-16 px-8 m-1 bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"2"}),(0,a.jsx)(l.E.button,{onClick:()=>E(3),disabled:u,className:"h-16 px-8 m-1 bg-lime-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"3"}),(0,a.jsx)(l.E.button,{onClick:()=>E(4),disabled:u,className:"h-16 px-8 m-1 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"4"}),(0,a.jsx)(l.E.button,{onClick:()=>E(5),disabled:u,className:"h-16 px-8 m-1 bg-purple-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"5"}),(0,a.jsx)(l.E.button,{onClick:()=>E(6),disabled:u,className:"h-16 px-8 m-1 bg-yellow-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"6"}),(0,a.jsx)(l.E.button,{onClick:()=>E(7),disabled:u,className:"h-16 px-8 m-1 bg-pink-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"7"}),(0,a.jsx)(l.E.button,{onClick:()=>E(8),disabled:u,className:"h-16 px-8 m-1 bg-indigo-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"8"}),(0,a.jsx)(l.E.button,{onClick:()=>E(9),disabled:u,className:"h-16 px-8 m-1 bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"9"}),(0,a.jsx)(l.E.button,{onClick:()=>E(0),disabled:u,className:"h-16 px-8 m-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded text-2xl shadow-lg col-span-3",whileHover:{scale:1.1,transition:{duration:.1}},whileTap:{scale:.8,transition:{duration:.1}},children:"0"})]})]})]})};function o(){let[e,t]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:"w-full h-full",children:[(0,a.jsx)("div",{className:"top-0 left-0 w-full h-20 absolute z-10",children:(0,a.jsx)(l.E.button,{whileHover:{scale:1.1,transition:{duration:.2}},whileTap:{scale:.9},className:"inline-block align-middle ".concat(e?"bg-gray-900 text-white":"bg-gray-200 text-gray-900"," rounded-full"),onHoverStart:()=>t(!0),onHoverEnd:()=>t(!1),onClick:()=>t(!e),children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle",viewBox:"0 0 16 16",children:[(0,a.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),(0,a.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})})}),(0,a.jsx)("div",{className:"top-0 left-0 w-[35vw] h-[35vh] absolute ".concat(e?"block":"hidden"),children:(0,a.jsx)("div",{className:"inline-block align-middle",children:(0,a.jsxs)("div",{className:"bg-lime-200 rounded-sm p-4 w-[48rem]",children:[(0,a.jsx)("p",{className:"text-gray-800",children:"Remember PI? is a game where you have to remember the digits of PI."}),(0,a.jsx)("p",{className:"text-gray-800",children:"First, enter the first 3 digits of PI. Then, enter 4 digits of PI. Then, enter 5 digits of PI. And so on."}),(0,a.jsx)("p",{className:"text-gray-800",children:"The game will keep track of how many digits you have entered correctly."})]})})}),(0,a.jsx)(r,{})]})}}},function(e){e.O(0,[741,667,139,744],function(){return e(e.s=3538)}),_N_E=e.O()}]);