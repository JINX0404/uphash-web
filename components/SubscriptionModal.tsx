"use client"

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY, SUBSCRIPTION_PLANS, createCheckoutSession } from "@/lib/stripe";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Stripeインスタンスの初期化
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

/**
 * サブスクリプション申し込みモーダル
 * Stripe Checkoutへのリダイレクトを処理
 */
export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Checkout セッションを作成
      const session = await createCheckoutSession(priceId);
      
      if (!session) {
        throw new Error('チェックアウトセッションの作成に失敗しました');
      }

      // Stripe Checkoutへリダイレクト
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripeの初期化に失敗しました');
      }

      // デモ用：実際の実装では session.url を使用
      window.location.href = session.url;
    } catch (err) {
      setError('申し込み処理中にエラーが発生しました。もう一度お試しください。');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* 背景オーバーレイ */}
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />

        {/* モーダルコンテンツ */}
        <div className="inline-block w-full max-w-4xl px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">閉じる</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-8 text-center">
              プレミアムプランを選択
            </h3>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {SUBSCRIPTION_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-2 border-blue-600 shadow-xl'
                      : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                        おすすめ
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-900">{plan.name}</h4>
                    <p className="mt-2 text-gray-600">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.frequency}</span>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.priceId)}
                    disabled={isLoading}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isLoading ? '処理中...' : `${plan.name}で始める`}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>すべてのプランで7日間の無料トライアルをご利用いただけます</p>
              <p className="mt-2">いつでもキャンセル可能です</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}