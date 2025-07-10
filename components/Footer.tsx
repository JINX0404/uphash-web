import Link from "next/link";
import Image from "next/image";

/**
 * フッター - NK LITE風ミニマルデザイン
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴと会社情報 */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-uphash.png"
                alt="UPHASH Inc."
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 font-light mb-4">
              株式会社 ＵＰＨＡＳＨ<br />
              Spatial Computing Solution
            </p>
            <p className="text-sm text-gray-500 font-light">
              本社：福岡県福岡市中央区天神１-１１−１
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-sm font-light text-gray-900 mb-4 tracking-wider">MENU</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* コンタクト */}
          <div>
            <h3 className="text-sm font-light text-gray-900 mb-4 tracking-wider">CONTACT</h3>
            <div className="space-y-3">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 font-light transition-colors duration-300"
              >
                <span className="mr-2">お問い合わせフォーム</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-500 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} UPHASH Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}