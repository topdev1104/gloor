"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4032],{14032:function(e,l,n){n.r(l),n.d(l,{default:function(){return u}});var t=n(67294),s=n(44012),a=n(10768),c=n(57938),i=n(85528);var r=(e,l)=>{let n=e;if(e){var t;if((null===e||void 0===e||null===(t=e.providers)||void 0===t?void 0:t.length)>1&&e.providers.forEach((e=>{try{(0,i.Q)(e.selectedAddress,l)&&(n=e)}catch{return}})),n.isMetaMask)return"metamask";if(n.isWalletConnect)return"walletconnect";if(n.isWalletLink)return"walletlink"}return null},o=n(30776),d=n(85893);const m={metamask:"/images/metamask-fox.svg",portis:"/images/portis.svg",walletconnect:"/images/walletconnect.svg",walletlink:"/images/coinbase-wallet.svg"};var u=({onLogoutClick:e,onChangeClick:l,address:n,provider:i})=>{var u;const h=r(i,n),v=(0,t.useMemo)((()=>{if("walletconnect"===h)try{var e;return null===(e=JSON.parse(window.localStorage.getItem("walletconnect")))||void 0===e?void 0:e.peerMeta}catch{return null}}),[h]);return(0,d.jsxs)("div",{className:"break-words whitespace-pre-wrap",children:[(0,d.jsx)("h3",{className:"mb-4 font-bold text-xl",children:(0,d.jsx)(s.Z,{id:"connect.wallet.connected"})}),(0,d.jsxs)("div",{className:"font-mono flex items-center",children:[h&&(0,d.jsx)(d.Fragment,{children:"walletconnect"===h&&null!==v&&void 0!==v&&null!==(u=v.icons)&&void 0!==u&&u.length?(0,d.jsxs)("span",{className:"relative w-8 h-8 mr-4",children:[(0,d.jsx)("img",{src:m.walletconnect,alt:"WalletConnect",className:"h-7 w-7 absolute top-0 left-0"}),(0,d.jsx)("img",{src:v.icons[0],alt:v.name,className:"h-4 w-4 absolute bottom-0 right-0"})]}):(0,d.jsx)("img",{src:m[h],alt:h,className:"inline-flex h-6 w-6 mr-4"})}),(0,c.Z)(n)]}),(0,d.jsxs)("div",{className:"mt-8 text-center space-x-4",children:[(0,d.jsx)(a.ZP,{onClick:l,children:(0,d.jsx)(s.Z,{id:"modal.disconnect.change"})}),(0,d.jsx)(a.ZP,{onClick:e,kind:o.hY.INVERSE,children:(0,d.jsx)(s.Z,{id:"modal.disconnect.disconnect"})})]})]})}}}]);