import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reproduces the original Webflow header81 image reveal effect.
 * As the user scrolls down through the 300vh sticky section,
 * the image container (.header81_content-right) expands from 50%
 * width (right half of screen) to 100% width (covering the whole screen
 * from the right to the left edge).
 */
export default function ScrollBreakoutImage({ src, srcSet, sizes, alt = '', className }) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const section = wrap.closest('.section_header81') || wrap.closest('header') || wrap.parentElement
    const triggerElem = section.querySelector('.header81_component') || section
    const contentRight = wrap.closest('.header81_content-right') || wrap.parentElement
    const contentLeft = section.querySelector('.header81_content-left')

    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(min-width: 992px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElem,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        })

        // 1. Expand the right image container width from 50% to 100%
        if (contentRight) {
          tl.fromTo(
            contentRight,
            { width: '50%' },
            { width: '100%', ease: 'none' },
            0
          )
        }

        // 2. Fade out and slightly translate text on left as image covers it
        if (contentLeft) {
          tl.fromTo(
            contentLeft,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -40, ease: 'none' },
            0
          )
        }

        // 3. Inner image subtle zoom out for depth effect
        if (img) {
          tl.fromTo(
            img,
            { scale: 1.15 },
            { scale: 1.0, ease: 'none' },
            0
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className={className || 'header81_image-wrapper'}>
      <img
        ref={imgRef}
        sizes={sizes}
        srcSet={srcSet}
        alt={alt}
        src={src}
        loading="lazy"
        className="header81_image"
      />
    </div>
  )
}

