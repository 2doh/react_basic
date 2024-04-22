import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지 입니다</p>
      <ul>
        <li>
          <Link to="/about">소개 페이지</Link>
        </li>
        <li>
          <Link to="/profiles/eclipse">이도현의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/logitech">마우스의 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;