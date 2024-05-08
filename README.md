# 10. context API

- 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 **유용한 기능**
- 상태관리 도구는 아님
- 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등

## 10.1 Context API를 사용한 전역 상태 관리 흐름 이해

- 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달했지만
- Context API를 사용하면 Context를 만들어서 원하는 값을 받아와서 사용할 수 있다

## 10.2 Context API 사용법

### 10.2.1 새 Context 만들기

- src/context/color.js

```js
import { createContext } from "react";

const createContext = createContext({ color: "black" });
```

### 10.2.2 Consumer 사용하기

- 색상을 props로 받아오는 것이 아니라 ColorContext 안에 들어있는 Consumer라는 컴포넌트(내장되어있음)를 통해 색상을 조회한다.
- src/components/ColorBox.js

```js
import React from "react";
import { colorContext } from "../contexts/colorContext";

const ColorBox = () => {
  return (
    <colorContext.Consumer>
      {value => (
        <div
          style={{ width: "200px", height: "200px", background: value.color }}
        ></div>
      )}
    </colorContext.Consumer>
  );
};

export default ColorBox;
```

### 10.2.3
