## 実行環境
- node 13.6.0
- yarn 1.21.1

## 環境構築方法
1. [nodeをインストール](https://nodejs.org/ja/)
2. yarnをインストール(コマンドライン上にて`npm install -g yarn`)
3. (`Error: Cannot find module 'express'`と言われた場合は、コマンドライン上にて`yarn add express`)

## アプリ実行方法
* 初回clone時には `yarn install` する

(ターミナルを2つ使います)
1. `yarn mock-server` これでモックサーバを立ち上げる
2. `yarn start` React Appの実行

## 使用技術等
- 言語：TypeScript
- UIライブラリ：React, styled-components
- State管理：Redux
- フォルダ構成：Redux Way
- ミドルウェア：Redux Saga
- React Componentsの切り方：Atomic Design
- HTTP通信：Axios
- モックサーバ：JavaScript&Express 

## 参考資料
(実際に書いたり、チームメンバーに聞く方が100倍効率が良いので、1回くらい読み流す程度でok)
- [Reactとは(useStateまで読めばok)](https://sbfl.net/blog/2019/11/12/react-hooks-introduction/)
- [Reduxの概念であるFluxについて](https://medium.com/samyamashita/%E6%BC%AB%E7%94%BB%E3%81%A7%E8%AA%AC%E6%98%8E%E3%81%99%E3%82%8B-flux-1a219e50232b)
- [Reduxとは(各役割が何をしたいかだけ抑えればok)](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)
- [Atomic Designとは](https://www.slideshare.net/ygoto3q/organizing-design-with-atomic-design-104872303?from_m_app=ios)

## コードの読み方について
読む順番はstates→actions→reducers→componentsがオススメ 
<br/>
これが理解できるようになったら、actions→sagas→apis→sagas→actionsという流れも理解しよう！
- states: アプリにて管理したい情報の型を定義(例:ユーザ名)
- actions: アプリにて管理したい情報が変更される状況を記述(例:ユーザ名を編集)
- reducers: 情報の具体的な変更処理を記述(例:ユーザ名を太郎から次郎に変更)
- components: UI(アプリの見た目)を記述
- sagas: 非同期処理を行う(例:ユーザ名の取得と見た目の表示を同時に行う)
- api: 通信処理を記述(例:サーバからユーザ名を取得する)

## 演習問題
- ボタンやフォームの色や大きさを変えてみる(React, styled-components)
- 画面の領域分けを変えてみる(React, styled-components, Grid Layout)
- タスクの削除機能を実装してみる(React, Redux)
- 画面遷移を実装してみる(React, React Router)
- モックサーバからtasksを取得してみる(Axios, Redux, Redux Saga)
