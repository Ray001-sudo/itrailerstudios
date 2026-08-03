import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import PortfolioGallery from '../components/PortfolioGallery.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Each image's converged offset — how far it is FROM its final position
    // when fully converged (scroll = 0 in this section).
    // Positive xPercent pushes right, positive yPercent pushes down.
    const imageConfig = [
      // image1: top-left → converges by moving right+down toward center
      { selector: '.is-image1', from: { xPercent: 55, yPercent: 45, scale: 0.75, opacity: 1 } },
      // image2: top-center → converges by moving down
      { selector: '.is-image2', from: { xPercent: 0,  yPercent: 55, scale: 0.75, opacity: 1 } },
      // image3: top-right → converges by moving left+down
      { selector: '.is-image3', from: { xPercent: -55, yPercent: 40, scale: 0.75, opacity: 1 } },
      // image4: bottom-left → converges by moving right+up
      { selector: '.is-image4', from: { xPercent: 50, yPercent: -50, scale: 0.75, opacity: 1 } },
      // image5: bottom-right → converges by moving left+up
      { selector: '.is-image5', from: { xPercent: -50, yPercent: -45, scale: 0.75, opacity: 1 } },
    ]

    const triggers = []

    imageConfig.forEach(({ selector, from }) => {
      const el = section.querySelector(selector)
      if (!el) return

      const tween = gsap.fromTo(
        el,
        {
          ...from,
        },
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 1.2,
          },
        }
      )

      triggers.push(tween.scrollTrigger)
    })

    return () => {
      triggers.forEach((t) => t && t.kill())
    }
  }, [])

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <header className="section_header65 text-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header65_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1">FESTIVAL VIBES<br />CAPTURED</h1>
                    </div>
                    <p className="text-size-medium">Experience the energy and emotion of festivals through my lens</p>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center">
                        <Link to="/contact" className="btn-bubble-arrow w-inline-block">
                          <div className="btn-bubble-arrow__arrow big">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" className="btn-bubble-arrow__arrow-svg">
                              <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                              <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></line>
                            </svg>
                          </div>
                          <div className="btn-bubble-arrow__content background-color-tealdark big">
                            <span className="btn-bubble-arrow__content-text big otherfont">Get in touch</span>
                          </div>
                          <div className="btn-bubble-arrow__arrow is--duplicate background-color-teal big">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" className="btn-bubble-arrow__arrow-svg">
                              <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                              <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></line>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header65_background-image-wrapper">
          <div className="image-overlay-layer"></div>
          <img
            sizes="(max-width: 1920px) 100vw, 1920px"
            srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4453611187a9979fd6109_relume-351440-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4453611187a9979fd6109_relume-351440-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4453611187a9979fd6109_relume-351440-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4453611187a9979fd6109_relume-351440.avif 1920w"
            alt=""
            src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4453611187a9979fd6109_relume-351440.avif"
            loading="eager"
            className="header65_background-image"
          />
        </div>
      </header>

      {/* ── Capturing Moments — scroll-dispersed image mosaic ──── */}
      <section className="section_layout421" ref={sectionRef}>
        <div className="layout421_component">
          <div className="layout421_content">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-large">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-style-h2">Unforgettable Energy</h2>
                      </div>
                      <p className="text-size-medium">A curated glimpse into the magic of live festivals and events</p>
                      <div className="margin-top margin-medium">
                        <div className="button-group is-center">
                          <a href="#" className="button is-secondary w-button">Button</a>
                          <a href="#" className="button is-link is-icon w-inline-block">
                            <div>Button</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="layout421_content-bottom">
            <div className="layout421_images-wrapper">
              <div className="layout421_image-wrapper is-image1">
                <img
                  sizes="(max-width: 1320px) 100vw, 1320px"
                  srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409.avif 1320w"
                  alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409.avif"
                  loading="lazy" className="layout421_image"
                />
              </div>
              <div className="layout421_image-wrapper is-image2">
                <img
                  sizes="(max-width: 1320px) 100vw, 1320px"
                  srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448262bcc1dd2b9f6a814_IMG_1674-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448262bcc1dd2b9f6a814_IMG_1674.avif 1320w"
                  alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448262bcc1dd2b9f6a814_IMG_1674.avif"
                  loading="lazy" className="layout421_image"
                />
              </div>
              <div className="layout421_image-wrapper is-image3">
                <img
                  sizes="(max-width: 1320px) 100vw, 1320px"
                  srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684.avif 1320w"
                  alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44828d916375e2cb639fb_IMG_1684.avif"
                  loading="lazy" className="layout421_image"
                />
              </div>
              <div className="layout421_image-wrapper is-image4">
                <img
                  sizes="(max-width: 4511px) 100vw, 4511px"
                  srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-1600.avif 1600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-2000.avif 2000w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-2600.avif 2600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00.avif 4511w"
                  alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00.avif"
                  loading="lazy" className="layout421_image"
                />
              </div>
              <div className="layout421_image-wrapper is-image5">
                <img
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-1600.avif 1600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441.avif 1920w"
                  alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441.avif"
                  loading="lazy" className="layout421_image"
                />
              </div>
            </div>
          </div>

          <div data-w-id="367fc8b7-66b8-0ae6-202a-ebc29026ef95" className="layout421_ix-trigger"></div>
        </div>
      </section>

      {/* ── Parallax image slideshow ─────────────────────────────── */}
      <PortfolioGallery />

      {/* ── Featured Projects ────────────────────────────────────── */}
      <header className="section_header">
        <div className="headercomponent">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-top padding-xhuge">
                <div className="w-layout-grid header_content-wrapper">
                  <div className="header156_content-left">
                    <h2 className="heading-style-h2">Featured Projects</h2>
                  </div>
                  <div className="header156_content-right">
                    <p className="text-size-medium-2">Explore the essence of my work through a selection of standout projects that capture the energy and atmosphere of live events. Each image tells a story, showcasing the vibrancy of festivals and the emotions of attendees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_content-bottom">
            <div className="container-large">
              <div className="w-layout-grid header_gallery">
                <div className="header_image-wrapper">
                  <img sizes="100vw" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a291cd93f7d19b9932_WhatsApp%20Image%202026-06-08%20at%2017.59.08-p-500.jpeg 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a291cd93f7d19b9932_WhatsApp%20Image%202026-06-08%20at%2017.59.08-p-800.jpeg 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a291cd93f7d19b9932_WhatsApp%20Image%202026-06-08%20at%2017.59.08-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a291cd93f7d19b9932_WhatsApp%20Image%202026-06-08%20at%2017.59.08.jpeg 1320w" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a291cd93f7d19b9932_WhatsApp%20Image%202026-06-08%20at%2017.59.08.jpeg" loading="lazy" className="header156_image" />
                </div>
                <div className="header_image-wrapper toppadding2">
                  <img sizes="100vw" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2329fe57f8af7e343_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(3)-p-500.jpeg 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2329fe57f8af7e343_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(3)-p-800.jpeg 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2329fe57f8af7e343_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(3)-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2329fe57f8af7e343_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(3).jpeg 1233w" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2329fe57f8af7e343_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(3).jpeg" loading="lazy" className="header156_image" />
                </div>
                <div className="header_image-wrapper toppadding3">
                  <img sizes="100vw" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2877bfaca6f8ba39e_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(1)-p-500.jpeg 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2877bfaca6f8ba39e_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(1)-p-800.jpeg 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2877bfaca6f8ba39e_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(1)-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2877bfaca6f8ba39e_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(1).jpeg 1272w" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a2877bfaca6f8ba39e_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(1).jpeg" loading="lazy" className="header156_image" />
                </div>
                <div className="header_image-wrapper toppadding4">
                  <img sizes="100vw" srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a5559f92145be280f2_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(2)-p-500.jpeg 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a5559f92145be280f2_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(2)-p-800.jpeg 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a5559f92145be280f2_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(2)-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a5559f92145be280f2_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(2).jpeg 1227w" alt="" src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/6a2802a5559f92145be280f2_WhatsApp%20Image%202026-06-08%20at%2017.59.08%20(2).jpeg" loading="lazy" className="header156_image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <TestimonialSlider />
    </>
  )
}
