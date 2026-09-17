import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Unit7 from "../data/english/Unit7";
import grammarChapter8PastContinuous from "../data/english/Unit8";
import grammarChapter9PresentPerfect from "../data/english/Unit9";
import grammarChapter10FutureSimple from "../data/english/Unit10";
import grammarChapter11FutureContinuous from "../data/english/Unit11";

const englishData = {
  unit7: Unit7,
  unit8: grammarChapter8PastContinuous,
  unit9: grammarChapter9PresentPerfect,
  unit10: grammarChapter10FutureSimple,
  unit11: grammarChapter11FutureContinuous,
};



export default function EnglishSummary() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const lesson = englishData[lessonId];

  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/english")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            ← กลับภาษาอังกฤษ
          </button>

          <div className="bg-white rounded-2xl shadow-md p-8 mt-6 text-center">
            <h1 className="text-2xl font-bold mb-3">
              ไม่พบหัวข้อนี้
            </h1>

            <p className="text-gray-600">
              กรุณากลับไปเลือกหัวข้อภาษาอังกฤษอีกครั้ง
            </p>
          </div>
        </div>
      </div>
    );
  }
  const { summary } = lesson;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/english")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ← กลับภาษาอังกฤษ
        </button>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
          <h1 className="text-3xl font-bold mb-3">
            {summary.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {summary.description}
          </p>

          {/* Sections */}
          <div className="space-y-6">
            {summary.sections?.map((section, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-5"
              >
                <h2 className="text-xl font-bold mb-3">
                  {section.title}
                </h2>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Tips */}
          {summary.tips && summary.tips.length > 0 && (
            <div className="mt-8 bg-yellow-50 rounded-xl p-5">
              <h2 className="text-xl font-bold mb-3">
                💡 จำง่าย ๆ
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {summary.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Exercise Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() =>
                navigate(`/lesson/${lessonId}`)
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
            >
              📝 ทำแบบฝึกหัด 5 ข้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}