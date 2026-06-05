import{a as v,S as P,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const S="56162329-704add285f418fdbebe47467d",q="https://pixabay.com/api/";async function f(o,r){return(await v.get(q,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function B(){h.innerHTML=""}function y(o){const r=o.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                    <img
                     src="${e.webformatURL}"
                     alt="${e.tags}" 
                     />
                </a>
                <div class="info">
                <p> Likes: ${e.likes}</p>
                <p> Views: ${e.views}</p>
                <p> Comments: ${e.comments}</p>
                <p> Downloads: ${e.downloads}</p>
                </div>
            </li>
        `).join("");h.insertAdjacentHTML("beforeend",r),M.refresh()}function g(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}const L=document.querySelector(".load-more");function w(){L.classList.remove("hidden")}function l(){L.classList.add("hidden")}const u=document.querySelector(".form"),$=document.querySelector(".load-more");let d="",i=1;const b=15;u.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){d=r,i=1,B(),l(),g();try{const e=await f(d,i);if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again."});return}y(e.hits),u.reset(),Math.ceil(e.totalHits/b)>1?w():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong. Please try again later."})}finally{p()}}});$.addEventListener("click",async()=>{i+=1,l(),g();try{const o=await f(d,i);y(o.hits);const r=Math.ceil(o.totalHits/b);i>=r?(n.info({message:"We're sorry, but you've reached the end of search results."}),l()):w();const e=document.querySelectorAll(".gallery-item"),s=e[e.length-1];if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
