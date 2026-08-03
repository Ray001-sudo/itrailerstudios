import React from 'react'
import TestimonialSlider from '../components/TestimonialSlider.jsx'
import ContactForm from '../components/ContactForm.jsx'

const EmailIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z"
      fill="currentColor"
    />
  </svg>
)

const LocationIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
      fill="currentColor"
    />
    <path
      d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z"
      fill="currentColor"
    />
  </svg>
)

export default function Contact() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <header className="section_header44 color-scheme-1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header44_component">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1">Let&apos;s Work Together</h1>
                  </div>
                  <p className="text-size-medium">
                    Have a project in mind? Let&apos;s discuss how iTrailerStudios can bring your
                    vision to life with world-class photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Contact Form Section ─────────────────────────────────── */}
      <section className="section_contact7 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="contact7_component">
                <div className="w-layout-grid contact7_content">
                  <div className="contact7_content-left">
                    <div className="margin-bottom margin-medium">
                      <div className="contact7_heading-wrapper">
                        <div className="margin-bottom margin-small">
                          <h2 className="heading-style-h2">Get in Touch</h2>
                        </div>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                  <div className="contact7_image-wrapper">
                    <img
                      src="/contact-brian.jpeg"
                      alt="Brian filming with camera"
                      loading="eager"
                      className="contact7_image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Details Section ──────────────────────────────── */}
      <section className="section_contact15 color-scheme-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="contact15_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="w-layout-grid contact15_content">
                    <div className="contact15_content-left">
                      <div className="max-width-large">
                        <div className="margin-bottom margin-small">
                          <h2 className="heading-style-h2">Contact iTrailerStudios</h2>
                        </div>
                        <p className="text-size-medium">
                          Based in Nairobi, available for projects worldwide. Let&apos;s
                          create unforgettable visual stories together.
                        </p>
                      </div>
                    </div>
                    <div className="contact15_content-right">
                      <div className="w-layout-grid contact15_contact-list">
                        {/* Email */}
                        <div
                          id="w-node-a93b765e-eaa5-21b9-9f53-2fa5c3d5bd70-788fa5be"
                          className="contact15_item"
                        >
                          <div className="contact15_item-icon-wrapper">
                            <div className="icon-embed-xsmall w-embed">
                              <EmailIcon />
                            </div>
                          </div>
                          <div className="contact15_item-text-wrapper">
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="heading-style-h6">Email</h3>
                            </div>
                            <a href="mailto:info@itrailerstudios.com" className="text-style-link">
                              info@itrailerstudios.com
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div
                          id="w-node-a93b765e-eaa5-21b9-9f53-2fa5c3d5bd82-788fa5be"
                          className="contact15_item"
                        >
                          <div className="contact15_item-icon-wrapper">
                            <div className="icon-embed-xsmall w-embed">
                              <LocationIcon />
                            </div>
                          </div>
                          <div className="contact15_item-text-wrapper">
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="heading-style-h6">Office</h3>
                            </div>
                            <a href="#" className="text-style-link">
                              Nairobi &mdash; Ready to travel for projects worldwide.
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
