import{i as a,S as h}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="43903713-409f48a94c7346dbfb07fdc03",d="https://pixabay.com/api/",p=i=>{const r=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}/?${r}`).then(s=>{if(!s.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.json()})},y=i=>i.reduce((r,{tags:s,webformatURL:l,largeImageURL:e,likes:t,views:o,comments:m,downloads:u})=>r+`
			<li class="item-list">
				<a class="item-list-link" href="${e}">
					<img class="item-list-img" src="${l}" alt="${s}">
				</a>
				<ul class="markup-info">
					<li class="item-list-info-text">
						<h3 class="item-list-title">Likes</h3>
						<p class="item-list-text">${t}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Views</h3>
						<p class="item-list-text">${o}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Comments</h3>
						<p class="item-list-text">${m}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Downloads</h3>
						<p class="item-list-text">${u}</p>
					</li>
				</ul>
			</li>
		`,""),n=document.querySelector(".js-gallery"),g=document.querySelector(".js-search-form"),c=document.querySelector(".js-loader");function L(i){i.preventDefault();const r=i.target.elements.searchword.value.trim();if(n.innerHTML="",r==="")return a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});c.classList.remove("is-hidden"),p(r).then(s=>{s.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML=y(s.hits),new h(".item-list-link",{captionsData:"alt",captionsDelay:250})}).catch(s=>console.log(s)).finally(()=>{i.target.reset(),c.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
