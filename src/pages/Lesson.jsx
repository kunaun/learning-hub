import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import nouns from "../data/nouns";
import verbs from "../data/verbs";
import adjectives from "../data/adjectives";
import adverbs from "../data/adverbs";
import prepositions from "../data/prepositions";
import conjunctions from "../data/conjunctions";
import articles from "../data/articles";
import sentenceStructure from "../data/sentence-structure";
import tense from "../data/tense";
import pronouns from "../data/pronouns";

import livingthings from "../data/science/livingthings";
import substances from "../data/science/substancesAndChange";
import forceEnergy from "../data/science/forceAndEnergy";
import earthSpace from "../data/science/earthAndSpace";

import dialects from "../data/thai/dialects";
import foreignLoanwords from "../data/thai/foreignLoanwords";
import languageSkills from "../data/thai/languageSkills";
import partsOfSpeech from "../data/thai/partsOfSpeech";
import phoneticsAndSpelling from "../data/thai/phoneticsAndSpelling";

import history from "../data/social/history";
import civicsAndCulture from "../data/social/civicsAndCulture";
import religionAndEthics from "../data/social/religionAndEthics";
import economics from "../data/social/economics";
import geography from "../data/social/geography";

import MascotFeedback from "../components/MascotFeedback";


/* --------------------------------------------------
   ข้อมูลบทเรียน
-------------------------------------------------- */

const lessonData = {
  nouns,
  verbs,
  adjectives,
  adverbs,
  prepositions,
  conjunctions,
  articles,

  "sentence-structure": sentenceStructure,
  tense,
  pronouns,

  "living-things": livingthings,
  substances,
  "force-energy": forceEnergy,
  "earth-space": earthSpace,

  dialects,
  foreignLoanwords,
  languageSkills,
  partsOfSpeech,
  phoneticsAndSpelling,

  history,
  civicsAndCulture,
  religionAndEthics,
  economics,
  geography,
};


/* --------------------------------------------------
   ชื่อบทเรียน
-------------------------------------------------- */

const lessonTitles = {
  nouns: "Nouns",
  verbs: "Verbs",
  adjectives: "Adjectives",
  adverbs: "Adverbs",
  prepositions: "Prepositions",
  conjunctions: "Conjunctions",
  articles: "Articles",

  "sentence-structure": "Sentence Structure",
  tense: "Tense",
  pronouns: "Pronouns",

  "living-things": "Living Things & Environment",
  substances: "Substances & Change",
  "force-energy": "Force & Energy",
  "earth-space": "Earth & Space",

  dialects: "Thai Dialects",
  foreignLoanwords: "Foreign Loanwords",
  languageSkills: "Language Skills",
  partsOfSpeech: "Parts of Speech",
  phoneticsAndSpelling: "Phonetics and Spelling",

  history: "History",
  civicsAndCulture: "Civics and Culture",
  religionAndEthics: "Religion and Ethics",
  economics: "Economics",
  geography: "Geography",
};


/* --------------------------------------------------
   สุ่มข้อสอบ
-------------------------------------------------- */

function shuffleQuestions(questions) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}


/* --------------------------------------------------
   Lesson
-------------------------------------------------- */

