gsap.from("#hero .left",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.2,
   
})

gsap.from("#hero .right",{
    x:700,
    opacity:0,
    duration:1,
    stagger:0.2,
   
})

gsap.from("nav",{
    y:-200,
    opacity:0,
    duration:1,
    stagger:0.2,
   
})

let portfolio = document.getElementById("portfolio");
let cursor = document.querySelector(".cursor");

portfolio.addEventListener("mousemove",(e)=>{
       gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.5,
   

       })
})

portfolio.addEventListener("mouseleave",(e)=>{
       gsap.to(cursor,{
      opacity:0
        
       })
})

portfolio.addEventListener("mouseenter",(e)=>{
       gsap.to(cursor,{
      opacity:1
        
       })
})