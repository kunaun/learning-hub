import { useNavigate } from "react-router-dom";
const subjects = [
  {
    id: 1,
    icon: "📘",
    name: "English",
    description: "Grammar & Quiz",
    available: true,
  },
  {
    id: 2,
    icon: "➗",
    name: "Mathematics",
    description: "Coming Soon",
    available: false,
  },
  {
    id: 3,
    icon: "🧪",
    name: "Science",
    description: "Coming Soon",
    available: false,
  },
  {
    id: 4,
    icon: "🇹🇭",
    name: "Thai",
    description: "Coming Soon",
    available: false,
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">📚 Learning Hub</h1>

          <p className="mt-4 text-lg text-slate-600">
            Learn Anywhere. Anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{subject.icon}</div>

              <h2 className="text-2xl font-bold">
                {subject.name}
              </h2>

              <p className="mt-2 mb-6 text-slate-500">
                {subject.description}
              </p>

           <button
            onClick={() => subject.available && navigate("/english")}
            disabled={!subject.available}
            className={`w-full rounded-xl py-3 font-semibold transition ${
              subject.available
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed bg-slate-300 text-slate-600"
            }`}
          >
            {subject.available ? "Start Learning" : "Coming Soon"}
          </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}