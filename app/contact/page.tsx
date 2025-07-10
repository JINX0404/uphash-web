"use client";

// import { Metadata } from "next";
import { useState } from "react";
import { useForm } from "@formspree/react";

// export const metadata: Metadata = {
//   title: "お問い合わせ | UPHASH Inc.",
//   description: "UPHASH Inc.へのお問い合わせはこちらから。",
// };

/**
 * お問い合わせページ - NK LITE風デザイン
 */
export default function ContactPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.split('/').pop() || "demo");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-3xl font-thin tracking-wider text-gray-900 mb-4">
            お問い合わせありがとうございました
          </h2>
          <p className="text-gray-600">
            内容を確認の上、担当者よりご連絡させていただきます。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 lg:py-32 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-xs tracking-[0.3em] text-gray-600 mb-6">CONTACT</h1>
            <h2 className="text-4xl lg:text-5xl font-thin tracking-wider text-gray-900 mb-8">
              お問い合わせ
            </h2>
            <p className="text-lg font-thin text-gray-600 max-w-2xl mx-auto">
              ご質問・ご相談などございましたら、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 lg:px-8">
          <form onSubmit={onSubmit} className="space-y-12">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm tracking-wider text-gray-900 mb-4">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 text-gray-900 placeholder-gray-400 bg-transparent transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm tracking-wider text-gray-900 mb-4">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 text-gray-900 placeholder-gray-400 bg-transparent transition-colors"
                placeholder="example@email.com"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm tracking-wider text-gray-900 mb-4">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 text-gray-900 placeholder-gray-400 bg-transparent transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* エラーメッセージ */}
            {state.errors && (
              <div className="p-4 bg-red-50 text-red-600 text-sm">
                送信中にエラーが発生しました。もう一度お試しください。
              </div>
            )}

            {/* 送信ボタン */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-12 py-4 text-sm tracking-wider transition-all duration-300 ${
                  isSubmitting
                    ? "text-gray-400 border border-gray-400 cursor-not-allowed"
                    : "text-white bg-gray-900 hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>

          {/* 補足情報 */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm tracking-wider text-gray-900 mb-4">メールでのお問い合わせ</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@uphash.co.jp" className="hover:opacity-60 transition-opacity">
                    info@uphash.co.jp
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-wider text-gray-900 mb-4">本社所在地</h3>
                <p className="text-gray-600">
                  〒810-0001<br />
                  福岡県福岡市中央区天神1-11-1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}