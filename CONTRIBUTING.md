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

nuxt.jsクラスの大きさになると `redis` 等と同時にテストを行う等をしない場合、重たすぎて最初のコンパイルが遅すぎるので、

素直にWSLとかnvmで指定のnodeとnpmを使えば良いと思います

---

</details>
<details>
<summary>Dockerではない場合</summary>

## 2. Dockerではない場合

### **プログラミングに必要なライブラリ等**

- Node.js 14.x
- npmは、7系を使ってください

---

#### 補足説明

- Node.js 14.x(Fermium)は `2023-04-30` までサポートしています
- **ただし `15.x` 等の `LTS` ではないver.は使用しないようにしてください**
- Node.js 14.xについてくるnpmのversionは6系だと思いますが、npm@7にすると `lockfileVersion` が1から2になります
- npmは不具合を起こさないようにするために、**必ず**npm@7にしておいてください

---

## 3. nodeを使ってlocalhostで実行

1 必要なモジュールをインストール

`npm install`

2 ファイルが変更された時に自動でコンパイルされるモード

`npm run dev`

---

なお治らない場合、一度、npm run devを終了させて、

もう一度実行してみると治るときがある

</details>
