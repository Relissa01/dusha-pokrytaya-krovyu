<div class="bismillah">

    <div class="symbol">﷽</div>

    <div class="arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>

</div>

<header>
const cards=[...document.querySelectorAll(".card")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
cards.forEach((card,index)=>{
  card.style.transitionDelay=`${Math.min(index%6,5)*70}ms`;
  observer.observe(card);
  card.addEventListener("touchstart",()=>card.classList.add("touch"),{passive:true});
  card.addEventListener("touchend",()=>setTimeout(()=>card.classList.remove("touch"),500),{passive:true});
});
