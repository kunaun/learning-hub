import { useNavigate, useParams } from "react-router-dom";

import livingthings from "../data/science/livingthings";
import substances from "../data/science/substancesAndChange";
import forceEnergy from "../data/science/forceAndEnergy";
import earthSpace from "../data/science/earthAndSpace";

const scienceData = {
  "living-things": livingthings,
  substances,
  "force-energy": forceEnergy,
  "earth-space": earthSpace,
};

export default function ScienceSummary() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const lesson = scienceData[lessonId];

  if (!lesson?.summary) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg">
          <div className="text-5xl">📚</div>

          <h1 className="mt-4 text-2xl font-bold">
            ยังไม่มีสรุปเนื้อหา
          </h1>

          <p className="mt-3 text-slate-600">
            บทเรียนนี้กำลังอยู่ระหว่างการจัดทำเนื้อหา
          </p>

          <button
            onClick={() => navigate("/science")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            ← กลับไป Science
          </button>
        </div>
      </div>
    );
  }

  const { summary } = lesson;

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        <button
          onClick={() => navigate("/science")}
          className="mb-8 rounded-xl bg-white px-4 py-2 shadow hover:shadow-md"
        >
          ← Science
        </button>

        <div className="mb-10 text-center">
          <div className="text-6xl">📖</div>

          <h1 className="mt-4 text-4xl font-bold">
            {summary.title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            {summary.description}
          </p>
        </div>

        <div className="space-y-6">

          {summary.sections.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold">
                {section.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                {section.content}
              </p>
            </div>
          ))}

          <div className="rounded-2xl bg-amber-50 p-6 shadow-lg">
            <h2 className="text-2xl font-bold">
              💡 จำง่าย ๆ
            </h2>

            <ul className="mt-4 space-y-3">
              {summary.tips.map((tip, index) => (
                <li
                  key={index}
                  className="leading-7 text-slate-700"
                >
                  • {tip}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 text-center shadow-lg">
          <p className="text-slate-600">
            อ่านเนื้อหาจบแล้วใช่ไหม?
          </p>

          <button
            onClick={() =>
              navigate(`/science/${lessonId}`)
            }
            className="mt-4 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
          >
            📝 เริ่มทำแบบฝึกหัด
          </button>
        </div>

      </div>
    </div>
  );
}