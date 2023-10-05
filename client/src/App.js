import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import ViewCartoons from "./pages/ViewCartoons";
import Posts from "./pages/Posts";
import ViewCartoonDetail from "./pages/ViewCartoonDetail";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Landing end />} />
          <Route path="/cartoons" element={<ViewCartoons />} />
          <Route path="/cartoons/detail/:cartoonId" element={<ViewCartoonDetail />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
