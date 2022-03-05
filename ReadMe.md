# Carrot Market Shorts 1.0 (당근 마켓 쇼츠 1.0)

## How to start the project

- prerequisite: install postGres Sql and create user and database (postGres Sql 을 설치하고 `createuser` 와 `createdb` 로 user 와 DB 생성)
- cd into Server and `npm start` -- this will start the Express server: port 3001 (`cd Server` 이후에 `npm start` 로 Express 서버 실행 port 3001)
- cd into Web and `npm run dev` -- this will spin up the Web App Page: port 3000 (`cd Web` 이후에 `npm run dev` 로 어플리케이션 실행 port 3000 )
- If you are using gitPod you don't have to do steps above (GitPod 을 사용하면 위의 단계를 거칠 필요가 없습니다.)
- If you wish to change the database or command motify gitpodDockerfile and gitpod.yml (데이터 베이스나 명령어를 바꾸고 싶을 때에는 gitpodDockerfile 이나 gitpod.yml 을 수정 하시오)

<p>&nbsp;</p>
<p>&nbsp;</p>

---

## Tech used in this project

- ### Web (Application)

  1. **Next.js** (For Server Side Rendering and better routing) - SSL 과 `create-react-app` 보다는 더 프레임 워크에 가깝다.
  1. **Tailwind.css** (For integration of css and jsx) - css 파일 만들기 귀찮아서
  1. **Apollo client** (For Graphql) - graphql 을 위한 클라이언트
  1. **Graphql Code Generator** (For Hooks) - React 에서 사용하기위한 Hook 을 제공해줌

<p>&nbsp;</p>
<p>&nbsp;</p>

- ### Server
  1. **Nest.js** (I don't have to build express App ground up) - Express 서버 라든지 Api, Graphql 을 만드는데 도구를 제공해준다. 처음부터 프로젝트를 만들 필요가 없다.
  1. **Graphql** (For getting the info that I want for my application) - 앱에서 정말 필요한 데이터 만을 받기 위해서 Graphql 을 쓴다.
  1. **Postgres** (Relational Database) - 사실 그냥 써보고 싶었다.
  1. **TypeOrm** (For Relational Mapping) - PostGres Database 의 데이터를 Object 로 바꾸기 위해서
  1. **Rest API** (For Auth) - Login 이나 Authentication 에는 Rest APi 가 Graphql 보다 낫다고 판단함... 근거는 없음

<p>&nbsp;</p>
<p>&nbsp;</p>

- ### Recommender Server
  For Recommendation Algorithm - 동영상 추천 알고리즘을 위한 API
  1. **Python** (Python has vast ecosystem for machine learning) - 파이썬이 머신 러닝을 하는데는 노드 보다 더 낫다는 판단을 하였다.
  1. **Flask** (For spinning up the server) - 간단한 서버를 위한 프레임 워크
  1. **Collaborative Filtering** - [artile]https://realpython.com/build-recommendation-engine-collaborative-filtering/

---

## Motivation

- Want to create Market for Second-hand products where the user is greeted with personalized short video instead of a list of products (like [tiktok](https://www.tiktok.com))
<p>&nbsp;</p>

- 기존의 중고 마켓처럼 제품 검색 을 하였을떄 제품에 대한 리스트가 나오는것이 아닌 1분 남짓의 동영상을 먼저 보여주어 유저가 제품을 보는 시간을 늘리고 자연스럽게 구매 행위로 넘어가게 끔 하는 앱을 만드는 것이 목표이다.

---
