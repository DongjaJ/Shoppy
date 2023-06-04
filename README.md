# Shoppy
🛒 쇼핑몰 프로젝트

## 기술 스택

|Types|Techs|
|:-|:-|
|RunTime|<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>|
|Framework|<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>|
|Backend|<img src="https://img.shields.io/badge/firebase-FFCA28?style=flat&logo=firebase&logoColor=white"/>|
|ImageServer|Cloudinary|
|Language|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> |
|Style|<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>|
|Formatter & Linter|<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/>|
|Bundler|<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=Webpack&logoColor=white"/>|


## 구현 목표

### 라우팅
- [ ] 홈화면, 상품, 상세 페이지, 장바구니 페이지, 상품 추가 페이지
- [ ] 로그인 하지 않은 유저는 홈화면, 상품 페이지, 상세페이지만 이용 가능 (상세페이지에서 장바구니 추가 불가능)
- [ ] 일반 계정으로 로그인한 유저는 장바구니 페이지도 이용 가능
- [ ] Admin 계정으로 로그인한 유저는 상품 추가 페이지 이용 가능

### 로그인 기능
- [ ] Firebase를 이용해 구글 OAuth 로그인
- [ ] Admin 계정과 일반 사용자 계정 존재

### 네비게이션바
- [ ] 로고 클릭하면 홈화면으로 이동
- [ ] 상품 클릭하면 상품화면으로 이동
- [ ] 로그인하지 않은 유저가 장바구니 누르면 홈으로 리다이렉트
- [ ] 로그인한 유저가 장바구니 클릭하면 장바구니 페이지로 이동
- [ ] 로그인하면 계정 보여주고 로그인 버튼이 로그아웃으로 변경
- [ ] Admin으로 로그인하면 상단에 네비게이션 바에 연필로고 추가

### 홈화면 & 상품화면
- [ ] 홈화면이면 배너보여주고 상품화면이면 배너 안 보여주기
- [ ] 상품의 이미지, 이름, 가격, 카테고리를 카드로 보여준다
- [ ] 상품 누르면 상품 상세 페이지로 이동

### 상세 페이지
- [ ] 상품의 이미지, 이름, 가격, 카테고리, 설명을 보여준다
- [ ] 옵션을 통해 사이즈를 선택할 수 있다
- [ ] 로그인했으면 장바구니 추가 가능하고 안했으면 버튼 Disabled시킨다

### 장바구니 페이지

- [ ] 장바구니에 있는 상품들 및 총 가격 조회 기능
- [ ] 상품 수량변경 및 삭제

### 상품 추가 페이지

- [ ] 제품 이미지, 제품명 , 가격, 카테고리, 제품 설명, 옵션들(콤마로 구분) 입력 가능
- [ ] 제품 등록 기능
