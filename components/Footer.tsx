import Link from "next/link";
import Image from "next/image";
import XGridsBanner from "@/components/XGridsBanner";

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
        <div className="mt-16">
          <XGridsBanner />
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