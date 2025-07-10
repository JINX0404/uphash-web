"use client"

import { useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_ENDPOINT, validateContactForm } from "@/lib/formspree";

// 注意: use clientではmetadataエクスポートができないため、別ファイルに移動する必要があります

/**
 * お問い合わせページ
 * Formspreeを使用してフォーム送信を処理
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  // Formspree hook - フォームIDを取得
  const formId = FORMSPREE_ENDPOINT ? FORMSPREE_ENDPOINT.split('/').pop() : 'demo';
  const [state, handleSubmit] = useForm(formId || 'demo');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // フィールドの値が変更されたらエラーをクリア
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // バリデーション
    const { isValid, errors } = validateContactForm(formData);
    if (!isValid) {
      setValidationErrors(errors);
      return;
    }
    
    // Formspreeに送信
    await handleSubmit(e);
  };

  // 送信成功時の処理
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
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
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            送信完了しました
          </h2>
          <p className="text-gray-600 mb-8">
            お問い合わせいただきありがとうございます。
            <br />
            担当者より2営業日以内にご連絡いたします。
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">お問い合わせ</h1>
          <p className="text-xl text-blue-100">Contact Us</p>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-600 mb-8 text-center">
                ご質問やご相談がございましたら、お気軽にお問い合わせください。
              </p>

              <form onSubmit={onSubmit} className="space-y-6">
                {/* 名前フィールド */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full rounded-lg border ${
                      validationErrors.name ? 'border-red-500' : 'border-gray-300'
                    } px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    placeholder="山田 太郎"
                  />
                  {validationErrors.name && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.name}</p>
                  )}
                </div>

                {/* メールアドレスフィールド */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-lg border ${
                      validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    } px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    placeholder="example@company.com"
                  />
                  {validationErrors.email && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.email}</p>
                  )}
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* メッセージフィールド */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full rounded-lg border ${
                      validationErrors.message ? 'border-red-500' : 'border-gray-300'
                    } px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                  {validationErrors.message && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.message}</p>
                  )}
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* 送信ボタン */}
                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        送信中...
                      </>
                    ) : (
                      '送信する'
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* 連絡先情報 */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">本社所在地</h3>
                <p className="text-gray-600 text-sm">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1<br />
                  UPHASHビル 10F
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">メール</h3>
                <p className="text-gray-600 text-sm">
                  info@uphash.com<br />
                  support@uphash.com
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">営業時間</h3>
                <p className="text-gray-600 text-sm">
                  月曜日〜金曜日<br />
                  9:00 - 18:00<br />
                  （土日祝日を除く）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}