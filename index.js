import{a as u,S as f,i}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="56162329-704add285f418fdbebe47467d",m="https://pixabay.com/api/";function y(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`${m}?${o}`).then(t=>t.data)}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(){l.innerHTML=""}function L(s){const o=s.map(t=>`
            <li class="gallery-item">
                <a href="${t.largeImageURL}">
                    <img
                     src="${t.webformatURL}"
                     alt="${t.tags}" 
                     />
                </a>
                <div class="info">
                <p> Likes: ${t.likes}</p>
                <p> Views: ${t.views}</p>
                <p> Comments: ${t.comments}</p>
                <p> Downloads: ${t.downloads}</p>
                </div>
            </li>
        `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();o&&(g(),b(),y(o).then(t=>{const n=t.hits;if(!n.length){i.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}L(n),c.reset()}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()}))});
//# sourceMappingURL=index.js.map
