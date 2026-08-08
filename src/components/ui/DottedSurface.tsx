import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface DottedSurfaceProps {
  className?: string
}

export default function DottedSurface({ className }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    animationId: number
    count: number
  } | null>(null)

  const mountedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || mountedRef.current) return
    mountedRef.current = true

    // Remove any stale canvas from StrictMode double-mount
    const existing = containerRef.current.querySelector('canvas')
    if (existing) existing.remove()

    const SEPARATION = 150
    const AMOUNTX = 40
    const AMOUNTY = 60

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0d0d0d, 2000, 10000)

    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      1,
      10000,
    )
    camera.position.set(0, 355, 1220)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight)
    renderer.setClearColor(scene.fog.color, 0)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = '0'
    renderer.domElement.style.left = '0'
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const positions: number[] = []
    const colors: number[] = []

    // Create geometry for all particles
    const geometry = new THREE.BufferGeometry()

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        positions.push(x, 0, z)
        colors.push(200 / 255, 200 / 255, 200 / 255)
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    // Create material
    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    })

    // Create points object
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let count = 0
    let animationId: number = 0

    // Animation function
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const positionAttribute = geometry.attributes.position
      const positions = positionAttribute.array as Float32Array

      let i = 0
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3

          // Animate Y position with sine waves
          positions[index + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50

          i++
        }
      }

      positionAttribute.needsUpdate = true

      renderer.render(scene, camera)
      count += 0.05
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight)
    }

    window.addEventListener('resize', handleResize)

    // Start animation
    animate()

    // Store references
    sceneRef.current = { scene, camera, renderer, animationId, count }

    // Cleanup function
    return () => {
      mountedRef.current = false
      window.removeEventListener('resize', handleResize)
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 ${className || ''}`}
    />
  )
}
