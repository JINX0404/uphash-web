'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function XGridsBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 120 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth
        const newWidth = Math.min(containerWidth, 1200)
        const newHeight = Math.max(80, Math.min(120, newWidth / 10)) // Smaller height
        setDimensions({ width: newWidth, height: newHeight })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, '#1a1a1a')
    gradient.addColorStop(0.5, '#2d2d2d')
    gradient.addColorStop(1, '#1a1a1a')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
    ctx.lineWidth = 1
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // XGRIDS Text - responsive font size
    const mainFontSize = Math.max(20, Math.min(36, dimensions.width / 33))
    ctx.font = `bold ${mainFontSize}px sans-serif`
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('XGRIDS', canvas.width / 2, canvas.height / 2 - 5)

    // Subtitle - responsive font size
    const subFontSize = Math.max(10, Math.min(14, dimensions.width / 85))
    ctx.font = `${subFontSize}px sans-serif`
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.fillText('Spatial Computing Solution', canvas.width / 2, canvas.height / 2 + 18)

    // Decorative elements
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.lineWidth = 2
    
    // Left decoration
    ctx.beginPath()
    ctx.moveTo(100, canvas.height / 2)
    ctx.lineTo(300, canvas.height / 2)
    ctx.stroke()
    
    // Right decoration
    ctx.beginPath()
    ctx.moveTo(canvas.width - 300, canvas.height / 2)
    ctx.lineTo(canvas.width - 100, canvas.height / 2)
    ctx.stroke()

    // Corner accents
    const cornerSize = 50
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
    ctx.lineWidth = 3
    
    // Top left
    ctx.beginPath()
    ctx.moveTo(0, cornerSize)
    ctx.lineTo(0, 0)
    ctx.lineTo(cornerSize, 0)
    ctx.stroke()
    
    // Top right
    ctx.beginPath()
    ctx.moveTo(canvas.width - cornerSize, 0)
    ctx.lineTo(canvas.width, 0)
    ctx.lineTo(canvas.width, cornerSize)
    ctx.stroke()
    
    // Bottom left
    ctx.beginPath()
    ctx.moveTo(0, canvas.height - cornerSize)
    ctx.lineTo(0, canvas.height)
    ctx.lineTo(cornerSize, canvas.height)
    ctx.stroke()
    
    // Bottom right
    ctx.beginPath()
    ctx.moveTo(canvas.width - cornerSize, canvas.height)
    ctx.lineTo(canvas.width, canvas.height)
    ctx.lineTo(canvas.width, canvas.height - cornerSize)
    ctx.stroke()

  }, [dimensions])

  return (
    <div ref={containerRef} className="bg-gray-800 rounded-lg overflow-hidden">
      <a 
        href="https://xgrids.uphash.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <canvas 
          ref={canvasRef}
          className="w-full h-auto"
          style={{ maxWidth: '100%', display: 'block' }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
            <p className="text-lg font-medium mb-2">製品特設サイトへ</p>
            <svg className="w-8 h-8 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </a>
      
      {/* Compact banner info section - responsive */}
      <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-xs tracking-wider text-gray-400 hidden sm:inline">PRODUCT</span>
          <h4 className="text-xs sm:text-sm font-medium text-gray-200">XGRIDS - 空間コンピューティングソリューション</h4>
        </div>
        <Link
          href="https://xgrids.uphash.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
        >
          詳細を見る
          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}