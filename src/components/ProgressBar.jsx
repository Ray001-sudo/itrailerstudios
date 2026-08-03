import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function ProgressBar() {
  const wrapRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const progressBarWrap = wrapRef.current
    const progressBar = barRef.current
    if (!progressBarWrap || !progressBar) return

    const trigger = gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    })

    const handleClick = (event) => {
      const clickX = event.clientX
      const progress = clickX / progressBarWrap.offsetWidth
      const scrollPosition = progress * (document.body.scrollHeight - window.innerHeight)

      gsap.to(window, {
        scrollTo: scrollPosition,
        duration: 0.725,
        ease: 'power3.out',
      })
    }

    progressBarWrap.addEventListener('click', handleClick)

    return () => {
      progressBarWrap.removeEventListener('click', handleClick)
      trigger.scrollTrigger && trigger.scrollTrigger.kill()
      trigger.kill()
    }
  }, [])

  return (
    <div ref={wrapRef} className="progress-bar-wrap">
      <div ref={barRef} className="progress-bar" />
    </div>
  )
}
