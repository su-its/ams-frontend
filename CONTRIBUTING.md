# 開発手順書(Docker、Linux(WSLを含む))

## 1. .envファイルを用意する

- `cp .env_sample .env`

---

<details>
<summary>Dockerの場合</summary>

## 2. Dockerの場合、ビルド

- `docker-compose -d --build`

---

### **開発者コメント**

Nuxt.js クラスの大きさになると `redis` 等と同時にテストを行う等をしない場合、遅すぎます。

素直に WSL とか nvm で指定の Node.js と npm を使えば良いでしょう。

---

</details>
<details>
<summary>Dockerではない場合</summary>

## 2. Dockerではない場合

### **プログラミングに必要なライブラリ等**

- Node.js 14.x
- npm は、7 系を使ってください

---

#### 補足説明

- Node.js 14.x(Fermium)は `2023-04-30` までサポートしています
- **ただし `15.x` 等の `LTS` ではない ver.は使用しないようにしてください**
- Node.js 14.x は付属する npm の version は 6 系です
- npm@7 は `lockfileVersion` が 1 から 2 になります
- このリポジトリは、npm@7で作成しております
- 不具合を起こさないようにするために、**必ず**npm@7 にしておいてください

---

## 3. nodeを使ってlocalhostで実行

- 必要なモジュールをインストール

`npm install`

- ファイルが変更された時に自動でコンパイルされるモード

`npm run dev`

---

なお治らない場合、一度、npm run dev を終了させて、もう一度実行してみると治るときがある。

</details>
