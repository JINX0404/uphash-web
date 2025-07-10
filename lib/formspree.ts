/**
 * Formspree configuration
 * Formspreeのエンドポイントは環境変数から取得
 */

export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * フォームデータのバリデーション
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  // 名前のバリデーション
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'お名前を入力してください';
  } else if (data.name.trim().length < 2) {
    errors.name = 'お名前は2文字以上で入力してください';
  }
  
  // メールアドレスのバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'メールアドレスを入力してください';
  } else if (!emailRegex.test(data.email)) {
    errors.email = '有効なメールアドレスを入力してください';
  }
  
  // メッセージのバリデーション
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'メッセージを入力してください';
  } else if (data.message.trim().length < 10) {
    errors.message = 'メッセージは10文字以上で入力してください';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}