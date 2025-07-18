document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(){
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    })
})

// Initialize Lenis

const lenis = new Lenis();

function  raf (time){
    lenis.raf(time)
    requestAnimationFrame(time)
}
requestAnimationFrame(raf)