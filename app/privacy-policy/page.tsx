import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | UPHASH Inc.',
  description: 'UPHASH Inc.の個人情報保護方針について説明します。',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">最終更新日: 2025年7月16日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. 個人情報保護方針</h2>
          <p>
            UPHASH Inc.（以下「当社」といいます）は、お客様の個人情報保護の重要性を認識し、
            以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. 収集する個人情報</h2>
          <p>当社は、以下の情報を収集する場合があります：</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">お客様から直接提供される情報</h3>
          <ul className="list-disc pl-6">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>会社名・組織名</li>
            <li>住所</li>
            <li>お問い合わせ内容</li>
            <li>決済情報（クレジットカード情報等）</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">自動的に収集される情報</h3>
          <ul className="list-disc pl-6">
            <li>IPアドレス</li>
            <li>ブラウザの種類とバージョン</li>
            <li>オペレーティングシステム</li>
            <li>アクセス日時</li>
            <li>参照元URL</li>
            <li>閲覧ページ</li>
            <li>Cookie情報</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. 個人情報の利用目的</h2>
          <p>当社は、収集した個人情報を以下の目的で利用します：</p>
          <ul className="list-disc pl-6 mt-2">
            <li>サービスの提供および運営</li>
            <li>お客様からのお問い合わせへの対応</li>
            <li>サービスの改善および新サービスの開発</li>
            <li>マーケティングおよび広告配信</li>
            <li>利用規約違反の調査および対応</li>
            <li>法令に基づく対応</li>
            <li>その他、上記利用目的に付随する目的</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
          <p>
            当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. 個人情報の安全管理</h2>
          <p>
            当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、
            以下の措置を講じています：
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>SSL/TLS暗号化通信の使用</li>
            <li>アクセス権限の適切な管理</li>
            <li>従業員への個人情報保護教育の実施</li>
            <li>定期的なセキュリティ監査の実施</li>
            <li>物理的セキュリティ対策の実施</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. お客様の権利</h2>
          <p>お客様は、ご自身の個人情報について以下の権利を有します：</p>
          <ul className="list-disc pl-6 mt-2">
            <li>個人情報の開示を請求する権利</li>
            <li>個人情報の訂正、追加または削除を請求する権利</li>
            <li>個人情報の利用停止を請求する権利</li>
            <li>個人情報の第三者提供の停止を請求する権利</li>
          </ul>
          <p className="mt-4">
            これらの権利行使をご希望の場合は、本ポリシー末尾の連絡先までご連絡ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Cookieの使用について</h2>
          <p>
            当社のウェブサイトでは、サービスの利便性向上のためにCookieを使用しています。
            Cookieの詳細については、
            <a href="/cookie-policy" className="text-primary hover:underline">Cookieポリシー</a>
            をご参照ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. 外部サービスの利用</h2>
          <p>当社は、以下の外部サービスを利用しています：</p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Google Analytics:</strong> アクセス解析</li>
            <li><strong>Stripe:</strong> 決済処理</li>
            <li><strong>Formspree:</strong> フォーム送信処理</li>
          </ul>
          <p className="mt-4">
            これらのサービスは独自のプライバシーポリシーに従って個人情報を取り扱います。
            各サービスのプライバシーポリシーをご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. 未成年者の個人情報について</h2>
          <p>
            当社は、原則として18歳未満の方から個人情報を収集しません。
            18歳未満の方が当社のサービスを利用する場合は、保護者の同意を得た上でご利用ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. プライバシーポリシーの変更</h2>
          <p>
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。
            重要な変更がある場合は、ウェブサイト上でお知らせし、
            必要に応じてお客様の同意を得るものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. お問い合わせ</h2>
          <p>
            個人情報の取り扱いに関するご質問、ご意見、苦情等がございましたら、
            以下の連絡先までお問い合わせください：
          </p>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p><strong>UPHASH Inc.</strong></p>
            <p>個人情報保護管理責任者</p>
            <p>メール: privacy@uphash.com</p>
            <p>電話: 03-XXXX-XXXX</p>
            <p>受付時間: 平日 9:00-18:00</p>
          </div>
        </section>
      </div>
    </div>
  )
}