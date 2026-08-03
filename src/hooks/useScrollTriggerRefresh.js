import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * GSAP ScrollTrigger measures element positions/sizes at creation time.
 * Because many images on this site load asynchronously (loading="lazy"),
 * layout can shift after ScrollTrigger has already calculated scroll
 * ranges/pin spacing — which is what causes later sections to overlap.
 * This refreshes ScrollTrigger's measurements once images have actually
 * loaded (and again on resize), keeping every scroll-linked animation in
 * sync with the real page layout.
 */
export default function useScrollTriggerRefresh(deps = []) {
  useEffect(() => {
    let cancelled = false

    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh()
    }

    const images = Array.from(document.images)
    const pending = images.filter((img) => !img.complete)

    let remaining = pending.length
    const onLoad = () => {
      remaining -= 1
      if (remaining <= 0) refresh()
    }

    pending.forEach((img) => {
      img.addEventListener('load', onLoad, { once: true })
      img.addEventListener('error', onLoad, { once: true })
    })

    // Always do an initial refresh shortly after mount, plus follow-up refreshes
    // to catch late layout shifts (webfonts, lazy images, Lenis proxy setup).
    // The 500ms pass is critical: HeroImages and HomeGallery delay their
    // ScrollTrigger setup by 100-150ms to wait for the Lenis proxy.
    const timers = [
      setTimeout(refresh, 250),
      setTimeout(refresh, 500),
      setTimeout(refresh, 1200),
    ]

    const onResize = () => refresh()
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      pending.forEach((img) => {
        img.removeEventListener('load', onLoad)
        img.removeEventListener('error', onLoad)
      })
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