export default function Lesson() {
  const { lessonId } = useParams();

  const lesson = lessonData[lessonId];

  const sourceQuestions = Array.isArray(lesson)
    ? lesson
    : lesson?.questions || [];

  const title =
    lessonTitles[lessonId] || "Quiz";


  /* -----------------------------
     State
  ----------------------------- */

  const [questions, setQuestions] = useState(() =>
    shuffleQuestions(sourceQuestions)
  );

  const [current, setCurrent] = useState(0);

  const [selected, setSelected] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const [streak, setStreak] =
    useState(0);

  const [finished, setFinished] =
    useState(false);


  /* -----------------------------
     ไม่พบข้อสอบ
  ----------------------------- */

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-slate-100 p-8 text-center">

        <h1 className="text-2xl font-bold">
          ไม่พบแบบทดสอบ
        </h1>

        <div className="mt-6 flex justify-center gap-4">

          <Link
            to="/"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
          >
            🏠 Home
          </Link>

        </div>

      </div>
    );
  }


  /* -----------------------------
     ข้อมูลข้อปัจจุบัน
  ----------------------------- */

  const question =
    questions[current];

  const progress =
    ((current + 1) / questions.length) * 100;

  const correct =
    selected === question.answer;

  const isLastQuestion =
    current === questions.length - 1;


  /* --------------------------------------------------
     เลือกคำตอบ
  -------------------------------------------------- */

  const chooseAnswer = (choice) => {

    // ป้องกันกดซ้ำ
    if (selected !== null) return;

    setSelected(choice);

    if (choice === question.answer) {

      setScore((s) => s + 1);

      setStreak((s) => s + 1);

    } else {

      setStreak(0);

    }
  };


  /* --------------------------------------------------
     ข้อถัดไป
  -------------------------------------------------- */

  const next = () => {

    if (isLastQuestion) {

      setFinished(true);

      return;
    }

    setCurrent((n) => n + 1);

    setSelected(null);
  };


  /* --------------------------------------------------
     เริ่มใหม่
  -------------------------------------------------- */

  const restart = () => {

    setQuestions(
      shuffleQuestions(sourceQuestions)
    );

    setCurrent(0);

    setSelected(null);

    setScore(0);

    setStreak(0);

    setFinished(false);
  };


  /* --------------------------------------------------
     หน้าผลคะแนน
  -------------------------------------------------- */

  if (finished) {

    const percentage =
      Math.round(
        (score / questions.length) * 100
      );

    return (
      <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">

        <div className="mx-auto max-w-3xl">

          <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-8">

            <div className="text-center">

              <div className="text-sm font-semibold text-purple-600">
                {title}
              </div>

              <h1 className="mt-2 text-3xl font-extrabold">
                ทำแบบทดสอบเสร็จแล้ว!
              </h1>

            </div>


            {/* Mascot ตอนจบ */}

            <MascotFeedback
              correct={true}
              finished={true}
              score={score}
              total={questions.length}
              explanation={
                percentage >= 80
                  ? "สุดยอดมาก! คะแนนดีมากเลย 🎉"
                  : "เก่งมากที่ทำจนจบ ลองทำอีกครั้งเพื่อพัฒนาคะแนนได้นะ"
              }
            />


            {/* คะแนน */}

            <div className="mt-5 rounded-2xl bg-slate-100 p-5 text-center">

              <p className="text-sm font-semibold text-slate-500">
                คะแนนของคุณ
              </p>

              <p className="mt-1 text-5xl font-extrabold text-blue-600">
                {score}/{questions.length}
              </p>

              <p className="mt-1 text-slate-600">
                {percentage}%
              </p>

            </div>


            {/* ปุ่ม */}

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              <button
                onClick={restart}
                className="rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                🔄 ทำอีกครั้ง
              </button>

              <Link
                to="/"
                className="rounded-2xl bg-slate-200 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-300"
              >
                🏠 กลับ Home
              </Link>

            </div>

          </div>

        </div>

      </div>
    );
  }


  /* --------------------------------------------------
     หน้า Quiz
  -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-8">

      <div className="mx-auto max-w-3xl">


        {/* Navigation */}

        <div className="mb-4 flex items-center justify-between">

          <Link
            to="/"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← Home
          </Link>

          <span className="text-sm font-bold text-slate-500">
            {score} คะแนน
          </span>

        </div>


        {/* Main Card */}

        <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-8">


          {/* Header */}

          <div className="flex items-center justify-between gap-4">

            <div>

              <p className="text-sm font-bold text-blue-600">
                {title}
              </p>

              <h1 className="mt-1 text-xl font-extrabold">
                ข้อที่ {current + 1} จาก {questions.length}
              </h1>

            </div>

            {streak >= 2 && (
              <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-600">
                🔥 {streak}
              </div>
            )}

          </div>


          {/* Progress */}

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>


          {/* Question */}

          <h2 className="mt-7 text-xl font-extrabold leading-relaxed text-slate-800">
            {question.question}
          </h2>


          {/* Choices */}

          <div className="mt-6 grid gap-3">

            {question.choices.map((choice) => {

              const isSelected =
                selected === choice;

              const isAnswer =
                choice === question.answer;

              let className =
                "w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-left font-semibold transition";

              if (selected === null) {

                className +=
                  " hover:border-blue-400 hover:bg-blue-50";

              } else if (isAnswer) {

                className +=
                  " border-green-500 bg-green-50 text-green-800";

              } else if (isSelected) {

                className +=
                  " border-red-500 bg-red-50 text-red-800";

              } else {

                className +=
                  " border-slate-200 bg-slate-50 text-slate-400";

              }

              return (
                <button
                  key={choice}
                  onClick={() =>
                    chooseAnswer(choice)
                  }
                  disabled={selected !== null}
                  className={className}
                >
                  <div className="flex items-center justify-between">

                    <span>
                      {choice}
                    </span>

                    {selected !== null &&
                      isAnswer && (
                        <span className="text-xl">
                          ✅
                        </span>
                      )}

                    {selected !== null &&
                      isSelected &&
                      !isAnswer && (
                        <span className="text-xl">
                          ❌
                        </span>
                      )}

                  </div>
                </button>
              );
            })}

          </div>


          {/* -----------------------------------------
              Mascot Feedback
          ----------------------------------------- */}

          {selected !== null && (

            <MascotFeedback
              correct={correct}
              streak={streak}
              finished={isLastQuestion}
              score={score}
              total={questions.length}
              explanation={
                question.explanation ||
                "ลองอ่านคำอธิบายอีกครั้งนะ"
              }
            />

          )}


          {/* -----------------------------------------
              Next Button
          ----------------------------------------- */}

          {selected !== null && (

            <button
              onClick={next}
              className={`mt-5 w-full rounded-2xl py-3.5 text-lg font-extrabold text-white shadow-sm transition ${
                correct
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >

              {isLastQuestion
                ? "ดูผลคะแนน 🎉"
                : "ข้อถัดไป →"}

            </button>

          )}

        </div>

      </div>

    </div>
  );
}