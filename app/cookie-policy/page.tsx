import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookieポリシー | UPHASH Inc.',
  description: 'UPHASH Inc.のウェブサイトにおけるCookieの使用について説明します。',
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookieポリシー</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">最終更新日: 2025年7月16日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Cookieとは</h2>
          <p>
            Cookieとは、ウェブサイトを訪問した際にお客様のデバイス（コンピューター、スマートフォン、タブレットなど）に保存される小さなテキストファイルです。
            Cookieは、ウェブサイトの機能を向上させ、より良いユーザー体験を提供するために使用されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. 当社が使用するCookieの種類</h2>
          
          <h3 className="text-xl font-bold mt-6 mb-3">必須Cookie</h3>
          <p>
            これらのCookieは、ウェブサイトの基本的な機能を提供するために必要不可欠です。
            これらのCookieがないと、ログイン機能やフォーム送信などのサービスを提供できません。
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>認証Cookie: ログイン状態の維持</li>
            <li>セッションCookie: ページ間の情報の受け渡し</li>
            <li>セキュリティCookie: 不正アクセスの防止</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">機能性Cookie</h3>
          <p>
            これらのCookieは、言語設定、地域設定、ユーザー設定などを記憶し、
            パーソナライズされた機能を提供します。
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">分析Cookie</h3>
          <p>
            これらのCookieは、ウェブサイトの利用状況を分析し、
            パフォーマンスを向上させるために使用されます。
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Google Analytics: サイトの利用状況の分析</li>
            <li>訪問者数、ページビュー数、滞在時間などの測定</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">マーケティングCookie</h3>
          <p>
            これらのCookieは、お客様の興味に関連する広告を表示するために使用されます。
            第三者の広告ネットワークによって設定される場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Cookieの管理方法</h2>
          <p>
            お客様は、ブラウザの設定を変更することで、Cookieを管理または削除することができます。
            ただし、Cookieを無効にすると、ウェブサイトの一部の機能が正常に動作しない場合があります。
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">主要ブラウザでのCookie設定方法</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Google Chrome:</strong> 設定 → プライバシーとセキュリティ → Cookieと他のサイトデータ
            </li>
            <li>
              <strong>Safari:</strong> 環境設定 → プライバシー → Cookieとウェブサイトのデータ
            </li>
            <li>
              <strong>Firefox:</strong> 設定 → プライバシーとセキュリティ → Cookieとサイトデータ
            </li>
            <li>
              <strong>Microsoft Edge:</strong> 設定 → プライバシー、検索、サービス → Cookieとサイトのアクセス許可
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. 第三者によるCookieの使用</h2>
          <p>
            当社のウェブサイトでは、以下の第三者サービスがCookieを使用する場合があります：
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Google Analytics（アクセス解析）</li>
            <li>Stripe（決済処理）</li>
            <li>Formspree（フォーム送信）</li>
          </ul>
          <p className="mt-4">
            これらの第三者サービスのプライバシーポリシーについては、
            各サービスのウェブサイトをご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. 本ポリシーの変更</h2>
          <p>
            当社は、必要に応じて本Cookieポリシーを変更することがあります。
            重要な変更がある場合は、ウェブサイト上でお知らせします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. お問い合わせ</h2>
          <p>
            本Cookieポリシーに関するご質問やご不明な点がございましたら、
            以下の連絡先までお問い合わせください：
          </p>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p><strong>UPHASH Inc.</strong></p>
            <p>メール: privacy@uphash.com</p>
            <p>電話: 03-XXXX-XXXX</p>
          </div>
        </section>
      </div>
    </div>
  )
}