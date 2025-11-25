gsap.from("#hero .left", {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    xPercent: 0,
    overflow: "hidden"

})

gsap.from("#hero .right", {
    x: 700,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    xPercent: 0,
    overflow: "hidden"

})

gsap.from("nav", {
    y: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    xPercent: 0,
    overflow: "hidden"

})

let portfolio = document.getElementById("portfolio");
let cursor = document.querySelector(".cursor");

portfolio.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
        xPercent: 0,
        overflow: "hidden"
    })
})

portfolio.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
        opacity: 0,
        xPercent: 0,
        overflow: "hidden"

    })
})

portfolio.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
        opacity: 1,
        xPercent: 0,
        overflow: "hidden"

    })
})