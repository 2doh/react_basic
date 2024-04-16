const Main = () => {
  const object = { a: 1, b: 2, c: 3 };
  const nextObject = { ...object, b: 5 }; // object 사본을 만들어서 b값만 덮어쓴다
  console.log(nextObject, object);
};

const array = [
  { id: 1, value: true },
  { id: 2, value: false },
  { id: 3, value: true },
  { id: 4, value: true },
  { id: 5, value: true },
  { id: 6, value: false },
  { id: 7, value: true },
];

let nextArray = array.concat({ id: 8 }); // 새 항목 추가
nextArray = nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
nextArray = nextArray.map(item =>
  item.id === 1 ? { ...item, value: false } : item,
); // id가 1인 항목의 value를 false로 설정
console.log(array);
console.log(nextArray);

export default Main;

// import React from "react";

// const Main = props => {
//   const { title, children } = props;
//   return (
//     <div>
//       <h1>안녕하세요, 나는 {title}입니다</h1>
//       <h2>children 값은 {children}입니다</h2>
//     </div>
//   );
// };

// Main.defaultProps = {
//   title: "기본이름",
// };

// export default Main;
