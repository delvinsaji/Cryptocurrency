import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Top from "./Pages/Top/Top";
import News from "./Pages/News/News";
import Fifty from "./Pages/Fifty/Fifty";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Fifty></Fifty>}></Route>
        <Route exact path="/top10" element={<Top></Top>}></Route>
        <Route exact path="/news" element={<News></News>}></Route>
      </Routes>
    </div>
  );
}

export default App;
