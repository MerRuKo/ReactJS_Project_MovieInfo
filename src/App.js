// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// GitHub Pages에서는 기본적으로 BrowserRouter가 제대로 작동하지 않을 수 있습니다.
// 이는 GitHub Pages가 클라이언트 사이드 라우팅을 처리하지 못하기 때문입니다.
// 이를 해결하기 위해 HashRouter를 사용하는 것이 일반적입니다.
// HashRouter는 URL에 해시(#)를 사용하여 라우팅을 처리하므로,
// GitHub Pages와 같은 정적 사이트 호스팅 서비스에서 잘 작동합니다.

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* 사용자가 「/hello」 URL에 있다면 h1 Hello를 렌더한다 */}
        <Route path="/hello" element={<h1>Hello</h1>} />

        {/* 사용자가 「/movie」 URL에 있다면 Detail 컴포넌트를 렌더한다 */}
        {/* 리액트 라우터에서 :id는 URL 파라미터를 의미합니다. 이는 동적 경로 세그먼트를 정의하는 데 사용됩니다. */}
        <Route path="/movie/:id" element={<Detail />} />

        {/* 사용자가 「/」 URL에 있다면 Home 컴포넌트를 렌더한다 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
