import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | UPHASH Inc.',
  description: 'UPHASH Inc.のサービス利用規約について説明します。',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">利用規約</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">最終更新日: 2025年7月16日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
          <p>
            本規約は、UPHASH Inc.（以下「当社」といいます）が提供するウェブサイトおよび関連サービス（以下「本サービス」といいます）の利用条件を定めるものです。
            利用者の皆様（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第2条（利用登録）</h2>
          <ol className="list-decimal pl-6">
            <li>
              本サービスの利用を希望する方は、当社の定める方法によって利用登録を申請し、
              当社がこれを承認することによって、利用登録が完了するものとします。
            </li>
            <li>
              当社は、利用登録の申請者に以下の事由があると判断した場合、
              利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
              <ul className="list-disc pl-6 mt-2">
                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申請である場合</li>
                <li>その他、当社が利用登録を相当でないと判断した場合</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
          <ol className="list-decimal pl-6">
            <li>
              ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
            </li>
            <li>
              ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、
              もしくは第三者と共用することはできません。
            </li>
            <li>
              当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、
              そのユーザーIDを登録しているユーザー自身による利用とみなします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第4条（利用料金および支払方法）</h2>
          <ol className="list-decimal pl-6">
            <li>
              ユーザーは、本サービスの有料部分の対価として、当社が別途定め、
              本サービスに表示する利用料金を、当社が指定する方法により支払うものとします。
            </li>
            <li>
              ユーザーが利用料金の支払を遅滞した場合には、
              ユーザーは年14.6％の割合による遅延損害金を支払うものとします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第5条（禁止事項）</h2>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
          <ol className="list-decimal pl-6 mt-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>当社、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第6条（本サービスの提供の停止等）</h2>
          <ol className="list-decimal pl-6">
            <li>
              当社は、以下のいずれかの事由があると判断した場合、
              ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              <ul className="list-disc pl-6 mt-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </li>
            <li>
              当社は、本サービスの提供の停止または中断により、
              ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第7条（著作権）</h2>
          <ol className="list-decimal pl-6">
            <li>
              ユーザーは、当社の事前の書面による承諾なく、本サービスを通じて提供されるいかなる情報も、
              著作権法で定められた私的使用の範囲を超える使用をすることはできません。
            </li>
            <li>
              ユーザーは、本サービスを利用して得た一切の情報を、
              当社の事前の書面による承諾なしに複製、販売、出版その他私的利用の範囲を超えて使用することはできません。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第8条（保証の否認および免責事項）</h2>
          <ol className="list-decimal pl-6">
            <li>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、
              セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </li>
            <li>
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について、
              当社の故意又は重過失による場合を除き、一切の責任を負いません。
            </li>
            <li>
              前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為により
              ユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、
              または予見し得た場合を含みます。）について一切の責任を負いません。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第9条（サービス内容の変更等）</h2>
          <p>
            当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
            ユーザーはこれを承諾するものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第10条（利用規約の変更）</h2>
          <ol className="list-decimal pl-6">
            <li>
              当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
              <ul className="list-disc pl-6 mt-2">
                <li>本規約の変更がユーザーの一般の利益に適合するとき</li>
                <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
              </ul>
            </li>
            <li>
              当社はユーザーに対し、前項による本規約の変更にあたり、
              事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第11条（個人情報の取扱い）</h2>
          <p>
            当社は、本サービスの利用によって取得する個人情報については、
            当社「<a href="/privacy-policy" className="text-primary hover:underline">プライバシーポリシー</a>」に従い適切に取り扱うものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第12条（通知または連絡）</h2>
          <p>
            ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
            当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、
            現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、
            これらは、発信時にユーザーへ到達したものとみなします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第13条（権利義務の譲渡の禁止）</h2>
          <p>
            ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を
            第三者に譲渡し、または担保に供することはできません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">第14条（準拠法・裁判管轄）</h2>
          <ol className="list-decimal pl-6">
            <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
            <li>
              本サービスに関して紛争が生じた場合には、
              当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p><strong>お問い合わせ先</strong></p>
            <p>UPHASH Inc.</p>
            <p>メール: legal@uphash.com</p>
            <p>電話: 03-XXXX-XXXX</p>
          </div>
        </section>
      </div>
    </div>
  )
}