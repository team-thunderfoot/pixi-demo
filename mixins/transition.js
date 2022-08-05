export default {
    transition: {
        name: "slide",
        mode: "out-in",
        css: false,

        beforeEnter(el) {
            this.$gsap.set(el, {
                opacity: 0,
            });
        },

        enter(el, done) {
            this.$gsap.to(el, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                onComplete: done,
            });
        },

        leave(el, done) {
            this.$gsap.to(el, {
                opacity: 0,
                duration: .2,
                ease: "power2.inOut",
                onComplete: done,
            });
        },
    },
}