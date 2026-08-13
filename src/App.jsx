import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import English from "./pages/English";
import Pronouns from "./pages/Pronouns";
import Tense from "./pages/Tense";
import Lesson from "./pages/Lesson";
import Science from "./pages/Science";
import Thai from "./pages/Thai";
import Social from "./pages/Social";
import Vocabulary from "./pages/Vocabulary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        
        

{/* 
        <Route
          path="/pronouns"
          element={<Pronouns />}
        />

        <Route
          path="/tense"
          element={<Tense />}
        />
 */}
        <Route
          path="/lesson/:lessonId"
          element={<Lesson />}
        />

        <Route path="/science" element={<Science />} />
        <Route
          path="/science/:lessonId"
          element={<Lesson />}
        />

         <Route path="/thai" element={<Thai />} />
        <Route
          path="/thai/:lessonId"
          element={<Lesson />}
        />

        <Route path="/social" element={<Social />} />
        <Route
          path="/social/:lessonId"
          element={<Lesson />}
        />

        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />

      </Routes>
    </BrowserRouter>
  );
}