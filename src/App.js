import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import News from "./Pages/News/News";
import Fifty from "./Pages/Fifty/Fifty";
import GlobalStats from "./Pages/Top/GlobalStats";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Fifty></Fifty>}></Route>
        <Route
          exact
          path="/global"
          element={<GlobalStats></GlobalStats>}
        ></Route>
        <Route exact path="/news" element={<News></News>}></Route>
      </Routes>
    </div>
  );
}

export default App;
