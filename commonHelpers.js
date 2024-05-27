import{a as L,i as c,S as v}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b=t=>t.reduce((s,{tags:o,webformatURL:n,largeImageURL:e,likes:r,views:i,comments:y,downloads:g})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${n}" alt="${o}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),w="https://pixabay.com/api/",P="43903713-409f48a94c7346dbfb07fdc03",S=async(t,s)=>(await L(w,{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}})).data,h=document.querySelector(".gallery"),q=document.querySelector(".search-form"),l=document.querySelector(".loader"),a=document.querySelector(".photo-btn");let d=1,E=15,p="";function f(){a.classList.add("is-hidden-btn")}function A(){a.classList.remove("is-hidden-btn")}function M(){const t=document.querySelector(".photo-container");return t?t.getBoundingClientRect().height:0}async function m(t,s){l.classList.remove("is-hidden");try{const o=await S(t,s);o.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f(),a.removeEventListener("click",u)):(h.insertAdjacentHTML("beforeend",b(o.hits)),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),s*E>=o.totalHits?(f(),a.removeEventListener("click",u),c.info({message:"We're sorry, but you've reached the end of search results."})):A())}catch{c.error({message:"An error occurred while fetching photos. Please try again later."})}finally{l.classList.add("is-hidden")}}async function u(){d++,await m(p,d);const t=M();window.scrollBy({top:t*2,behavior:"smooth"})}a.addEventListener("click",u);async function $(t){t.preventDefault();const s=t.target.elements.searchKeyword.value.trim();if(h.innerHTML="",s==="")return f(),a.removeEventListener("click",u),c.error({message:"Please enter a search query before searching!"});p=s,l.classList.remove("is-hidden");try{d=1,await m(s,d)}catch{c.error({message:"An error occurred while performing the search. Please try again later."})}finally{t.target.reset(),l.classList.add("is-hidden")}}q.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map
