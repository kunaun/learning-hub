import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Grade from './pages/Grade';
import SubjectHub from './pages/SubjectHub';
import Quiz from './pages/Quiz';
import GameZone from './pages/GameZone';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade/:gradeId" element={<Grade />} />
        <Route path="/grade/:gradeId/subject/:subjectId" element={<SubjectHub />} />
        <Route path="/grade/:gradeId/subject/:subjectId/quiz" element={<Quiz />} />
        <Route path="/game" element={<GameZone />} />
      </Routes>
    </BrowserRouter>
  );
}
