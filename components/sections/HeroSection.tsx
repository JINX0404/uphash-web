import Image from "next/image";

/**
 * ヒーローセクション - NK LITE風フルスクリーンデザイン
 */
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Spatial Computing"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* コンテンツオーバーレイ */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* メインコンテンツ */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider mb-8">
            <span className="block">SPATIAL</span>
            <span className="block mt-2">COMPUTING</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-thin tracking-widest">
            今のこの瞬間を保存する
          </p>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}