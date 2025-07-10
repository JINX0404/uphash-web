# UPHASH Inc. Website Development Guidelines

## プロジェクト概要
UPHASH Inc.の公式ウェブサイト。Next.js 15 (App Router) + TypeScript + Tailwind CSSで構築。

## 開発環境セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm run start
```

## 環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定：

```env
# Formspree
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# その他
NEXT_PUBLIC_SITE_URL=https://uphash.com
```

## ディレクトリ構成

```
/app                    # Next.js App Router
  /about               # 会社概要ページ
  /contact             # お問い合わせページ
  /news                # ニュース一覧・詳細
    /[slug]
  /premium-blog        # 有料ブログ
    /[slug]
  /recruit             # 採用情報
  page.tsx             # ホームページ
  layout.tsx           # 共通レイアウト

/components            # 再利用可能なコンポーネント
  /sections           # ページセクションコンポーネント
    HeroSection.tsx
    NewsPreview.tsx
    CompanyInfo.tsx
  Navbar.tsx
  Footer.tsx
  MarkdownRenderer.tsx

/content              # Markdownコンテンツ
  /news
  /premium-blog

/lib                  # ユーティリティ関数
  markdown.ts         # Markdown処理
  stripe.ts          # Stripe関連
  formspree.ts       # フォーム送信

/public
  /images            # 画像ファイル
  /docs              # PDFなどのドキュメント
```

## コーディング規約

### TypeScript
- 型定義は必須
- `any` の使用は避ける
- インターフェースは `I` プレフィックスなし

### React/Next.js
- 関数コンポーネントを使用
- クライアントコンポーネントは必要な場合のみ `"use client"` を使用
- SEOのため各ページに `metadata` を設定

### Tailwind CSS
- カスタムクラスは `globals.css` に定義
- 色は CSS変数を使用（`--primary`, `--secondary` など）
- レスポンシブデザインを考慮（モバイルファースト）

### コメント
- 各セクションの開始時にコメントを記載
- 複雑なロジックには説明を追加
- TODOは `// TODO:` 形式で記載

## コンポーネント設計指針

### セクションコンポーネント
```tsx
// components/sections/HeroSection.tsx
/**
 * ヒーローセクション
 * トップページのメインビジュアルとキャッチコピー
 */
export default function HeroSection() {
  // ...
}
```

### 共通コンポーネント
- Props の型定義を明確に
- デフォルト値を設定
- エラー処理を含める

## Markdownファイル形式

### ニュース記事
```markdown
---
title: "記事タイトル"
date: "2025-07-01"
excerpt: "記事の要約"
image: "/images/news/article-image.jpg"
author: "著者名"
---

記事本文...
```

### プレミアムブログ
```markdown
---
title: "ブログタイトル"
date: "2025-07-01"
excerpt: "記事の要約"
isPremium: true
author: "著者名"
tags: ["AI", "技術"]
---

記事本文...
```

## デプロイ手順

### Vercel
1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. デプロイ

### 本番環境の考慮事項
- 画像の最適化（next/image を使用）
- フォントの最適化
- キャッシュ戦略
- エラーページ（404, 500）の実装

## トラブルシューティング

### よくある問題
1. **Markdownが表示されない**
   - `content` ディレクトリの確認
   - ファイル名の形式確認

2. **Stripeエラー**
   - 環境変数の確認
   - テストモードの確認

3. **フォーム送信エラー**
   - Formspreeのエンドポイント確認
   - CORSの設定確認

## 今後の改善点
- [ ] 国際化（i18n）対応
- [ ] ダークモード対応
- [ ] アクセシビリティ向上
- [ ] パフォーマンス最適化
- [ ] E2Eテストの追加