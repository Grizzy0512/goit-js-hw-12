import{a as P,S,i}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const q="56162329-704add285f418fdbebe47467d",M="https://pixabay.com/api/";async function m(o,r){return(await P.get(M,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function $(){y.innerHTML=""}function p(o){const r=o.map(e=>`
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
        `).join("");y.insertAdjacentHTML("beforeend",r),B.refresh()}function g(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const w=document.querySelector(".load-more");function b(){w.classList.remove("hidden")}function d(){w.classList.add("hidden")}const f=document.querySelector(".form"),l=document.querySelector(".load-more");let u="",n=1;const v=15;f.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){u=r,n=1,$(),d(),g();try{const e=await m(u,n);if(!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again."});return}p(e.hits),f.reset();const s=Math.ceil(e.totalHits/v);n<s?b():d()}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L()}}});l.addEventListener("click",async()=>{l.disabled=!0,n+=1,g();try{const o=await m(u,n);p(o.hits);const r=Math.ceil(o.totalHits/v);n>=r?(d(),i.info({message:"We're sorry, but you've reached the end of search results."})):b();const e=document.querySelector(".gallery-item");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L(),l.disabled=!1}});
//# sourceMappingURL=index.js.map
