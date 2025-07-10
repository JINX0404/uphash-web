"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "NEWS", href: "/news" },
  { name: "RECRUIT", href: "/recruit" },
  { name: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="relative">
        {/* 上部の細いライン */}
        <div className="h-px bg-gray-200"></div>
        
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ロゴ */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-uphash.png"
                  alt="UPHASH"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* デスクトップナビゲーション */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-2 text-xs tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* CTA ボタン */}
              <div className="ml-8 flex items-center space-x-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 text-xs tracking-widest text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 下部の細いライン */}
        <div className="h-px bg-gray-200"></div>
      </nav>
      
      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo-uphash.png"
                alt="UPHASH"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
              <button
                type="button"
                className="p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-sm tracking-wider text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-4 mt-6 px-6 py-3 text-sm tracking-wider text-center text-white bg-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}