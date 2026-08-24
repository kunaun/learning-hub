import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Grade from './pages/Grade';
import SubjectHub from './pages/SubjectHub';
import QuizPlaceholder from './pages/QuizPlaceholder';
import GameZone from './pages/GameZone';
import English from './pages/English';
import Lesson from './pages/Lesson';
import Science from './pages/Science';
import Thai from './pages/Thai';
import Social from './pages/Social';
import Vocabulary from './pages/Vocabulary';
import ScienceSummary from './pages/ScienceSummary';
import ThaiSummary from './pages/ThaiSummary';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade/:gradeId" element={<Grade />} />
        <Route path="/grade/:gradeId/subject/:subjectId" element={<SubjectHub />} />
        <Route path="/grade/:gradeId/subject/:subjectId/quiz" element={<QuizPlaceholder />} />
        <Route path="/game" element={<GameZone />} />

        {/* Existing Learning Hub routes remain available. */}
        <Route path="/english" element={<English />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/science" element={<Science />} />
        <Route path="/science/:lessonId" element={<Lesson />} />
        <Route path="/science/:lessonId/summary" element={<ScienceSummary />} />
        <Route path="/thai" element={<Thai />} />
        <Route path="/thai/:lessonId" element={<Lesson />} />
        <Route path="/thai/:lessonId/summary" element={<ThaiSummary />} />
        <Route path="/social" element={<Social />} />
        <Route path="/social/:lessonId" element={<Lesson />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
      </Routes>
    </BrowserRouter>
  );
}
