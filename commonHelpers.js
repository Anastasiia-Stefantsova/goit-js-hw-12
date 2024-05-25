import{a as g,i as n,S as L}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v=s=>s.reduce((t,{tags:o,webformatURL:i,largeImageURL:e,likes:r,views:c,comments:p,downloads:y})=>t+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${i}" alt="${o}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${c}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${p}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${y}</span>
        </div>
    </div>
</li>
    `,""),b="https://pixabay.com/api/",w="43940404-366b9d94bf735917b74c3de1b",P=async(s,t)=>(await g(b,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,f=document.querySelector(".gallery"),S=document.querySelector(".search-form"),d=document.querySelector(".loader"),a=document.querySelector(".photo-btn");let u=1,E=15,q="";function h(){a.classList.add("is-hidden-btn")}function M(){a.classList.remove("is-hidden-btn")}async function m(s,t){d.classList.remove("is-hidden");try{const o=await P(s,t);o.hits.length===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),h(),a.removeEventListener("click",l)):(f.insertAdjacentHTML("beforeend",v(o.hits)),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*E>=o.totalHits?(h(),a.removeEventListener("click",l),n.info({message:"We're sorry, but you've reached the end of search results."})):M())}catch{n.error({message:"An error occurred while fetching photos. Please try again later."})}finally{d.classList.add("is-hidden")}}async function l(){u++,await m(q,u),$()}a.addEventListener("click",l);async function A(s){s.preventDefault();const t=s.target.elements.searchKeyword.value.trim();if(f.innerHTML="",t==="")return h(),a.removeEventListener("click",l),n.error({message:"Please enter a search query before searching!"});d.classList.remove("is-hidden");try{if(u=1,await m(t,u),f.innerHTML==="")return h(),a.removeEventListener("click",l),n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}catch{n.error({message:"An error occurred while performing the search. Please try again later."})}finally{s.target.reset(),d.classList.add("is-hidden")}}S.addEventListener("submit",A);function $(){const{height:s}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
