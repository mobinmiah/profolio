import type Lenis from 'lenis'

let lockCount = 0
let savedScrollY = 0

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis
}

export function lockScroll() {
  lockCount += 1
  if (lockCount > 1) return

  savedScrollY = window.scrollY
  document.documentElement.classList.add('modal-open')
  document.body.style.top = `-${savedScrollY}px`

  const lenis = getLenis()
  if (lenis) lenis.stop()
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount > 0) return

  document.documentElement.classList.remove('modal-open')
  document.body.style.top = ''
  window.scrollTo(0, savedScrollY)

  const lenis = getLenis()
  if (lenis) lenis.start()
}
