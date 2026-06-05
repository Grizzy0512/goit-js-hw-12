import{a as w,S as b,i}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const v="56162329-704add285f418fdbebe47467d",S="https://pixabay.com/api/";async function f(o,r){return(await w.get(S,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),P=new b(".gallery a",{captionsData:"alt",captionDelay:250});function q(){m.innerHTML=""}function h(o){const r=o.map(e=>`
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
        `).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()}function p(){y.classList.remove("hidden")}function g(){y.classList.add("hidden")}const L=document.querySelector(".load-more");function M(){L.classList.remove("hidden")}function l(){L.classList.add("hidden")}const u=document.querySelector(".form"),B=document.querySelector(".load-more");let d="",n=1;u.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){d=r,n=1,q(),l(),p();try{const e=await f(d,n);if(!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again."});return}h(e.hits),u.reset();const s=Math.ceil(e.totalHits/15);n<s?M():l()}catch{i.error({message:"Something went wrong. Please try again later."})}finally{g()}}});B.addEventListener("click",async()=>{n+=1,p();try{const o=await f(d,n);h(o.hits);const r=Math.ceil(o.totalHits/15);n>=r&&(l(),i.info({message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{i.error({message:"Something went wrong. Please try again later."})}finally{g()}});
//# sourceMappingURL=index.js.map
