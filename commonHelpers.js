import{i as d}from"./assets/vendor-6b2b7869.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".form"),s=document.getElementById("search-bar");document.querySelector(".submit-btn");const n=document.getElementById("gallery");l.addEventListener("submit",c=>{c.preventDefault();const e=s.value.trim();if(!e){d.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}const i=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(o=>o.json()).then(o=>{o.results.length===0?(d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML=""):(n.innerHTML="",o.results.forEach(r=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
    <img src="${r.webformatURL}" alt="${r.tags}" onclick="showModal('${r.largeImageURL}')" />
    <div class="card-info">
      <h3>${r.tags}</h3>
      <p>Likes: ${r.likes}</p>
      <p>Views: ${r.views}</p>
      <p>Comments: ${r.comments}</p>
      <p>Downloads: ${r.downloads}</p>
    </div>
  `,n.appendChild(a)}))}).catch(o=>{console.error("Error:",o)})})});
//# sourceMappingURL=commonHelpers.js.map
