import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BackToTop() {
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const buttonWrap = wrapRef.current
    const button = buttonRef.current
    if (!button || !buttonWrap) return

    // Minimum scroll distance (in VH) before the button appears
    const minimumScrollDistance = 50

    gsap.set(buttonWrap, { autoAlpha: 1 })
    gsap.set(button, { autoAlpha: 0 })

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: `top top-=${minimumScrollDistance}%`,
      onEnter: () => {
        gsap.fromTo(
          button,
          { autoAlpha: 0, rotate: -65, scale: 0.4 },
          { autoAlpha: 1, rotate: 0, scale: 1, duration: 0.45, ease: 'power4.out' }
        )
      },
      onLeaveBack: () => {
        gsap.to(button, {
          autoAlpha: 0,
          rotate: -65,
          scale: 0.6,
          duration: 0.4,
          ease: 'power4.out',
        })
      },
    })

    return () => trigger.kill()
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={wrapRef} data-back-to-top="wrap" className="back-top__wrap">
      <button
        ref={buttonRef}
        data-back-to-top="button"
        className="back-top__button"
        onClick={handleClick}
        aria-label="Back to top"
      >
        <div className="back-top__arrow-wrap">
          <div className="back-top__arrow-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="back-top__arrow">
              <path d="M47.5 25L30 7.5L12.5 25" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M30 7.5L30 55" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
          </div>
          <div className="back-top__arrow-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="back-top__arrow">
              <path d="M47.5 25L30 7.5L12.5 25" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M30 7.5L30 55" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  )
}
