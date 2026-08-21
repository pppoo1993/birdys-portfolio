import { useEffect, useRef } from 'react'
import { cn } from '../../utils/cn'

export type DitheringShape = 'wave' | 'circle' | 'square'
export type DitheringType = '2x2' | '4x4' | '8x8'

export interface DitheringShaderProps {
  /** Shape used for the dithered pattern. */
  shape?: DitheringShape
  /** Ordered-dithering matrix size. */
  type?: DitheringType
  /** Background (dark) color as hex. */
  colorBack?: string
  /** Foreground (accent) color as hex. */
  colorFront?: string
  /** Size of a single dithering cell, in CSS pixels. */
  pxSize?: number
  /** Animation speed multiplier. */
  speed?: number
  className?: string
}

const VERTEX_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAGMENT_SRC = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colorBack;
uniform vec3 u_colorFront;
uniform float u_pxSize;
uniform int u_shape;
uniform int u_type;

// Recursive Bayer ordered-dithering thresholds (no array indexing, works on WebGL1).
float bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x * 0.5 + a.y * a.y * 0.75);
}
float bayer4(vec2 a) {
  return bayer2(0.5 * a) * 0.25 + bayer2(a);
}
float bayer8(vec2 a) {
  return bayer4(0.5 * a) * 0.25 + bayer2(a);
}

float threshold(vec2 p) {
  if (u_type == 0) return bayer2(p);
  if (u_type == 1) return bayer4(p);
  return bayer8(p);
}

float waveShape(vec2 uv, float t) {
  float v = 0.5;
  v += 0.20 * sin((uv.x * 4.0 + uv.y * 2.0) * 6.2831853 + t * 1.4);
  v += 0.20 * sin((uv.y * 3.0 - uv.x * 2.0) * 6.2831853 - t * 1.0);
  v += 0.10 * sin((uv.x * 8.0 + uv.y * 6.0) * 6.2831853 + t * 0.7);
  return clamp(v, 0.0, 1.0);
}

float circleShape(vec2 uv, float t) {
  float r = length(uv - 0.5) * 2.0;
  return 0.5 + 0.5 * sin(r * 16.0 - t * 1.5);
}

float squareShape(vec2 uv, float t) {
  return 0.5
    + 0.5 * sin(uv.x * 12.0 * 6.2831853 + t * 0.8)
    * sin(uv.y * 12.0 * 6.2831853 - t * 0.8);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = gl_FragCoord.xy / u_pxSize;

  float v;
  if (u_shape == 0) {
    v = waveShape(uv, u_time);
  } else if (u_shape == 1) {
    v = circleShape(uv, u_time);
  } else {
    v = squareShape(uv, u_time);
  }

  float t = threshold(p);
  float m = step(t, v);
  vec3 color = mix(u_colorBack, u_colorFront, m);
  gl_FragColor = vec4(color, 1.0);
}
`

function hexToRgb01(hex: string): [number, number, number] {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h.padEnd(6, '0').slice(0, 6), 16)
  if (Number.isNaN(n)) return [0, 0, 0]
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

const SHAPE_MAP: Record<DitheringShape, number> = { wave: 0, circle: 1, square: 2 }
const TYPE_MAP: Record<DitheringType, number> = { '2x2': 0, '4x4': 1, '8x8': 2 }

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function DitheringShader({
  shape = 'wave',
  type = '8x8',
  colorBack = '#001122',
  colorFront = '#ff0088',
  pxSize = 3,
  speed = 0.6,
  className,
}: DitheringShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false })
    if (!gl) return

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SRC)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC)
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    // Fullscreen triangle strip (2 triangles covering the viewport).
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const positionLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const timeLoc = gl.getUniformLocation(program, 'u_time')
    const colorBackLoc = gl.getUniformLocation(program, 'u_colorBack')
    const colorFrontLoc = gl.getUniformLocation(program, 'u_colorFront')
    const pxSizeLoc = gl.getUniformLocation(program, 'u_pxSize')
    const shapeLoc = gl.getUniformLocation(program, 'u_shape')
    const typeLoc = gl.getUniformLocation(program, 'u_type')

    const [br, bg, bb] = hexToRgb01(colorBack)
    const [fr, fg, fb] = hexToRgb01(colorFront)
    gl.uniform3f(colorBackLoc, br, bg, bb)
    gl.uniform3f(colorFrontLoc, fr, fg, fb)
    gl.uniform1i(shapeLoc, SHAPE_MAP[shape])
    gl.uniform1i(typeLoc, TYPE_MAP[type])

    const start = performance.now()
    let raf = 0

    const render = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(resolutionLoc, w, h)
      gl.uniform1f(timeLoc, ((now - start) / 1000) * speed)
      gl.uniform1f(pxSizeLoc, pxSize * dpr)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [shape, type, colorBack, colorFront, pxSize, speed])

  return <canvas ref={canvasRef} className={cn('block h-full w-full', className)} aria-hidden="true" />
}
