"use strict";var precacheConfig=[["/index.html","fc8b7c751e81f895e2c14d069770c2c9"],["/static/css/main.57b312d1.css","4160b7e530704e64cc39fdae47a7d737"],["/static/js/main.518c83f8.js","7141f47806e19e74d9c582d7c9964730"],["/static/media/262242_Italian-Water-Garden-_Albee_-Larry.ca7a0041.jpg","ca7a00415056872f8adeeada7b763bc5"],["/static/media/Berrizbeitia.c65a0759.jpg","c65a0759513f9becb473e4a538e78ca5"],["/static/media/Corner.77f32b18.jpg","77f32b183706fe47a46984d884d6d502"],["/static/media/Corner2.0f1db7f4.jpg","0f1db7f437f8a933e12368ba468a66a5"],["/static/media/Czerniak2.1a9ffafc.jpg","1a9ffafc3f2db191be7d95252a95b175"],["/static/media/Garland2.76fed9c4.jpg","76fed9c4bd364b35e8e142c89b94bfc4"],["/static/media/Geuze.07e4b125.jpg","07e4b12560df8662d972089da6046419"],["/static/media/Girot2.d4b1f653.jpg","d4b1f6532a8d4b7196cd250d57f52dcc"],["/static/media/Imbert.ddb8ce37.jpg","ddb8ce374a3ebfbf6a67054e8fbd63fb"],["/static/media/Koreman and van Boxel.acfaa8d7.jpg","acfaa8d7872a0b52485a20fffc79d2fb"],["/static/media/LG-Logo-lockup in white, no background.8e5eaf23.png","8e5eaf233f1ffa47541ed4d5c519f203"],["/static/media/LG-Logo-lockup_forweb.e54d65ef.png","e54d65effafa5e42cf9a8c23490da04f"],["/static/media/Latz2.6c7a22db.jpg","6c7a22dbbc2c85ad9e5564728d317579"],["/static/media/Lee2.033675d2.jpg","033675d2ae394775b503d022e3afdf86"],["/static/media/Lister.b96cc66d.jpg","b96cc66d973f35118dfa610067fa3cae"],["/static/media/Margaret Jones2.e81e2c20.jpg","e81e2c20e7dc69cb281342da26c7e2e5"],["/static/media/Orff2.b3d1affb.jpg","b3d1affb3f37dc00403e1489bb7c1d55"],["/static/media/PatronWEB-Italic.0ae437f9.woff","0ae437f917a9d57757820b6be1edeedd"],["/static/media/PatronWEB-Italic.9c951d48.woff2","9c951d482f09c3a394418d507057eafc"],["/static/media/PatronWEB-Regular.2ef37550.woff","2ef375505dd77d71692dbacc9fe7c5d7"],["/static/media/PatronWEB-Regular.d22679aa.woff2","d22679aa2205598b03bdc33da219cf9e"],["/static/media/Redman3.f6a0f86f.jpg","f6a0f86f1093551a0e0a06191d9e0cef"],["/static/media/Robbins2.cb25ef86.jpg","cb25ef8686b23df6a4ee22de49dde66c"],["/static/media/Seavitt Nordenson2.3ef234a1.jpg","3ef234a1269c1bd541b3b007f1646d38"],["/static/media/White2.3d24ecba.jpg","3d24ecbaed362a7e23c0cccdd9440295"],["/static/media/Yu2.3169ade1.jpg","3169ade14ef2773981f1a45f54763386"],["/static/media/googlemap.ecbd1735.jpg","ecbd1735d9e86ac0d05ab4d417409832"],["/static/media/homepage-background.b206e750.jpg","b206e7502eed4e71a500f232a4aa909f"],["/static/media/logo-AAR-black.5864af23.png","5864af237869fb3253cf61ea99007eaa"],["/static/media/logo-AAR-white.6a605978.png","6a6059788807b378c0542e1eb71417cc"],["/static/media/menu-background.cf4e43d4.jpg","cf4e43d44333cecf2766db257f8d3659"],["/static/media/randall2.38b75661.jpg","38b756615e4dd246d5fba630522d1140"],["/static/media/vanBoxel.4e389e58.jpg","4e389e587e018b81fe12fa9c49830b3f"],["/static/media/waldheim_headshot2.8a2ff0e6.jpg","8a2ff0e61d8dc7ad31f4330a872b1849"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});