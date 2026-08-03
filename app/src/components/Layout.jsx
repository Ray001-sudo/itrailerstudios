import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'
import ProgressBar from './ProgressBar.jsx'
import SmoothScroll from './SmoothScroll.jsx'
import useScrollTriggerRefresh from '../hooks/useScrollTriggerRefresh.js'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Re-measure all scroll-linked animations once images on the page have
  // actually finished loading, and whenever the route changes.
  useScrollTriggerRefresh([pathname])

  return (
    <>
      <SmoothScroll />
      <BackToTop />
      <ProgressBar />
      <div className="page-wrapper">
        <Navbar />
        <div className="global-styles">
          {/* Matching Webflow's DOM structure: style-overrides, fonts, and color-schemes
              wrappers. All actual CSS rules live in overrides.css — these are structural
              placeholders that Webflow's shared stylesheet targets with class selectors. */}
          <div className="style-overrides w-embed" />
          <div className="fonts w-embed" />
          <div className="color-schemes w-embed" />
        </div>
        <main className="main-wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}
