import Link from "next/link";
import Image from "next/image";

/**
 * フッター - NK LITE風ミニマルデザイン
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* ロゴ・会社情報 */}
          <div className="md:col-span-2">
            <Image
              src="/logo-uphash.png"
              alt="UPHASH"
              width={140}
              height={50}
              className="h-10 w-auto mb-8 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-2">
              株式会社UPHASH
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              東京本社：〒105-6415<br />
              東京都港区虎ノ門１丁目１７−１
            </p>
          </div>

          {/* 会社案内 */}
          <div>
            <h3 className="text-xs tracking-[0.3em] mb-6">会社案内</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ミッション・ビジョン
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-400 hover:text-white transition-colors">
                  活動報告
                </Link>
              </li>
            </ul>
          </div>

          {/* その他メニュー */}
          <div>
            <h3 className="text-xs tracking-[0.3em] mb-6">サービス</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  製品・サービス
                </Link>
              </li>
              <li>
                <Link href="/recruit" className="text-sm text-gray-400 hover:text-white transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>

          {/* コンタクト */}
          <div>
            <h3 className="text-xs tracking-[0.3em] mb-6">CONTACT</h3>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>

        {/* XGRIDS特設サイトリンク */}
        <div className="mt-16 p-8 bg-gray-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm tracking-wider text-gray-300 mb-2">XGRIDS製品特設サイト</h4>
              <p className="text-xs text-gray-400">空間コンピューティングソリューションの詳細はこちら</p>
            </div>
            <a 
              href="https://xgrids.uphash.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm tracking-wider text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              XGRIDS製品ページはこちら
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* 下部 */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 tracking-wider">
              &copy; {new Date().getFullYear()} UPHASH Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/cookie-policy" className="text-xs text-gray-500 hover:text-white transition-colors">
                Cookieポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}