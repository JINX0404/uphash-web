"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { 
    name: "会社案内", 
    items: [
      { name: "会社概要", href: "/about" },
      { name: "ミッション・ビジョン", href: "/mission" },
      { name: "活動報告", href: "/news" },
    ]
  },
  { name: "製品・サービス", href: "/services" },
  { name: "採用情報", href: "/recruit" },
  { name: "お問い合わせ", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

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
                  <div key={item.name} className="relative">
                    {item.items ? (
                      <>
                        <button
                          className="px-6 py-2 text-xs tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center"
                          onMouseEnter={() => setDropdownOpen(item.name)}
                          onMouseLeave={() => setDropdownOpen(null)}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 w-3 h-3" />
                        </button>
                        {dropdownOpen === item.name && (
                          <div 
                            className="absolute top-full left-0 bg-white border-t border-gray-200 shadow-lg"
                            onMouseEnter={() => setDropdownOpen(item.name)}
                            onMouseLeave={() => setDropdownOpen(null)}
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-3 text-xs tracking-wider text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-6 py-2 text-xs tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
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
                <div key={item.name}>
                  {item.items ? (
                    <>
                      <div className="px-4 py-3 text-sm tracking-wider text-gray-900 font-medium">
                        {item.name}
                      </div>
                      <div className="ml-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm tracking-wider text-gray-600 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-4 text-sm tracking-wider text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}