import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chapters from "./pages/Chapters";
import ChapterDetail from "./pages/chapterdetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:classNum" element={<Chapters />} />
        <Route path="/class/:classNum/:subject" element={<ChapterDetail />} />
      </Routes>
    </Router>
  );
}
