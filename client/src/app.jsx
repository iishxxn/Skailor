import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChapterDetail from './pages/ChapterDetail'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/chapters/:subjectId" element={<Chapters />} />
  <Route path="/chapters/:subjectId/:chapterIndex" element={<ChapterDetail />} />
</Routes>