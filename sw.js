if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PaiRzFdGvQPE4B5Z_CXD-/_buildManifest.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/PaiRzFdGvQPE4B5Z_CXD-/_ssgManifest.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/49b46e08d9cc4076cb87f317f4c14ccdb498391c.8c91a3985fc984314159.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/81b21d87fa86c10c9cca2d74c34b440f3d26aff2.73911cd0e91d1cfcc34e.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/commons.f4926135e9b0ceeb7419.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/main-f33ee848384c36c9a4aa.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/_app-34df0d9d90ce2064959e.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/_error-81cfa623b52ab6ac1c6d.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/index-73b3059eac2d67785e3d.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/posts/17-dicas-otimizacao-javascript-d04cea309219f9a558ee.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/posts/compreendendo-o-conceito-de-memoization-em-3-minutos-20ca3407ca0656a1d588.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/pages/posts/lazy-loading-nativo-de-imagens-sem-javascript-95ff2ba0a6c85065cba9.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/polyfills-483e9e96b8aec87b069a.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/css/3dc6b466b6c8ad5e6656.css",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/css/40b8ad549e1fe4906645.css",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/_next/static/css/e7d59fb9281a950cfb2e.css",revision:"PaiRzFdGvQPE4B5Z_CXD-"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/logo_high.png",revision:"3d2d294a66e8e16d950588c45cb6721e"},{url:"/logo_low.png",revision:"aec05256aa1d03e07243a0e8d75e8a13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
