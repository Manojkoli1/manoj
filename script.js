document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(){
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    })
})

// Initialize Lenis

const lenis = new Lenis({
    duration:1.2,
    easing:(t)=>Math.min(1,1.001 - Math.pow(2, -10*t)),
    smooth:true
});

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)

}


requestAnimationFrame(raf)