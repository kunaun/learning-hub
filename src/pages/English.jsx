import React from "react";
import { useNavigate } from "react-router-dom";
import englishLessonGroups from "../data/englishLessons";

export default function English() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            ← กลับหน้าหลัก
          </button>

          <h1 className="text-3xl font-bold text-center">
            📚 English
          </h1>

          <div className="w-[110px]" />
        </div>

        {/* Lesson Groups */}
        <div className="space-y-10">

          {englishLessonGroups.map((group) => (
            <section key={group.id}>

              {/* Group Header */}
              <div className="mb-5">
                <h2 className="text-2xl font-bold">
                  {group.icon} {group.title}
                </h2>

                <p className="text-gray-600 mt-1">
                  แต่ละหัวข้อมีสรุปเนื้อหาและแบบฝึกหัด
                </p>
              </div>

              {/* Lessons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {group.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
                  >

                    <div className="flex items-start gap-3">

                      <div className="text-3xl">
                        {lesson.icon}
                      </div>

                      <div className="flex-1">

                        <h3 className="text-xl font-bold">
                          {lesson.title}
                        </h3>

                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                          {lesson.description}
                        </p>

                      </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-5">

                      {/* Summary */}
                      <button
                        onClick={() =>
                          navigate(`/english/${lesson.id}/summary`)
                        }
                        className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200"
                      >
                        📖 สรุปเนื้อหา
                      </button>

                      {/* Quiz */}
                      <button
                        onClick={() =>
                          navigate(`/lesson/${lesson.id}`)
                        }
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                      >
                        📝 แบบฝึกหัด
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </section>
          ))}

        </div>

      </div>
    </div>
  );
}