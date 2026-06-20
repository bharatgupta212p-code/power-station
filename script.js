window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    if (loader) {
      loader.style.display = "none";
    }

  }, 1500);

});
gsap.registerPlugin(ScrollTrigger);

// HERO TEXT
gsap.from(".hero-content h1",{
    y:100,
    opacity:0,
    duration:1.5,
    ease:"power4.out"
});

gsap.from(".hero-content p",{
    y:50,
    opacity:0,
    duration:1.5,
    delay:.4,
    ease:"power4.out"
});

gsap.from(".hero-buttons",{
    y:50,
    opacity:0,
    duration:1.5,
    delay:.7,
    ease:"power4.out"
});

// SECTIONS
gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{
        opacity:0,
        y:100,
        duration:1.2,

        scrollTrigger:{
            trigger:section,
            start:"top 80%",
            toggleActions:"play none none reverse"
        }
    });

});
const cards=document.querySelectorAll(".trainer-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*25;
const rotateX=((y/rect.height)-0.5)*-25;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});
gsap.registerPlugin(ScrollTrigger);

let heroTl = gsap.timeline();

heroTl

.from(".hero-content h1",{
y:150,
opacity:0,
duration:1.3,
ease:"power4.out"
})

.from(".hero-text",{
y:80,
opacity:0,
duration:1
},"-=0.8")

.from(".hero-buttons",{
scale:0.7,
opacity:0,
duration:.8,
ease:"back.out(1.8)"
},"-=0.6");

gsap.to(".hero-bg",{

scale:1,

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
}

});
gsap.from(".program-card",{

y:150,
opacity:0,
duration:1.2,
stagger:.2,

scrollTrigger:{
trigger:".programs",
start:"top 75%"
}

});
gsap.from(".trainer-card",{

scale:.7,
opacity:0,
duration:1.2,
stagger:.25,

scrollTrigger:{
trigger:".trainers",
start:"top 75%"
}

});
gsap.from(".price-card",{

y:100,
opacity:0,
duration:1,
stagger:.25,

scrollTrigger:{
trigger:".pricing",
start:"top 75%"
}

});