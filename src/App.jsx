import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import English from "./pages/English";
// เพิ่มบรรทัดนี้
import Pronouns from "./pages/Pronouns";
import Tense from "./pages/Tense";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />

        {/* เพิ่มตรงนี้ */}
        <Route
          path="/pronouns"
          element={<Pronouns />}
        />
       <Route
          path="/tense"
          element={<Tense />}
        />
      </Routes>
    </BrowserRouter>
  );
}