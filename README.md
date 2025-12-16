# 酒菜おくや - 公式ウェブサイト

広島県府中市の創作料理店「酒菜おくや」の公式ウェブサイトです。

## 技術スタック

- **React 18.2.0** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Tailwind CSS** - スタイリング
- **React Router** - ルーティング

## 機能

- レスポンシブデザイン（モバイルファースト）
- 高級感のあるアニメーション
- パララックス効果
- スクロールアニメーション
- メニュー表示（料理、ドリンク、宴会プラン、オードブル）
- Instagram連携

## ローカル開発

### 必要な環境

- Node.js 18以上
- npm または yarn

### セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/nino-0813/okuyahp.git
cd okuyahp
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` を開く

## ビルド

本番用ビルドを作成する場合：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## Vercelでのデプロイ

このプロジェクトはVercelで簡単にデプロイできます。

1. [Vercel](https://vercel.com)にログイン
2. 新しいプロジェクトを作成
3. GitHubリポジトリ `nino-0813/okuyahp` をインポート
4. ビルド設定は自動検出されます（Viteプロジェクトとして）
5. デプロイボタンをクリック

### Vercel設定

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## プロジェクト構造

```
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ヘッダー
│   ├── Hero.tsx        # ヒーローセクション
│   ├── ConceptSection.tsx  # メニューセクション
│   └── ...
├── hooks/              # カスタムフック
│   └── useScrollAnimation.ts
├── public/             # 静的ファイル
│   └── images/         # 画像ファイル
├── constants.ts        # 定数定義
├── types.ts           # TypeScript型定義
└── index.html         # エントリーポイント
```

## ライセンス

このプロジェクトはプライベートリポジトリです。
