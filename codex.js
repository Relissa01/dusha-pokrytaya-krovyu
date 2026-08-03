
const cards=[...document.querySelectorAll(".law-card")];
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
cards.forEach((c,i)=>{c.style.transitionDelay=`${Math.min(i%6,5)*55}ms`;observer.observe(c)});
const s=document.getElementById("lawSearch"),b=document.getElementById("clearSearch");
if(s){const f=()=>{const q=s.value.toLowerCase();cards.forEach(c=>c.classList.toggle("hidden",q&&!c.textContent.toLowerCase().includes(q)))};s.addEventListener("input",f);b.addEventListener("click",()=>{s.value="";f()})}
