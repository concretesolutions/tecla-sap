if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_Ble_LrolyQqAEM-0uKXX/_buildManifest.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/_Ble_LrolyQqAEM-0uKXX/_ssgManifest.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/234a0c7befce6cd42d1e2cbc781c0b4248d0398a.28539b112f514cc8de20.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/b2e8804c9d5f6502350ae06d0bc31abe13b59614.8c91a3985fc984314159.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/commons.9528123feb626448eb3f.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/main-06f53d948f9fd4b3c852.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/pages/_app-08850c6da13810a5d754.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/pages/_error-b27b0bebfa66d37ab470.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/pages/index-027db5d9fb4b518ca9ce.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/pages/posts/17-dicas-otimizacao-javascript-86b8037b2d1c7f51594a.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/pages/posts/lazy-loading-nativo-de-imagens-sem-javascript-5879dbcf914a67d8701c.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/polyfills-81bd132d8cf44e5a14d7.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/css/3dc6b466b6c8ad5e6656.css",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/css/adfdbe743760f9d59860.css",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/_next/static/css/e7d59fb9281a950cfb2e.css",revision:"_Ble_LrolyQqAEM-0uKXX"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/logo_high.png",revision:"3d2d294a66e8e16d950588c45cb6721e"},{url:"/logo_low.png",revision:"aec05256aa1d03e07243a0e8d75e8a13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
