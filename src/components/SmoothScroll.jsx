import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis 1.x + GSAP ScrollTrigger integration.
 *
 * The correct approach for Lenis 1.x is NOT scrollerProxy —
 * that API is for older scroll libraries. Instead:
 *   1. Drive Lenis from GSAP's ticker (autoRaf: false) so they share a frame.
 *   2. Forward every Lenis scroll event to ScrollTrigger.update() so
 *      scrubbed/pinned animations always read Lenis's smoothed position.
 *
 * This matches the pattern from the official Lenis + GSAP docs and is
 * exactly what the original Webflow HTML does (autoRaf: true + no proxy).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false })

    // Forward Lenis scroll position to ScrollTrigger on every frame
    lenis.on('scroll', ScrollTrigger.update)

    // Store ticker callback reference so we can properly remove it on cleanup
    const tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }

    // Drive Lenis from GSAP's ticker so both run on the same frame
    gsap.ticker.add(tickerCallback)

    // Disable lag smoothing so Lenis position doesn't jump after tab switch
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return null
}
