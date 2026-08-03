import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero mosaic with scroll-driven zoom-out.
 *
 * How the original Webflow design works:
 *   - .header83_component is 300vh tall (scroll room)
 *   - .header83_content-wrapper is position:sticky so the hero stays visible
 *   - .header83_images-layout starts at transform: scale(3.2) in CSS
 *   - Webflow IX2 animates it back to scale(1) as the user scrolls through
 *     the 300vh section
 *
 * We replicate this exactly: animate the images-layout div (not the imgs)
 * from scale(3.2) → scale(1) scrubbed to the hero's scroll progress.
 */
export default function HeroImages() {
  const layoutRef = useRef(null)

  useEffect(() => {
    let ctx = null

    const setup = () => {
      if (ctx) {
        ctx.revert()
        ctx = null
      }

      const layout = layoutRef.current
      if (!layout) return

      const heroSection = document.getElementById('section_header83')
      if (!heroSection) return

      ctx = gsap.context(() => {
        // Override the CSS scale(3.2) and animate to scale(1)
        // as the user scrolls through the full 300vh hero section.
        gsap.fromTo(
          layout,
          { scale: 3.2, transformOrigin: 'center center' },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSection,
              start: 'top top',
              // end when the bottom of the 300vh section leaves the viewport bottom
              // so the zoom completes exactly as the hero section scrolls away
              end: 'bottom bottom',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }

    // Defer one rAF so Lenis is mounted and DOM is measured correctly
    const rafId = requestAnimationFrame(setup)

    const onResize = () => {
      if (ctx) ctx.revert()
      ctx = null
      requestAnimationFrame(setup)
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <div className="header83_background-images">
      <div className="image-overlay-layer" />
      <div ref={layoutRef} className="header83_images-layout">
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d4-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d5-c91778e6" sizes="(max-width: 1320px) 100vw, 1320px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685.avif 1320w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d6-c91778e6" className="header83_image-wrapper">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d7-c91778e6" sizes="(max-width: 1320px) 100vw, 1320px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b1bdb32f604c8f74_IMG_1675.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b1bdb32f604c8f74_IMG_1675-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b1bdb32f604c8f74_IMG_1675-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b1bdb32f604c8f74_IMG_1675.avif 1320w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d8-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75d9-c91778e6" sizes="(max-width: 1320px) 100vw, 1320px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828b07856dcd88e98c3_IMG_1678.avif 1320w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75da-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75db-c91778e6" sizes="(max-width: 1320px) 100vw, 1320px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684.avif 1320w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75dc-c91778e6" className="header83_image-wrapper">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75dd-c91778e6" sizes="(max-width: 1920px) 100vw, 1920px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a3c940a53d3256a1d_relume-351407.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a3c940a53d3256a1d_relume-351407-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a3c940a53d3256a1d_relume-351407-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a3c940a53d3256a1d_relume-351407-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a3c940a53d3256a1d_relume-351407.avif 1920w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75de-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75df-c91778e6" sizes="(max-width: 1920px) 100vw, 1920px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3-p-1600.avif 1600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448274f795bc99ccbc907_3.avif 1920w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e0-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e1-c91778e6" sizes="(max-width: 1320px) 100vw, 1320px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828c1cd99f5b1bdef2d_IMG_1686.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828c1cd99f5b1bdef2d_IMG_1686-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828c1cd99f5b1bdef2d_IMG_1686-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828c1cd99f5b1bdef2d_IMG_1686.avif 1320w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e2-c91778e6" className="header83_image-wrapper">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e3-c91778e6" sizes="(max-width: 2048px) 100vw, 2048px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826a4db7e87043b0835_Hiigo%20WalhallaZF-26.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826a4db7e87043b0835_Hiigo%20WalhallaZF-26-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826a4db7e87043b0835_Hiigo%20WalhallaZF-26-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826a4db7e87043b0835_Hiigo%20WalhallaZF-26-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826a4db7e87043b0835_Hiigo%20WalhallaZF-26.avif 2048w" className="header83_image" />
        </div>
        <div id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e4-c91778e6" className="header83_image-wrapper hide-mobile-landscape">
          <img id="w-node-_6d7e12ce-84c6-1fc6-d548-0052a48d75e5-c91778e6" sizes="(max-width: 1920px) 100vw, 1920px" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5.avif" loading="lazy" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5.avif 1920w" className="header83_image" />
        </div>
      </div>
    </div>
  )
}
