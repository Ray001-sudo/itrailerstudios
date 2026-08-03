import React, { useState, useEffect, useRef } from 'react'
import { testimonials, testimonialLogo } from '../data/testimonials'

const Star = () => (
  <div className="home_testimonial_rating-icon">
    <div className="icon-embed-xsmall w-embed">
      <svg width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
)

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const [displayIndex, setDisplayIndex] = useState(0)
  const timeoutRef = useRef(null)
  const length = testimonials.length

  const goTo = (i, dir = 'next') => {
    if (animating) return
    const next = ((i % length) + length) % length
    if (next === index) return
    setDirection(dir)
    setAnimating(true)
    timeoutRef.current = setTimeout(() => {
      setIndex(next)
      setDisplayIndex(next)
      setAnimating(false)
    }, 350)
  }

  const next = () => goTo(index + 1, 'next')
  const prev = () => goTo(index - 1, 'prev')

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const t = testimonials[index]

  return (
    <section className="section_home_testimonial">
      <style>{`
        .testimonial-slide-wrapper {
          overflow: hidden;
          position: relative;
        }
        .testimonial-slide-inner {
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .testimonial-slide-inner.slide-out-next {
          opacity: 0;
          transform: translateX(-30px);
        }
        .testimonial-slide-inner.slide-out-prev {
          opacity: 0;
          transform: translateX(30px);
        }
        .testimonial-slide-inner.slide-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="home_testimonial_component">
              <div className="home_testimonial_slider w-slider" data-infinite="true">
                <div className="home_testimonial_mask w-slider-mask testimonial-slide-wrapper">
                  <div
                    className={`home_testimonial_slide w-slide testimonial-slide-inner ${
                      animating
                        ? direction === 'next'
                          ? 'slide-out-next'
                          : 'slide-out-prev'
                        : 'slide-in'
                    }`}
                  >
                    <div className="w-layout-grid home_testimonial_slide-content">
                      <div className="home_testimonial_client-image-wrapper">
                        <img
                          src={t.image}
                          srcSet={t.srcSet}
                          sizes="100vw"
                          alt=""
                          loading="lazy"
                          className="home_testimonial_client-image"
                        />
                      </div>
                      <div className="home_testimonial_content-right">
                        <div className="margin-bottom margin-medium">
                          <div className="home_testimonial_rating-wrapper">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} />
                            ))}
                          </div>
                        </div>
                        <h3 className="heading-style-h5">&quot;{t.quote}&quot;</h3>
                        <div className="margin-top margin-medium">
                          <div className="home_testimonial_client">
                            <div className="home_testimonial_client-info">
                              <div className="text-weight-semibold">{t.name}</div>
                              <div>{t.role}</div>
                            </div>
                            <div className="divider-vertical" />
                            <div className="home_testimonial_logo-wrapper">
                              <img
                                loading="lazy"
                                src={testimonialLogo}
                                alt=""
                                className="home_testimonial_logo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="slider-arrow is-bottom-previous w-slider-arrow-left"
                  onClick={prev}
                  role="button"
                  aria-label="Previous testimonial"
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="slider-arrow is-bottom-next w-slider-arrow-right"
                  onClick={next}
                  role="button"
                  aria-label="Next testimonial"
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="home_testimonial_slide-nav w-slider-nav w-slider-nav-invert w-round">
                  {testimonials.map((item, i) => (
                    <div
                      key={item.id}
                      onClick={() => goTo(i, i > index ? 'next' : 'prev')}
                      className={`w-slider-dot${i === index ? ' w-active' : ''}`}
                      role="button"
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
