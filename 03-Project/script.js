
let tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    delay: 0.5, 
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "bounce.out"
})

tl.from("#center h1", {
    x: -300,
    delay: 0.5, 
    opacity: 0,
    duration: 0.6,
    stagger: 1,
})

tl.from("img", {
    x: 100,
    rotate: 45,
    delay: 0.5, 
    opacity: 0,
    duration: 0.5,
    stagger: 1,
})