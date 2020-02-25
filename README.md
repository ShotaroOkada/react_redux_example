## 実行環境
- node 13.6.0
- yarn 1.21.1

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