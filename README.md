# <img src="https://flagcdn.com/w20/kr.png" width="20" style="vertical-align: middle;"> JAVA AWS CI/CD 풀스택과정 - React & TypeScript<br>
### <img src="https://flagcdn.com/w20/us.png" width="20" style="vertical-align: middle;"> JAVA AWS CI/CD Full-stack Course - React & TypeScript<br>
### <img src="https://flagcdn.com/w20/jp.png" width="20" style="vertical-align: middle;"> JAVA AWS CI/CD フルスタック課程 - React & TypeScript<br>

<br>
<br>

* **Progress** 
	<p>
		<img src="https://img.shields.io/badge/Progress-20%25-red?style=flat-square" align="absmiddle">
* **Language & Environment** 
	<p>
		<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" align="absmiddle">
		<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" align="absmiddle">
* **Framework & Library** 
	<p>
		<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" align="absmiddle">
		<img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white" align="absmiddle">
		<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" align="absmiddle">
* **Network & API** 
	<p>
		<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" align="absmiddle">
* **IDE & Tools** 
	<p>
		<img src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=flat-square&logo=intellijidea&logoColor=white" align="absmiddle">

<br>
<br>

📅 학습 일지 (Study Log / 学習記録)
------------------------------

<br>

#### 2026-09
| 날짜 | 학습 내용 (KR / US / JP) |
| :--- | :--- |
| **09-16** | <ul><li><img src="https://flagcdn.com/w20/kr.png" width="20"> <strong>[React 기본 구조와 컴포넌트]</strong> 함수형 컴포넌트와 JSX 문법을 이용해 React 화면 구성 방식을 학습함. `props`를 통해 부모 컴포넌트의 데이터를 자식 컴포넌트로 전달하고, `map()`을 이용해 영화 목록 데이터를 반복 렌더링하면서 컴포넌트 기반 UI 구성 방식을 익힘. <br><strong>[State & Lifecycle]</strong> `useState`로 화면 상태를 관리하고 `useEffect`를 이용해 상태 변화에 맞춰 서버 데이터를 다시 조회하는 흐름을 실습함. <br><strong>[Axios & Pagination]</strong> Spring Boot REST API와 Axios로 통신하여 맛집 목록 데이터를 조회하고, 현재 페이지·전체 페이지·시작/끝 페이지 값을 상태로 관리하며 React 방식의 페이징 기능을 구현함.</li><li><img src="https://flagcdn.com/w20/us.png" width="20"> <strong>[React Basics & Components]</strong> Learned how to build React UIs using functional components and JSX. Passed data from parent to child components through `props` and rendered movie lists repeatedly with `map()`. <br><strong>[State & Lifecycle]</strong> Managed UI state with `useState` and practiced fetching server data again through `useEffect` when state changed. <br><strong>[Axios & Pagination]</strong> Connected to a Spring Boot REST API with Axios and implemented pagination by managing the current page, total pages, and page range as React state.</li><li><img src="https://flagcdn.com/w20/jp.png" width="20"> <strong>[React 基本構造とコンポーネント]</strong> 関数型コンポーネントと JSX を利用して React の画面構成方法を学習。`props` を通じて親コンポーネントから子コンポーネントへデータを渡し、`map()` を利用して映画一覧を繰り返しレンダリングした。<br><strong>[State & Lifecycle]</strong> `useState` で画面状態を管理し、`useEffect` を利用して状態変更に応じてサーバーデータを再取得する流れを実習。<br><strong>[Axios & Pagination]</strong> Spring Boot REST API と Axios を連携し、現在ページ・全体ページ・開始/終了ページを state で管理するページング機能を実装した。</li></ul> |
| **09-17** | <ul><li><img src="https://flagcdn.com/w20/kr.png" width="20"> <strong>[TypeScript 기본 문법]</strong> JavaScript에 타입을 추가하는 TypeScript의 동작 구조를 학습하고 `string`, `number`, `boolean`, 배열, 객체, Tuple, `null`, `undefined`, `void`, `any`, `unknown` 등의 주요 타입을 실습함. `interface`, `type`, Optional(`?`), Union(`|`), Literal Type과 Generic(`<T>`)을 사용해 데이터 구조를 명시적으로 정의하는 방법을 익힘. <br><strong>[React + TypeScript]</strong> React 컴포넌트의 상태와 서버 응답 데이터에 `interface`를 적용하고 `useState<FoodDetailData|null>`처럼 상태 타입을 지정하여 타입 안정성을 높이는 방법을 실습함. <br><strong>[React Router & REST API]</strong> `BrowserRouter`, `Routes`, `Route`로 홈·상세·검색 화면의 SPA 라우팅을 구성하고, `useParams`로 URL 파라미터를 읽고 `useNavigate`로 화면 이동을 처리함. Axios 공통 인스턴스를 이용해 Spring Boot REST API의 목록/상세 데이터를 비동기 조회했으며, 상세 화면에서는 KakaoMap 컴포넌트와 데이터를 연결함.</li><li><img src="https://flagcdn.com/w20/us.png" width="20"> <strong>[TypeScript Basics]</strong> Learned how TypeScript adds static type syntax to JavaScript and practiced major types such as `string`, `number`, `boolean`, arrays, objects, tuples, `null`, `undefined`, `void`, `any`, and `unknown`. Used `interface`, `type`, optional properties (`?`), unions (`|`), literal types, and generics (`<T>`) to define data structures explicitly. <br><strong>[React + TypeScript]</strong> Applied interfaces to React state and server response models, including typed state such as `useState<FoodDetailData|null>`, to improve type safety. <br><strong>[React Router & REST API]</strong> Built SPA routes for home, detail, and search pages using `BrowserRouter`, `Routes`, and `Route`. Used `useParams` for URL parameters and `useNavigate` for navigation, fetched list/detail data asynchronously through a shared Axios instance, and connected detail data to a KakaoMap component.</li><li><img src="https://flagcdn.com/w20/jp.png" width="20"> <strong>[TypeScript 基本文法]</strong> JavaScript に型構文を追加する TypeScript の動作構造を学習し、`string`、`number`、`boolean`、配列、オブジェクト、Tuple、`null`、`undefined`、`void`、`any`、`unknown` などの主要な型を実習。`interface`、`type`、Optional（`?`）、Union（`|`）、Literal Type、Generic（`<T>`）を利用してデータ構造を明示的に定義する方法を習得した。<br><strong>[React + TypeScript]</strong> React の state とサーバー応答データに `interface` を適用し、`useState<FoodDetailData|null>` のように state の型を指定して型安全性を高める方法を実習。<br><strong>[React Router & REST API]</strong> `BrowserRouter`、`Routes`、`Route` を利用してホーム・詳細・検索画面の SPA ルーティングを構成し、`useParams` で URL パラメータを取得、`useNavigate` で画面移動を処理。Axios の共通インスタンスを利用して Spring Boot REST API の一覧・詳細データを非同期取得し、詳細画面では KakaoMap コンポーネントとデータを連携した。</li></ul> |
