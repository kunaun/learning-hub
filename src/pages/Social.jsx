import { useNavigate } from "react-router-dom";

const socialLessons = [
  {
    id: "religionAndEthics",
    icon: "🙏",
    title: "Religion & Ethics",
    description: "ศาสนา ศีลธรรม จริยธรรม",
  },
  {
    id: "civicsAndCulture",
    icon: "🏛️",
    title: "พลเมืองและวัฒนธรรม",
    description: "พลเมืองและวัฒนธรรม",
  },
  {
    id: "economics",
    icon: "💰",
    title: "เศรษฐศาสตร์",
    description: "เศรษฐศาสตร์",
  },
  {
    id: "history",
    icon: "📜",
    title: "ประวัติศาสตร์",
    description: "ประวัติศาสตร์",
  },
    {
    id: "geography",
    icon: "🌍",
    title: "ภูมิศาสตร์",
    description: "ภูมิศาสตร์",
  },
];

export default function social() {
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
            📜 social
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            เลือกหัวข้อที่ต้องการเรียน
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {socialLessons.map((lesson) => (
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

              <button
                onClick={() =>
                  navigate(`/social/${lesson.id}`)
                }
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                ⭐ Start Quiz
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}