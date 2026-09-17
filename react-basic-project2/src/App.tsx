import React from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./componentes/main/Header";
import Detail from "./componentes/food/Detail";
import Home from "./componentes/main/Home";
import Find from "./componentes/food/Find";
/*
    관리 = 해당 Component (JSP) 를 찾아주는 역할
            Router
              |
            화면 모음 = Routes
              |
            화면 1개 = Route
 */

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path={"/food/detail/:no"} element={<Detail/>}></Route>
        <Route path={"/food/find"} element={<Find/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
