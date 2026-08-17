import { useNavigate } from "react-router-dom";

const scienceLessons = [
  {
    id: "living-things",
    icon: "🌱",
    title: "Living Things & Environment",
    description: "สิ่งมีชีวิตและสิ่งแวดล้อม",
  },
  {
    id: "substances",
    icon: "🧪",
    title: "Substances & Change",
    description: "สารและการเปลี่ยนแปลง",
  },
  {
    id: "force-energy",
    icon: "⚡",
    title: "Force & Energy",
    description: "แรงและพลังงาน",
  },
  {
    id: "earth-space",
    icon: "🌍",
    title: "Earth & Space",
    description: "โลกและอวกาศ",
  },
];

export default function Science() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded-xl bg-white px-4 py-2 shadow hover:shadow-md"
        >
          🏠 Home
        </button>

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">
            🧪 Science
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            เลือกหัวข้อที่ต้องการเรียน
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {scienceLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {lesson.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {lesson.title}
              </h2>

              <p className="mt-2 mb-6 text-slate-500">
                {lesson.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    navigate(`/science/${lesson.id}/summary`)
                  }
                  className="rounded-xl bg-emerald-500 py-3 font-semibold text-white hover:bg-emerald-600"
                >
                  📖 สรุปเนื้อหา
                </button>

                <button
                  onClick={() =>
                    navigate(`/science/${lesson.id}`)
                  }
                  className="rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  📝 แบบฝึกหัด
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}