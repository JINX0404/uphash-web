"use client"

import { useState } from "react";
import SubscriptionModal from "@/components/SubscriptionModal";

/**
 * コンテンツロックコンポーネント
 * 非購読者に対して記事の続きを読むための購読を促す
 */
export default function ContentLock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative mt-12 mb-16">
        {/* ロックコンテナ */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center border-2 border-blue-200">
          {/* ロックアイコン */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            この記事はプレミアムコンテンツです
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            続きを読むには、プレミアムプランへの登録が必要です。
            業界の最新トレンドや専門的な分析、実践的なインサイトを
            すべてのプレミアム記事でお楽しみいただけます。
          </p>

          {/* 特典リスト */}
          <div className="bg-white rounded-xl p-6 mb-8 max-w-md mx-auto shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-4">プレミアム会員特典</h4>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">すべてのプレミアム記事が読み放題</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">新着記事の優先配信</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">専門家への質問機能</span>
              </li>
            </ul>
          </div>

          {/* CTA ボタン */}
          <div className="space-y-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              プレミアムプランを見る
            </button>
            
            <p className="text-sm text-gray-600">
              7日間の無料トライアル付き・いつでもキャンセル可能
            </p>
          </div>
        </div>

        {/* ぼかしプレビュー（装飾用） */}
        <div className="absolute -bottom-8 left-0 right-0 h-48 overflow-hidden opacity-30">
          <div className="blur-sm">
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* サブスクリプションモーダル */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}