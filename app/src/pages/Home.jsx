import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import HomeGallery from '../components/HomeGallery.jsx'
import HeroImages from '../components/HeroImages.jsx'
import ScrollBreakoutImage from '../components/ScrollBreakoutImage.jsx'

gsap.registerPlugin(ScrollTrigger)

const ArrowSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" className="btn-bubble-arrow__arrow-svg">
    <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
    <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" />
  </svg>
)

export default function Home() {
  const heroContentRef = useRef(null)

  useEffect(() => {
    // Replicate the Webflow IX2 header83_ix-trigger:
    // The trigger div sits at margin-top:100vh inside the 300vh component,
    // meaning it enters the viewport when the user has scrolled ~100vh into the hero.
    // The content block fades out + moves up over the first third of the hero scroll.
    const heroSection = document.getElementById('section_header83')
    if (!heroSection || !heroContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(heroContentRef.current, {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          // End at 1/3 of the way through the 300vh section
          end: '33% top',
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ── Hero Header ─────────────────────────────────────────── */}
      <header id="section_header83" className="section_header83 text-color-alternate">
        {/* Scroll indicator — styles defined in overrides.css */}
        <div className="w-embed">
          <a href="#s2" className="scroll-indicator">
            <div className="arrow" />
            <div className="scroll-text">scroll down</div>
          </a>
        </div>

        <div className="header83_component">
          <div className="header83_content-wrapper">
            <div className="header83_content" ref={heroContentRef}>
              <div className="padding-global">
                <div className="container-large">
                  <div className="padding-section-large">
                    <div className="header83_content-block">
                      <div className="text-align-center">
                        <div className="max-width-large align-center">
                          <div className="margin-bottom margin-small">
                            <h1 className="heading-style-h1">Capturing the Pulse & Energy of Every Event</h1>
                          </div>
                          <p className="text-size-medium">
                          Welcome to iTrailerStudios — where every frame tells a story. From the electric pulse of
                            live festivals to high-profile events, our lens captures the energy, atmosphere, and authentic
                            emotion that make each moment extraordinary. Step into a world of visual storytelling that
                            resonates long after the lights go down.
                          </p>
                          <div className="margin-top margin-medium">
                            <div className="button-group is-center">
                              <Link to="/portfolio" className="btn-bubble-arrow big w-inline-block">
                                <div className="btn-bubble-arrow__arrow background-color-teal">
                                  <ArrowSvg />
                                </div>
                                <div className="btn-bubble-arrow__content background-color-tealdark">
                                  <span className="btn-bubble-arrow__content-text">Explore Our Work</span>
                                </div>
                                <div className="btn-bubble-arrow__arrow is--duplicate background-color-teal">
                                  <ArrowSvg />
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
            </div>

            {/* Background mosaic of hero images with GSAP scroll-zoom */}
            <HeroImages />
          </div>
        </div>

        <div data-w-id="6d7e12ce-84c6-1fc6-d548-0052a48d75e6" className="header83_ix-trigger" />
      </header>

      {/* ── Meet Brian Section ────────────────────────────────────── */}
      <section id="s2" className="section_layout249 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout249_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="max-width-large">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">Meet Brian</h2>
                    </div>
                    <p className="text-size-medium">
                      At iTrailerStudios, Brian leads a dedicated team driven by a genuine passion for visual storytelling.
                      We immerse ourselves fully in every event — whether it's the electrifying atmosphere of a live
                      music festival or the quiet emotion of a candid portrait. Our mission is to deliver images that
                      are not just photographs, but enduring stories that resonate deeply.
                    </p>
                  </div>
                </div>

                <div className="w-layout-grid layout249_list">
                  <div className="layout249_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout249_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 52vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450ee37fd1de44f5a39a_relume-351409.avif"
                          loading="eager"
                          className="layout249_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">What Makes Brian Unique</h3>
                    </div>
                    <p>
                      Our approach centers on authentic connection and spontaneous energy. We strive to capture
                      true, unscripted emotion — from peak festival euphoria to quiet, heartfelt moments — ensuring every
                      photograph resonates deeply with those who experience it.
                    </p>
                  </div>

                  <div className="layout249_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout249_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 65vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a8c5e2e5839e9e063_relume-351410-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a8c5e2e5839e9e063_relume-351410.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450a8c5e2e5839e9e063_relume-351410.avif"
                          loading="eager"
                          className="layout249_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Passionate & Versatile</h3>
                    </div>
                    <p>
                      With a primary focus on major music festivals, we also specialize in milestone events, high-profile
                      gatherings, and commercial brand shoots. Having covered major international stages alongside intimate
                      private events, iTrailerStudios is constantly expanding its creative vision and raising the bar.
                    </p>
                  </div>

                  <div className="layout249_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout249_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 52vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450b87e457b5e3eef8b2_relume-351411-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450b87e457b5e3eef8b2_relume-351411-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450b87e457b5e3eef8b2_relume-351411.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450b87e457b5e3eef8b2_relume-351411.avif"
                          loading="eager"
                          className="layout249_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">
                        Focused <strong>on Excellence</strong>
                      </h3>
                    </div>
                    <p>
                      Every project receives our full creative energy and technical precision. We aim to deliver more than
                      just images — we craft visual narratives rich with atmosphere, color, and emotion, striving for
                      excellence in every single frame, every single time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience the Pulse Section ─────────────────────────── */}
      <section className="section_layout1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout1_component">
                <div className="w-layout-grid layout1_content">
                  <div className="layout1_content-left">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">Experience the Pulse of Your Event</h2>
                    </div>
                    <p className="text-size-medium">
                      iTrailerStudios transforms fleeting festival highlights and live event experiences into lasting visual
                      art. Through our unique perspective, the vibrant energy and emotion of your event come alive in a
                      way that lets people relive those special moments again and again.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link to="/contact" className="btn-bubble-arrow w-inline-block">
                          <div className="btn-bubble-arrow__arrow big">
                            <ArrowSvg />
                          </div>
                          <div className="btn-bubble-arrow__content background-color-tealdark big">
                            <span className="btn-bubble-arrow__content-text big otherfont">Get in touch</span>
                          </div>
                          <div className="btn-bubble-arrow__arrow is--duplicate background-color-teal big">
                            <ArrowSvg />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="layout1_image-wrapper">
                    <img
                      sizes="(max-width: 479px) 48vw, (max-width: 2693px) 49vw, 1320px"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450c25982ab007bda954_relume-351413-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450c25982ab007bda954_relume-351413-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450c25982ab007bda954_relume-351413.avif 1320w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450c25982ab007bda954_relume-351413.avif"
                      loading="eager"
                      className="layout1_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Horizontal Scroll Gallery ────────────────────────────── */}
      <HomeGallery />

      {/* ── From Consultation to Captivating Imagery Section ─────── */}
      <section className="section_layout239 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout239_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-style-h2">From Consultation to Captivating Imagery</h2>
                      </div>
                      <p className="text-size-medium">
                        Every successful shoot begins with a thorough collaborative consultation to understand your vision
                        and the specific needs of your event. This approach ensures every shot captures the true essence
                        of your festival, ceremony, or occasion with precision and artistry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-layout-grid layout239_list">
                  <div className="layout239_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout239_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 48vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445088a91735b7e5547b0_relume-351414-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445088a91735b7e5547b0_relume-351414-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445088a91735b7e5547b0_relume-351414.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445088a91735b7e5547b0_relume-351414.avif"
                          loading="eager"
                          className="layout239_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Crafting Unique Visual Stories</h3>
                    </div>
                    <p>
                      Working closely alongside your team, iTrailerStudios crafts visual stories that reflect the true
                      spirit of your event. By combining creative vision with technical mastery, we produce images that
                      resonate long after the lights go down.
                    </p>
                  </div>

                  <div className="layout239_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout239_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 48vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450981d1117304d86d06_relume-351415-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450981d1117304d86d06_relume-351415.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450981d1117304d86d06_relume-351415.avif"
                          loading="eager"
                          className="layout239_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Delivering Stunning Photos</h3>
                    </div>
                    <p>
                      Following the event, every image undergoes meticulous editing and professional color grading to
                      ensure it accurately reflects the vibrant energy and high atmosphere your audience experienced on-site.
                    </p>
                  </div>

                  <div className="layout239_item">
                    <div className="margin-bottom margin-medium">
                      <div className="layout239_image-wrapper">
                        <img
                          sizes="(max-width: 479px) 48vw, (max-width: 2693px) 49vw, 1320px"
                          srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450681022e430875d038_relume-351421-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450681022e430875d038_relume-351421.avif 1320w"
                          alt=""
                          src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4450681022e430875d038_relume-351421.avif"
                          loading="eager"
                          className="layout239_image"
                        />
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h3 className="heading-style-h4">Your Vision, Captured</h3>
                    </div>
                    <p>
                      Whether for press releases, social campaigns, or timeless personal archives, iTrailerStudios ensures
                      your completed gallery reflects your creative vision and exceeds your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── "One More Stunning Picture" Split Section ─────────────── */}
      <header className="section_header81">
        <div className="header81_component">
          <div className="header81_content-wrapper">
            <div
              id="w-node-c74c5595-f52c-c073-59cc-549e576947b7-c91778e6"
              className="header81_content-left"
            >
              <div className="margin-bottom margin-small">
                <h1 className="heading-style-h1 small">Because every image iTrailerStudios captures deserves to be seen</h1>
              </div>
              <p className="text-size-medium">
                At iTrailerStudios, every photograph is a testament to the moment it preserves — a frozen instant that
                eyes alone cannot hold forever. When an image moves us, we want it to move you too. That shared
                emotional connection is what drives everything we do.
              </p>
            </div>

            <div className="header81_content-right">
              <ScrollBreakoutImage
                sizes="(max-width: 1920px) 100vw, 1920px"
                srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5.avif 1920w"
                alt=""
                src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44826c1043de5addac572_5.avif"
              />
            </div>
          </div>

          <div data-w-id="c74c5595-f52c-c073-59cc-549e576947c6" className="header81_ix-trigger" />
        </div>
      </header>

      {/* ── CTA / Collaborate Section ─────────────────────────────── */}
      <section className="section_cta1 color-scheme-1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="cta1_component">
                <div className="w-layout-grid cta1_content">
                  <div className="cta1_content-left">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2 cta-title">
                        How about we capture something amazing together
                      </h2>
                    </div>
                    <p className="text-size-medium">
                      At iTrailerStudios, photography is far more than capturing images — it's about preserving feelings,
                      stories, and the intimate details that make every moment irreplaceable. Whether you need impactful
                      event coverage, compelling brand visuals, or creative editorial photography, Brian and the
                      iTrailerStudios team are ready to bring your vision to life. Let's create something exceptional.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link to="/contact" className="btn-bubble-arrow w-inline-block">
                          <div className="btn-bubble-arrow__arrow big">
                            <ArrowSvg />
                          </div>
                          <div className="btn-bubble-arrow__content background-color-tealdark big">
                            <span className="btn-bubble-arrow__content-text big otherfont">
                             Let's Create Something Extraordinary
                             </span>
                          </div>
                          <div className="btn-bubble-arrow__arrow is--duplicate background-color-teal big">
                            <ArrowSvg />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="cta1_image-wrapper">
                    <img
                      alt=""
                      src="/about.png"
                      loading="lazy"
                      className="layout22_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <TestimonialSlider />
    </>
  )
}
