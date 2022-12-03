import React, { useEffect, useRef, useState } from 'react'

export const ScrollShow = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      setVisible(entry.isIntersecting)
    })
  })

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer?.disconnect(ref.current)
    }
  }, [ref])

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'
      }`}
    >
      <p class="font-normal text-2xl text-center text-white leading-relaxed italic mb-6">
        "When I wrote this code, only God and I understood what I did. Now only
        God knows"
      </p>
      <span class="font-semibold text-base text-transparent uppercase bg-clip-text bg-gradient animate-bounce">
        - Programmer
      </span>
    </div>
  )
}

export default ScrollShow
