import { Link } from "react-router-dom";

import { englishLessons } from "../data/english";

export default function English() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl p-8">

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold">
          📘 English
        </h1>

        <p className="mt-2 text-slate-600">
          Choose a lesson
        </p>

        <div className="mt-8 grid gap-4">

        {englishLessons.map((lesson) => {

        if (lesson.id === "pronouns") {
            return (
            <Link
                key={lesson.id}
                to="/english/pronouns"
                className="block rounded-xl bg-white p-5 shadow transition hover:bg-blue-50"
            >
                <h2 className="text-xl font-semibold">
                {lesson.title}
                </h2>

                <p className="mt-1 text-sm">
                {lesson.description}
                </p>
            </Link>
            );
        }

        return (
            <button
            key={lesson.id}
            disabled
            className="rounded-xl p-5 text-left shadow bg-slate-200 text-slate-500 cursor-not-allowed"
            >
            <h2 className="text-xl font-semibold">
                {lesson.title}
            </h2>

            <p className="mt-1 text-sm">
                {lesson.description}
            </p>
            </button>
        );

        })}

        </div>

      </div>

    </div>
  );
}