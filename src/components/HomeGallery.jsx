import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    src: 'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678.avif',
    srcSet:
      'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678.avif 1320w',
  },
  {
    src: 'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif',
    srcSet:
      'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif 1320w',
  },
  {
    src: 'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826868544284aeafb8d_Hiigo%20WalhallaZF-72.avif',
    srcSet:
      'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826868544284aeafb8d_Hiigo%20WalhallaZF-72-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826868544284aeafb8d_Hiigo%20WalhallaZF-72-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826868544284aeafb8d_Hiigo%20WalhallaZF-72-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826868544284aeafb8d_Hiigo%20WalhallaZF-72.avif 1536w',
  },
  {
    src: 'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68fb2de2d93f6582527c68a4_afbeelding%201.avif',
    srcSet:
      'https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68fb2de2d93f6582527c68a4_afbeelding%201-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68fb2de2d93f6582527c68a4_afbeelding%201-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68fb2de2d93f6582527c68a4_afbeelding%201-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68fb2de2d93f6582527c68a4_afbeelding%201.avif 2048w',
  },
]

export default function HomeGallery() {
  const componentRef = useRef(null)
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  const imageRefs = useRef([])
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const component = componentRef.current
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (!component || !wrapper || !content) return

    let horizontalTween
    let imageTweens = []

    const teardown = () => {
      if (horizontalTween) {
        horizontalTween.scrollTrigger && horizontalTween.scrollTrigger.kill()
        horizontalTween.kill()
        horizontalTween = null
      }
      imageTweens.forEach((t) => {
        t.scrollTrigger && t.scrollTrigger.kill()
        t.kill()
      })
      imageTweens = []
    }

    const setup = () => {
      teardown()

      const distance = Math.max(0, content.scrollWidth - wrapper.clientWidth)

      gsap.set(content, { x: 0 })

      horizontalTween = gsap.to(content, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: component,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      // Each image starts zoomed in and "zooms out" to its natural scale
      // as it scrolls into view within the horizontally-scrolling row.
      imageRefs.current.forEach((img) => {
        if (!img) return
        gsap.set(img, { scale: 1.35, transformOrigin: 'center center' })
        const tween = gsap.to(img, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            containerAnimation: horizontalTween,
            start: 'left 95%',
            end: 'left 55%',
            scrub: true,
          },
        })
        imageTweens.push(tween)
      })

      ScrollTrigger.refresh()
    }

    // Delay so Lenis scrollerProxy is active before we create any triggers
    const initTimeout = setTimeout(setup, 150)

    // Recalculate once every gallery image has actually finished loading
    // (they're lazy-loaded), and on resize.
    const imgs = Array.from(content.querySelectorAll('img'))
    const pending = imgs.filter((img) => !img.complete)
    const onImgLoad = () => {
      setup()
    }
    pending.forEach((img) => img.addEventListener('load', onImgLoad))

    const onResize = () => {
      setup()
    }
    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(initTimeout)
      pending.forEach((img) => img.removeEventListener('load', onImgLoad))
      window.removeEventListener('resize', onResize)
      teardown()
    }
  }, [])

  return (
    <section data-w-id="2222bf5e-0f1a-5742-191d-a60e70a4a3b7" className="section_gallery24 color-scheme-1">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-top padding-xhuge" />
        </div>
      </div>
      <div className="gallery24_component" ref={componentRef}>
        <div
          ref={wrapperRef}
          className="gallery24_horizontal-scroll-wrapper"
          style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        >
          <div ref={contentRef} className="gallery24_horizontal-scroll-content">
              {images.map((image, i) => (
                <a
                  key={image.src}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setLightbox(image.src)
                  }}
                  className="gallery24_lightbox-link w-inline-block w-lightbox"
                >
                  <div className="gallery24_image-wrapper">
                    <img
                      ref={(el) => (imageRefs.current[i] = el)}
                      sizes="(max-width: 1320px) 100vw, 1320px"
                      srcSet={image.srcSet}
                      alt=""
                      src={image.src}
                      loading="eager"
                      className="gallery24_image"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem',
          }}
        >
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      )}
    </section>
  )
}
