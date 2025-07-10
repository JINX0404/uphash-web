/**
 * Stripe configuration
 * Stripeの公開可能キーとプライス設定
 */

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

// Stripe価格ID（テスト用のダミーID）
export const STRIPE_PRICES = {
  monthly: 'price_1234567890abcdef', // 月額プラン
  yearly: 'price_0987654321fedcba',  // 年額プラン
};

// サブスクリプションプラン
export const SUBSCRIPTION_PLANS = [
  {
    id: 'monthly',
    name: '月額プラン',
    price: '¥2,980',
    priceId: STRIPE_PRICES.monthly,
    frequency: '/月',
    description: 'すべてのプレミアム記事にアクセス可能',
    features: [
      'すべてのプレミアム記事へのアクセス',
      '新着記事の優先配信',
      '専門家への質問機能',
      '月1回のウェビナー参加',
    ],
    popular: false,
  },
  {
    id: 'yearly',
    name: '年額プラン',
    price: '¥29,800',
    priceId: STRIPE_PRICES.yearly,
    frequency: '/年',
    description: '2ヶ月分お得！最もお得なプラン',
    features: [
      'すべてのプレミアム記事へのアクセス',
      '新着記事の優先配信',
      '専門家への質問機能',
      'すべてのウェビナーへの参加',
      '限定コンテンツへのアクセス',
      '年次レポートの提供',
    ],
    popular: true,
  },
];

/**
 * Stripe Checkoutセッションを作成するためのAPI呼び出し
 * 実際の実装では、サーバーサイドのAPIエンドポイントを作成する必要があります
 */
export async function createCheckoutSession(priceId: string): Promise<{ url: string } | null> {
  try {
    // TODO: 実際の実装では、ここでサーバーサイドのAPIを呼び出す
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ priceId }),
    // });
    // const data = await response.json();
    // return data;
    
    // デモ用のダミーURL
    console.log('Creating checkout session for price:', priceId);
    return { url: 'https://checkout.stripe.com/pay/cs_test_demo' };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return null;
  }
}

/**
 * ユーザーのサブスクリプション状態を確認
 * 実際の実装では、認証とデータベースの確認が必要
 */
export function useSubscriptionStatus(): {
  isSubscribed: boolean;
  isLoading: boolean;
  subscription: unknown;
} {
  // TODO: 実際の実装では、ユーザーの認証状態とサブスクリプション状態を確認
  return {
    isSubscribed: false,
    isLoading: false,
    subscription: null,
  };
}