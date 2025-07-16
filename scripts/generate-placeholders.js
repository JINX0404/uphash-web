const { createCanvas } = require('canvas')
const fs = require('fs')
const path = require('path')

const placeholders = [
  { filename: 'bank-contract-placeholder.jpg', text: 'Major Bank Contract\n50 Billion Yen Deal' },
  { filename: 'spatial-ai-patent-placeholder.jpg', text: 'Spatial AI Patent\nRevolutionary Technology' },
  { filename: 'google-cloud-placeholder.jpg', text: 'Google Cloud\nPartnership' },
  { filename: 'smart-city-placeholder.jpg', text: 'Smart City Project\n80 Billion Yen' },
  { filename: 'ces-award-placeholder.jpg', text: 'CES 2025\nBest of Innovation' },
  { filename: 'xgrids-launch-placeholder.jpg', text: 'XGRIDS Cloud\nLaunch' },
  { filename: 'singapore-office-placeholder.jpg', text: 'Singapore Office\nAPAC Headquarters' },
  { filename: 'tokyo-univ-placeholder.jpg', text: 'Tokyo University\nResearch Partnership' },
  { filename: 'funding-placeholder.jpg', text: 'Series B Funding\n200 Billion Yen' },
  { filename: 'summit-placeholder.jpg', text: 'Spatial Computing\nSummit 2025' },
  { filename: 'sustainability-placeholder.jpg', text: 'Carbon Neutral\nAchievement' },
  { filename: 'cfo-appointment-placeholder.jpg', text: 'New CFO\nAppointment' }
]

function generatePlaceholder(width, height, text, outputPath) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#f3f4f6')
  gradient.addColorStop(1, '#e5e7eb')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  // Grid pattern
  ctx.strokeStyle = '#d1d5db'
  ctx.lineWidth = 0.5
  for (let i = 0; i < width; i += 40) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, height)
    ctx.stroke()
  }
  for (let i = 0; i < height; i += 40) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(width, i)
    ctx.stroke()
  }
  
  // Border
  ctx.strokeStyle = '#9ca3af'
  ctx.lineWidth = 2
  ctx.strokeRect(1, 1, width - 2, height - 2)
  
  // Text background
  const textBgHeight = 120
  const textBgY = height / 2 - textBgHeight / 2
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  ctx.fillRect(0, textBgY, width, textBgHeight)
  
  // Text
  const lines = text.split('\n')
  ctx.fillStyle = '#374151'
  ctx.font = 'bold 32px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  lines.forEach((line, index) => {
    const y = height / 2 + (index - (lines.length - 1) / 2) * 40
    ctx.fillText(line, width / 2, y)
  })
  
  // UPHASH watermark
  ctx.fillStyle = 'rgba(107, 114, 128, 0.3)'
  ctx.font = '14px Arial'
  ctx.textAlign = 'right'
  ctx.textBaseline = 'bottom'
  ctx.fillText('UPHASH Inc.', width - 10, height - 10)
  
  // Size indicator
  ctx.fillStyle = '#9ca3af'
  ctx.font = '11px monospace'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'bottom'
  ctx.fillText(`${width}x${height}`, 10, height - 10)
  
  // Save
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 })
  fs.writeFileSync(outputPath, buffer)
  console.log(`Generated: ${outputPath}`)
}

// Create output directory
const outputDir = path.join(__dirname, '..', 'public', 'images', 'news')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Generate all placeholders
placeholders.forEach(({ filename, text }) => {
  const outputPath = path.join(outputDir, filename)
  generatePlaceholder(1200, 630, text, outputPath)
})

console.log(`Generated ${placeholders.length} placeholder images`)