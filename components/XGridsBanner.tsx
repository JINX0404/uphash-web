'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function XGridsBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 1200
    canvas.height = 300

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

    // XGRIDS Text
    ctx.font = 'bold 72px sans-serif'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('XGRIDS', canvas.width / 2, canvas.height / 2 - 20)

    // Subtitle
    ctx.font = '20px sans-serif'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.fillText('Spatial Computing Solution', canvas.width / 2, canvas.height / 2 + 40)

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

  }, [])

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
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
      
      {/* Banner info section */}
      <div className="p-6 bg-gray-900">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-sm tracking-wider text-gray-300 mb-2">XGRIDS製品特設サイト</h4>
            <p className="text-xs text-gray-400">空間コンピューティングソリューションの詳細はこちら</p>
          </div>
          <Link
            href="https://xgrids.uphash.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            XGRIDS製品ページはこちら
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}