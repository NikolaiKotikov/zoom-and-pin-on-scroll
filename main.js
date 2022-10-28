import './style.scss'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const tl1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.scroll',
            start: 'top top',
            end: '40% bottom',
            scrub: 1,
            // markers: true,
        }
    }
)
    .to('.scroll__portal', {
        clipPath: 'inset(0% round 24px)',
        duration: 5
    });

const targets = document.querySelectorAll('.scroll__text')
const numberOfTargets = targets.length
const duration = 2
const pause = 0.75
const stagger = duration + pause
const repeatDelay = (stagger * (numberOfTargets - 1)) + pause

const tl2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.scroll',
            start: '40% bottom',
            end: 'bottom top',
            scrub: 1,
            // markers: true,
        }

    }
)
.from(targets, {duration, y: 100, opacity: 0, stagger: {each: stagger}})
    .to(targets, {y: 0, duration, opacity: 0, stagger: {each: stagger}}, stagger)
