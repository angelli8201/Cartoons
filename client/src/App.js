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
import Memes from "./pages/Memes";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

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
          <Route path="/memes" element={<Memes />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
