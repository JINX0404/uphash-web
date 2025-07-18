"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import packageJson from "../package.json"

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.nav 
        className="relative"
        animate={{ 
          boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none" 
        }}
        transition={{ duration: 0.3 }}
      >
        {/* 上部の細いライン */}
        <div className="h-px bg-gray-200"></div>
        
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ロゴ */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo-uphash.png"
                  alt="UPHASH"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-xs text-gray-400 font-mono">
                  v{packageJson.version}
                </span>
              </Link>
            </motion.div>

            {/* デスクトップナビゲーション */}
            <motion.div 
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {item.items ? (
                      <>
                        <button
                          className="px-6 py-3 text-xs tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center min-h-[44px]"
                          onMouseEnter={() => setDropdownOpen(item.name)}
                          onMouseLeave={() => setDropdownOpen(null)}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 w-3 h-3" />
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === item.name && (
                            <motion.div 
                              className="absolute top-full left-0 bg-white border-t border-gray-200 shadow-lg"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
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
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-6 py-3 text-xs tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center min-h-[44px]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* モバイルメニューボタン - 44px minimum touch target */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="メニューを開く"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* 下部の細いライン */}
        <div className="h-px bg-gray-200"></div>
      </motion.nav>
      
      {/* モバイルメニュー */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 z-50 bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo-uphash.png"
                  alt="UPHASH"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="text-xs text-gray-400 font-mono">
                  v{packageJson.version}
                </span>
              </div>
              <button
                type="button"
                className="p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <>
                      <div className="px-4 py-4 text-sm tracking-wider text-gray-900 font-medium">
                        {item.name}
                      </div>
                      <div className="ml-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-4 text-sm tracking-wider text-gray-600 hover:bg-gray-50 min-h-[44px] flex items-center"
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
                      className="block px-4 py-4 text-sm tracking-wider text-gray-700 hover:bg-gray-50 min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}