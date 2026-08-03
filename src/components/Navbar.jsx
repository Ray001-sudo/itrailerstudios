import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'



const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setOpen(false)

  return (
    <div
      role="banner"
      className={`navbar5_component w-nav${open ? ' w--open' : ''}`}
      fs-scrolldisable-element="smart-nav"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
    >
      <div className="navbar5_container">
        <Link
          to="/"
          onClick={closeMenu}
          aria-current={pathname === '/' ? 'page' : undefined}
          className={`navbarlogo w-inline-block${pathname === '/' ? ' w--current' : ''}`}
        >
          <Logo className="navbar5_logo" />
        </Link>

        <nav
          role="navigation"
          className={`navbar5_menu w-nav-menu${open ? ' w--open' : ''}`}
        >
          <div className="navbar5_menu-left">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={closeMenu}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`navbar5_link w-nav-link${pathname === l.href ? ' w--current' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="navbar5_menu-right">
            <Link to="/contact" onClick={closeMenu} className="btn-bubble-arrow w-inline-block">
              <div className="btn-bubble-arrow__arrow big">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100%"
                  className="btn-bubble-arrow__arrow-svg"
                >
                  <polyline
                    points="18 8 18 18 8 18"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="18"
                    y1="18"
                    x2="5"
                    y2="5"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="btn-bubble-arrow__content background-color-tealdark big">
                <span className="btn-bubble-arrow__content-text big">Contact</span>
              </div>
              <div className="btn-bubble-arrow__arrow is--duplicate background-color-teal big positionmobile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100%"
                  className="btn-bubble-arrow__arrow-svg"
                >
                  <polyline
                    points="18 8 18 18 8 18"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="18"
                    y1="18"
                    x2="5"
                    y2="5"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </nav>

        <div
          className={`navbar5_menu-button w-nav-button${open ? ' w--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          role="button"
          aria-label="menu"
          tabIndex={0}
        >
          <div className="menu-icon1">
            <div className="menu-icon1_line-top" />
            <div className="menu-icon1_line-middle">
              <div className="menu-icon1_line-middle-inner" />
            </div>
            <div className="menu-icon1_line-bottom" />
          </div>
        </div>
      </div>
    </div>
  )
}
