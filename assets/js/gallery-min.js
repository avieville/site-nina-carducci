const filters=document.querySelectorAll("#filters li span"),gallery=document.querySelector("#gallery-items"),modal=document.querySelector("#modal"),modalBody=document.querySelector(".gallery-modal-body"),modalImage=document.querySelector("#modal-image"),images=document.querySelectorAll("#gallery-items img");let activeImages=Array.from(document.querySelectorAll("#gallery-items .gallery-item-active"));filters.forEach((e=>{e.addEventListener("click",(function(){filters.forEach((e=>{e.classList.remove("active")})),this.classList.add("active"),activeImages.forEach((e=>{e.addEventListener("animationend",(function(){this.classList.remove("gallery-animation")}))}));let e=this.id;activeImages=[],images.forEach((a=>{a.classList.replace("gallery-item-active","gallery-item-inactive"),(e in a.dataset||"all"===e)&&(a.classList.replace("gallery-item-inactive","gallery-item-active"),activeImages.push(a))})),activeImages.forEach((e=>{e.classList.add("gallery-animation")}))}))})),images.forEach((e=>{e.addEventListener("click",(function(){modalImage.src=this.src,modalImage.alt=this.alt,modal.classList.add("show");const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=e+"px",document.body.classList.add("hide-overflow")}))})),modal.addEventListener("click",(function(){modal.classList.remove("show"),document.body.classList.remove("hide-overflow"),document.body.style.paddingRight=0})),modal.children[0].addEventListener("click",(function(e){e.stopPropagation()})),document.querySelector("#modal-prev").addEventListener("click",(function(){const e=activeImages.findIndex((e=>e.src===modalImage.src)),a=e?e-1:activeImages.length-1;modalImage.src=activeImages[a].src,modalImage.alt=activeImages[a].alt})),document.querySelector("#modal-next").addEventListener("click",(function(){const e=activeImages.findIndex((e=>e.src===modalImage.src)),a=e==activeImages.length-1?0:e+1;modalImage.src=activeImages[a].src,modalImage.alt=activeImages[a].alt}));