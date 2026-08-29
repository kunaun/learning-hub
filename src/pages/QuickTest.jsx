import { useState } from 'react'; // 1. เพิ่ม useState
import { Link } from 'react-router-dom'; // 2. เพิ่ม Link
import quicktest from "../data/QuickTest";

export default function QuickTest() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const quiz = quicktest[index];

  function choose(choice) {
    if (selected) return;

    setSelected(choice);

    if (choice === quiz.answer) {
      setScore(score + 1);
    }
  }

  function next() {
    setSelected(null);
    setIndex(index + 1);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[600px]">
        <Link to="/">⬅️ Back to Home</Link>

        <h1 className="text-3xl font-bold mb-2">Pronouns</h1>

        <p className="mb-6">
          Question {index + 1} / {quicktest.length}
        </p>

        <h2 className="text-xl font-semibold mb-6">{quiz.question}</h2>

        <div className="space-y-3">
          {quiz.choices.map((choice) => (
            <button
              key={choice}
              onClick={() => choose(choice)}
              className="w-full border rounded-lg p-3 text-left hover:bg-blue-50"
            >
              {choice}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-8">
            {selected === quiz.answer ? (
              <div className="text-green-600 font-bold">✅ Correct</div>
            ) : (
              <div className="text-red-600 font-bold">❌ Wrong</div>
            )}

            <div className="mt-3">
              <strong>Answer:</strong> {quiz.answer}
            </div>

            <div className="mt-2">{quiz.explanation}</div>

            {index < quicktest.length - 1 && (
              <button
                onClick={next}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Next →
              </button>
            )}

            {index === quicktest.length - 1 && (
              <div className="mt-6 text-xl font-bold text-green-700">
                🎉 Finished
                <div className="mt-3">
                  Score: {score} / {quicktest.length} {/* 3. แก้ไขจาก pronouns.length เป็น quicktest.length */}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}