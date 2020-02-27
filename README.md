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

## Tips
(実際に書いたり、チームメンバーに聞く方が100倍効率が良いので、1回くらい読み流す程度でok)
- [Reactとは(useStateまで読めばok)](https://sbfl.net/blog/2019/11/12/react-hooks-introduction/)
- [Reduxの概念であるFluxについて](https://medium.com/samyamashita/%E6%BC%AB%E7%94%BB%E3%81%A7%E8%AA%AC%E6%98%8E%E3%81%99%E3%82%8B-flux-1a219e50232b)
- [Reduxとは(各役割が何をしたいかだけ抑えればok)](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)
- [Atomic Designとは](https://www.slideshare.net/ygoto3q/organizing-design-with-atomic-design-104872303?from_m_app=ios)