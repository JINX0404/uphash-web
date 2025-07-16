'use client'

import { useEffect, useRef } from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  text: string
  className?: string
  bgColor?: string
  textColor?: string
}

export default function PlaceholderImage({ 
  width, 
  height, 
  text, 
  className = '',
  bgColor = '#e5e7eb',
  textColor = '#6b7280'
}: PlaceholderImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    // Border
    ctx.strokeStyle = '#d1d5db'
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, width - 2, height - 2)

    // Diagonal lines
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(width, height)
    ctx.moveTo(width, 0)
    ctx.lineTo(0, height)
    ctx.stroke()

    // Text
    ctx.fillStyle = textColor
    ctx.font = `${Math.min(width / 10, 16)}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    // Word wrap
    const words = text.split(' ')
    const lines: string[] = []
    let currentLine = ''
    
    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word
      const metrics = ctx.measureText(testLine)
      if (metrics.width > width * 0.8 && currentLine) {
        lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = testLine
      }
    })
    lines.push(currentLine)
    
    // Draw text lines
    const lineHeight = Math.min(width / 10, 16) * 1.5
    const startY = height / 2 - (lines.length - 1) * lineHeight / 2
    
    lines.forEach((line, index) => {
      ctx.fillText(line, width / 2, startY + index * lineHeight)
    })

    // Size indicator
    ctx.fillStyle = '#9ca3af'
    ctx.font = '11px monospace'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    ctx.fillText(`${width}x${height}`, width - 5, height - 5)

  }, [width, height, text, bgColor, textColor])

  return (
    <canvas 
      ref={canvasRef}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}