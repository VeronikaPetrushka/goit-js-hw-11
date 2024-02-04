import{i as d,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".form"),s=document.getElementById("search-bar");document.querySelector(".submit-btn");const n=document.getElementById("gallery"),a=document.querySelector(".loading");l.addEventListener("submit",e=>{e.preventDefault();const t=s.value.trim();if(!t){d.error({title:"Error",message:"Please enter a search query."});return}a.style.display="block";const u=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(u).then(o=>o.json()).then(o=>{a.style.display="none",o.hits.length===0?(d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=""):(n.innerHTML="",o.hits.forEach(r=>{const c=document.createElement("div");c.className="card",c.innerHTML=`
    <a href="${r.largeImageURL}" data-lightbox="gallery">
      <img src="${r.webformatURL}" alt="${r.tags}"/>
    </a>
    <div class="card-info">
      <h3 class="img-desc">${r.tags}</h3>
      <div class="img-info">
      <p class="img-stat">Likes:<br>${r.likes}</p>
      <p class="img-stat">Views:<br>${r.views}</p>
      <p class="img-stat">Comments:<br>${r.comments}</p>
      <p class="img-stat">Downloads:<br>${r.downloads}</p>
      </div>
              </div>
   `,n.appendChild(c)}),new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",history:!1,animationSpeed:250,close:!0}).refresh())}).catch(o=>{console.error("Error:",o)})})});
//# sourceMappingURL=commonHelpers.js.map
