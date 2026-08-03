import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TestimonialSlider from '../components/TestimonialSlider.jsx'

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      offset: 50,
    })
  }, [])

  return (
    <>
      <header className="section_header65 text-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header65_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1">Services & Capabilities</h1>
                    </div>
                    <p className="text-size-medium">
                      iTrailerStudios delivers world-class photography that captures the energy, emotion, and essence of your most important events.
                    </p>
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
                            <span className="btn-bubble-arrow__content-text big otherfont">Contact</span>
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
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441-p-1600.avif 1600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441.avif 1920w"
            alt=""
            src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b445432a63226864879b01_relume-351441.avif"
            loading="eager"
            className="header65_background-image"
          />
        </div>
      </header>

      <section className="section_content5 color-scheme-1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="w-layout-grid content5_component">
                <div id="w-node-f9daaad3-8972-888e-d169-618f9cea55fb-89311bb5" className="content5_content-wrapper" data-aos="fade-right">
                  <div className="margin-bottom margin-small">
                    <h2 id="w-node-f9daaad3-8972-888e-d169-618f9cea55fd-89311bb5" className="heading-style-h2">
                      Capturing Pure Energy
                    </h2>
                  </div>
                  <div className="text-rich-text w-richtext">
                    <p>
                      At iTrailerStudios, every project is a collaborative effort to capture the vibrant atmosphere of any
                      event, big or small, where every moment is filled with energy, creativity, and emotion. Together with
                      you, our goal is to document not just the key moments, but the very essence of the experience,
                      highlighting the connection between people and the atmosphere around them.
                    </p>
                    <p>
                      Through a series of dynamic shots, we work closely to portray the unique ambiance — from electrifying
                      performances and presentations to intimate moments shared among attendees. Each photograph tells a
                      story and evokes the emotions that make the event unforgettable.
                    </p>
                    <p>
                      Every event is a celebration of culture, creativity, or community, attracting people eager to experience
                      those special moments live. Our shared mission is to capture these fleeting moments, ensuring the spirit
                      of the occasion is preserved for years to come.
                    </p>
                    <p>
                      By focusing on contrast, light, and texture, iTrailerStudios emphasizes the raw energy and genuine
                      emotion of the event, creating a cohesive visual narrative that resonates with viewers and makes them
                      feel part of the experience.
                    </p>
                    <p>
                      Ultimately, our goal is to produce a collection of images that not only document the event but also
                      evoke the emotions and memories connected to it, leaving a lasting impression on all who see them.
                    </p>
                  </div>
                </div>
                <div id="w-node-f9daaad3-8972-888e-d169-618f9cea5612-89311bb5" className="w-layout-grid content5_gallery" data-aos="fade-left">
                  <div className="content5_image-wrapper">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-1600.avif 1600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-2000.avif 2000w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00-p-2600.avif 2600w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00.avif 4511w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829e38646b7c795fb77_Hiigo%20WalhallaZF-00.avif"
                      loading="lazy"
                      className="content5_image"
                    />
                  </div>
                  <div className="content5_image-wrapper">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482933caf28bf87d5ea4_IMG_1682-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482933caf28bf87d5ea4_IMG_1682-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482933caf28bf87d5ea4_IMG_1682.avif 1320w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482933caf28bf87d5ea4_IMG_1682.avif"
                      loading="lazy"
                      className="content5_image"
                    />
                  </div>
                  <div className="content5_image-wrapper">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482892d2b3414cdb7b5c_IMG_1687-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482892d2b3414cdb7b5c_IMG_1687.avif 1320w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482892d2b3414cdb7b5c_IMG_1687.avif"
                      loading="lazy"
                      className="content5_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_cta1 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="cta1_component">
                <div className="w-layout-grid cta1_content">
                  <div className="cta1_content-left" data-aos="fade-up">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2 cta-title">How about we capture something amazing together</h2>
                    </div>
                    <p className="text-size-medium">
                      At iTrailerStudios, photography is far more than capturing images — it's about preserving feelings,
                      stories, and the intimate details that make every moment irreplaceable.
                      <br /><br />
                      Whether you need impactful event coverage, compelling brand visuals, or creative editorial photography,
                      Brian and the iTrailerStudios team are ready to bring your vision to life.
                      <br /><br />
                      Ready to create something extraordinary?
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link to="/contact" className="btn-bubble-arrow w-inline-block">
                          <div className="btn-bubble-arrow__arrow big">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" className="btn-bubble-arrow__arrow-svg">
                              <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                              <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></line>
                            </svg>
                          </div>
                          <div className="btn-bubble-arrow__content background-color-tealdark big">
                            <span className="btn-bubble-arrow__content-text big otherfont">Let&#x27;s make it happen together</span>
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
                  <div className="cta1_image-wrapper" data-aos="fade-left" data-aos-delay="200">
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

      <section className="section_portfolio23">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">My Photographic Focus</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio23_list-wrapper">
                <div className="portfolio23_list">
                  <div data-w-id="be823b9b-7c03-2ed2-f773-f31c7b104891" className="portfolio23_item" data-aos="fade-up">
                    <div className="portfolio23_content-left">
                      <div className="portfolio23_title-wrapper">
                        <h3>Live Energy & Stage Photography</h3>
                        <div className="margin-top margin-xsmall">
                          <div className="portfolio23_tag-list">
                            <div className="tag"><div>Dynamic Lighting</div></div>
                            <div className="tag"><div>Electric Atmosphere</div></div>
                            <div className="tag"><div>Raw Emotion</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="margin-top margin-medium">
                        <p className="text-size-medium">
                          From the explosive energy of the mainstage to the intimate connections in the crowd, I thrive in fast-paced environments. My approach ensures that the heart-pounding beat and visual spectacle of your event are frozen in stunning detail, providing you with images that let you relive the experience.
                        </p>
                      </div>
                      <div className="margin-top margin-medium">
                        <div className="button-group">
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
                    <div className="portfolio23_image-wrapper">
                      <img
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685.avif 1320w"
                        alt=""
                        src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ed7567b1fcd4c0e6_IMG_1685.avif"
                        loading="lazy"
                        className="portfolio23_image"
                      />
                    </div>
                  </div>

                  <div className="portfolio23_item" data-aos="fade-up">
                    <div className="portfolio23_content-left">
                      <div className="portfolio23_title-wrapper">
                        <h3>Love Stories & Nuptial Memories</h3>
                        <div className="margin-top margin-xsmall">
                          <div className="portfolio23_tag-list">
                            <div className="tag"><div>Candid Storytelling</div></div>
                            <div className="tag"><div>Authentic Moments</div></div>
                            <div className="tag"><div>Timeless Elegance</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="margin-top margin-medium">
                        <p className="text-size-medium">
                          Your special day deserves to be documented with artistry and care. I focus on natural, unposed interactions that reveal the true narrative of your celebration. By anticipating fleeting moments of joy and tenderness, I deliver a cinematic gallery that preserves your most cherished memories forever.
                        </p>
                      </div>
                      <div className="margin-top margin-medium">
                        <div className="button-group">
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
                    <div className="portfolio23_image-wrapper">
                      <img
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482642e2b142ba2ee589_IMG_1680-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482642e2b142ba2ee589_IMG_1680.avif 1320w"
                        alt=""
                        src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b4482642e2b142ba2ee589_IMG_1680.avif"
                        loading="lazy"
                        className="portfolio23_image"
                      />
                    </div>
                  </div>

                  <div className="portfolio23_item" data-aos="fade-up">
                    <div className="portfolio23_content-left">
                      <div className="portfolio23_title-wrapper">
                        <h3>Brand Identity & Corporate Narratives</h3>
                        <div className="margin-top margin-xsmall">
                          <div className="portfolio23_tag-list">
                            <div className="tag"><div>Visual Identity</div></div>
                            <div className="tag"><div>Professional Excellence</div></div>
                            <div className="tag"><div>Brand Narrative</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="margin-top margin-medium">
                        <p className="text-size-medium">
                          Your brand’s visual presence should be as compelling as the services you offer. I work collaboratively to craft striking imagery that communicates your company’s unique ethos. From sleek corporate portraits to behind-the-scenes documentary shots, my photography elevates your professional aesthetic.
                        </p>
                      </div>
                      <div className="margin-top margin-medium">
                        <div className="button-group">
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
                    <div className="portfolio23_image-wrapper">
                      <img
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68ee5b7db92d21cdec111205_bedrijven%20foto%20roel-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68ee5b7db92d21cdec111205_bedrijven%20foto%20roel-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68ee5b7db92d21cdec111205_bedrijven%20foto%20roel.avif 1320w"
                        alt=""
                        src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68ee5b7db92d21cdec111205_bedrijven%20foto%20roel.avif"
                        loading="lazy"
                        className="portfolio23_image"
                      />
                    </div>
                  </div>

                  <div className="portfolio23_item" data-aos="fade-up">
                    <div className="portfolio23_content-left">
                      <div className="portfolio23_title-wrapper">
                        <h3>Cultural Exhibitions & Fine Art</h3>
                        <div className="margin-top margin-xsmall">
                          <div className="portfolio23_tag-list">
                            <div className="tag"><div>Cultural Heritage</div></div>
                            <div className="tag"><div>Creative Expression</div></div>
                            <div className="tag"><div>Community Focus</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="margin-top margin-medium">
                        <p className="text-size-medium">
                          Artistic and cultural gatherings are rich tapestries of color, movement, and human connection. I immerse myself in the vibrant atmosphere of your event to document the profound beauty and shared experiences, delivering images that resonate with the creative spirit of the occasion.
                        </p>
                      </div>
                      <div className="margin-top margin-medium">
                        <div className="button-group">
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
                    <div className="portfolio23_image-wrapper">
                      <img
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif 1320w"
                        alt=""
                        src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif"
                        loading="lazy"
                        className="portfolio23_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_layout6 color-scheme-1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout6_component">
                <div className="w-layout-grid layout6_content">
                  <div className="layout6_content-left" data-aos="fade-right">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h3">
                        <strong>Open Collaboration: Your Event, My Camera</strong>
                      </h2>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <p className="text-size-medium">
                      No matter the scale or type of your event, iTrailerStudios is here to capture it exactly as you
                      envision. Every detail is flexible and open for discussion because your creative vision always comes first.
                    </p>
                    </div>
                    <div className="w-layout-grid layout6_item-list">
                      <div className="layout6_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="heading-style-h6">Behind the Scenes</h3>
                        </div>
                        <p>
                          We go beyond the main stage and discover the moments that make it all happen. iTrailerStudios
                          captures candid, unscripted scenes backstage and behind the curtain that tell the complete story.
                        </p>
                      </div>
                      <div className="layout6_text-wrapper">
                        <div className="margin-bottom margin-xsmall">
                          <h3 className="heading-style-h6">Event Highlights</h3>
                        </div>
                        <p>
                          Showcasing peak moments, crowd reactions, and key highlights that together form the complete
                          visual story of your event — delivered with professionalism and creative excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="layout6_image-wrapper" data-aos="fade-left">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448260db36cef52541c55_Naamloos-1-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448260db36cef52541c55_Naamloos-1-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448260db36cef52541c55_Naamloos-1-p-1080.avif 1080w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448260db36cef52541c55_Naamloos-1.avif 1920w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b448260db36cef52541c55_Naamloos-1.avif"
                      loading="lazy"
                      className="layout6_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_layout1 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout1_component">
                <div className="w-layout-grid layout1_content">
                  <div className="layout1_content-left" data-aos="fade-right">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">A Moment That Captured the Energy</h2>
                    </div>
                    <p className="text-size-medium">
                      This image encapsulates the vibrant atmosphere of live events that iTrailerStudios excels at
                      capturing. It stands as a testament to the energy and shared emotion felt by everyone present.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link to="/portfolio" className="btn-bubble-arrow w-inline-block">
                          <div className="btn-bubble-arrow__arrow big">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" className="btn-bubble-arrow__arrow-svg">
                              <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                              <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5"></line>
                            </svg>
                          </div>
                          <div className="btn-bubble-arrow__content background-color-tealdark big">
                            <span className="btn-bubble-arrow__content-text big otherfont">Portfolio</span>
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
                  <div className="layout1_image-wrapper" data-aos="fade-left">
                    <img
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-500.avif 500w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668-p-800.avif 800w, https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif 1320w"
                      alt=""
                      src="https://cdn.prod.website-files.com/68b441e1fde228bec9177841/68b44829ab368cb672dde967_IMG_1668.avif"
                      loading="lazy"
                      className="layout1_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider />
    </>
  )
}
