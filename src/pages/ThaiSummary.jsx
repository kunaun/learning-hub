import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import royalTerms from "../data/thai/royalTerms";
import dictionary from "../data/thai/dictionary";
import literaryTastes from "../data/thai/literaryTastes";
import interjections from "../data/thai/interjections";
import kapYani11 from "../data/thai/kapYani11";

import essay from "../data/thai/essay";
import diary from "../data/thai/diary";
import analyticalOpinion from "../data/thai/analyticalOpinion";
import receivingMessageAnalysis from "../data/thai/receivingMessageAnalysis";
import plotDiagram from "../data/thai/plotDiagram";
import imaginativeWriting from "../data/thai/imaginativeWriting";

const thaiData = {
  royalTerms,
  dictionary,
  literaryTastes,
  interjections,
  kapYani11,

  essay,
  diary,
  analyticalOpinion,
  receivingMessageAnalysis,
  plotDiagram,
  imaginativeWriting,
};

export default function ThaiSummary() {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const lesson = thaiData[lessonId];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/thai")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            ← กลับภาษาไทย
          </button>

          <div className="bg-white rounded-2xl shadow-md p-8 mt-6 text-center">
            <h1 className="text-2xl font-bold mb-3">
              ไม่พบหัวข้อนี้
            </h1>

            <p className="text-gray-600">
              กรุณากลับไปเลือกหัวข้อภาษาไทยอีกครั้ง
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
          onClick={() => navigate("/thai")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ← กลับภาษาไทย
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
                navigate(`/thai/${lessonId}`)
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