# Movie App 2021
React JS Fundamentals Course 2020

<br>

### `개발환경`
- Visual Studio Code
- Javascript
- JSX
- Chrome
- git

<br>

### `자바스크립트 공식 사이트` 
- https://ko.javascript.info/

<br>

### `package.json`
- scripts 키값(명령어) 수정할 수 있는

<br>

### `리액트 앱 실행`
- yarn start (추천)
- npm start

<br>

### `리액트 앱 종료`
- Ctrl + C

<br>

### `JSX`
- HTML과 자바스크립트를 조합한 문법

<br>

### `Component`
- JSX로 생성
- 컴포넌트 이름은 대문자로 시작
- 컴포넌트에 데이터를 전달할 때는 props를 사용
- 컴포넌트에 props를 전달하면 props에 있는 데이터가 하나의 객체로 변환되어 컴포넌트(함수)의 인자로 전달된다.

<br>


### `react project 생성`
- npx create-react-app { project name }

<br>

### `yarn start`
- Starts the development server.

### `yarn build`
- Bundles the app into static file for production.

### `yarn test`
- Starts the test runner.

### `yarn eject`
- Removes this tool and copies build dependencies, configuration files and 
  scripts into the app directory. If you do this, you can't go back!

<br>

### `git 저장소 초기화`
- git init



<br>

### ❓ favicon.ico (파비콘)이란?
- 사이트의 제목에 사용되는 아이콘

<br>

### `prop-types 라이브러리 설치`
- npm install prop-types 

<br>

### `function Component, class Component 차이`
- React.Component에서 제공하는 기능들을 사용하기 위해서는 클래스형 컴포넌트를 사용해야 한다.
- App 클래스가 React.Component를 상속받음으로 많은 기능을 사용할 수 있게 된다.
- React.Component에서 제공하는 제일 중요한 기본 기능은 동적인 데이터를 다룰 때 사용하는 state이다.

<br>

### `클래스형 컴포넌트`
- 함수가 아니라 return문을 사용할 수 없다.
- 함수 형태의 JSX를 반환할 수 없다.
- 클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수를 사용한다.