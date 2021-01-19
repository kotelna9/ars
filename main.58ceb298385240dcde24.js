!function(){"use strict";var e={432:function(){function e(e){var r=document.querySelector(".event-info");if(r.innerHTML="",void 0===e.date){var i=document.createElement("button");return i.classList.add("btn"),i.innerText=e,r.append(i),i}if(e.description&&r.append(t(e.description)),e.curator&&r.append(t(e.curator)),e.links&&e.links.forEach((function(e,i){var a=t(e);0===i&&a.classList.add("link_first"),r.append(a)})),e.date){var a=t(e.date);a.classList.add("date"),r.append(a)}}function t(e){var t=document.createElement("p");if(e.url)if(e.embed)if("youtube"===e.embed)t.innerHTML='<iframe width="'.concat(e.width,'" height="').concat(e.height,'" src="https://www.youtube.com/embed/').concat(e.url,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');else{var r=document.createElement("iframe");r.src=e.url,t.append(r)}else{var i=document.createElement("a");i.href=e.url,i.target="_blank",i.innerText=e.label?e.label:e.url,t.append(i)}else t.innerText=e.label?e.label:e;return t}function r(e,t,r){var i=document.querySelector(".bg-switcher"),a=i.querySelector(".bg-switcher__current"),n=i.querySelector(".bg-switcher__next"),o=!1,s=[];if("init"===e)a.style.backgroundImage="url(".concat(t,")");else if("right"===e)s.push("shift_left"),s.push("shift_left"),c();else if("left"===e)s.push("shift_right"),s.push("shift_right"),c();else if("backward"===e){var l="shift_"+("left"===r?"right":"left");s.push(l),s.push(l),c()}else"forward"===e&&(s.push("increase"),s.push("unblur"),c());function c(){o=!1,a.classList.toggle("bg-switcher__current_"+s[0]),a.addEventListener("animationend",d),n.style.backgroundImage="url(".concat(t,")"),n.classList.toggle("bg-switcher__next_"+s[1]),n.addEventListener("animationend",d)}function d(){o?(a.classList.toggle("bg-switcher__current_"+s[0]),a.classList.toggle("bg-switcher__current"),a.classList.toggle("bg-switcher__next"),n.classList.toggle("bg-switcher__next_"+s[1]),n.classList.toggle("bg-switcher__next"),n.classList.toggle("bg-switcher__current")):o=!0}}function i(e){var t=document.querySelector(".units-space");if(null!==e){var r=[];return e.forEach((function(e){var i=document.createElement("li");i.classList.add("unit"),i.style.backgroundImage="url(".concat(e.pic,")"),i.style.left=e.x+"%",i.style.top=e.y+"%",i.style.width=e.width?e.width+"%":"auto",i.style.height=e.height?e.height+"%":"auto";var a=document.createElement("img");a.src=e.pic,i.append(a);var n=document.createElement("button");n.classList.add("unit__btn"),r.push(n),i.append(n),t.append(i)})),r}t.innerHTML=""}var a=40;function n(e){var t=document.querySelector(".pop-up-context");if(null!==e){var r=document.createElement("div");r.classList.add("box"),r.style.left=e.x+"%",r.style.top=e.y+"%",r.append(function(e){var t=document.createElement("article");if(t.classList.add("article"),e.title){var r=document.createElement("h2");r.classList.add("article__title"),r.innerText=e.title,t.append(r)}if(e.description){var i=document.createElement("p");i.classList.add("article__section"),i.innerText=e.description,t.append(i)}if(e.author){var a=document.createElement("p");a.classList.add("article__section"),a.innerText=e.author,t.append(a)}e.links&&e.links.forEach((function(e){var r=document.createElement("p");if(e.embed)"youtube"===e.embed?r.innerHTML='<iframe width="'.concat(e.width,'" height="').concat(e.height,'" src="https://www.youtube.com/embed/').concat(e.url,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'):"spotify"===e.embed?r.innerHTML='<iframe src="https://open.spotify.com/embed/track/'.concat(e.url,'" width="').concat(e.width,'" height="').concat(e.height,'" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'):"yandex"===e.embed?e.list?r.innerHTML='<iframe frameborder="0"  width="100%" height="450" src="https://music.yandex.ru/iframe/#playlist/'.concat(e.url,'"></iframe>'):r.innerHTML='<iframe frameborder="0" width="100%" height="80" src="https://music.yandex.ru/iframe/#track/'.concat(e.url,'"></iframe>'):r.innerHTML='<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/'.concat(e.url,'?autoplay=1&loop=1&color=ff0179&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"><\/script>');else{r.classList.add("article__section");var i=document.createElement("a");i.href=e.url,i.target="_blank",i.innerText=e.label?e.label:e.url,r.append(i)}t.append(r)}));return t}(e)),t.append(r),function(e){e.offsetLeft+e.offsetWidth>e.offsetParent.offsetWidth-a&&(e.style.left=e.offsetLeft-(e.offsetLeft+e.offsetWidth-e.offsetParent.offsetWidth)-80<0?"0px":e.offsetLeft-(e.offsetLeft+e.offsetWidth-e.offsetParent.offsetWidth)-80+"px");e.offsetTop+e.offsetHeight>window.screen.height&&(e.style.left=e.offsetLeft-(e.offsetTop+e.offsetHeight-window.screen.height)-80<0?"0px":e.offsetTop+e.offsetHeight-window.screen.height-80+"px")}(r)}else t.innerHTML=""}function o(e){var t=document.querySelector(".control-btns"),r=t.querySelector(".btn_right"),i=t.querySelector(".btn_left"),a=t.querySelector(".btn_backward"),n=t.querySelector(".btn_forward");return void 0===e.right?r.classList.add("btn_none"):r.classList.remove("btn_none"),void 0===e.left?i.classList.add("btn_none"):i.classList.remove("btn_none"),void 0===e.backward?a.classList.add("btn_none"):a.classList.remove("btn_none"),void 0===e.forward?n.classList.add("btn_none"):n.classList.remove("btn_none"),e.forwardPosition&&(n.style.top=e.forwardPosition.y+"%",n.style.left=e.forwardPosition.x+"%"),{right:r,left:i,backward:a,forward:n}}var s=JSON.parse('{"Y":[{"id":0,"right":1,"left":10,"backward":23,"forward":11,"forwardPosition":{"x":18,"y":60},"url":"images/s0.jpg"},{"id":1,"right":2,"left":0,"backward":10,"url":"images/s1.jpg"},{"id":2,"right":3,"left":1,"backward":8,"url":"images/s2.jpg"},{"id":3,"right":4,"left":2,"url":"images/s3.jpg"},{"id":4,"right":5,"left":3,"backward":9,"forward":16,"forwardPosition":{"x":84,"y":60},"url":"images/s4.jpg"},{"id":5,"right":6,"left":4,"forward":15,"forwardPosition":{"x":50,"y":60},"url":"images/s5.jpg"},{"id":6,"right":10,"left":5,"backward":7,"url":"images/s6.jpg"},{"id":7,"right":5,"left":0,"backward":6,"forward":2,"forwardPosition":{"x":49,"y":68},"url":"images/s7.jpg"},{"id":8,"right":0,"left":4,"forward":6,"forwardPosition":{"x":50,"y":70},"url":"images/s8.jpg"},{"id":9,"right":3,"left":5,"backward":4,"forward":0,"forwardPosition":{"x":50,"y":57},"url":"images/s9.jpg"},{"id":10,"right":0,"left":6,"backward":1,"url":"images/s10.jpg"},{"id":11,"right":12,"backward":23,"url":"images/s11.jpg"},{"id":12,"right":14,"left":13,"backward":11,"url":"images/s12.jpg"},{"id":13,"left":12,"backward":14,"url":"images/s13.jpg"},{"id":14,"right":12,"backward":13,"url":"images/s14.jpg"},{"id":15,"left":0,"backward":21,"forward":17,"forwardPosition":{"x":91,"y":17},"url":"images/s15.jpg"},{"id":16,"right":5,"left":3,"backward":9,"url":"images/s16.jpg"},{"id":17,"left":15,"backward":18,"url":"images/s17.jpg"},{"id":18,"right":15,"backward":17,"forward":21,"forwardPosition":{"x":87,"y":41},"url":"images/s18.jpg"},{"id":19,"left":17,"backward":15,"url":"images/19.jpg"},{"id":20,"left":22,"backward":21,"forward":15,"forwardPosition":{"x":79,"y":85},"url":"images/s20.jpg"},{"id":21,"right":22,"backward":20,"url":"images/s21.jpg"},{"id":22,"right":20,"left":21,"url":"images/s22.jpg"},{"id":23,"right":10,"left":1,"backward":0,"forward":4,"forwardPosition":{"x":43,"y":62},"url":"images/s23.jpg"}]}'),l=JSON.parse('{"U":[{"id":0,"name":"Снег в котельной","description":"фестиваль снега, льда, во время которого в ars котельной, а также в любых других местах г.Томска можно поэкспериментировать с самым доступным, возобновляемым природным ресурсом – снегом и льдом.","date":"01-28 февраля 2021","links":[{"label":"Анонс фестиваля в .pdf","url":"downloads/snow.pdf"},{"label":"Веб-афиша фестиваля на тильде","url":"http://ars-kotelnaya.tilda.ws/snegvkotelnoi"},{"label":"Группа фестиваля в телеге","url":"https://t.me/sneg_v_kotelnoy"},{"label":"Инст котельной","url":"https://www.instagram.com/kotelna9/"},{"label":"Котельная в вк","url":"https://vk.com/kotelna9"},{"label":"Написать на почту: ars-koteln@ya.ru","url":"mailto:ars-koteln@ya.ru"}]}]}'),c=320,d=1920,f=162,u=969,p=s.Y,h=l.U,g=0,m="right",w=o(p[g]),b=document.querySelector(".proportion-box"),y=function(){b.style.width="100%",b.offsetWidth>c?b.offsetWidth<d?b.style.height=b.offsetWidth/100*50.47+"px":(b.style.height=u+"px",b.style.width=d+"px"):b.style.height=f+"px"},v=!1,k=h.find((function(e){return"01-28 февраля 2021"===e.date})).id;function _(e){v||(void 0!==p[g][e]?(v=!0,setTimeout((function(){v=!1}),1500),g=p[g][e],m="backward"!==e?e:m,r(e,p[g].url,m),o(p[g]),i(null),setTimeout(L,1500)):alert("ракурс недоступен"))}function L(){if(h[k].units){var e=h[k].units.filter((function(e){return e.location===g}));i(e).forEach((function(t,r){t.addEventListener("click",(function(){n(e[r])}))})),document.addEventListener("click",(function(){n(null)}),!0)}}r("init",p[g].url),L(),e(h[k]),b.addEventListener("click",(function(){e(h[k].name).addEventListener("click",(function(){e(h[k])}))}),!0),w.right.addEventListener("click",(function(){_("right")})),w.left.addEventListener("click",(function(){_("left")})),w.backward.addEventListener("click",(function(){_("backward")})),w.forward.addEventListener("click",(function(){_("forward")})),y(),window.addEventListener("resize",(function(){y(),n(null)}))}},t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.m=e,r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1202,202],[432,202]],i=function(){};function a(){for(var i,a=0;a<t.length;a++){for(var n=t[a],o=!0,s=1;s<n.length;s++){var l=n[s];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),i=r(r.s=n[0]))}return 0===t.length&&(r.x(),r.x=function(){}),i}r.x=function(){r.x=function(){},o=o.slice();for(var e=0;e<o.length;e++)n(o[e]);return(i=a)()};var n=function(a){for(var n,o,l=a[0],c=a[1],d=a[2],f=a[3],u=0,p=[];u<l.length;u++)o=l[u],r.o(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(n in c)r.o(c,n)&&(r.m[n]=c[n]);for(d&&d(r),s(a);p.length;)p.shift()();return f&&t.push.apply(t,f),i()},o=self.webpackChunk=self.webpackChunk||[],s=o.push.bind(o);o.push=n}(),r.x()}();